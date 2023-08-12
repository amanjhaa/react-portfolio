import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../animated-letters";
import Profile from "../../assets/images/aman.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "A", "m", "a", "n", " ", "J", "h", "a"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={10}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2>Frontend Developer / javascript / Git</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="image-container">
        <img src={Profile} alt="Profile"></img>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Home;
