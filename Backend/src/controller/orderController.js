import User from "../schema/authSchema.js";
import Order from "../schema/orderSchema.js";

const placeOrder = async (req, res) => {
  try {
    const { items, amount, address, status, date, payment } = req.body;
    const userId = req.body.userId; 
    const newOrder = await Order({
      userId,
      items,
      amount,
      address,
      status,
      date,
      payment
    });

    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });
    res.status(201).json({
      message: "Order Placed Successfully",
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      message: "order placed internal error",
      error: error.message,
      success: false,
    });
  }
};


const userOrder = async(req, res) => {
  try {

    const orders = await Order.find({userId : req.body.userId})
    res.status(201).json({
      message: "User Order Successfully",
      success: true,
      data:orders
    });
  } catch (error) {
    res.status(501).json({
      message: "User Order internal error ",
      error: error.message,
      success: false,
    });
  }
}


const listOrders = async(req, res) => {
  try {

    const orders = await Order.find({})
    res.status(201).json({
      message: "List Order Successfully",
      success: true,
      data:orders
    });
  } catch (error) {
    res.status(501).json({
      message: "List Order internal error ",
      error: error.message,
      success: false,
    });
  }
}


const updateStatus = async(req, res) => {
  try {

    await Order.findByIdAndUpdate(req.body.orderId, {status: req.body.status})
    res.status(201).json({
      message: "Status Updated Successfully",
      success: true,
    })
  } catch (error) {
    res.status(501).json({
      message: "Status internal error",
      error: error.message,
      success: false,
    });
  }
}

export default { placeOrder, userOrder, listOrders ,updateStatus};
