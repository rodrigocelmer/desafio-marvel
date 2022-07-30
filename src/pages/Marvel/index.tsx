import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardImgMedia from "../../components/Card";
import Table from "../../components/Table";
import TextInput from "../../components/TextInput";
import { AppDispatch } from "../../store";
import { fetchCharacters } from "../../store/modules/marvel/marvelSlice";

export default function Home() {
  const [searchTerm, setSerachTerm] = useState<string>("");
  const heroes = useSelector((state: any) => state.marvel.character);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSerachTerm(e.target.value);
  }

  type CharacterMarvel = {
    name: string;
    image: string;
    extension: string;
    id: number;
  };

  console.log(heroes);

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          display="flex"
          alignItems="center"
          flexDirection="column"
          xs={6}
        >
          <TextInput
            title="SEARCH"
            handleChange={handleChange}
            searchTerm={searchTerm}
          />
          <Table
            heroes={heroes.filter((hero: any) =>
              hero.name.toLowerCase().includes(searchTerm.toLowerCase())
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "80vh" }}
          >
            <CardImgMedia />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
