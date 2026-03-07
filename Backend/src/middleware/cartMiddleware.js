import jwt from "jsonwebtoken";


export const cartMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ message: "Not Authorized Login again", success: false });
  }

  try {
    
    const decode = jwt.verify(token, process.env.JWT_TOKEN);
    req.body.userId = decode.userId;
    next();

  } catch (error) {
    console.log(error);
    res.json({ message: "token error" });
  }
};
