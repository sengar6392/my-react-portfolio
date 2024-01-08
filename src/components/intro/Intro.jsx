/* eslint-disable react/no-unescaped-entities */
import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="my-image">
          <img src="/src/assets/my_image.jpeg" alt="my-image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities */}
          <h2>Hi There, I'm</h2>
          <h1>Shivam Sengar</h1>
          <h3>
            React <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <KeyboardArrowDownIcon className="arrow-down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
