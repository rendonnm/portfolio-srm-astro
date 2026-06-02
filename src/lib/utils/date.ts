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

export const dateFormatter = new Intl.DateTimeFormat("es-CO", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "America/Bogota",
  hour12: false,
});

export function getActualUTCDate() {
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

export function getActualDate() {
  const parts = Object.fromEntries(
    dateFormatter
      .formatToParts(new Date())
      .map((part) => [part.type, part.value]),
  );

  return {
    day: parseInt(parts.day, 10),
    month: parseInt(parts.month, 10) - 1,
    year: parseInt(parts.year, 10),
    hours: parseInt(parts.hour, 10),
    minutes: parseInt(parts.minute, 10),
    seconds: parseInt(parts.second, 10),
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
