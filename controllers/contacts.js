const mongodb = require('../db/connect');
//const express = require ('express');
//const app = express();
const ObjectId = require('mongodb').ObjectId;

const getOne = async (req, res) => {
  
  try {
    const userId = new ObjectId(req.params.id.trim()); 
    const result = await mongodb
      .getDb()
      .db('Project1')
      .collection('users')
      .find({ _id: userId });

    result.toArray().then((users) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(users[0]);
    });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format" });
  }
};


const getAll = async (req, res) => {
  const result = await mongodb.getDb().db('Project1').collection('users').find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  });
};


module.exports = {
    getAll,
    getOne
};