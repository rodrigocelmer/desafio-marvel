import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImgMedia() {
  return (
    <Card sx={{ maxWidth: '50vh' }}>
      <CardMedia
        component="img"
        alt="3-D Man"
        height="140"
        image="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          3-D Man
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Presente em 12 comics - API retorna - (listar alguns exemplos?)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comics</Button>
        <Button size="small">Wiki</Button>
      </CardActions>
    </Card>
  );
}
