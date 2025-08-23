import { useState } from "react";
import HamburgerMenu, { type MenuItem } from "./components/Navigation/HamburgerMenu";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./App.css";

// Define the possible views
type ViewType = 'profile' | 'projects' | 'interests' | 'adventures';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('profile');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
  };

  // Custom menu items with onClick handlers
  const menuItems: MenuItem[] = [
    {
      href: "#projects",
      label: "Projects",
      onClick: () => {
        console.log("Projects clicked");
        navigateTo('projects');
      }
    },
    {
      href: "https://www.instagram.com/ethan_in_the_wild/",
      label: "Adventures",
      onClick: () => {
        console.log("Adventures clicked");
        navigateTo('adventures');
      }
    },
    {
      href: "#interests",
      label: "Interests",
      onClick: () => {
        console.log("Interests clicked");
        navigateTo('interests');
      }
    },
    {
      href: "https://www.linkedin.com/in/ethandesilets/",
      label: "Contact",
      onClick: () => console.log("Contact clicked")
    },
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'projects':
        return <Projects />;
      case 'interests':
        return (
          <div className="placeholder-view">
            <h1>Interests</h1>
            <p>This section is coming soon!</p>
          </div>
        );
      case 'adventures':
        return (
          <div className="placeholder-view">
            <h1>Adventures</h1>
            <p>Check out my Instagram for now!</p>
          </div>
        );
      case 'profile':
      default:
        return <Profile />;
    }
  };

  return (
    <>
      <HamburgerMenu
        isOpen={menuOpen}
        onToggle={toggleMenu}
        menuItems={menuItems}
      />

      <main>
        {renderCurrentView()}
      </main>
    </>
  );
}

export default App;