const express = require('express');
const Tour = require('./../models/tourModel');

/* exports.checkId = (req, res, next, val) => {
  console.log(`Tour Id is ${val}`);

  if (req.params.id * 1 >= tours.length) {
    res.status(404).json({
      status: 'fail',
      message: 'Id not found',
    });
  }
  next();
}; */

/* exports.checkBody = (req, res, next) => {
  if (!('name' in req.body) || !('price' in req.body)) {
    res.status(400).json({
      status: 'fail',
      message: 'Name and Price are required',
    });
  }
  next();
}; */

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      staus: 'success',
      data: { tours },
    });
  } catch (err) {
    res.status(404).body.json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { tour: tour },
    });
  } catch (err) {
    res.status(404).body.json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { tour: newTour },
    });
  } catch (err) {
    res.status(400).body.json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: { tour: '<Updated Tour here...>' },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      //data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
