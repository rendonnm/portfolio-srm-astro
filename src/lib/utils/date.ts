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
