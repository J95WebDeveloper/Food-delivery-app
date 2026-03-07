import User from "../schema/authSchema.js";

const AddToCart = async (req, res) => {
  try {
    const { userId } = req.body.userId;

    let user = await User.findOne({ userId });
    let cartData = await user.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });

    res.status(201).json({
      message: "Added To Cart Successfully",
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      message: "add item internal error",
      error: error.message,
    });
  }
};

const RemoveFormCart = async (req, res) => {
  try {
    const { userId } = req.body.userId;

    let user = await User.findOne({ userId });
    let cartData = await user.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(201).json({
      message: "Remove To Cart Successfully",
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      message: "remove item internal error",
      error: error.message,
    });
  }
};

const getCart = async (req, res) => {
  try {

    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData

    res.status(201).json({
        success: true,
        cartData
      });

  } catch (error) {
    res.status(501).json({
      message: "get item internal error",
      error: error.message,
    });
  }
};

export default { AddToCart, RemoveFormCart, getCart };
