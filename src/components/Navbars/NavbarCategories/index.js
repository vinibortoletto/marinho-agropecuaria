import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import dogIcon from "../../../images/categories/dog.svg";
import catIcon from "../../../images/categories/cat.svg";
import fishIcon from "../../../images/categories/fish.svg";
import reptileIcon from "../../../images/categories/reptile.svg";
import birdIcon from "../../../images/categories/bird.svg";
import rodentIcon from "../../../images/categories/rodent.svg";
import houseIcon from "../../../images/categories/house.svg";
import gardenIcon from "../../../images/categories/garden.svg";
import infoIcon from "../../../images/categories/info.svg";

// Styles
import { Navbar } from "./styles";

export default function NavbarCategories() {
  const categories = [
    {
      id: "dog",
      img: dogIcon,
      alt: "categoria cães",
      name: "Cães",
      path: "/produtos/caes",
    },
    {
      id: "cat",
      img: catIcon,
      alt: "categoria gatos",
      name: "Gatos",
      path: "/produtos/gatos",
    },
    {
      id: "fish",
      img: fishIcon,
      alt: "categoria peixes",
      name: "Peixes",
      path: "/produtos/peixes",
    },
    {
      id: "reptile",
      img: reptileIcon,
      alt: "categoria répteis",
      name: "Répteis",
      path: "/produtos/repteis",
    },
    {
      id: "bird",
      img: birdIcon,
      alt: "categoria aves",
      name: "Aves",
      path: "/produtos/aves",
    },
    {
      id: "rodent",
      img: rodentIcon,
      alt: "categoria roedores",
      name: "Roedores",
      path: "/produtos/roedores",
    },
    {
      id: "house",
      img: houseIcon,
      alt: "categoria casa",
      name: "Construção",
      path: "/produtos/construcao",
    },
    {
      id: "garden",
      img: gardenIcon,
      alt: "categoria jardim",
      name: "Jardinagem",
      path: "/produtos/jardinagem",
    },
    {
      id: "info",
      img: infoIcon,
      alt: "categoria atendimento",
      name: "Atendimento",
      path: "/contato",
    },
  ];

  function getPage(id) {
    let icons = document.querySelectorAll(".category_container");

    icons.forEach((icon) => {
      icon.style.opacity = "0.5";
      icon.id === id && (icon.style.opacity = "1");
    });
  }

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
          <Link
            key={index}
            to={category.path}
            onClick={() => getPage(category.id)}
          >
            <div id={category.id} className="category_container">
              <img className="img" src={category.img} alt={category.alt} />
              <p>{category.name}</p>
            </div>
          </Link>
        );
      })}
    </Navbar>
  );
}
