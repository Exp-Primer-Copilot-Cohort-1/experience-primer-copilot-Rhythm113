// Create web server
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

// GET all comments
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// GET single comment by ID
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// POST new comment
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// PUT single comment
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// DELETE single comment
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

module.exports = router;