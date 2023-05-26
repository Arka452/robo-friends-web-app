/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from './Card';

const CardList = ({robots})=>{
   
    return (
        <div>
        { robots.map((user,i)=> {
        return(
            // eslint-disable-next-line react/jsx-key
            <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        )
    })}
      </div>
    )
}
export default CardList;