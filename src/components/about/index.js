import { useEffect, useState } from "react";
import {
  faHubspot,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../animated-letters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am Aman, a passionate web developer with 4 years of valuable
            experience in the field. Currently, I am proud to be a part of
            SingleInterface, a product-based company where I am continually
            honing my skills and contributing to the creation of innovative web
            solutions.
          </p>
          <p align="LEFT">
            In addition to my technical skills, I possess strong project
            management abilities, which help me organize and prioritize tasks
            effectively, ensuring timely deliveries and high-quality results.
          </p>
          <p>
            Outside of work, I love to stay up-to-date with the latest trends
            and advancements in web development. I enjoy participating in online
            communities, attending tech conferences.
          </p>
          <p>
            In conclusion, I am a dedicated web developer who enjoys every
            aspect of the development process. My experience at both a
            product-based and service-based company has enriched my skill set
            and provided me with a well-rounded perspective. I am committed to
            delivering excellence in every project I undertake, and I am excited
            about what the future holds in the ever-evolving world of web
            development.
          </p>
        </div>
        <div className="stage">
          <div className="stage-cube-cont">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHubspot} color="#ff5c35" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
