const PaymentModel = require("../models/Payment");
 
exports.getAllPayments = async () => {
  return await PaymentModel.find();
};
 
exports.createPayment = async (payment) => {
  return await PaymentModel.create(payment);
};
exports.getPaymentById = async (id) => {
  return await PaymentModel.findById(id);
};
 
exports.updatePayment = async (id, payment) => {
  return await PaymentModel.findByIdAndUpdate(id, payment);
};
 
exports.deletePayment = async (id) => {
  return await PaymentModel.findByIdAndDelete(id);
};