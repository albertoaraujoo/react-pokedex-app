export const getProgressBarColor = (percentage: number) => {
  if (percentage <= 20) {
    return "#721817";
  } else if (percentage <= 40) {
    return "#FA9F42 ";
  } else if (percentage <= 60) {
    return "#2B4162  ";
  } else if (percentage <= 80) {
    return "#0B6E4F";
  } else {
    return "#00FF00";
  }
};
