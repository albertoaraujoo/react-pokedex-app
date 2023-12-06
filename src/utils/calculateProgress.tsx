export const calculateProgress = (rightValue: number) => {
  return Math.ceil((rightValue / 255) * 100);
};
