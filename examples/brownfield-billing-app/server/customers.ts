import { db } from "./db";

export async function listCustomers() {
  return db.customer.findMany({
    orderBy: { name: "asc" },
  });
}

