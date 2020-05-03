import nasa from "../../assets/nasa.png";
import alchemy from "../../assets/alchemy.png";
import ttw from "../../assets/ttw.png";
import mountain from "../../assets/mountain.png";

const projects = [
  {
    image: nasa,
    title: "NASA Photo Search",
    github: "https://github.com/dannyhogan/nasa-pic-of-the-day",
    deployed: "https://nasa-picture-of-the-day.netlify.app/",
    description:
      "Find NASA's picture of the day, going back to 1995! Built using React hooks, SCSS, the NASA Pictures API, and Netlify.",
  },
  {
    image: mountain,
    title: "Mountain Memory Game",
    github: "",
    deployed: "https://react-mountain-memory-game.netlify.app/",
    description:
      "A tile based memory game built using React hooks and CSS grid. How fast can you find all of the 'mountain matches'?",
  },
  {
    image: alchemy,
    title: "Alchemy Type",
    github: "",
    deployed: "",
    description:
      "A typing practice website built for the new dev. Practice writing code, upload custom text passages, and improve your typing statistics.",
  },
  {
    image: ttw,
    title: "Twitch Tug-Of-War",
    github: "",
    deployed: "",
    description:
      "Two Twitch streamers battle it out in a game of Tug of War! Built with React, Express, tmi.js, and Socket.IO. ",
  },
];

export default projects;
