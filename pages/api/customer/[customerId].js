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

  if (req.method === "GET") {
    const { customerId } = req.query;
    try {
      const customer = await Customer.findById(customerId);
      res
        .status(200)
        .json({ status: "Success", message: "Data gote", data: customer });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: "failed", message: "Error In Storing Data In DB" });
      return;
    }
  }
}
