const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const paymentSchema = new Schema({
  sender:           String,
	payment_id:      { type: String, default: function genUUID() {
        return uuidv4();
    }},
	chain_id:         Number,
	initiated_at     :String,
	status           :String,
	created_by       :String,
	payment_type     :String,
	completed_at     :String,
	transaction_hash :String,
	task_id          :String,
	currency         :String,
	amount           :String,
	dao              :String,
	receiver         :String,
},{ timestamps: true });
 
module.exports = mongoose.model("Payment", paymentSchema);