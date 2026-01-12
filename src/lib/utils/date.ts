import type { GitHubCalendar } from "../types/gitHub";

const englishMonthIntl = new Intl.DateTimeFormat("en-GB", {
  month: "short",
});

export const englishShortDayIntl = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
});

export const englishLongDayIntl = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
});

export function getActualDate() {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();
  const hours = todayDate.getHours();
  const minutes = todayDate.getMinutes();
  const seconds = todayDate.getSeconds();

  return {
    day,
    month,
    year,
    hours,
    minutes,
    seconds,
  };
}

export function getMonthsOfGitHubActivity(res: GitHubCalendar) {
  const contributions = new Map<number, Record<string, number>>();

  for (const week of res.weeks) {
    const firstDay = week.firstDay;
    const date = new Date(firstDay);
    const year = date.getFullYear();

    const monthFormated = englishMonthIntl.format(date);

    if (!contributions.has(year)) {
      contributions.set(year, {});
    }

    const contributionsMap = contributions.get(year);
    if (contributionsMap) {
      contributionsMap[monthFormated] =
        (contributionsMap?.[monthFormated] ?? 0) + 1;
    }
  }

  const months = [];
  for (const [_, value] of contributions) {
    for (const val of Object.entries(value)) {
      months.push(val);
    }
  }

  return months;
}
