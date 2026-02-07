import type { GitHubCalendar } from "../types/gitHub";

const englishMonthIntl = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  timeZone: "UTC",
});

export const englishShortDayIntl = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  timeZone: "UTC",
});

export const englishLongDayIntl = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  timeZone: "UTC",
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
  const monthsMap = new Map<
    string,
    { month: string; count: number; firstDate: Date }
  >();

  for (const week of res.weeks) {
    const firstDayDate = new Date(week.firstDay + "T00:00:00Z");
    const yearMonth = `${firstDayDate.getUTCFullYear()}-${firstDayDate.getUTCMonth()}`;

    if (monthsMap.has(yearMonth)) {
      monthsMap.get(yearMonth)!.count++;
    } else {
      monthsMap.set(yearMonth, {
        month: englishMonthIntl.format(firstDayDate),
        count: 1,
        firstDate: firstDayDate,
      });
    }
  }

  return Array.from(monthsMap.values())
    .sort((a, b) => a.firstDate.getTime() - b.firstDate.getTime())
    .map(({ month, count }) => [month, count])
    .slice(0, -1);
}
