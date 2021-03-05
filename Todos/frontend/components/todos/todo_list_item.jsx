import React from "react";
import TodoDetailViewContainer from './todo_detail_view_container'

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        detail: false,
    }
    // this.state = {
    //     title: this.props.todo.title,
    //     body: this.props.todo.body,
    //     done: this.props.todo.done
    // }

    this.toggleDone = this.toggleDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    let newTodo = this.props.todo;
    newTodo.done = !this.props.todo.done;
    this.props.receiveTodo(newTodo);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleDetail(e) {
      e.preventDefault();
     let newDetail = !this.state.detail;
      this.setState({
          detail: newDetail,
      })
  }
  render() {
    let doneText = "";
    this.props.todo.done ? (doneText = "Undo") : (doneText = "Done");

    return (
      <li>
        <span onClick={this.handleDetail}>{this.props.todo.title}</span>
        
        <button onClick={this.toggleDone}>{doneText}</button>
            {this.state.detail === true ? <TodoDetailViewContainer todo={this.props.todo} /> : <span></span>}
       
      </li>
      
    );
  }
}
export default TodoListItem;
