import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD_TODO: "ADD_TODO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const reducerTodos = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return { todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};

const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [name, setName] = useState("");
  const [todos, dispatchTodo] = useReducer(reducerTodos, { todos: [] });

  const onSubmit = e => {
    e.preventDefault();
    dispatchTodo({ type: ACTIONS.ADD_TODO, payload: name });
    setName("");
  };

  console.log(todos);

  return (
    <>
      <h3>useReducer</h3>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>

      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Add Todo</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={e => setName(e.target.value)}
        />
      </form>
    </>
  );
};

export default CountReducer;
