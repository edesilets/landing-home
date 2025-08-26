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
      href: "#home",
      label: "Home",
      onClick: () => {
        console.log("Home clicked");
        navigateTo('profile');
      }
    },
    {
      href: "#projects",
      label: "Projects",
      onClick: () => {
        console.log("Projects clicked");
        navigateTo('projects');
      }
    },
    {
      href: "#adventures",
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
      label: "Contact"
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
            <p>Check out my adventures on social media and fitness platforms!</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/ethan_in_the_wild/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram-link"
              >
                <i className="fab fa-instagram"></i>
                Follow on Instagram
              </a>
              <a
                href="https://connect.garmin.com/modern/profile/a624bd40-ba95-4b43-85ad-97e81321752e"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link garmin-link"
              >
                <i className="fa-solid fa-person-hiking"></i>
                Connect on Garmin
              </a>
            </div>
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