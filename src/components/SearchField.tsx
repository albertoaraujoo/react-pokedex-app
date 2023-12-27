"use client";
import { SelectDataFetch } from "@/Hooks/useSelectDataFetch";
import { SelectData } from "@/interfaces/interfaces";
import { filterData } from "@/utils/filterDataSelect";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowSelect from "./ArrowSelect";
import SearchList from "./SearchList";
import { useIsPokelistStore } from "@/stores/useIsPokelistStore";

const SearchField = () => {
  const [selectData, setSelectData] = useState<SelectData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSelectData, setFilteredSelectData] = useState<SelectData[]>(
    []
  );
  const [open, setOpen] = useState(false);
  const isPokelist = useIsPokelistStore((state) => state.isPokelist);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isPokelist) {
        const data = await SelectDataFetch();
        setSelectData(data);
      }
    };

    fetchData();
  }, [isPokelist]);

  useEffect(() => {
    const filteredData = filterData(selectData, inputValue);
    setFilteredSelectData(filteredData);
  }, [inputValue, selectData]);

  return (
    <Box sx={styles.container}>
      <TextField
        placeholder="Search "
        sx={styles.textfield}
        size="small"
        variant="outlined"
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment onClick={toggleOpen} position="end">
              <ArrowSelect />
            </InputAdornment>
          ),
        }}
      />

      <SearchList
        open={open}
        filteredData={filteredSelectData}
        selectData={selectData}
        inputValue={inputValue}
      />
    </Box>
  );
};

export default SearchField;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    color: "#FFFFFF",
  },
  textfield: {
    color: "#FFFFFF",
    position: "fixed",
    width: "140px",
    backgroundColor: "#2F3437",
    input: {
      color: "#FFFFFF",
      fontWeight: 700,
    },
  },
};