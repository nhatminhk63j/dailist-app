import React, {Component} from 'react';

class ModalInput extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  
  onChange(event){
    this.setState({
      text: event.target.value
    })
  }
  
  onClick(){
    this.props.addNewItem(this.state.text);
  }
  
  render(){
    return (
      <div className="ModalInput">
        <input
          type="text"
          placeholder="What needs you to be done?"
          value={this.state.text}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Add</button>
      </div>
    )
  }
}

export default ModalInput;