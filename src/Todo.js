import React, { useEffect, useState } from 'react'
import List from './components/List'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import './Todo.css'
import Modal from './components/Modal'

const SAVED_ITEMS = "savedItems"




function Todo(){

    const [showModal, setShowModal] = useState(false);

    const [items, setItens] = useState([]);

    useEffect(()=>{

        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItens(savedItems);
        }

    }, [])

    useEffect(()=>{

        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));

    }, [items])

    function onAddItem(text){

        let item = new Item(text);
        setItens([...items, item])
        onHideModal();
    }

    function onItemDeleted(item){

        let filteredItems = items.filter(it=>it.id !== item.id)

        setItens(filteredItems);

    }

    function onDone(item){

        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItens(updatedItems);

    }

    function onHideModal(e){
       setShowModal(false);
    }

    return (<div className='container'>
                <header className='header'><h1>To do</h1><button onClick={()=>{setShowModal(true)}} className='addButton'></button>+</header>
                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
            </div>);

}







export default Todo