const serverAddress = 'http://localhost:8000';

const formatHouseholdAppliances = ({
  id,
  manufacturer,
  model,
  price,
  img,
  categoryId,
  category,
}) => ({
  id,
  manufacturer,
  model,
  price,
  img,
  categoryId,
  category: category.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/householdAppliances?_expand=category`);
  const householdAppliances = await response.json();

  return householdAppliances.map(formatHouseholdAppliances);
};

const create = async (householdAppliancesProps) => {
  const response = await fetch(`${serverAddress}/householdAppliances`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(householdAppliancesProps),
  });

  const householdAppliance = await response.json();

  return householdAppliance;
};

const update = async (id, householdAppliancesProps) => {
  const response = await fetch(`${serverAddress}/householdAppliances/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(householdAppliancesProps),
  });

  const householdAppliance = await response.json();

  return householdAppliance;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/householdAppliances/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCategories = async () => {
  const response = await fetch(`${serverAddress}/categories`);
  const categories = await response.json();

  return categories;
};

const HouseholdAppliancesService = {
  fetchAll,
  create,
  update,
  remove,
  fetchCategories,
};

export default HouseholdAppliancesService;
