import { Box, Grid } from "@mui/material";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardImgMedia from "../../components/Card";
import Table from "../../components/Table";
import TextInput from "../../components/TextInput";
import DATA from '../../MockData/MOCK_DATA.json'
import { marvelActionCreators, State } from "../../store";

type marvelReduxType = {
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: {
            id: number,
            name:string,
            thumbnail: {
                path: string,
                extension: string,
            },
            comics: {
                available: number,
            },
            series: {
                available: number,
            },
            stories: {
                available: number,
            },
            events: {
                available: number,
            },
            urls: {
                type: string,
                url: string,
            }[]
        }[]
    }
}

export default function Home(){
    const [searchTerm, setSerachTerm] = useState<string>('');
    const [heroNumber, setHeroNumber] = useState<number>(1);
    const marvelRedux: marvelReduxType = useSelector(( { marvel }:State )=>marvel)
    const dispatch = useDispatch()
    const {getCharacters} = bindActionCreators(marvelActionCreators, dispatch)

    useEffect(() => {
        getCharacters(0);    //\todo it's only fetching 100 characteres
    }, [])

    function handleChange(e:React.ChangeEvent<HTMLInputElement>): void{
        setSerachTerm(e.target.value)
    }

    console.log(marvelRedux.data?.results.indexOf('Abyss'))

    return(
        <>
            <Grid container spacing={2}>
                <Grid item display='flex' alignItems='center' flexDirection='column' xs={6}>
                    <TextInput title="SEARCH" handleChange={handleChange} searchTerm={searchTerm}/>
                    <Table 
                        heroes={marvelRedux.data?.results.filter((hero: any)=>hero.name.toLowerCase().includes(searchTerm.toLowerCase()))}
                        heroIndex={0}
                        totalPages={marvelRedux.data?.total} 
                        apiGetCharacter={getCharacters}
                        changeHeroCallback={setHeroNumber}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box display='flex' alignItems='center' justifyContent='center' sx={{height: '80vh'}}>
                        <CardImgMedia 
                            name={marvelRedux.data.results[heroNumber].name} 
                            comics={0} 
                            imgSrc={marvelRedux.data.results[heroNumber].thumbnail.path} 
                            imgExt={marvelRedux.data.results[heroNumber].thumbnail.extension} 
                            link1={marvelRedux.data.results[heroNumber].urls[1]} 
                            link2={marvelRedux.data.results[heroNumber].urls[2]}/>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}