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

exports.checkBody = (req, res, next) => {
  if (!('name' in req.body) || !('price' in req.body)) {
    res.status(400).json({
      status: 'fail',
      message: 'Name and Price are required',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    staus: 'success',
    //data: { tours },
  });
};
exports.getTour = (req, res) => {
  // const tour = tours[req.params.id * 1];
  res.status(200).json({
    status: 'success',
    // data: { tour: tour },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: { tour: newTour },
  });
};

exports.updateTour = (req, res) => {
  // const tour = tours[req.params.id * 1];
  res.status(200).json({
    status: 'success',
    message: 'Updated tour',
    // data: { tour: tour },
  });
};

exports.deleteTour = (req, res) => {
  // const tour = tours[req.params.id * 1];
  res.status(200).json({
    status: 'success',
    message: 'Deleted this tour',
    // data: { tour: tour },
  });
};
