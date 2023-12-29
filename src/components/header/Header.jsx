import "./header.css";
import imgBanner from "../../assets/banner.png";

const Header = () => {
  return (
    <header className="header-container">
      <img className="header-img" src={imgBanner} alt="" />
    </header>
  );
};

export default Header;
