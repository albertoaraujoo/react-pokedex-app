"use client";
import { SelectDataFetch } from "@/app/Hooks/useSelectDataFetch";
import { SelectData } from "@/app/interfaces/interfaces";
import { filterData } from "@/app/utils/filterDataSelect";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowSelect from "@/app/components/ArrowSelect";
import SearchList from "@/app/components/SearchList";
import { useIsPokelistStore } from "@/app/stores/useIsPokelistStore";
import { useOpenSearchList } from "../stores/useOpenSearchList";
import { usePathname } from "next/navigation";

const SearchField = () => {
  const [selectData, setSelectData] = useState<SelectData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSelectData, setFilteredSelectData] = useState<SelectData[]>(
    []
  );
  const open = useOpenSearchList((state) => state.open);
  const setOpen = useOpenSearchList((state) => state.setOpen);
  const isPokelist = useIsPokelistStore((state) => state.isPokelist);
  const url = usePathname();

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (url != "/") {
        const data = await SelectDataFetch();
        setSelectData(data);
      } else if (url == "/" && isPokelist) {
        const data = await SelectDataFetch();
        setSelectData(data);
      }
    };

    fetchData();
  }, [isPokelist, url]);

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
