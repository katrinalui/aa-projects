const APIUtil = {

  getTodos: () => {
    return $.ajax({
      url: 'api/todos',
      dataType: 'json',
      method: 'GET'
    });
  },

  createTodo: (todo) => {
    return $.ajax({
      url: 'api/todos',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(todo)
    });
  },

  updateTodo: ({todo}) => {
    console.log("todo in ajax", todo);
    const url = `api/todos/${todo.id}`;
    return $.ajax({
      url: url,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({todo})
    });
  }
};

export default APIUtil;
