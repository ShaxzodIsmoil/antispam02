import React from 'react';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export function Header({ LoggedInUser }) {

  return (
    <>
      <div className="bg-black w-full h-12">
        <span className="text-white float-left font-extrabold text-2xl ml-7 sm:ml-12 mt-2 text-roboto">
          <Link to="/">PHISHr 🎣</Link>
        </span>
      </div>
    </>
  );
}
