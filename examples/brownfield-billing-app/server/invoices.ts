import { db } from "./db";

export async function listOpenInvoices() {
  return db.invoice.findMany({
    where: { status: "OPEN" },
    orderBy: { dueDate: "asc" },
  });
}

