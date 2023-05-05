import listProductByIdService from "../services/listProductById.service";

const listProductByIdController = async (request, response) => {
  try {
    const { id } = request.params;
    const productId = await listProductByIdService(id);
    return response.status(200).json(productId);
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};

export default listProductByIdController;
