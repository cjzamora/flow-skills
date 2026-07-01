export const db = {
  customer: {
    findMany: async () => [
      { id: "cus_001", name: "Acme Manufacturing" },
      { id: "cus_002", name: "Northwind Finance" },
    ],
  },
  invoice: {
    findMany: async () => [
      { id: "inv_001", customerName: "Acme Manufacturing", amountDue: "$1,200.00" },
    ],
  },
};

