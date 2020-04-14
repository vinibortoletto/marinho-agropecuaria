import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import { Navbar } from "./styles";

// Images
import dogIcon from "../../../images/categories/dog.png";
import catIcon from "../../../images/categories/cat.png";
import fishIcon from "../../../images/categories/fish.png";
import turtleIcon from "../../../images/categories/turtle.png";
import chickenIcon from "../../../images/categories/chicken.png";
import ratIcon from "../../../images/categories/rat.png";
import houseIcon from "../../../images/categories/house.png";
import gardenIcon from "../../../images/categories/garden.png";
import infoIcon from "../../../images/categories/info.png";

export default function NavbarCategories() {
  const categories = [
    {
      img: dogIcon,
      alt: "categoria cães",
      name: "Cães",
      path: "/produtos/caes"
    },
    {
      img: catIcon,
      alt: "categoria gatos",
      name: "Gatos",
      path: "/produtos/gatos"
    },
    {
      img: fishIcon,
      alt: "categoria peixes",
      name: "Peixes",
      path: "/produtos/peixes"
    },
    {
      img: turtleIcon,
      alt: "categoria répteis",
      name: "Répteis",
      path: "/produtos/repteis"
    },
    {
      img: chickenIcon,
      alt: "categoria aves",
      name: "Aves",
      path: "/produtos/aves"
    },
    {
      img: ratIcon,
      alt: "categoria roedores",
      name: "Roedores",
      path: "/produtos/roedores"
    },
    {
      img: houseIcon,
      alt: "categoria casa",
      name: "Construção",
      path: "/produtos/construcao"
    },
    {
      img: gardenIcon,
      alt: "categoria jardim",
      name: "Jardinagem",
      path: "/produtos/jardinagem"
    },
    {
      img: infoIcon,
      alt: "categoria atendimento",
      name: "Atendimento",
      path: "/contato"
    }
  ];

  useEffect(() => {
    const navbarCategories = document.querySelector(".navbar_categories");

    window.onscroll = () => {
      if (window.pageYOffset > 20) {
        navbarCategories.classList.add("shrink");
      } else {
        navbarCategories.classList.remove("shrink");
      }
    };
  }, []);

  return (
    <Navbar className="navbar_categories">
      {categories.map((category, index) => {
        return (
          <Link key={index} to={category.path}>
            <div className="category_container">
              <img className="img" src={category.img} alt={category.alt} />
              <p>{category.name}</p>
            </div>
          </Link>
        );
      })}
    </Navbar>
  );
}
