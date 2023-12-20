import { WeaknessAndResistancesProps } from "@/interfaces/interfaces";
import { Container, Box, Divider } from "@mui/material";
import SoloStatsTitle from "./SoloStatsTitle";

const Shiny = ({ pokemon, color }: WeaknessAndResistancesProps) => {
  return (
    <Container sx={styles.container(color)}>
      <SoloStatsTitle text="Shiny Version:" />
      <Box sx={styles.imagesBox}>
        <Box
          component="img"
          src={pokemon.pokemonData.sprites.front_shiny}
          sx={styles.shiny}
        />
        {pokemon.pokemonData.sprites.back_shiny ? (
          <Divider sx={styles.divider} orientation="vertical" />
        ) : null}
        {pokemon.pokemonData.sprites.back_shiny ? (
          <Box
            component="img"
            src={pokemon.pokemonData.sprites.back_shiny}
            sx={styles.shiny}
          />
        ) : null}
      </Box>
    </Container>
  );
};

export default Shiny;

const styles = {
  container: (color: WeaknessAndResistancesProps) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: { xs: "100%", md: "90%" },
    height: "95px",
    backgroundColor: "#2F3437",
    borderBottomRightRadius: "10px",
    borderTop: `5px solid ${color}`,
  }),
  shiny: {
    width: "100px",
    height: "100px",
  },
  imagesBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#707070",
    width: "1px",
    height: "60px",
  },
};
