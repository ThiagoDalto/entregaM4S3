import database from "../database";

const listProductByCategoryIdService = async () => {
  try {
    const res = await database.query(
      "SELECT 	c.name AS category, p.name, p.price FROM 	categories AS c JOIN products AS p ON p.category_id = c.id;"
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductByCategoryIdService;
