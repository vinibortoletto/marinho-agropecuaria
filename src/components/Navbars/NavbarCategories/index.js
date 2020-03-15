import React, { useEffect } from "react";
import { Navbar } from "./styles";

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
      name: "Cães"
    },
    {
      img: catIcon,
      alt: "categoria gatos",
      name: "Gatos"
    },
    {
      img: fishIcon,
      alt: "categoria peixes",
      name: "Peixes"
    },
    {
      img: turtleIcon,
      alt: "categoria répteis",
      name: "Répteis"
    },
    {
      img: chickenIcon,
      alt: "categoria aves",
      name: "Aves"
    },
    {
      img: ratIcon,
      alt: "categoria roedores",
      name: "Roedores"
    },
    {
      img: houseIcon,
      alt: "categoria casa",
      name: "Casa"
    },
    {
      img: gardenIcon,
      alt: "categoria jardim",
      name: "Jardim"
    },
    {
      img: infoIcon,
      alt: "categoria atendimento",
      name: "Atendimento"
    }
  ];

  function handleScroll() {
    const navbarCategories = document.querySelector(".navbar_categories");
    let initialPosition = window.pageYOffset;

    window.onscroll = function() {
      let currentPosition = window.pageYOffset;

      if (initialPosition > currentPosition) {
        navbarCategories.classList.remove("toggle");
      } else if (currentPosition > 300) {
        navbarCategories.classList.add("toggle");
      }

      initialPosition = currentPosition;
    };
  }

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <Navbar className="navbar_categories">
      {categories.map((category, index) => {
        return (
          <div key={index} className="category_container">
            <img className="img" src={category.img} alt={category.alt} />
            <p>{category.name}</p>
          </div>
        );
      })}
    </Navbar>
  );
}
