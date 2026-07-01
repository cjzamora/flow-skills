import { listOpenInvoices } from "../../server/invoices";

export default async function InvoicesPage() {
  const invoices = await listOpenInvoices();

  return (
    <main>
      <h1>Open invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>{invoice.customerName}: {invoice.amountDue}</li>
        ))}
      </ul>
    </main>
  );
}

