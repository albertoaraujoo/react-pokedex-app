"use client";
import { ButtonHomeProps } from "@/interfaces/interfaces";
import Arrow from "./Arrow";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const ButtonHome = ({ color }: ButtonHomeProps) => {
  const router = useRouter();

  const backHome = () => {
    router.push("/");
  };

  const theColor = color === "58575F" ? "#77767F" : color;

  return (
    <Box onClick={backHome} sx={styles.buttonBox(theColor)}>
      <Arrow
        onClick={backHome}
        width="30px"
        height="30px"
        color={color}
        direction={false}
      />
      Home
    </Box>
  );
};

export default ButtonHome;

const styles = {
  buttonBox: (theColor: string) => ({
    color: theColor,
    display: "flex",
    marginTop: "10px",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "center",
    fontSize: { xs: "12px", sm: "16px" },
    fontWeight: 700,
    cursor: "pointer",
  }),
};
