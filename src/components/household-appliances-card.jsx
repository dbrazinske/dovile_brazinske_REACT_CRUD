import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Image from './image';
import TypographyLimited from './typography-limited';

const HouseholdAppliancesCard = ({
  manufacturer,
  img,
  model,
  category,
  price,
  onDelete,
  onEdit,
}) => (
  <Card sx={{
    display: 'flex', flexDirection: 'column', height: '100%', position: 'relative',
  }}
  >
    <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
      <Image
        src={img}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          p: 5,
        }}
      />
    </Box>

    <Box sx={{
      position: 'absolute',
      bottom: 15,
      right: 15,
      display: 'flex',
      gap: 1,
    }}
    >
      <IconButton
        sx={{
          border: 1,
          borderColor: 'primary.main',
          color: 'primary.main',
        }}
        size="small"
        onClick={onEdit}
      >
        <EditIcon />
      </IconButton>

      <IconButton
        sx={{
          border: 1,
          borderColor: 'error.main',
          color: 'error.main',
        }}
        size="small"
        onClick={onDelete}
      >
        <DeleteForeverIcon />
      </IconButton>
    </Box>

    <CardContent sx={{
      p: 2,
      flexGrow: 1,
      backgroundImage: 'linear-gradient(to bottom right, #D3D3D3, #2B2B2B)',
    }}
    >

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Typography variant="h5" component="div">{manufacturer}</Typography>
        <Typography variant="h6" component="div" color="primary.main">{`${price} €`}</Typography>
      </Box>
      <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{category}</Typography>
      <TypographyLimited variant="body2" color="text.secondary">
        Prekės modelis:
        <br />
        {model}
      </TypographyLimited>
    </CardContent>
  </Card>
);

export default HouseholdAppliancesCard;
