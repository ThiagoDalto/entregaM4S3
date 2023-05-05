import updateCategoryService from "../services/updateCategory.service";

const updateCategoryController = async (request, response) => {
  try {
    const { id } = request.params;
    const category = request.body;

    const updateCategory = await updateCategoryService(id, category);

    return response.json({
      message: "Category updated Atualizada",
      category: updateCategory,
    });
  } catch (err) {
    console.log(err);
    return response.status(400).json({
      message: err,
    });
  }
};

export default updateCategoryController;
