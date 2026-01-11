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
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    setTime(getFormatedTime());

    const id = setInterval(() => {
      setTime(getFormatedTime());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <p
      className="sm:text-5xl text-6xl font-semibold text-gradient clock-font
      bg-linear-to-r from-cyan-100 via-blue-200 to-indigo-200 bg-clip-text
		  text-transparent"
    >
      {time}
    </p>
  );
}
