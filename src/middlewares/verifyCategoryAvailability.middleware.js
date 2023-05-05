import database from "../database";

const verifyCategoryAvailabilityMiddleware = async (
  request,
  response,
  next
) => {
  const { name } = request.body;

  const res = await database.query("SELECT * FROM categories WHERE name = $1", [
    name,
  ]);

  if (res.rowCount !== 0) {
    return response
      .status(400)
      .json({ message: "Category already registered" });
  }
  next();
};

export default verifyCategoryAvailabilityMiddleware;
