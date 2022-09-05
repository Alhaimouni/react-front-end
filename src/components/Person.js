import React from 'react'

function Person(props) {
    


  return (
    <div>
        <h1>{props.name}</h1>
        <h4>{props.age}</h4>
        <h4>{props.gender}</h4>

        <form onSubmit={props.func}>
            <input type='text' placeHolder='edit name' name='n'/>
            <br></br>
            <input type='text' placeHolder='edit age' name='a'/>
            <br></br>
            <input type='text' placeHolder='edit gender' name='g'/>
            <br></br>
            <input type='submit' value='Press to edit'></input>
            {/* <label><input type='radio' id='male' name ='gender' placeHolder='edit age' value="Male" checked/> Male</label>
            <label><input type='radio' name ='gender' placeHolder='edit age' value="Female"/> Female</label> */}  
        </form>
    </div>
  )
}

export default Person

