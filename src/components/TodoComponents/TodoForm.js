import React, {Component} from 'react'

class TodoForm extends Component {
    constructor(props) {
        super();
        this.state = {
            taskItem: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.taskItem);
        this.setState({
            taskItem: ''
        });
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="taskItem" 
                        placeholder="Add ToDo Item"
                        value={this.state.taskItem}
                        onChange={(e) => this.handleChange(e)} />
                    <button>Add ToDo</button>
                    <button>Clear Completed</button>
                </form>
            </>
        )
    }
}

export default TodoForm;