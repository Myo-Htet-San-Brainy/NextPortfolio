export function getMonthDiff(dateString) {
  // Parse the date string into a Date object
  const dateObject = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  const yearDiff = currentDate.getFullYear() - dateObject.getFullYear();

  // Calculate the difference in months (considering year difference)
  let monthDiff =
    currentDate.getMonth() - dateObject.getMonth() + yearDiff * 12;

  // Adjust for cases where the current date is earlier in the month than the data date
  if (currentDate.getDate() < dateObject.getDate()) {
    monthDiff--;
  }

  // Return the absolute value of the month difference
  return Math.abs(monthDiff);
}
