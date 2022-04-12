import React, { useState, useEffect, useRef } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Landing from "../Landing/Landing";
import "./Home.scss";

const Home = ({ toggleNavbar }) => {

  const myRef = useRef(null);

  const [scrollValue, setScrollValue] = useState(0);


  const handleScroll = (e) => {
    // setScrollValue(e.target.documentElement.scrollTop);
    const scrollTop = myRef.current.scrollTop;
    setScrollValue(scrollTop);
  };


  useEffect(() => {

    if (scrollValue > 600) {
      toggleNavbar(true);
    } else {
      toggleNavbar(false)
    }


    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollValue]);

  return (
    <div className="Home" ref={myRef} onScroll={handleScroll}>
      <Landing />
      <AboutMe />
    </div>
  );
};

export default Home;
