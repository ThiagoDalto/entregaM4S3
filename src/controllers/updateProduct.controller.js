import updateProductService from "../services/updateProduct.service";

const updateProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const product = request.body;

    const updateProduct = await updateProductService(id, product);

    return response.json({
      message: "Product updated Atualizado",
      product: updateProduct,
    });
  } catch (err) {
    return response.status(400).json({
      message: err,
    });
  }
};

export default updateProductController;
