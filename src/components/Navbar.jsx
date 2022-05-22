import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed z-50 flex w-full pt-28 text-xl font-bold text-primary-light">
      <div className="flex w-1/2 items-baseline">
        <div className="w-1/3">
          <div className="mb-1 h-1 w-1/4 bg-primary-light" />
          <div className="mb-1 h-1 w-full bg-primary-light" />
          <div className="h-1 w-2/3 bg-primary-light" />
        </div>
        <div className="flex w-1/2 justify-evenly">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="works">Works</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
