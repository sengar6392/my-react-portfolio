/* eslint-disable react/prop-types */

import "./portfolioTabs.scss"
const PortfolioTabs = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default PortfolioTabs