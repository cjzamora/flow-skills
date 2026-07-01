const assert = require("node:assert");

const workflows = [
  "review unpaid invoices",
  "inspect customer payment history",
  "export reconciliation reports",
];

assert.ok(workflows.includes("review unpaid invoices"));
assert.ok(workflows.includes("inspect customer payment history"));
assert.ok(workflows.includes("export reconciliation reports"));

console.log("billing workflow fixture passed");

