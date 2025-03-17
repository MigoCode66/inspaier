'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import { viewContext } from './context';
const Navbar = () => {
  const context = useContext(viewContext);
  if (!context) {
    throw new Error('viewContext must be used within a Provider');
  }
  const [view, setView] = context as [
    string,
    React.Dispatch<React.SetStateAction<string | undefined>>
  ];
  const clickHandler = (e: React.MouseEvent) => {
    setView('block');
  };
  return (
    <nav>
      <Image
        className="logo"
        src="/images/Logo.png"
        alt="Logo"
        width={79}
        height={19}
      />
      <ul>
        <li>
          <p className="sp">About Me</p>
        </li>
        <li>
          <button onClick={clickHandler} className="sp">
            Add your portfolio
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
