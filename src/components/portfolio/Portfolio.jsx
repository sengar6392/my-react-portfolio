import "./portfolio.scss"
import {
  allPortfolio,
  reactPortfolio,
  javascriptPortfolio,
  staticPortfolio,
} from "../../data";
import PortfolioTabs from "../portfolio tabs/portfolioTabs";
import { useEffect, useState } from "react";
import PortfolioCard from "../portfolio card/PortfolioCard";
const Portfolio = () => {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "static",
      title: "Static",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(reactPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "static":
        setData(staticPortfolio);
        break;
  
      default:
        setData(allPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioTabs
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <PortfolioCard cardData={d} key={d.id}/>
        ))}
      </div>
    </div>
  );
}

export default Portfolio