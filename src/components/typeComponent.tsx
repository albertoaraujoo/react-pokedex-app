import { Box, Tooltip } from "@mui/material";
import { TypeComponentProps } from "@/interfaces/interfaces";

const TypeComponent = ({
  children,
  bgColor,
  height,
  width,
  title,
}: TypeComponentProps) => {
  return (
    <Tooltip title={title}>
      <Box sx={styles.typeComponent(bgColor, width, height)}>
        <Box sx={styles.icon}>{children}</Box>
      </Box>
    </Tooltip>
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
    textTransform: "capitalize",
  }),

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
