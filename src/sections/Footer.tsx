import GitHubIcon from "@/components/GitHubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box color="primary" sx={styles.footer}>
      <Box sx={styles.texts}>
        <Typography sx={styles.texts} variant="caption">
          Developed by
          <Typography sx={styles.span} component="span">
            {" "}
            <Link
              target="blank"
              href="https://www.linkedin.com/in/albertoaraujoo/"
            >
              {" "}
              Alberto Araújo
            </Link>
          </Typography>{" "}
        </Typography>{" "}
        <br />
        <Typography variant="caption">
          <Typography sx={styles.span} component="span">
            <Link href="mailto:alberto.araujoo@hotmail.com">
              alberto.araujoo@hotmail.com{" "}
            </Link>
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.footerBoxes}>
        <Link href="https://www.linkedin.com/in/albertoaraujoo/" target="blank">
          <LinkedinIcon />
        </Link>
      </Box>
      <Box sx={styles.footerBoxes}>
        <Link
          href="https://github.com/albertoaraujoo/react-pokedex-app"
          target="blank"
        >
          {" "}
          <GitHubIcon />{" "}
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "80px",
    backgroundColor: "#1B2021",
    color: "#677279",
    top: "auto",
    bottom: 0,
    fontSize: "12px",
  },
  footerBoxes: {
    cursor: "pointer",

    "&:hover": {
      color: "#FFFFFF",
    },
  },
  texts: {
    diaplay: "flex",
  },
  span: {
    gap: "10px",
    fontSize: "12px",
    fontWeight: 700,
    "&:hover": {
      color: "#FFFFFF",
    },
  },
};
