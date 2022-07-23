import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Table from "../../components/Table";
import TextInput from "../../components/TextInput";
import DATA from '../../MockData/MOCK_DATA.json'

export default function Home(){
    const [searchTerm, setSerachTerm] = useState<string>('')

    function handleChange(e:React.ChangeEvent<HTMLInputElement>): void{
        setSerachTerm(e.target.value)
    }

    return(
        <>
            <h1>HOME</h1>
            <Grid container spacing={2}>
                <Grid item display='flex' alignItems='center' flexDirection='column' xs={6}>
                    <TextInput title="SEARCH" handleChange={handleChange} searchTerm={searchTerm}/>
                    <Table heroes={DATA.filter((hero)=>hero.first_name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
                </Grid>
                <Grid item xs={6}>
                    <Box display='flex' alignItems='center' justifyContent='center' sx={{height: '80vh'}}>
                        <h2>Card do hero</h2>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}