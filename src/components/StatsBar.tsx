import { Container, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { BaseStat } from "@/interfaces/interfaces";
import { capitalizeFirstLetter } from "@/utils/textFormater";

const StatsBar = ({ stat, base_stat }: BaseStat) => {
  return (
    <Container sx={styles.container}>
      <Typography sx={styles.statTitle} variant="h6">
        {capitalizeFirstLetter(stat.name)}:{" "}
        <Typography sx={styles.value} variant="caption">
          {base_stat}
        </Typography>
      </Typography>
      <ProgressBar value={base_stat} />
    </Container>
  );
};

export default StatsBar;

const styles = {
  container: {
    width: "100%",
  },
  statTitle: {
    fontFamily: "var(--font-monteserrat)",
    fontSize: "12px",
    fontWeight: 700,
  },

  value: {
    fontFamily: "var(--font-monteserrat)",
    fontSize: "12px",
    fontWeight: 700,
    color: "#FCD75F",
  },
};
