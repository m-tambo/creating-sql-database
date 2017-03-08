'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fakeCompany.sqlite')

db.run(`CREATE TABLE IF NOT EXISTS employees (id INT, first_name TEXT, last_name TEXT, title TEXT, age INT, sign TEXT, salary NUMBER)`)



// _____bonus feature_____
  // add a salary column to the employees table.
  // Make sure to add a salary key value pair to each of the employee objects.
  // Then drop the existing employees table, update the schema to accept a salary column, and repopulate the table.


// _________queries__________

// Write a statement to query the database and console.log() all employee records.

// Write a statement to query the database and console.log() each employees jobTitle.

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.

// Write a statement that returns all employees of a specified jobTitle.
