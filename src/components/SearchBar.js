import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleSubmit = () => {
    console.log('Submitting search query:', searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
      <Typography variant="h4" color="white" gutterBottom>
        Pokémon Search
      </Typography>
      <Box display="flex" alignItems="center" width="80%" maxWidth="600px">
        <TextField
          id="search-bar"
          label="Search Pokémon"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleChange}
          size="small"
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginLeft: 1 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClear}
          sx={{ marginLeft: 1 }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
