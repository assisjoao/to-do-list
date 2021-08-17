import React from 'react'
import Card from './Card'


function DoneImg(props){

        if(props.done){
                return (<img alt="done" src="./assets/done.jpg" width="30px"></img>)
        } else{
                return (<img alt="done" src="./assets/undone.png" width="30px"></img>)
        }
}


function List(props){

    

    return(<ul>
            {props.itens.map(item=><li key={item.id}>
                        <Card className={item.done ? "done item" : "item"}>
                                {item.text}
                                <div>
                                        <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                                        <button onClick={()=>{props.onItemDeleted(item)}}><img alt="delete" src="./assets/bin.png" width="30px"></img></button>
                                </div>
                        </Card>
                </li>)}
        </ul>)

}

export default List;