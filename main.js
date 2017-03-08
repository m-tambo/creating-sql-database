'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fakeCompany.sqlite')

db.run(`CREATE TABLE IF NOT EXISTS employees (id INT, first_name TEXT, last_name TEXT, title TEXT, age INT, sign TEXT)`)




// _________queries__________

// Write a statement to query the database and console.log() all employee records.

// Write a statement to query the database and console.log() each employees jobTitle.

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.

// Write a statement that returns all employees of a specified jobTitle.
