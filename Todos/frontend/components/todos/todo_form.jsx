import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date().getTime(),
      title: "",
      body: "",
      done: false,
    };
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  updateBody(e) {
    this.setState({
      body: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state).then(() => {
      this.setState({
        title: "",
        body: "",
        done: false,
      });
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={this.updateTitle} />
        </label>

        <label>
          Body:
          <input type="text" value={body} onChange={this.updateBody} />
        </label>

        <input type="submit" value="Submit Todo!" />
      </form>
    );
  }
}

export default TodoForm;
