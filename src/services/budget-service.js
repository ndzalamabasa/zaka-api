import budget from '../database/budget.js';

const getAllBudgets = async () => {
  const allBudgets = await budget.getAllBudgets();

  return allBudgets;
};

const getBudget = async (budgetId) => {
  const singleBudget = await budget.getBudget(budgetId);

  return singleBudget;
};

const createNewBudget = async (budgetName) => {
  const newBudget = await budget.createNewBudget(budgetName);
  
  return newBudget;
};

const updateBudget = () => {
  return;
};

const deleteBudget = () => {
  return;
};

export default {
  getAllBudgets,
  getBudget,
  createNewBudget,
  updateBudget,
  deleteBudget,
};
