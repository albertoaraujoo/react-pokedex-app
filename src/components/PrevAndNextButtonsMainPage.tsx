import Arrow from "@/components/Arrow";
import { PrevAndNextButtonMainPage } from "@/interfaces/interfaces";

import { Box } from "@mui/material";

const PrevAndNextButtonMainPage = ({
  function1,
  function2,
}: PrevAndNextButtonMainPage) => {
  return (
    <Box sx={styles.buttonsBox}>
      <Arrow
        onClick={function1}
        direction={false}
        width="35"
        height="35"
        color="#FFFFFF"
      />
      <Arrow
        onClick={function2}
        direction={true}
        width="35"
        height="35"
        color="#FFFFFF"
      />
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
};
