import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import HouseholdAppliancesService from 'services/household-appliances-service';

const HouseholdAppliancesForm = ({
  onSubmit,
  formTitle,
  submitText,
  color,
  initValues,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [manufacturer, setManufacturer] = React.useState(initValues?.manufacturer ?? '');
  const [category, setCategory] = React.useState(initValues?.categoryId ?? '');
  const [price, setPrice] = React.useState(initValues?.price ?? '');
  const [img, setImg] = React.useState(initValues?.img ?? '');
  const [model, setModel] = React.useState(initValues?.model ?? '');
  // const [manufacturerError, setManufacturerError] = React.useState(false);
  // const [categoryError, setCategoryError] = React.useState(false);
  // const [priceError, setPriceError] = React.useState(false);
  // const [imgError, setImgError] = React.useState(false);
  // const [modelError, setModelError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // setManufacturerError(false);
    // setCategoryError(false);
    // setPriceError(false);
    // setImgError(false);
    // setModelError(false);

    // if (manufacturer === '') {
    //   setManufacturerError(true);
    // }
    // if (category === '') {
    //   setCategoryError(true);
    // }
    // if (price === '') {
    //   setPriceError(true);
    // }
    // if (img === '') {
    //   setImgError(true);
    // }
    // if (model === '') {
    //   setModelError(true);
    // }

    onSubmit({
      manufacturer,
      categoryId: category,
      price: Number(price),
      img,
      model,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await HouseholdAppliancesService.fetchCategories();
      setCategories(fethedCategories);
    })();
  }, []);

  return (
    <Paper
      component="form"
      sx={{
        p: 3,
        backgroundImage: 'linear-gradient(to right, #D3D3D3, #2B2B2B)',
        backgroundPosition: 'right',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', pb: 2 }}>{formTitle}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Gamintojas"
          fullWidth
          variant="outlined"
          value={manufacturer}
          onChange={(event) => setManufacturer(event.target.value)}
          // error={manufacturerError}
          required
        />
        <TextField
          label="Kategorija"
          fullWidth
          select
          variant="outlined"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          // error={categoryError}
          required
        >
          {categories.map(({ id, title: categoryTitle }) => (
            <MenuItem key={id} value={id}>{categoryTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Kaina €"
          type="number"
          fullWidth
          variant="outlined"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          // error={priceError}
          required
        />
        <TextField
          label="Nuotraukos kelias"
          fullWidth
          variant="outlined"
          value={img}
          onChange={(event) => setImg(event.target.value)}
          // error={imgError}
          required
        />
        <TextField
          label="Modelis"
          fullWidth
          variant="outlined"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          // error={modelError}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color={color}
            size="large"
          >
            {submitText}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default HouseholdAppliancesForm;
