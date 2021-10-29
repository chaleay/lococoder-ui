/* eslint-disable react/react-in-jsx-scope */
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import { useEffect } from 'react';

function Sidebar({ children }) {
  const navAppear = () => {
    if (window.scrollY > 40) {
      console.log(window.scrollY);
      document.querySelector('.navbar').className = 'navbar navbar__scroll';
    } else {
      document.querySelector('.navbar').classList.remove('navbar__scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navAppear);
    return () => {
      window.removeEventListener('scroll', navAppear);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="navbar__logo">
            <Link href="/">
              <a>
                elijah<span>{`Christian`}</span>
              </a>
            </Link>
          </div>
          <div className="hover">
            <Link href="/about">
              <a>
                <AiOutlineUser className="icons" />
                <p>About</p>
              </a>
            </Link>
          </div>
          <div className="hover">
            <Link href="/contact">
              <a>
                <AiOutlineMail className="icons" />
                <p>Contact</p>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Sidebar;
