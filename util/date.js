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
