const db = require('./db')

const Query = {
   greeting: () => 'Test Success, GraphQL server is up & running !!',
   students:() => db.students.list()
}
module.exports = {Query}