import React, {Component} from 'react';

class TodoItem extends Component {
  render(){
    return (
      <div
        onClick={this.props.onClick}
        className={"TodoItem " + this.props.className}
      >
        <div>{this.props.index + 1 + ". " + this.props.item.title}</div>
      </div>
    )
  }
}

export default TodoItem;