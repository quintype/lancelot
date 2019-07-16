import { format, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from "date-fns";

function convertToMillisecs(timestamp) {
  const currentTimestamp = new Date().valueOf();
  if (timestamp * 1000 < currentTimestamp) {
    return timestamp * 1000;
  }
  return timestamp;
}

export function humanizeDate(timestamp, type = "relative") {
  timestamp = parseInt(timestamp);
  const currentDate = new Date();
  const givenDate = new Date(convertToMillisecs(timestamp));
  if (type === "absolute") {
    return `${format(givenDate, "DD MMM YYYY h A")}`;
  }
  if (differenceInSeconds(currentDate, givenDate) < 60) {
    return "Just Now";
  } else if (differenceInMinutes(currentDate, givenDate) < 60) {
    const minutes = differenceInMinutes(currentDate, givenDate);
    return minutes > 1 ? `${minutes} mins ago` : `${minutes} min ago`;
  } else if (differenceInHours(currentDate, givenDate) < 24 && currentDate.getDate() === givenDate.getDate()) {
    return `Today at ${format(givenDate, "h A")}`;
  } else if (differenceInDays(currentDate, givenDate) < 2) {
    return `Yesterday at ${format(givenDate, "h A")}`;
  } else {
    return `${format(givenDate, "DD MMM YYYY h A")}`;
  }
}

export function getMonthDayString(timestamp) {
  timestamp = parseInt(timestamp);
  const givenDate = new Date(convertToMillisecs(timestamp));
  return `${format(givenDate, "MMMM D")}`;
}
