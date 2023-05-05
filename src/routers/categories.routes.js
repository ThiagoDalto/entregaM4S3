import { Router } from "express";

import createCategoryController from "../controllers/createCategory.contoller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoriesIdController from "../controllers/lisCategoriesId.controller";
import deleteCategoryController from "../controllers/deletecategory.controller";
import updateCategoryController from "../controllers/updateCategory.controller";

import verifyCategoryAvailabilityMiddleware from "../middlewares/verifyCategoryAvailability.middleware";

const router = Router();

router.post("", verifyCategoryAvailabilityMiddleware, createCategoryController);
router.get("", listCategoriesController);
router.get("/:id", listCategoriesIdController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
