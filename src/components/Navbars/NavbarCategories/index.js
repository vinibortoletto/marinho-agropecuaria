import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../Context";

// Pages
import Products from "../../../pages/Products";

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
  const context = useContext(ProductContext);

  const categories = [
    {
      id: "dogs",
      img: dogIcon,
      alt: "categoria cães",
      name: "cães",
      path: "caes",
    },
    {
      id: "cats",
      img: catIcon,
      alt: "categoria gatos",
      name: "gatos",
      path: "gatos",
    },
    {
      id: "fish",
      img: fishIcon,
      alt: "categoria peixes",
      name: "peixes",
      path: "peixes",
    },
    {
      id: "reptiles",
      img: reptileIcon,
      alt: "categoria répteis",
      name: "répteis",
      path: "repteis",
    },
    {
      id: "birds",
      img: birdIcon,
      alt: "categoria aves",
      name: "aves",
      path: "aves",
    },
    {
      id: "rodents",
      img: rodentIcon,
      alt: "categoria roedores",
      name: "roedores",
      path: "roedores",
    },
    {
      id: "house",
      img: houseIcon,
      alt: "categoria casa",
      name: "casa",
      path: "casa",
    },
    {
      id: "garden",
      img: gardenIcon,
      alt: "categoria jardim",
      name: "jardim",
      path: "jardim",
    },
    {
      id: "contact",
      img: infoIcon,
      alt: "categoria atendimento",
      name: "atendimento",
      path: "contato",
    },
  ];

  // function getPage(id) {
  //   let icons = document.querySelectorAll(".category_container");

  //   icons.forEach((icon) => {
  //     icon.style.opacity = "0.5";
  //     icon.id === id && (icon.style.opacity = "1");
  //   });
  // }

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
            to={
              category.path === "contato"
                ? "/contato"
                : `/produtos/${category.path}`
            }
            onClick={() => context.getCurrentPage(category.id)}
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
