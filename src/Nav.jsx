import React from 'react';
import './nav_1.css'
export default function Nav() {
  return (
    <>
      <nav class="navbar">
                <div class="navbar-left">
                    <span class="navbar-contents1">Contents</span>
                </div>
                <div class="navbar-right">
                    <ul class="navbar-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li class="dropdown">
                            <a href="#">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a href="#scrollspyHeading3">Third</a></li>
                                <li><a href="#scrollspyHeading4">Fourth</a></li>
                                {/* <li><hr class="dropdown-divider"/></li> */}
                                <li><a href="#scrollspyHeading5">Fifth</a></li>
                                <li><a href="#scrollspyHeading6">S</a></li>
                                <li><a href="#scrollspyHeading7">7</a></li>
                                <li><a href="#scrollspyHeading8">8</a></li>
                                <li><a href="#scrollspyHeading9">9</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  );
}
