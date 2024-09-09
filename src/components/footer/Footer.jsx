
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import "../footer/footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer id="contact-us">
        <div className="footer_content">
          <div className="footer_left">
            <h2>Food.com</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              illo facilis nesciunt ad autem ea quibusdam totam. Fugit,
              voluptatem fugiat?
            </p>
          
          </div>
          <div className="footer_center">
            <h2>company</h2>
            <ul>
              <Link><li>Home</li></Link>
              <Link><li>About us</li></Link>
              <Link><li>Delivery</li></Link>
             <Link> <li>Privacy policy</li></Link>
            </ul>
          </div>
          <div className="footer_right">
            <h2>Get in touch</h2>
            <ul>
              <li>+91 8668301821</li>
              <li>enf.rohitraut2137@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer_copy-right">Copyright 2024 © || Rohit Raut- All Right Reserved.</p>
        </footer>
    </>
  );
}

export default Footer;
