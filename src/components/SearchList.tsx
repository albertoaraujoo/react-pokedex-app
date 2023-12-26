"use client";
import { List, ListItem } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/textFormater";
import { SearchListProps, SelectData } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";

const SearchList = ({
  open,
  filteredData,
  selectData,
  inputValue,
}: SearchListProps) => {
  const router = useRouter();

  return (
    <>
      {open ? (
        <List sx={styles.list}>
          {inputValue !== "" && filteredData.length > 0 ? (
            filteredData.map((pokemon: SelectData) => (
              <ListItem
                key={pokemon.order}
                sx={styles.listItem}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/pokemon/${pokemon.order.toString()}`);
                }}
              >
                {capitalizeFirstLetter(pokemon.name)}
              </ListItem>
            ))
          ) : selectData.length < 1 ? (
            <ListItem sx={styles.listItem}>Loading...</ListItem>
          ) : (
            selectData.map((pokemon: SelectData) => (
              <ListItem
                key={pokemon.order}
                sx={styles.listItem}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/pokemon/${pokemon.order.toString()}`);
                }}
              >
                {capitalizeFirstLetter(pokemon.name)}
              </ListItem>
            ))
          )}
        </List>
      ) : null}
    </>
  );
};

export default SearchList;

const styles = {
  list: {
    marginTop: "245px",
    height: "200px",
    maxHeight: "200px",
    overflow: "auto",
    width: "160px",
    backgroundColor: "#2F3437",
    border: "solid black 1px",
    scrollbarWidth: "thin",
    scrollbarColor: "#FFFFFF #FFFFFF",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#FFFFFF",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#45a049",
    },
  },
  listItem: {
    fontWeight: 400,
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#3F4447",
    },
  },
};
