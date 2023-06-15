import nasa from "../../assets/nasa.png";
import alchemy from "../../assets/alchemy.png";
import ttw from "../../assets/ttw.png";
import mountain from "../../assets/mountain.png";
import covidtracker from "../../assets/covidtracker.png";
import weathermap from "../../assets/weathermap.png";

const projects = [
  {
    image: covidtracker,
    company: "ESHA Research",
    website: "www.esha.com",
    date: "2022 - 2023",
    tech: ["React Hooks", "SCSS", "Netlify", "COVID Tracking API"],
    description:
      "A map view of COVID-19 cases in the United States, including individual state testing data.",
  },
  {
    image: weathermap,
    company: "Allocations",
    website: "www.allocations.com",
    date: "2021 - 2022",
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
    company: "MedSec",
    website: "www.medsec.com",
    date: "2021 - 2022",
    tech: ["React Hooks", "SCSS", "Netlify", "NASA Picture API"],

    description:
      "Search through NASA's pictures of the day, going back to 1995!",
  },
  {
    image: mountain,
    company: "NW Natural Water",
    website: "",
    date: "2021 - 2022",
    tech: ["React", "CSS Grid", "Netlify"],
    description:
      "A simple tile based memory game. How fast can you find all of the mountain matches?",
  },
  {
    image: alchemy,
    company: "Alchemy Type",
    website: "https://github.com/alchemy-type/alchemy-type.github.io",
    date: "GitHub Pages",
    tech: [],
    description:
    "A typing practice website built in Vanilla JS. Practice writing code, upload custom text passages, and improve your typing statistics.",
  },
];

export default projects;
