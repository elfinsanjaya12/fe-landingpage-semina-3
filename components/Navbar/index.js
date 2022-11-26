/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from '../NavLink';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState(false);

  return (
    <nav className='container navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link href={'/'} className='navbar-brand'>
          <img src='/images/logo.svg' alt='semina' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div
            className={`navbar-nav ${
              router.pathname !== '/signin' ? 'mx-auto' : 'ms-auto'
            } my-3 my-lg-0`}
          >
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/browse'}>Browse</NavLink>
            <NavLink href={'/stories'}>Stories</NavLink>
            <NavLink href={'/about'}>About</NavLink>
          </div>

          {router.pathname !== '/signin' && (
            <>
              {token ? (
                <div className='navbar-nav ms-auto'>
                  <div className='nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3'>
                    <span className='text-light d-none d-lg-block'>
                      Hello, Shayna M
                    </span>

                    <a
                      className='nav-link dropdown-toggle mx-0 d-none d-lg-block'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img src='/images/avatar.png' alt='semina' width='60' />
                    </a>

                    <a
                      className='d-block d-lg-none dropdown-toggle text-light text-decoration-none'
                      data-bs-toggle='collapse'
                      href='#collapseExample'
                      role='button'
                      aria-expanded='false'
                      aria-controls='collapseExample'
                    >
                      <img src='/images/avatar.png' alt='semina' width='60' />
                    </a>

                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li>
                        <Link href={'/dashboard'} className='dropdown-item'>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Rewards
                        </a>
                      </li>
                      <li onClick={() => handleLogout()}>
                        <a className='dropdown-item'>Sign Out</a>
                      </li>
                    </ul>

                    <div className='collapse' id='collapseExample'>
                      <ul className='list-group'>
                        <li>
                          <a className='list-group-item' href='#'>
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a className='list-group-item' href='#'>
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className='list-group-item' href='#'>
                            Rewards
                          </a>
                        </li>
                        <li onClick={() => handleLogout()}>
                          <a className='list-group-item'></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='d-grid'>
                  <Link href={'/signin'} className='btn-navy'>
                    Sign In
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
