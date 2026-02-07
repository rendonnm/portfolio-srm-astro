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
  const day = todayDate.getUTCDate();
  const month = todayDate.getUTCMonth();
  const year = todayDate.getUTCFullYear();
  const hours = todayDate.getUTCHours();
  const minutes = todayDate.getUTCMinutes();
  const seconds = todayDate.getUTCSeconds();

  return {
    day,
    month,
    year,
    hours,
    minutes,
    seconds,
  };
}

function checkIsSunday(day: number) {
  return day === 0;
}

interface getFirstSundayDayOfWeekProps {
  year: number;
  month: number;
  day: number;
}

export function getSundayDayOfWeek({
  year,
  month,
  day,
}: getFirstSundayDayOfWeekProps) {
  let date = new Date(Date.UTC(year, month, day));
  let isSunday = checkIsSunday(date.getUTCDay());

  let newDay = day;
  while (!isSunday) {
    newDay = newDay - 1;
    date = new Date(Date.UTC(year, month, newDay));
    isSunday = checkIsSunday(date.getUTCDay());
  }

  return date;
}

export function getMonthsOfGitHubActivity(res: GitHubCalendar) {
  const contributions = new Map<number, Record<string, number>>();

  for (const week of res.weeks) {
    const firstDay = week.firstDay;
    const date = new Date(firstDay);
    const year = date.getUTCFullYear();

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
