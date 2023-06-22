import React, {useEffect} from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import perfil from "../img/perfil.png";

function TopContainers() {

    useEffect(() =>{
        const menuTarget = document.getElementById("menuChevron");
        const menuContainer = document.getElementById("menuContainer");

        menuTarget.addEventListener("mouseenter", () =>{
            menuContainer.style.transform = 'translatex(300px)'
        });

        menuTarget.addEventListener("mousele", () => {
            console.log("hi");
        });
    }, []);

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Buscar" />
        <i className="lupa">
          <BiSearchAlt2 />
        </i>
      </div>
      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>

        <div className="profileImage">
            <img src={perfil} alt="" />
        </div>

        <p className="prfileName"> andy </p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>
        <div className="menuContainer" id="menuContainer">
            <ul>
                <li>Web design</li>
                <li>UI / UX</li>
                <li>Form Design</li>
                <li>UI design</li>
            </ul>

        </div>
      </div>
    </div>
  );
}

export default TopContainers;
