import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
    <Card sx={{ maxWidth: '50vh' }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image={`${props.imgSrc}.${props.imgExt}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Presente em 12 comics - API retorna - (listar alguns exemplos?)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link underline="none" href={linkComic} target="_blank" rel="noreferrer" sx={{width: '100%'}}>
            COMICS
          </Link>
        </Button>
        <Button size="small">
          <Link underline="none" href={linkWiki} target="_blank" rel="noreferrer" sx={{width: '100%'}}>
            WIKI
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
