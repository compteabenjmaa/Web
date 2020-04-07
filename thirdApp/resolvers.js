const db = require('./db')
const Query = {
   greeting: () => 'Test Success, GraphQL server is up & running !!',
   student:() => db.students.list(),
   studentById:(root,args,context,info)=> {
     return  db.students.get(args.id);
   }
}

const Student = {
  college: (root) => {
	  return db.colleges.get(root.collegeId);
  }
 
}

module.exports = {Query , Student}