import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";
// import multer from "multer";
const router=Router();
// const storage = multer.diskStorage({
//     destination: "./images",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage: storage });
router.route("/addadmin").post(controller.AddAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/Forgotpswd").patch(controller.adminFrgtPwd);
router.route("/addCategory").post(controller.AddCategory);
router.route("/getcategory").get(controller.getCategory);
router.route("/delcategory/:id").delete(controller.delCategory);
router.route("/editCategory/:id").patch(controller.editCategory);
router.route("/addProduct").post(controller.AddProducts);
router.route("/getProduct/:id").get(controller.getProduct);
router.route("/editProdect/:id").patch(controller.editProdect);
router.route("/delProduct/:id").delete(controller.delProduct);
router.route("/getCatWiseProducts/:category").get(controller.getCategoryWisedProduct);
router.route("/getAllProducts").get(controller.getAllProducts);
router.route("/addCustomer").post(controller.AddCustomer);
router.route("/customerLogin").post(controller.CustomerLogin);
router.route("/CustHome").get(Auth,controller.customerHome);







// router.route("/getProduct/:id").get(controller.getProduct);
// router.route("/editProdect/:id").patch(controller.editProdect);
// router.route("/delProduct/:id").delete(controller.delProduct);
// router.route("/getAllProducts").get(controller.getAllProducts);
router.route("/addToCart").post(controller.AddToCart);
router.route("/getCartProduct/:id").get(controller.getCartProduct);
router.route("/delCartProduct/:id").delete(controller.delCartProduct);
router.route("/placeOrder/:id").post(controller.placeOrder);
router.route("/addToWhishList").post(controller.AddToWishList);
router.route("/getWishlistProduct/:id").get(controller.getWishlistProduct);
router.route("/delWishListProduct/:id").delete(controller.delwishListProduct);
// router.route("/addToMyOrder").post(controller.AddToMyOrder);
router.route("/updateCartItem/:prodId").patch(controller.editQuantity);











// router.route('/addProduct').post(upload.fields([{name:'thumbnile',maxCount:1},{name:"images"}]),controller.AddProducts);
// router.route("/image/:filename").get(controller.SetPath)
export default router;