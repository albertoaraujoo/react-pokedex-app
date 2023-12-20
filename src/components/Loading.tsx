import { Box, Container } from "@mui/material";

export default function Loading() {
  return (
    <Container>
      <Box sx={styles.container}>Loading... Hopefully not for so long :)</Box>
      <div
        className="tenor-gif-embed"
        data-postid="20178372"
        data-share-method="host"
        data-aspect-ratio="3.48"
        data-width="100%"
      >
        <a href="https://tenor.com/view/pokemon-pokeball-ball-gif-20178372">
          Pokemon Pokeball Sticker
        </a>
        from{" "}
        <a href="https://tenor.com/search/pokemon-stickers">Pokemon Stickers</a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
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
