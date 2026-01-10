import type { WorkExperience } from "../types/workExperience";
import IggaNetwork from "../../content/work/1-igga-network.mdx";
import IggaFrontend from "../../content/work/2-igga-frontend.mdx";
import DominaWork from "../../content/work/3-domina.mdx";

export const workExperience: WorkExperience[] = [
  {
    company: "Domina Entrega Total S.A.S",
    position: "Desarrollador de Software",
    duration: "Ene. 2026 - Actualidad",
    location: "Medellín, Colombia",
    url: "https://domina.com.co/",
    description: DominaWork,
  },
  {
    company: "IGGA S.A.S.",
    position: "Profesional A (Desarrollador de Software)",
    duration: "Jul. 2024 - Dic. 2025",
    location: "Medellín, Colombia",
    url: "https://igga.com.co/",
    description: IggaFrontend,
  },
  {
    company: "IGGA S.A.S.",
    position: "Profesional A (Analista de Redes)",
    duration: "Nov. 2022 - Jul. 2024",
    location: "Medellín, Colombia",
    url: "https://igga.com.co/",
    description: IggaNetwork,
  },
];
