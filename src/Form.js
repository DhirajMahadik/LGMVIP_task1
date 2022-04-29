import React, { useState } from 'react'


export default function Form() {

    let onClickHandler = (event) => {
        let textArea = document.getElementById('TextArea');
        if(textArea.value < 3){
            alert("Add Task");
        }
        else{
        event.preventDefault();
        let newtxt = text;
        let tsk = document.getElementById('tsk')
        let uiString = `
                    <div class="d-flex my-3" id="tsk-list" >
                    <div class="ActualTask">
                    <h5>${newtxt}</h5>
                    </div>
                    <input type="checkbox" id="input" class="mx-3" >
                    
                    </div>
                    
     `;

        tsk.innerHTML += uiString;

    // const newData = text;
    // setData([...data, newData])
    setText("")
        }  
    }
    

/* <button class="btn btn-danger mx-3" id="remove">Delete</button> */


    let onChangeHandler = (event) => {
        setText(event.target.value)
    }

    let RemoveAll =()=>{
        let input = document.getElementById('input');
        if(input.checked){
        document.getElementById('tsk-list').remove  ();
        }
        else{
            alert("please complete first task")
        }
    }

    const [text, setText] = useState("");
    // const [data , setData] = useState([]);

    return (
        <div className="container my-3">
            <h1>------------To Do List------------</h1>
            <hr />
            <div className="main">
                <form className="d-flex">
                    <input className="form-control me-2" onChange={onChangeHandler} value={text} type="search" id='TextArea'placeholder='Please enter task you want to do first' />
                    <button className="btn btn-outline-success" onClick={onClickHandler}>Add Task</button>
                </form>
            </div>
            <h2>TASK LIST</h2> <button className='btn btn-danger my-4'onClick={RemoveAll}>Delete Completed Task</button>
            <div className="list my-3 mx-3" id='tsk'>
                {/* <div className="d-flex my-3" id='tsk-list'>
                    <div className="ActualTask">
                        <h4>{text}</h4>
                    </div>
                    <input type="checkbox" id='input' className='mx-3' />
                    <button className="btn btn-danger mx-3" onClick={DeleteTask} id='remove' >Delete</button>
                </div> */}
            </div>

            


        </div>
    )
}
