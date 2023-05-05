import { Router } from "express";

import createProductController from "../controllers/createProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import listProductByCategoryIdController from "../controllers/listProductByCategoryId.controller";
import listProductByIdController from "../controllers/listProductById.controller";
import listProductsController from "../controllers/listProducts.controller";
import updateProductController from "../controllers/updateProduct.controller";

const router = Router();

router.post("", createProductController);
router.get("", listProductsController);
router.get("/:id", listProductByIdController);
router.get("/category/:category_id", listProductByCategoryIdController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
