import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { auth } from '../helpers/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, name) {
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      const displayName = name;
      return auth.currentUser.updateProfile({ displayName });
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    history.push('/');
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    loginGoogle,

    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
