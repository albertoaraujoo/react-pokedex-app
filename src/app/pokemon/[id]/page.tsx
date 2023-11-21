import { Box } from "@mui/material";

export default function About({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <Box>
      <Box sx={styles.teste}>
        {" "}
        <h1>ID mesmo: {id}</h1>pokemon
      </Box>
      <h1>ID: {id}</h1>
    </Box>
  );
}

const styles = {
  teste: {
    marginTop: "50px",
    height: "100vh",
    backgroundColor: "red",
    color: "white",
  },
};
