import './navbar.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavToggle from "../NavToggle/NavToggle";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
export default function Navbar() {
    return (
        <>
            {/* Menu btn to toggle navbar on mobile */}
            <NavToggle />

            <header className="primary-header" data-visible="false">
              
                   
                <div >
                    <a className='iconTop' href="https://github.com/ArunrajMK" target="_blank" rel="noopener noreferrer">
                        <SiGithub />
                        GitHub
                    </a>
                    <a className='iconTop' href="https://www.linkedin.com/in/arunraj-mk-45241b237/" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin />
                        LinkedIn
                    </a>
                    <a className='iconTop' href="https://drive.google.com/file/d/1lgiQom199RIgfKB7abPs0JXZ81B7ryx8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <HiDocumentText />
                        Resume
                    </a>
                    </div>
                   
              

                <nav className="primary-navigation">
                   


                    <ul>
                   

                        <li className="nav-item">
                            <a href="#projects" >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills">
                               Skills
                            </a>
                        
                        </li>
                      

                        <li className="nav-item">
                            <a href="#contact">
                              Contact
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="#about">
                               About
                            </a>
                        </li>



                        <li className="nav-item">
                            <ThemeToggle />
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )
}