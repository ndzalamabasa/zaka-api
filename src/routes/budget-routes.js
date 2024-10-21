import express from "express";
import budgetController from "../controllers/budget-controller.js";

const router = express.Router();

router.get("/", budgetController.getAllBudgets);

router.get("/:budgetId", budgetController.getBudget);

router.post("/", budgetController.createNewBudget);

router.patch("/:budgetId", budgetController.updateBudget);

router.delete("/:budgetId", budgetController.deleteBudget);

export default router;
