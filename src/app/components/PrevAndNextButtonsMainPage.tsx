import Arrow from "@/app/components/Arrow";
import { PrevAndNextButtonMainPage } from "@/app/interfaces/interfaces";

import { Box } from "@mui/material";

const PrevAndNextButtonMainPage = ({
  firstFunction,
  secondFunction,
}: PrevAndNextButtonMainPage) => {
  return (
    <Box sx={styles.buttonsBox}>
      <Box sx={styles.buttons}>
        Prev
        <Arrow
          onClick={firstFunction}
          direction={false}
          width="35"
          height="35"
          color="#FFFFFF"
        />
      </Box>
      <Box sx={styles.buttons}>
        <Arrow
          onClick={secondFunction}
          direction={true}
          width="35"
          height="35"
          color="#FFFFFF"
        />{" "}
        Next
      </Box>
    </Box>
  );
};

export default PrevAndNextButtonMainPage;

const styles = {
  buttonsBox: {
    display: "flex",
    marginTop: "12px",
    marginBottom: "12px",
    gap: "15px",
  },
  buttons: {
    fontSize: "12px",
    color: "#FFFFFF",
  },
};
