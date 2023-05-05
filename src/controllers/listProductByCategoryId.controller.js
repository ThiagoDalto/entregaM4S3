import listProductByCategoryIdService from "../services/listProductByCategoryId.service";

const listProductByCategoryIdController = async (request, response) => {
  try {
    const products = await listProductByCategoryIdService();
    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};
export default listProductByCategoryIdController;
