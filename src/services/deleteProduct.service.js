import database from "../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rowCount === 0) {
      throw "Product doen not exist";
    }

    return "Produto excluído";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;
