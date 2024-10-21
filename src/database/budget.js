import { pool } from '../database/db-config.js';

const conn = await pool.getConnection();

async function getAllBudgets() {
  const [rows, _fields] = await conn.query(
    'SELECT BIN_TO_UUID(ID) as ID, Name, CreatedAt FROM budgets'
  );

  return rows;
}

async function getBudget(budgetId) {
  const [rows, _fields] = await conn.query(
    `SELECT BIN_TO_UUID(ID) as ID, Name, CreatedAt
    FROM budgets
    WHERE ID = UUID_TO_BIN('${budgetId}')`
  );

  return rows;
}

async function createNewBudget(budgetName) {
  const [rows, _fields] = await conn.query(
    `CALL UspInsertBudget('${budgetName}')`
  );
  const newBudget = rows[0][0];

  return newBudget;
}

export default {
  getAllBudgets,
  getBudget,
  createNewBudget,
};
