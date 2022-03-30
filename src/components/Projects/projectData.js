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
    tech: ["React Hooks", "SCSS", "Netlify", "COVID Tracking API"],
    description:
      "A map view of COVID-19 cases in the United States, including individual state testing data.",
  },
  {
    image: weathermap,
    title: "Weather Map",
    github: "https://github.com/dannyhogan/weather-app",
    deployed: "https://react-weather-map.netlify.app/",
    deployedOn: "Netlify",
    tech: [
      "React Hooks",
      "SCSS",
      "Netlify",
      "Google Maps API",
      "National Weather API",
    ],
    description: "Get a 7 day forecast of anywhere on the US map!",
  },
  {
    image: nasa,
    title: "NASA Photo Search",
    github: "https://github.com/dannyhogan/nasa-pic-of-the-day",
    deployed: "https://nasa-picture-of-the-day.netlify.app/",
    deployedOn: "Netlify",
    tech: ["React Hooks", "SCSS", "Netlify", "NASA Picture API"],

    description:
      "Search through NASA's pictures of the day, going back to 1995!",
  },
  {
    image: mountain,
    title: "Mountain Memory Game",
    github: "https://github.com/dannyhogan/react-memory-game",
    deployedOn: "Netlify",
    tech: ["React", "CSS Grid", "Netlify"],
    deployed: "https://react-mountain-memory-game.netlify.app/",
    description:
      "A simple tile based memory game. How fast can you find all of the mountain matches?",
  },
  {
    image: ttw,
    title: "Twitch Tug-Of-War",
    github: "https://github.com/coding-cousins/twitch-tug-of-war",
    deployed: "https://twitch-tug-of-war.herokuapp.com/",
    deployedOn: "Heroku",
    tech: ["React", "SCSS", "Node.js", "Express", "Socket.IO", "tmi.js"],
    description:
      "Enter two Twitch streamers and watch them battle in chat powered Tug of War match!",
  },
  {
    image: alchemy,
    title: "Alchemy Type",
    github: "https://github.com/alchemy-type/alchemy-type.github.io",
    deployed: "http://alchemy-type.github.io/",
    deployedOn: "GitHub Pages",
    tech: [],
    description:
      "A typing practice website built in Vanilla JS. Practice writing code, upload custom text passages, and improve your typing statistics.",
  },
];

export default projects;
