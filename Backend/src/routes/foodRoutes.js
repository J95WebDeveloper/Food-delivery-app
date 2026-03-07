import express from 'express'
import foodController from '../controller/foodController.js'
import multer from "multer";
import path from "path";


const routes = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({storage: storage})

routes.post('/addFood', upload.single('image'), foodController.addFood)
routes.get('/getFood', foodController.allFood)
routes.get("/getFood/:id", foodController.getSingleFood);
routes.post('/removeFood', foodController.removeFood)
routes.put("/updateFood/:id", upload.single("image"), foodController.updateFood);

export default routes