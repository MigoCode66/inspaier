'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="row1">
          <div className="wraper">
            <p className="name">Inspaier</p>
            <p className="version sp">InDEV v1.2.0</p>
          </div>
          <p className="lastUpdate">Last Update 03-03-2025</p>
        </li>
        <li className="row2">
          <div className="linkContainer">
            <Link
              className="link"
              href={'https://github.com/MigoCode66/inspaier'}
            >
              Github
            </Link>
            <sup>1</sup>
          </div>
          <div className="linkContainer">
            <Link
              className="link"
              href={'https://github.com/MigoCode66/inspaier'}
            >
              FAQ
            </Link>
            <sup>2</sup>
          </div>
          <div className="linkContainer">
            <Link
              className="link"
              href={'https://github.com/MigoCode66/inspaier'}
            >
              About me
            </Link>
            <sup>3</sup>
          </div>
        </li>
        <li className="row3"></li>
      </ul>
      <p className="bottomline"></p>
    </footer>
  );
};

export default Footer;
