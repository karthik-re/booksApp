export const formatDateRange = (startDate, endDate) => {
  if (!startDate && !endDate) {
    return "TBD";
  }

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // Use current date if end date is not provided

  const startMonth = start.toLocaleString("default", { month: "short" });
  const endMonth = end.toLocaleString("default", { month: "short" });

  const formattedStart = `${startMonth} ${start.getFullYear()}`;
  const formattedEnd = `${endMonth} ${end.getFullYear()}`;

  if (!endDate || startDate > endDate) {
    return `${formattedStart} - Present`;
  }

  return `${formattedStart} - ${formattedEnd}`;
};

export const secondsToMinutesAndSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    (hours > 0 ? `${hours} Hour${hours !== 1 ? "s" : ""} ` : "") +
    (minutes > 0 ? `${minutes} Minute${minutes !== 1 ? "s" : ""}` : "") +
    (remainingSeconds > 0
      ? ` ${remainingSeconds} Second${remainingSeconds !== 1 ? "s" : ""}`
      : "");

  return formattedTime.trim();
};
