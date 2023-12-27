import { StatsTitle } from "@/app/interfaces/interfaces";
import { Typography } from "@mui/material";

const SoloStatsTitle = ({ text }: StatsTitle) => {
  return (
    <Typography sx={styles.texts} variant="h3">
      {text}
    </Typography>
  );
};

export default SoloStatsTitle;

const styles = {
  texts: {
    fontFamily: "var(--font-monteserrat)",
    fontSize: "15px",
    fontWeight: 700,
    textAlign: "center",
    lineHeight: "1.4",
  },
};
