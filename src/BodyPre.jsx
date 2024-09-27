import React from 'react';
import './bodypre_1.css'
function BodyPre() {
    return (
        <div className="scrollspy-example" tabIndex="0">
            <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                <a className="navbar-brand" href="#">Contents</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">First</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            {/* <li><hr className="dropdown-divider"/></li> */}
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading6">S</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading7">7</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading8">8</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading9">9</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="bdy-main">
                <h4 id="scrollspyHeading1">The Power of Knowledge: A Journey Through History</h4>
                <p>Explore the evolution of knowledge and libraries from ancient civilizations to the digital age. Discover the thoughts of influential thinkers like Plato, Aristotle, and the Library of Alexandria.

                </p>
                <h4 id="scrollspyHeading2">Digital Libraries: Revolutionizing Access to Information</h4>
                <p>Understand the concept of digital libraries, their benefits, and how they have transformed the way we access and share information. Learn about the vision of pioneers like Vannevar Bush and Ted Nelson.

                </p>
                <h4 id="scrollspyHeading3">Building a Digital Library: A Practical Guide</h4>
                <p>Get hands-on with the process of creating a digital library. Learn about content curation, metadata creation, and technological infrastructure. Discover the insights of library professionals and technology experts.

                </p>
                <h4 id="scrollspyHeading4">Preserving Digital Heritage: Challenges and Solutions</h4>
                <p>Explore the challenges of preserving digital content over time, including bit rot, obsolescence, and copyright issues. Learn about the strategies and technologies used to ensure the longevity of digital collections. Hear from digital preservationists and archivists.

                </p>
                <h4 id="scrollspyHeading5">The Future of Digital Libraries: Emerging Trends and Innovations</h4>
                <p>Look ahead at the future of digital libraries, including advancements in artificial intelligence, virtual reality, and blockchain technology. Discover the predictions of futurists and technology leaders.
                </p>
                <h4 id="scrollspyHeading6">The Impact of Digital Libraries on Society and Education</h4>
                <p>Examine the ways in which digital libraries have influenced education, research, and society as a whole. Learn about the perspectives of educators, researchers, and policymakers.
                </p>
                <h4 id="scrollspyHeading7">Granthagar Sangskriti: A Bengali Perspective

                </h4>
                <p>Granthagar Sangskriti: A Bengali Perspective

                </p>
                <h4 id="scrollspyHeading8">Granthagarer Itihas: A Journey Through Time</h4>
                <p>Trace the history of libraries in Bengal, from the ancient period to the present day. Discover the evolution of granthagars, their challenges, and their contributions to Bengali intellectual life. Learn about the stories of notable granthagars and their patrons.

                </p>
                <h4 id="scrollspyHeading9">Granthagarer Bhumika: Empowering Communities</h4>
                <p>Explore the role of granthagars in empowering communities and promoting education. Learn about the impact of libraries on literacy rates, social development, and economic growth. Discover the stories of individuals whose lives have been transformed by granthagars.







                </p>
            </div>
        </div>
    );
}

export default BodyPre;