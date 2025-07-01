// import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";


// function Nav() {
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);
//   const closeDropdown = () => setIsOpen(false);

//   const navLinks = (
//     <div className={`nav-parent-slide ${isOpen ? "open" : ""}`}>
//       <div className="nav-child" onClick={closeDropdown}><a href="">HOME</a></div>
//       <hr />
//       <div className="nav-child" onClick={closeDropdown}><a href="">PORTFOLIO</a></div>
//       <hr />
//       <div className="nav-child" onClick={closeDropdown}><a href="">ABOUT</a></div>
//       <hr />
//       <div className="nav-child" onClick={closeDropdown}><a href="">CONTACT</a></div>
//     </div>
//   );

//   return (
//     <>
//       {isMobile ? (
//         <div className="nav-parent-mobile-container">
//           <i
//             className={`nav-i-toggle large icon chevron down ${isOpen ? "up" : "down"}`}
//             onClick={toggleDropdown}
//             style={{ cursor: "pointer", marginBottom: "1rem" }}
//           ></i>
//           {navLinks}
//         </div>
//       ) : (
//         <div className="nav-parent-mobile">
//           <div className="nav-child"><a href="">HOME</a></div>
//           <hr />
//           <div className="nav-child"><a href="">PORTFOLIO</a></div>
//           <hr />
//           <div className="nav-child"><a href="">ABOUT</a></div>
//           <hr />
//           <div className="nav-child"><a href="">CONTACT</a></div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Nav;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function Nav() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const navLinks = (
    <div className={`nav-parent-slide ${isOpen ? "open" : ""}`}>
      <div className="nav-child" onClick={closeDropdown}><Link to="/">HOME</Link></div>
      <hr />
      <div className="nav-child" onClick={closeDropdown}><Link to="/gallery">GALLERY</Link></div>
      <hr />
      <div className="nav-child" onClick={closeDropdown}><Link to="/about">ABOUT</Link></div>
      <hr />
      <div className="nav-child" onClick={closeDropdown}><Link to="/contact">CONTACT</Link></div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div className="nav-parent-mobile-container">
          <div onClick={toggleDropdown} style={{ cursor: "pointer"}}>
            {isOpen ? (
              <IoCloseOutline size={32} color="#C2FFF8" />
            ) : (
              <RxHamburgerMenu size={32} color="#C2FFF8" />
            )}
          </div>
          {navLinks}
        </div>
      ) : (
        <div className="nav-parent">
          <div className="nav-child"><Link to="/">HOME</Link></div>
          <hr />
          <div className="nav-child"><Link to="/gallery">GALLERY</Link></div>
          <hr />
          <div className="nav-child"><Link to="/about">ABOUT</Link></div>
          <hr />
          <div className="nav-child"><Link to="/contact">CONTACT</Link></div>
        </div>
      )}
    </>
  );
}

export default Nav;


