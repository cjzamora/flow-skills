import { listCustomers } from "../../server/customers";

export default async function CustomersPage() {
  const customers = await listCustomers();

  return (
    <main>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </main>
  );
}

