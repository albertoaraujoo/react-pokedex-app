import { Box } from "@mui/material";
import { calculateProgress } from "@/utils/calculateProgress";
import { getProgressBarColor } from "@/utils/getProgressBarColor";

const ProgressBar = ({ value }: { value: number }) => {
  const rightValue = calculateProgress(value);
  const rightColor = getProgressBarColor(rightValue);

  return (
    <Box sx={styles.progressBarBox}>
      <Box sx={styles.progressBar(rightValue, rightColor)} />
    </Box>
  );
};

export default ProgressBar;

const styles = {
  progressBarBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "10px",
    backgroundColor: "transparent",
    borderWidth: "1px 1px 1px 0",
    borderStyle: "solid",
    borderColor: "#45474A",
    borderRadius: "10px",
  },
  progressBar: (rightValue: number, rightColor: string) => ({
    width: `${rightValue}%`,
    height: "10px",
    backgroundColor: rightColor,
    borderRadius: "10px",
  }),
};
