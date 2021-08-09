export async function getProductsFromCategoryAndQuery(query) {
  return fetch(`https://serverest-api.herokuapp.com/produtos?nome=${query}`)
    .then((response) => response.json())
    .then((data) => data);
}
