import { ArrowProps } from "@/interfaces/interfaces";
import { Button, SvgIcon } from "@mui/material";

const Arrow = ({ width, height, direction, color, onClick }: ArrowProps) => {
  //if direction is false, the arrow will point to the left
  //if direction is true, the arrow will point to the right

  return (
    <Button sx={{ borderRadius: "20px" }}>
      <SvgIcon
        viewBox="0 0 20 20"
        width={width}
        height={height}
        style={{ width, height, color }}
        sx={direction ? styles.arrowRight : styles.arrowLeft}
        onClick={onClick}
      >
        <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347" />
        <path d="M5 16l5-5-5-5" />
      </SvgIcon>
    </Button>
  );
};

export default Arrow;

const styles = {
  arrowRight: {
    // no changes
  },

  arrowLeft: {
    transform: "rotate(180deg)",
  },
};
