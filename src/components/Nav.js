import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryState, setLibraryState }) => {
  return (
    <nav>
      <img
        className="logo"
        src="https://i.ibb.co/sbN4PRr/Kordz-Logo.png"
        alt="Logo"
      />
      <div
        onClick={() => {
          setLibraryState(!libraryState);
        }}
        className="library-toggle"
      >
        Library &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </div>
    </nav>
  );
};

export default Nav;
