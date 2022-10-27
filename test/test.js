const Payment = require("../models/Payment");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Payments", () => {
  beforeEach((done) => {
    Payment.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET payment", () => {
    it("it should GET all the payments", (done) => {
      chai
        .request(app)
        .get("/api/payments")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST payment", () => {
    it("it should new POST a payment", (done) => {
      let payment = {
        sender: "chetan4",
        chain_id: 123,
        initiated_at: "sdfsa",
        status: "ok",
        created_by: "hi",
        payment_type: "xyz",
        completed_at: "wed",
        transaction_hash: "omn",
        task_id: "qwert",
        currency: "inr",
        amount: "421342",
        dao: "213",
        receiver: "saf",
      };
      chai
        .request(app)
        .post("/api/payments")
        .send(payment)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id payment", () => {
    it("it should GET a payment by the id", (done) => {
      let payment = new Payment({
        sender: "chetan4",
        chain_id: 123,
        initiated_at: "sdfsa",
        status: "ok",
        created_by: "hi",
        payment_type: "xyz",
        completed_at: "wed",
        transaction_hash: "omn",
        task_id: "qwert",
        currency: "inr",
        amount: "421342",
        dao: "213",
        receiver: "saf",
      });
      payment.save((err, payment) => {
        chai
          .request(app)
          .get("/api/payments/" + payment.id)
          .send(payment)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id payment", () => {
    it("it should UPDATE a payment given the id", (done) => {
      let payment = new Payment({
        sender: "chetan4",
        chain_id: 123,
        initiated_at: "sdfsa",
        status: "ok",
        created_by: "hi",
        payment_type: "xyz",
        completed_at: "wed",
        transaction_hash: "omn",
        task_id: "qwert",
        currency: "inr",
        amount: "421342",
        dao: "213",
        receiver: "saf",
      });
      payment.save((err, payment) => {
        console.log(payment.id);
        chai
          .request(app)
          .put("/api/payments/" + payment.id)
          .send({
            sender: "chetan4",
            chain_id: 123,
            initiated_at: "sdfsa",
            status: "ok",
            created_by: "hi",
            payment_type: "xyz",
            completed_at: "wed",
            transaction_hash: "omn",
            task_id: "qwert",
            currency: "inr",
            amount: "421342",
            dao: "213",
            receiver: "saf",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id payment", () => {
    it("it should DELETE a payment given the id", (done) => {
      let payment = new Payment({
        sender: "chetan4",
        chain_id: 123,
        initiated_at: "sdfsa",
        status: "ok",
        created_by: "hi",
        payment_type: "xyz",
        completed_at: "wed",
        transaction_hash: "omn",
        task_id: "qwert",
        currency: "inr",
        amount: "421342",
        dao: "213",
        receiver: "saf",
      });
      payment.save((err, payment) => {
        chai
          .request(app)
          .delete("/api/payments/" + payment.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});
