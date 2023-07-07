const Business = require("../models/businessModel");

exports.createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).send(business);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find({});
    res.send(businesses);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).send("Business not found");
    res.send(business);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!business) return res.status(404).send("Business not found");
    res.send(business);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    if (!business) return res.status(404).send("Business not found");
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
