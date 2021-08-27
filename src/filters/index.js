import moment from "moment";

export const removeUnderscores = (string) => {
  return string.replace(/_/g, " ");
};

export const dateFilter = (string) => {
  return moment.utc(string).format("M/D/YYYY, h:mm:ss");
};

export const capitalize = (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
