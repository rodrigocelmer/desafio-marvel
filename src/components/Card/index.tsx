import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css'
import { Link } from '@mui/material';

type CardHero = {
  name: string,
  comics: number,
  imgSrc: string,
  imgExt: string,
  link1: {
    type: string,
    url: string
  },
  link2: {
    type: string,
    url: string
  },
  qtdComics: number,
  qtdSeries: number,
  qtdStories: number,
  qtdEvents: number
}

export default function CardImgMedia(props: CardHero) {
  let linkComic = '';
  let linkWiki = '';

  if(props.link1?.type === 'wiki'){
    linkWiki = props.link1?.url
    linkComic = props.link2?.url
  }
  else{
    linkWiki = props.link2?.url
    linkComic = props.link1?.url
  }

  return (
    <Card sx={{ width: '100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', opacity:'0.93', height:'95vh'}}>
      <CardMedia sx={{backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundImage:`url(${props.imgSrc}.${props.imgExt})`, height:'100%'}}
        component="img"
        // height='660'
        // alt={props.name}
        // image={`${props.imgSrc}.${props.imgExt}`}
      />
      <CardContent sx={{display:'flex',fontFamily:'myFirstFont', alignItems:'center', justifyContent:'center', flexDirection:'column', height:'30%'}}>
        <Typography sx={{fontFamily:'myFirstFont', fontSize:'26px'}} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{fontFamily:'myFirstFont', fontSize:'16px'}} variant="body2" color="text.secondary">
            <p>COMICS: {props.qtdComics}</p>
            <p>SERIES: {props.qtdSeries}</p>
            <p>STORIES: {props.qtdStories}</p>
            <p>EVENTS: {props.qtdEvents}</p>
        </Typography>
      </CardContent>
      <CardActions sx={{height:'5%'}}>
        <Button sx={{fontFamily:'myFirstFont', color:'#000'}} size="small">
          <Link underline="none" href={linkComic} target="_blank" rel="noreferrer" sx={{width: '100%'}}>
            COMICS
          </Link>
        </Button>
        <Button sx={{fontFamily:'myFirstFont', color:'#000'}} size="small">
          <Link underline="none" href={linkWiki} target="_blank" rel="noreferrer" sx={{width: '100%'}}>
            WIKI
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
