import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <Card 
      onClick={() => onClick(pokemon)} 
      sx={{ margin: '10px', cursor: 'pointer', backgroundColor: '#1a1a1a', color: 'white' }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          sx={{ objectFit: 'contain', backgroundColor: 'white' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
