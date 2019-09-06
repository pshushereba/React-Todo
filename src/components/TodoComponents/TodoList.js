import React, {Component} from 'react'

import Todo from './Todo.js';

const TodoList = (props) => {
    console.log(props)
    return(
        <>
            <div>
                {props.todos.map((item) => {
                    return <Todo
                            key={item.id}
                            info={item}
                            toggleItem={props.toggleItem} />
                })}
            </div>
        </>
    )
}

export default TodoList;