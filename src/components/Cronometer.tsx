import { getActualDate } from "@/lib/utils/date";
import { useEffect, useState } from "react";

function getFormatedTime() {
  const { hours, minutes, seconds } = getActualDate();

  const hoursPadStart = String(hours).padStart(2, "0");
  const minutesPadStart = String(minutes).padStart(2, "0");
  const secondsPadStart = String(seconds).padStart(2, "0");

  const formatedTime = `${hoursPadStart}:${minutesPadStart}:${secondsPadStart}`;

  return formatedTime;
}

export function Cronometer() {
  const [time, setTime] = useState(() => getFormatedTime());

  useEffect(() => {
    setInterval(() => {
      setTime(() => getFormatedTime());
    }, 1000);
  }, []);

  return (
    <p className="sm:text-5xl text-6xl font-semibold text-zinc-300 clock-font">
      {time}
    </p>
  );
}
