import budgetService from '../services/budget-service.js';

const getAllBudgets = async (req, res) => {
  const allBudgets = await budgetService.getAllBudgets();

  res.send(allBudgets);
};

const getBudget = async (req, res) => {
  const budgetId = req.params.budgetId;
  const budget = await budgetService.getBudget(budgetId);

  res.send(budget);
};

const createNewBudget = async (req, res) => {
  const { body } = req;

  const newBudget = await budgetService.createNewBudget(body.name);

  res.send(newBudget);
};

const updateBudget = (req, res) => {
  const allBudgets = budgetService.updateBudget();
  res.send('Update an existing budget');
};

const deleteBudget = (req, res) => {
  const allBudgets = budgetService.deleteBudget();
  res.send('Delete an existing budget');
};

export default {
  getAllBudgets,
  getBudget,
  createNewBudget,
  updateBudget,
  deleteBudget,
};
