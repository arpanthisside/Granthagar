import React from 'react';
import './bodypre_1.css'
function BodyPre() {
    return (
        <div className="scrollspy-example" tabIndex="0">
            <nav class="navbar1">
                <div class="navbar-left">
                    <span class="navbar-contents">Contents</span>
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
            <div className="relevant-experience">
                <h2>Relevant Experience</h2>
                <div className="experience-item">
                    <div className="experience-image">
                        <img src="https://images.unsplash.com/photo-1727204750403-861c059330d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl in a jacket" />
                    </div>
                    <div className="experience-content">
                        <h3>1. Made a Deep Learning Based Project</h3>
                        <p>
                            This was a part of my AI internship during Summer-24 which used CNN
                            with many technologies.
                        </p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-image">
                    <img src="https://images.unsplash.com/photo-1727204750403-861c059330d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl in a jacket" />

                    </div>
                    <div className="experience-content">
                        <h3>2. Industry level skills</h3>
                        <p>
                            By completing and giving several industry level certifications and
                            exams, it helps to be updated with the dynamic tech-updating world.
                        </p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-image">
                    <img src="https://images.unsplash.com/photo-1727204750403-861c059330d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl in a jacket" />

                    </div>
                    <div className="experience-content">
                        <h3>2. Industry level skills</h3>
                        <p>
                            By completing and giving several industry level certifications and
                            exams, it helps to be updated with the dynamic tech-updating world.
                        </p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-image">
                    <img src="https://images.unsplash.com/photo-1727204750403-861c059330d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl in a jacket" />

                    </div>
                    <div className="experience-content">
                        <h3>2. Industry level skills</h3>
                        <p>
                            By completing and giving several industry level certifications and
                            exams, it helps to be updated with the dynamic tech-updating world.
                        </p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-image">
                    <img src="https://images.unsplash.com/photo-1727204750403-861c059330d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl in a jacket" />

                    </div>
                    <div className="experience-content">
                        <h3>2. Industry level skills</h3>
                        <p>
                            By completing and giving several industry level certifications and
                            exams, it helps to be updated with the dynamic tech-updating world.
                        </p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default BodyPre;