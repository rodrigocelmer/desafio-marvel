import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css'

export default function CardImgMedia() {
  return (
    <Card sx={{ width: '100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', opacity:'0.93'}}>
      <CardMedia
        component="img"
        alt="3-D Man"
        height="460"
        image="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
        
      />
      <CardContent sx={{display:'flex',fontFamily:'myFirstFont', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <Typography sx={{fontFamily:'myFirstFont', fontSize:'26px'}} gutterBottom variant="h5" component="div">
          3-D Man
        </Typography>
        <Typography sx={{fontFamily:'myFirstFont', fontSize:'16px'}} variant="body2" color="text.secondary">
            Presente em 12 comics - API retorna - (listar alguns exemplos?)
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{fontFamily:'myFirstFont', color:'#000'}} size="small">Link para Comics - API retorna</Button>
        <Button sx={{fontFamily:'myFirstFont', color:'#000'}} size="small">Link para Wiki - API retorna</Button>
      </CardActions>
    </Card>
  );
}
