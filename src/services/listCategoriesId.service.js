import database from "../database";

const listCategoriesServiceId = async (id) => {
  try {
    const res = await database.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);
    if (res.rowCount === 0) {
      throw "Product not found";
    }
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoriesServiceId;
