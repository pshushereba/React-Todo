import React, {Component} from 'react'

class TodoForm extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <>
                <input type="text" placeholder="Add ToDo Item" />
                <button>Add ToDo</button>
                <button>Clear Completed</button>
            </>
        )
    }
}

export default TodoForm;