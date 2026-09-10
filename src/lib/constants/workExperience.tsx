import type { WorkExperience } from "../types/workExperience";
import type { Locale } from "../i18n";
import IggaNetwork from "../../content/work/1-igga-network.mdx";
import IggaFrontend from "../../content/work/2-igga-frontend.mdx";
import ScotiabankWork from "../../content/work/3-scotiabank.mdx";
import IggaNetworkEn from "../../content/work/en/1-igga-network.mdx";
import IggaFrontendEn from "../../content/work/en/2-igga-frontend.mdx";
import ScotiabankWorkEn from "../../content/work/en/3-scotiabank.mdx";

type JobMeta = Pick<
  WorkExperience,
  "company" | "position" | "duration" | "location" | "url" | "logo"
>;

const descriptions = {
  es: [ScotiabankWork, IggaFrontend, IggaNetwork],
  en: [ScotiabankWorkEn, IggaFrontendEn, IggaNetworkEn],
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
