import { StyledFooter, SocialIcons } from "./styled/Footer.styled";
import { FaGithub, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; Birthday Reminder 2022.
        <br />
        All legal rights reserved.
      </p>
      <p>Made with 🧡 by developer Alfred Kahenya.</p>
      <SocialIcons>
        <p>For more information:</p>
        <div>
          <a href="https://github.com/">
            <FaGithub />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.whatsapp.com/">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
        </div>
      </SocialIcons>
    </StyledFooter>
  );
}

export default Footer;
