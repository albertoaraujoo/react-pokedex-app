"use client";
import { SelectDataFetch } from "@/Hooks/useSelectDataFetch";
import { SelectData } from "@/interfaces/interfaces";
import { filterData } from "@/utils/filterDataSelect";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowSelect from "./ArrowSelect";

import SearchList from "./SearchList";

const SearchField = () => {
  const [selectData, setSelectData] = useState<SelectData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSelectData, setFilteredSelectData] = useState<SelectData[]>(
    []
  );
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await SelectDataFetch();
      setSelectData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = filterData(selectData, inputValue);
    setFilteredSelectData(filteredData);
  }, [inputValue, selectData]);

  return (
    <Box sx={styles.container}>
      <TextField
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
      >
        <ArrowSelect />
      </TextField>

      <SearchList
        open={open}
        setOpen={setOpen}
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
