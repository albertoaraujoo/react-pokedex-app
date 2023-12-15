"use client";
import Arrow from "@/components/Arrow";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { IdProp } from "@/interfaces/interfaces";

const PrevAndNextButtonsSoloPage = ({ id }: IdProp) => {
  const router = useRouter();

  const prevPage = () => {
    const url = id === "1" ? `/pokemon/${id}` : `/pokemon/${Number(id) - 1}`;
    router.push(url);
  };

  const nextPage = () => {
    const url = `/pokemon/${Number(id) + 1}`;
    router.push(url);
  };
  return (
    <Box sx={styles.buttonsBox}>
      <Box sx={styles.buttons}>
        Prev
        <Arrow
          onClick={prevPage}
          direction={false}
          width="35"
          height="35"
          color="#FFFFFF"
        />{" "}
      </Box>
      <Box sx={styles.buttons}>
        <Arrow
          onClick={nextPage}
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

export default PrevAndNextButtonsSoloPage;

const styles = {
  buttonsBox: {
    display: "flex",
    marginTop: "12px",
    marginBottom: "12px",
    gap: { xs: 0, md: "15px" },
  },

  buttons: {
    fontSize: "12px",
  },
};
