'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fakeCompany.sqlite')

const populate = () => {
  const { list } = require('./employees.json')
  list.forEach( each => {
      db.run(`INSERT INTO employees VALUES
        (
        ${each.id}, "${each.first_name}", "${each.last_name}", "${each.title}", ${each.age}, "${each.sign}", ${each.salary}
        )`
      )
  })

}

populate()
