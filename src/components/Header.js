import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
      <header>
        <div className='logo'>
          <h3>kiiwebdesign Portfolio</h3>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="./home">Home</Link>
            </li>
            <li>
              <Link to="./work">Work</Link>
            </li>
            <li>
              <Link to="./sns">SNS</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}
