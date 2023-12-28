import "../banner/banner.css";
import imgBanner from "../../assets/banner.png";

const Banner = () => {
  return (
    <header className="banner-container">
      <img className="banner-img" src={imgBanner} alt="" />
    </header>
  );
};

export default Banner;
