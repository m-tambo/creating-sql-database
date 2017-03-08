'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fakeCompany.sqlite')

const clear = () => {
  db.run(`DROP TABLE employees`)
}

clear()
