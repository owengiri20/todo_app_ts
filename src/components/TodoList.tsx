import React, { Component } from 'react';

class TodoList extends Component<{}, {
    todos: any
    todoString: any
}> {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            todos: ["a", "nigga"],
            todoString: ""
        }
        this.addTodo = this.addTodo.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt: any) {
        evt.preventDefault()
        this.addTodo(this.state.todoString)
        this.setState((st) => ({ todoString: "" }))

    }
    addTodo(todo: string) {
        this.setState((st) => ({ todos: [...st.todos, todo] }))
    }

    handleChange(evt: any) {
        this.setState({ todoString: evt.target.value })
    }

    render() {
        return (
            <div className="TodoList">
                <ul className="TodoList-todos">
                    {this.state.todos.map((todo: any) => (
                        <li>{todo}</li>
                    ))}
                </ul>
                <form action="" className="TodoList-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        value={this.state.todoString}
                        placeholder="add todo"
                        onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default TodoList;