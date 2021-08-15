import React, { useState } from 'react'
import List from './List'
import TodoForm from './TodoForm'
import './Todo.css'




function Todo(){

    const [itens, setItens] = useState([]);

    function onAddItem(item){
        setItens([...itens, item])
    }

    return (<div className='container'>
                <h1>Todo</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                

                <List itens={itens}></List>
            </div>);

}







export default Todo