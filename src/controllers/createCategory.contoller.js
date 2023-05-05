import createCategoryService from "../services/createCategory.service";

const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoryService(name);

    return response
      .status(201)
      .json({ message: "Category created", category: category });
  } catch (err) {
    return response.status(400).json({ message: err });
  }
};
export default createCategoryController;
