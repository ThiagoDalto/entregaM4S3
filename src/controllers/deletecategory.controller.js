import deleteCategoryService from "../services/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteCategory = await deleteCategoryService(id);

    return response.status(204).json(deleteCategory);
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};

export default deleteCategoryController;
