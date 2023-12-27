"use client";
import IconPokeball from "@/components/IconPokeball";
import { useOffsetStore } from "@/stores/useOffsetStore";
import { AppBar, Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import SearchField from "@/components/SearchField";

const Navbar = () => {
  const offset = useOffsetStore((state) => state.offset);
  const setOffset = useOffsetStore((state) => state.setOffset);
  const url = usePathname();
  const router = useRouter();

  const handleOffsetInNavbar = () => {
    url === "/" ? setOffset(0) : setOffset(offset);
    router.push("/");
  };

  return (
    <Box>
      <AppBar sx={styles.navbar}>
        <Box onClick={handleOffsetInNavbar} sx={styles.logoAndText}>
          <IconPokeball />
          Pokédex
        </Box>
        <Box sx={styles.logoAndText}>
          <SearchField />
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "60px",
    fontWeight: 700,
    fontSize: "20px",
    backgroundColor: "#18181B",
    color: "#FFFFFF",
    position: "fixed",
    top: 0,
    bottom: "auto",
    cursor: "pointer",
  },
  logoAndText: {
    display: "flex",
    gap: "10px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
};
