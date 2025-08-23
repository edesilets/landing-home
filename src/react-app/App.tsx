import { useState } from "react";
import HamburgerMenu, { type MenuItem } from "./components/Navigation/HamburgerMenu";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Custom menu items with onClick handlers
  const menuItems: MenuItem[] = [
    {
      href: "#projects",
      label: "Projects",
      onClick: () => console.log("Projects clicked")
    },
    {
      href: "https://www.instagram.com/ethan_in_the_wild/",
      label: "Adventures",
      onClick: () => console.log("Adventures clicked")
    },
    {
      href: "#interests",
      label: "Interests",
      onClick: () => console.log("Interests clicked")
    },
    {
      href: "https://www.linkedin.com/in/ethandesilets/",
      label: "Contact",
      onClick: () => console.log("Contact clicked")
    },
  ];

  return (
    <>
      <HamburgerMenu
        isOpen={menuOpen}
        onToggle={toggleMenu}
        menuItems={menuItems}
      />

      <main>
        <Profile />
      </main>
    </>
  );
}

export default App;