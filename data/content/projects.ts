import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Bottle (work in progress)",
    desc: "A social app for long-distance loved ones",
    img: "/static/projects/bottle-cover.png",
    link: "https://web.stanford.edu/class/cs147/projects/PreservingthePast/Bottle/",
    tags: ["React Native", "Figma"],
  },
  {
    id: 1,
    title: "First Plate",
    desc: "A food-inspired dating app prioritizing in-person interaction",
    img: "/static/projects/firstplate-cover.png",
    link: "https://devpost.com/software/first-plate",
    tags: ["React Native", "Figma"],
  },
  {
    id: 2,
    title: "Police Militarization Data Project",
    desc: "Understanding police militarization quantatiatively and empathetically",
    img: "/static/projects/cesta-cover.png",
    github: "https://github.com/know-systemic-racism/ca-mei-app",
    tags: ["Figma", "Python", "Streamlit"],
  },
  {
    id: 3,
    title: "Design 1 Class Missions",
    desc: "In an intro design class, I completed team projects that involved: synthesizing and ideating solutions for outdoor spaces, prototyping an escape room, and conducting user interviews + creating user personas for the problem space of community & belonging.",
    img: "/static/projects/design1-photo.png",
    tags: ["Synthesis & Ideation", "Prototyping & Testing", "Research & Needsfinding"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects