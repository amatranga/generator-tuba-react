const express = require('express');
const app = require('./app');
const path = require('path');
// const db = require('../db');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('App running on port', PORT);
});
