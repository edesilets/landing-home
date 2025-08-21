// src/react-app/components/Navigation/HamburgerMenu/HamburgerMenu.tsx
import React from 'react';
import './HamburgerMenu.css';

export interface MenuItem {
  href: string;
  label: string;
  onClick?: () => void;
}

export interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#adventures", label: "Adventures" },
  { href: "#interests", label: "Interests" },
];

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onToggle,
  menuItems = defaultMenuItems,
}) => {
  const handleMenuItemClick = (item: MenuItem) => {
    // Close menu when item is clicked
    onToggle();

    // Call custom onClick if provided
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`hamburger-btn ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="menu-overlay"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <nav
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul role="menu">
          {menuItems.map((item, index) => (
            <li key={index} role="none">
              <a
                href={item.href}
                role="menuitem"
                onClick={() => handleMenuItemClick(item)}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;