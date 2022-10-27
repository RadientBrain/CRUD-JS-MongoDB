const paymentService = require("../services/PaymentService");
 
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json({ data: payments, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.json({ data: payment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    res.json({ data: payment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updatePayment = async (req, res) => {
  try {
    const payment = await paymentService.updatePayment(req.params.id, req.body);
    res.json({ data: payment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deletePayment = async (req, res) => {
  try {
    const payment = await paymentService.deletePayment(req.params.id);
    res.json({ data: payment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};