export const capitalizeFirstLetter = (str: string): string => {
  if (typeof str !== "string") {
    console.error(
      "capitalizeFirstLetter was called with a non-string argument"
    );
    return "";
  }

  return str
    .split(/[-. ]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
