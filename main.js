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
  // db.all(`SELECT * FROM employees`, (err, table) => {
  //   console.log(table)
  // })

// Write a statement to query the database and console.log() each employees jobTitle.
  // db.all(`SELECT title FROM employees`, (err, titles) => {
  //   console.log(titles)
  // })

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
  // db.all(`SELECT first_name, Last_name, sign FROM employees`, (err, names) => {
  //   console.log(names)
  // })

// Write a statement that returns all employees of a specified jobTitle.
  // db.all(`SELECT first_name, Last_name FROM employees WHERE title = "king"`, (err, king) => {
  //   console.log(king)
  // })
