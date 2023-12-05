import httpStatus from "http-status";
export const AddTask = async (req, res) => {
  res.status(httpStatus.OK).send({ data: "hello I am BIRAJ KARKI" });
};
