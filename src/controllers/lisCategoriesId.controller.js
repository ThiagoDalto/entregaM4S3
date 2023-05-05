import listCategoriesServiceId from "../services/listCategoriesId.service";

const listCategoriesIdController = async (request, response) => {
  try {
    const { id } = request.params;
    const categoriesId = await listCategoriesServiceId(id);
    return response.status(200).json(categoriesId);
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};
export default listCategoriesIdController;
