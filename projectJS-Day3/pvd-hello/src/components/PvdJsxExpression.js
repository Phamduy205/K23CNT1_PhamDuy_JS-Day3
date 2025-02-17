import React from 'react'

export default function PvdJsxExpression() {
    //bien
    const name="Phạm Văn Duy";
    //Bien doi tuong
    const user = {
        firstName: "Duy",
        lastName: "Phạm"
    }
    // ham
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName
    }
    // element
    const element =(
        <div>
            {/* bieu thuc jsx */}
            <h2> {fullName(user)} </h2> 
            <hr/>
            <h3> Welcome to, {name}</h3>
        </div>
    );

    // ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3> welcome to {name} </h3> 
        }else{
            return <h3>Welcome to NTU - K23CNT1</h3>
        }
    }
  return (
    <div>
        <h1> PVD - JSX Expression </h1>
        {/* su dung epression*/}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Phạm Văn Duy")}
    </div>
  )
}
