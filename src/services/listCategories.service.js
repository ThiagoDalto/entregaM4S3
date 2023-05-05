import database from "../database";

const listCategoriesService = async () => {
  try {
    const res = await database.query("SELECT * FROM categories");
    if (res.rows.length === 0) {
      throw "Category does not exist";
    }
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoriesService;
