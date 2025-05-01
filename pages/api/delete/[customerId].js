import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", message: "Error In Connecting To DB" });
    return;
  }

  const { customerId } = req.query;
  if (req.method === "DELETE") {
    try {
      const customers = await Customer.findOneAndDelete(customerId);
      res
        .status(201)
        .json({ status: "Success", message: "Data Deleted", data: customers });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ status: "failed", message: "Error In deleting Data In DB" });
      return;
    }
  }
}
