import React from 'react';

const Navbar = ({ onSelect }) => {
  const buttons = [
    'All Diseases',
    'Doctors',
    'Appointments',
    'Resources',
    'Contact',
  ];

  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        {buttons.map((button, index) => (
          <li key={index}>
            <button
              className="text-white hover:text-blue-300"
              onClick={() => onSelect(button)}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
