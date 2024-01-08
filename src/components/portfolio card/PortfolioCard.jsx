/* eslint-disable react/prop-types */
import "./portfolioCard.scss";
const PortfolioCard = ({ cardData }) => {
  const { title, img,skills } = cardData;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
        <div className="wrapper">
          <a href="">Demo</a>
          <a href="">GitHub</a>
          <a href="">Detail</a>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{skills.join(", ")}</p>
    </div>
  );
};

export default PortfolioCard;
