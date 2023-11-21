import { Box } from "@mui/material";
import { TypeComponentProps } from "@/interfaces/interfaces";

const TypeComponent = ({ children, bgColor }: TypeComponentProps) => {
  return (
    <Box sx={styles.typeComponent(bgColor)}>
      <Box sx={styles.icon}>{children}</Box>
    </Box>
  );
};

export default TypeComponent;

const styles = {
  typeComponent: (bgColor: string) => ({
    backgroundColor: `${bgColor}`,
    borderRadius: "5px",
    width: "30%",
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
