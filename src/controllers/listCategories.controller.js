import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (request, response) => {
  try {
    const category = await listCategoriesService();
    return response.status(200).json(category);
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};
export default listCategoriesController;
