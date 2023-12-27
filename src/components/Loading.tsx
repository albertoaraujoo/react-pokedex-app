import { Box, Container } from "@mui/material";

export default function Loading() {
  return (
    <Container>
      <Box sx={styles.container}>Loading... </Box>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    color: "white",
    backgroundColor: "transpanrent",
    fontSize: "30px",
    fontWeight: 700,
  },
};
