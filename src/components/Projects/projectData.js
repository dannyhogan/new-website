import nasa from "../../assets/nasa.png";
import alchemy from "../../assets/alchemy.png";
import ttw from "../../assets/ttw.png";
import mountain from "../../assets/mountain.png";
import covidtracker from "../../assets/covidtracker.png";
import weathermap from "../../assets/weathermap.png";

const projects = [
  {
    image: covidtracker,
    title: "USA COVID-19 Map",
    github: "https://github.com/dannyhogan/usa-covid-map",
    deployed: "https://usa-covid-map.netlify.app/",
    deployedOn: "Netlify",
    description:
      "A US map view of COVID-19 cases, including individual state testing data. Built with React and the COVIDTracking API.",
  },
  {
    image: nasa,
    title: "NASA Photo Search",
    github: "https://github.com/dannyhogan/nasa-pic-of-the-day",
    deployed: "https://nasa-picture-of-the-day.netlify.app/",
    deployedOn: "Netlify",
    description:
      "Find NASA's picture of the day, going back to 1995! Built using React hooks, SCSS, the NASA Pictures API, and Netlify.",
  },
  {
    image: weathermap,
    title: "Weather Map",
    github: "https://github.com/dannyhogan/weather-app",
    deployed: "https://react-weather-map.netlify.app/",
    deployedOn: "Netlify",
    description:
      "Get a 7 day forecast using the Google Maps API and the National Weather API! Built with React hooks, SCSS, and Netlify.",
  },
  {
    image: mountain,
    title: "Mountain Memory Game",
    github: "https://github.com/dannyhogan/react-memory-game",
    deployedOn: "Netlify",
    deployed: "https://react-mountain-memory-game.netlify.app/",
    description:
      "A tile based memory game built using React hooks and CSS grid. How fast can you find all of the mountain matches?",
  },
  {
    image: ttw,
    title: "Twitch Tug-Of-War",
    github: "https://github.com/coding-cousins/twitch-tug-of-war",
    deployed: "https://twitch-tug-of-war.herokuapp.com/",
    deployedOn: "Heroku",
    description:
      "Two Twitch streamers battle it out in a game of Tug of War! Built with React, Express, tmi.js, and Socket.IO. ",
  },
  {
    image: alchemy,
    title: "Alchemy Type",
    github: "https://github.com/alchemy-type/alchemy-type.github.io",
    deployed: "http://alchemy-type.github.io/",
    deployedOn: "GitHub Pages",
    description:
      "A typing practice website built in Vanilla JS. Practice writing code, upload custom text passages, and improve your typing statistics.",
  },
];

export default projects;
