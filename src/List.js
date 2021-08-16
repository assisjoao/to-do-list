import React from 'react'


function DoneImg(props){

        if(props.done){
                return (<i alt="done" class="fas fa-check-square"></i>)
        } else{
                return (<i alt="undone" class="far fa-check-square"></i>)
        }
}


function List(props){

    

    return(<ul>
            {props.itens.map(item=><li className={item.done ? "done" : ""} key={item.id}>
                {item.text}
                <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                <button onClick={()=>{props.onItemDeleted(item)}}><img alt="delete" src="./assets/bin.png"></img></button>
                </li>)}
        </ul>)

}

export default List;