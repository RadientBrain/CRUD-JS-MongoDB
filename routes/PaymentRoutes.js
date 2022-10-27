const express = require("express");
const {
    getAllPayments,
    createPayment,
    getPaymentById,
    updatePayment,
    deletePayment,
} = require("../controllers/PaymentController");
 
const router = express.Router();
 
router.route("/").get(getAllPayments).post(createPayment);
router.route("/:id").get(getPaymentById).put(updatePayment).delete(deletePayment);
 
module.exports = router;