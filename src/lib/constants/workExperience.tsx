import type { WorkExperience } from "../types/workExperience";
import type { Locale } from "../i18n";
import IggaNetwork from "../../content/work/1-igga-network.mdx";
import IggaFrontend from "../../content/work/2-igga-frontend.mdx";
import DominaWork from "../../content/work/3-domina.mdx";
import IggaNetworkEn from "../../content/work/en/1-igga-network.mdx";
import IggaFrontendEn from "../../content/work/en/2-igga-frontend.mdx";
import DominaWorkEn from "../../content/work/en/3-domina.mdx";

type JobMeta = Pick<
  WorkExperience,
  "company" | "position" | "duration" | "location" | "url"
>;

const descriptions = {
  es: [DominaWork, IggaFrontend, IggaNetwork],
  en: [DominaWorkEn, IggaFrontendEn, IggaNetworkEn],
} satisfies Record<Locale, WorkExperience["description"][]>;

export function getWorkExperience(
  locale: Locale,
  jobs: JobMeta[],
): WorkExperience[] {
  return jobs.map((job, i) => ({
    ...job,
    description: descriptions[locale][i],
  }));
}
