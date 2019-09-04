import React, {Component} from 'react'

const TodoList = (props) => {
    console.log(props)
    return(
        <>
            <div>
                {props.todos.map((item) => {
                    return <p>{item.task}</p>
                })}
            </div>
        </>
    )
}

export default TodoList;