import React from 'react';
import {
  Paper,
  Button,
  Typography,
} from '@mui/material';

const Header = ({ openModal }) => (
  <Paper sx={{
    mb: 2,
    p: 2,
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)',
  }}
  >
    <Typography variant="h6" sx={{ mb: 1 }}>Administratoriaus veiksmai</Typography>
    <Button variant="contained" onClick={openModal}>Pridėti naują prekę</Button>
  </Paper>
);

export default Header;
