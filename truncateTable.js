'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fakeCompany.sqlite')

const truncate = () => {
  db.run(`DELETE FROM employees WHERE id > 0`)
}

truncate()
