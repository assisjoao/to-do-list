import React from 'react'





function List(props){

    return(<ul>
        {props.itens.map(item=><li>{item}</li>)}
    </ul>)

}

export default List;