import React, {Component} from 'react';
import './TodoApp.css';
import ModalInput from './ModalInput';
import TodoItem from './TodoItem';

export default class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoItems: [
        // {title: 'Study Japanese.', isComplete: false},
        // {title: 'Play Football.', isComplete: false},
        // {title: 'Sleep.', isComplete: true}
      ],
      hideModalInput: true
    }
    
    this.openModalInput = this.openModalInput.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }
  
  openModalInput(){
    this.setState({
      hideModalInput: !this.state.hideModalInput
    })
  }
  
  addNewItem(text){
    this.setState({
      hideModalInput: true,
      todoItems: [
        {title: text, isComplete: false},
        ...this.state.todoItems
      ]
    })
  }
  
  onClickItem(item){
    return (event) => {
      let index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...this.state.todoItems.slice(0, index),
          {...item, isComplete: !item.isComplete},
          ...this.state.todoItems.slice(index + 1)
        ]
      })
    }
  }
  
  render() {
    const {todoItems} = this.state;
    return (
      <div className="TodoApp">
        <h3>DAILIST</h3>
        {
          todoItems.length === 0 ?
            <div className="NoItem">
              <div className="notify">
                <p>Seems like</p>
                <p>You have no list</p>
              </div>
              <img className="monster" src="https://cdn.glitch.com/61fe6cfa-1a2a-4394-a517-065dec5e21a5%2Fmonster.png?v=1589331604728" />
            </div>
          : <div className="ContainerItem">
            <div className="Upcoming">
              <h4>UPCOMING</h4>
              {
                todoItems.filter(item => !item.isComplete).map((item, index) => (
                  <TodoItem
                    item={item}
                    index={index}
                    className=""
                    onClick={this.onClickItem(item)}
                  />
                ))
              }
            </div>
            <div className="Finished">
              <h4>FINISHED</h4>
              {
                todoItems.filter(item => item.isComplete).map((item, index) => (
                  <TodoItem
                    item={item}
                    index={index}
                    className="ItemDone"
                    onClick={this.onClickItem(item)}
                  />
                ))
              }
            </div>
          </div>
        }
        {
          !this.state.hideModalInput && <ModalInput addNewItem={this.addNewItem} />
        }
        
        {
          this.state.hideModalInput ? 
            <img 
              className="ButtonAdd" 
              height={48} 
              src="https://cdn.glitch.com/61fe6cfa-1a2a-4394-a517-065dec5e21a5%2Fplus.svg?v=1589333458820" 
              onClick={this.openModalInput}
            />
          : <img 
              className="ButtonAdd" 
              height={48} 
              src="https://cdn.glitch.com/61fe6cfa-1a2a-4394-a517-065dec5e21a5%2Fexit.svg?v=1589343844040" 
              onClick={this.openModalInput}
            />
        }
        
        
      </div>
    )
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming