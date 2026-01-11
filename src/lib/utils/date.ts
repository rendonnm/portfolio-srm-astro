export function getActualDate() {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();

  return {
    day,
    month,
    year,
  };
}
