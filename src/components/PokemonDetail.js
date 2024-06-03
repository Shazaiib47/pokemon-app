import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PokemonDetail = ({ open, onClose, pokemon }) => {
  if (!pokemon) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" // Changed from "md" to "sm" for a smaller width
      fullWidth
    >
      <DialogTitle>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Stats:</Typography>
          {pokemon.stats.map((stat) => (
            <Typography key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</Typography>
          ))}
          <Button onClick={onClose} color="primary" variant="contained" style={{ marginTop: '20px' }}>
            Back
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetail;
