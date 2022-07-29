import { Box, Grid } from "@mui/material";
import { color } from "@mui/system";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardImgMedia from "../../components/Card";
import Table from "../../components/Table";
import TextInput from "../../components/TextInput";
import DATA from '../../MockData/MOCK_DATA.json'
import { marvelActionCreators, State } from "../../store";
import video from '../../assets/marvel.mp4';
import './styles.css';

type marvelReduxType = {
    attributionHTML: string;
    attributionText: string;
    code: number;
    copyright: string;
    data: {
        offset: number
        limit: number
        total: number
        count: number
        results: {
            name:string
            thumbnail: {
                path: string,
                extension: string
            }
        }[]
    };
    etag:  string;
    status: string;
}

export default function Home(){
    const [page, setPage] = useState<number>(2)
    const [searchTerm, setSerachTerm] = useState<string>('');
    const marvelRedux: marvelReduxType = useSelector(( { marvel }:State )=>marvel)
    const dispatch = useDispatch()
    const {getCharacters} = bindActionCreators(marvelActionCreators, dispatch)

    useEffect(() => {
        getCharacters(page);    //\todo it's only fetching 100 characteres
    }, [])
    
    console.log(marvelRedux)

    function handleChange(e:React.ChangeEvent<HTMLInputElement>): void{
        setSerachTerm(e.target.value)
    }

    return(
        <Grid container spacing={2} sx={{height:'100vh', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row', gap:'50px'}}>   
            <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            </video>
            <Grid item xs={4} display='flex' alignItems='center' flexDirection='column' height={'50vh'}>           
                <TextInput title="Search" handleChange={handleChange} searchTerm={searchTerm}/>
                <Grid item  sx={{width:'50%'}}>
                    <Table heroes={marvelRedux?.data?.results?.filter((hero: any)=>hero?.name?.toLowerCase().includes(searchTerm.toLowerCase()))}/>
                </Grid>
            </Grid> 
            
            <Grid item xs={6}>
                <Box display='flex' alignItems='center' justifyContent='center' sx={{height: '80vh', width:'100%'}}>
                    <CardImgMedia/>
                </Box>
            </Grid>
        </Grid>
    )
}