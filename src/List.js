import React from 'react'





function List(props){

    return(<ul>
        {props.itens.map(item=><li key={item.id}>{item.text}</li>)}
    </ul>)

}

export default List;