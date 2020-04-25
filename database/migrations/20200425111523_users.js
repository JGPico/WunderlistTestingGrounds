exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
  
      users
        .string('username', 128)
        .notNullable()
        .unique();
      users.string('email', 255)
        .notNullable()
        .unique();  
      users.string('password', 128)
        .notNullable();
      
        
      })
      .createTable('todo', task => {
        task.increments();
        task.string('taskName')
          .notNullable()
        task.string('taskDescription')
          .notNullable()  
        task.date('date')  
        task.boolean('completed')
          .defaultTo(false);
      })
      .createTable('user_todo', el => {
        el.increments()
        el.int('userId')
        .notNullable()
        .references('id').inTable('users')
        el.int('listId')
        .notNullable()
        .references('id').inTable('todo');
      });    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_todo')
    .dropTableIfExists('todo')
    .dropTableIfExists('users')
  };
