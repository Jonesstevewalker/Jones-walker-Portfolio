import { FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/JSW.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-5">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={90} height={33} alt="logo"/> 
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/jonesstevewalker32/"       target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="LinkedIn">
                        <FaLinkedin />
                </a>
                <a href="https://github.com/Jonesstevewalker"       target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="GitHub">
                        <FaGithub />
                </a>
                <a href="https://www.instagram.com/jones_walker_/"          target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="Instagram">
                        <FaInstagram />
                </a>
                <a href="https://x.com/Joneswalker328"       
                    target="_blank" 
                    rel="noopener norefferer" 
                    aria-label="Twitter">
                        <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    )
}

export default Navbar