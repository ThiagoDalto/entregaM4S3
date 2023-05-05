import database from "../database";

const listProductByIdService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (res.rowCount === 0) {
      throw new Error("Product does not exist");
    }
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductByIdService;
