import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#001f3f',
    color: 'white',
  },
}));

const PokemonDetail = ({ open, onClose, pokemon }) => {
  if (!pokemon) return null;

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Stats:</Typography>
          {pokemon.stats.map((stat) => (
            <Typography key={stat.stat.name}>
              {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
            </Typography>
          ))}
          <Button onClick={onClose} color="primary" variant="contained" style={{ marginTop: '20px' }}>
            Back
          </Button>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default PokemonDetail;
