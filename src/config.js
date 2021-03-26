import { HomePage } from "pages/home";
import { ProjectsPage } from "pages/projects";
import { ExperiencePage } from "pages/experience";

export const links = [
  { to: "/about", content: "Sobre" },
  { to: "/projects", content: "Projetos" },
  { to: "/experience", content: "Experiência" },
];

export const routes = [
  { name: "Sobre", path: "/about", Component: HomePage },
  { name: "Projetos", path: "/projects", Component: ProjectsPage },
  { name: "Experiência", path: "/experience", Component: ExperiencePage },
];
