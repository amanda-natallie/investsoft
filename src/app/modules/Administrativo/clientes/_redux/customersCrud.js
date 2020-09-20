import api from "../../../../../services/api"

export const CUSTOMERS_URL = "/customers";

// CREATE =>  POST: add a new customer to the server
export function createCustomer(customer) {
  return api.post(CUSTOMERS_URL, { customer });
}

// READ
export function getAllCustomers() {
  return api.get(CUSTOMERS_URL);
}

export function findCustomers(queryParams) {
  return api.post(`${CUSTOMERS_URL}/filter`, { queryParams });
}

// UPDATE => PUT: update the customer on the server
export function updateCustomer(customer) {
  return api.put(`${CUSTOMERS_URL}/${customer.id}`, { customer });
}

// DELETE => delete the customer from the server
export function deleteCustomer(customerId) {
  return api.delete(`${CUSTOMERS_URL}/${customerId}`);
}
