'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fakeCompany.sqlite')

db.run(`CREATE TABLE IF NOT EXISTS employees (id INT, first_name TEXT, last_name TEXT, title TEXT, age INT, sign TEXT)`)
