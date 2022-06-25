import React from 'react'; 
import githubLogo from "../../assets/Projects/GitHub.png"

function Footer() {

    return (

        <footer className="footer" style={{ position:"fixed" }}>
            <p style={{ backgroundImage: `url(${githubLogo})` }}>
                <a href="https://github.com/JacobReeder" >GitHub Profile</a>
            </p>
        </footer>
    );
}

export default Footer;