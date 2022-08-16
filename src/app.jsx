import * as React from 'react';
import { Box, Grid, Modal } from '@mui/material';
import HouseholdAppliancesService from 'services/household-appliances-service';
import { HouseholdAppliancesCard, Header, HouseholdAppliancesForm } from './components';

const App = () => {
  const [householdAppliances, setHouseholdAppliances] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [householdAppliancesBeingEdited, setHouseholdAppliancesBeingEdited] = React.useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setHouseholdAppliancesBeingEdited(null);
  };

  const fetchAllHouseholdAppliances = async () => {
    const fetchedHouseholdAppliances = await HouseholdAppliancesService.fetchAll();
    setHouseholdAppliances(fetchedHouseholdAppliances);
  };

  const createHouseholdAppliance = async (householdApplianceProps) => {
    await HouseholdAppliancesService.create(householdApplianceProps);
    await fetchAllHouseholdAppliances();
    closeModal();
  };

  const editHouseholdAppliance = (id) => {
    const foundHouseholdAppliance = householdAppliances.find((c) => c.id === id);
    setHouseholdAppliancesBeingEdited(foundHouseholdAppliance);
    setModalOpen(true);
  };

  const updateHouseholdAppliance = async (householdApplianceProps) => {
    await HouseholdAppliancesService.update(
      householdAppliancesBeingEdited.id,
      householdApplianceProps,
    );
    await fetchAllHouseholdAppliances();
    closeModal();
  };

  const removeHouseholdAppliance = async (id) => {
    await HouseholdAppliancesService.remove(id);
    fetchAllHouseholdAppliances();
  };

  React.useEffect(() => {
    fetchAllHouseholdAppliances();
  }, []);

  return (
    <Box sx={{
      gap: { xs: 4, xxl: 0 },
      pt: 2,
      pb: 2,
      px: {
        xs: 2, sm: 4, md: 6, lg: 8, xl: 30,
      },
    }}
    >
      <Header openModal={() => setModalOpen(true)} />
      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        >
          <HouseholdAppliancesForm
            onSubmit={householdAppliancesBeingEdited
              ? updateHouseholdAppliance
              : createHouseholdAppliance}
            formTitle={householdAppliancesBeingEdited ? 'Prekės redagavimas' : 'Naujos prekės pridėjimas'}
            submitText={householdAppliancesBeingEdited ? 'Atnaujinti' : 'Pridėti'}
            color={householdAppliancesBeingEdited ? 'error' : 'primary'}
            initValues={householdAppliancesBeingEdited}
          />
        </Box>
      </Modal>

      <Grid container spacing={2}>
        {householdAppliances.map(({
          id,
          manufacturer,
          model,
          category,
          price,
          img,
        }) => (
          <Grid key={id} item xs={12} sm={6} lg={3}>
            <HouseholdAppliancesCard
              manufacturer={manufacturer}
              model={model}
              img={img}
              category={category}
              price={price}
              onDelete={() => removeHouseholdAppliance(id)}
              onEdit={() => editHouseholdAppliance(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
