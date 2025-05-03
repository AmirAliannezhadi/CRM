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

  if (req.method === "PATCH") {
    const { customerId } = req.query;
    console.log({customerId});
    const data = req.body.data;
    console.log(data);
    try {
      const customer = await Customer.findOne({ _id: customerId });
      console.log(customer);
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      res
        .status(201)
        .json({ status: "Success", message: "Data Edited", data: customer });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ status: "failed", message: "Error In deleting Data In DB" });
      return;
    }
  }
}
