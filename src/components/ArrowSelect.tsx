import { SvgIcon } from "@mui/material";

const ArrowSelect = () => {
  return (
    <SvgIcon
      sx={styles.container}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        fill="#FFFFFF"
        d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
      />
    </SvgIcon>
  );
};

export default ArrowSelect;

const styles = {
  container: {
    transform: "rotate(90deg)",
    width: "20px",
    cursor: "pointer",
  },
};
