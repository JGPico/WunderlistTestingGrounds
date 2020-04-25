const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  editList,
};

function find() {
    return db('user-todo')
    .select( 'todo.taskName', 'todo.taskDescription')
    .join('users', 'user_todo.userId', '=', 'users.id')
    .join('todo', 'user_todo.listId', '=', 'todo.id');
}

function findBy(filter) {
  return db('user_todo').where(filter);
}

async function add(user) {
  const [id] = await db('user_todo').insert(user);

  return findById(id);
}

function findById(id) {
  return db('user_todo')
    .where({ id })
    .first();
}

function editList () {
}



// function getTasks(id) {
//   return db('tasks')
//     .select(
//       'tasks.id',
//       'tasks.description as task_description',
//       'tasks.notes as task_notes',
//       'tasks.completed',
//       'projects.project_name',
//       'projects.description as project_description'
//     )
//     .join('projects', 'tasks.project_id', '=', 'projects.id')
//     .where({ project_id: id });
// }


// knex ex

// knex('users')
//   .join('contacts', 'users.id', '=', 'contacts.user_id')
//   .select('users.id', 'contacts.phone')
// Outputs:
// select "users"."id", "contacts"."phone" from "users" inner join "contacts" on "users"."id" = "contacts"."user_id"