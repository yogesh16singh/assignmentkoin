import { format, formatDistanceToNow, parseISO } from "date-fns";
export const formatPercentage = (value) => Math.abs(value).toFixed(2);

export const PositiveTrend = (value) => value > 0;

export const formatDateAllTime = (dateString) => {
  if (!dateString) {
    return "";
  }
  const date = parseISO(dateString);
  const formattedDate = format(date, "MMM dd, yyyy");
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });

  return `${formattedDate} (${timeAgo})`;
};

export const formattedNum = (num) => {
  if (!num) return "";

  return num.toLocaleString();
};
