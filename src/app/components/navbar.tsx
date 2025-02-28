import React from 'react';
import Image from 'next/image';
const Navbar = () => {
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
          <p className="sp">Buy me a coffy</p>
        </li>
        <li>
          <button className="sp">Add your portfolio</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
