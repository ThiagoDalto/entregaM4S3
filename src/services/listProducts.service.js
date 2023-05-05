import database from "../database";

const listProductsService = async () => {
  try {
    const res = await database.query("SELECT * FROM products");
    if (res.rowCount === 0) {
      throw new Error("Product does not exist");
    }
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsService;
