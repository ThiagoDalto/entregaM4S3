import database from "../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rowCount === 0) {
      throw "Category does not exist";
    }

    return "Categoria excluída";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;
