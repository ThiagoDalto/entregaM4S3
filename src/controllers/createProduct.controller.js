import createProductService from "../services/createProduct.service";

const createProductController = async (request, response) => {
  const { name, price, category_id } = request.body;

  try {
    const product = await createProductService(name, price, category_id);

    return response
      .status(201)
      .json({ message: "Product created", product: product });
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};
export default createProductController;
