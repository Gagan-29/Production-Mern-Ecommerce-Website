import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();
//routing
//Register ||method post
router.post("/register", registerController);
//login || post method
router.post("/login", loginController);
//forgot password||post method
router.post("/forgot-password", forgotPasswordController);

//test
router.get("/test", requireSignIn, isAdmin, testController);
//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//user profile update
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);
//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
