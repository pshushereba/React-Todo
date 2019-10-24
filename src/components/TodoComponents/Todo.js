import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super()
    }

    render() {
      return(
          <div
            className="itemWrapper"
            onClick={() => this.props.toggleItem(this.props.info.id)}>
              <p className={`task${this.props.info.completed ? "Done" : ""}`}>
              {this.props.info.task}
              </p>
          </div>
      )
    }
}

export default Todo;