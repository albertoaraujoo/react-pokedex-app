import { Box } from "@mui/material";
import { TypeComponentProps } from "@/interfaces/interfaces";

const TypeComponent = ({
  children,
  bgColor,
  height,
  width,
}: TypeComponentProps) => {
  return (
    <Box sx={styles.typeComponent(bgColor, width, height)}>
      <Box sx={styles.icon}>{children}</Box>
    </Box>
  );
};

export default TypeComponent;

const styles = {
  typeComponent: (bgColor: string, width: string, height: string) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${bgColor}`,
    borderRadius: "5px",
    width: { width },
    height: { height },
    padding: "3px 10px",
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "capitalize",
  }),

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
