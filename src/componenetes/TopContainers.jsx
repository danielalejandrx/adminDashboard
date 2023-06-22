import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";

function TopContainers() {
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

        {/* <div className="profileImage"></div> */}

        <p className="prfileName"> andy </p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>
      </div>
    </div>
  );
}

export default TopContainers;
