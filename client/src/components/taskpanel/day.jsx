
import {
  addDays,
  format,
  isToday,
  isTomorrow
} from 'date-fns'

import { HiCheck } from "react-icons/hi"
import { MdAdd, MdSettingsInputAntenna } from "react-icons/md"

import styled from "styled-components"
import { IconButton, Flex, color,Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddInputBox, addtodo, updatetodos } from "../..//Redux/todoreducer/action.js";
const Card = styled.div`
display : flex;
align-items :center;
width : 100%;
margin : auto ;
height : fit-content;
padding : 10px;
`
const Hr = styled.hr`
background : #666;
width : 80%;

`
const H1 = styled.h1`
font-size : 20px;
color : grey;
margin : 20px
`
const Add = styled.button`
margin : 20px;

visibility :hidden;

${Card}:hover & {
  visibility : visible;
}
`
const Topbutton = styled.button`
background-color: #d17760;
position: absolute;
top : 0;
right: 0;
display: flex;
align-items: center, justify-content: center;
padding: 10px;
border-radius: 10px;
margin : 30px
`
const Toptaskdiv = styled.div`
position : relative ;
`
const Input = styled.input`
width : 80%;
margin-left : 30px;
`
const Taskdiv = styled.div`
margin-left : 40px;
`

export const Month = () => {
  let [ input , setinput] = useState('')

  const date = new Date();
  //console.log(date)
 const dispatch = useDispatch()
 
  const shortWeekDaysArray = Array.from(Array(7)).map((e, i) => 
   ({date : addDays(date, i),
    status : false,
    task : []
  })
  )
  console.log(shortWeekDaysArray)
 
  const handleinput = (date)=>{
let payload ={
  date : date,
  task : input
}

dispatch(addtodo(payload))
  }

  useEffect(()=>{
  dispatch(updatetodos(shortWeekDaysArray))
  },[])
  const days = useSelector((state)=> state.todosreducer.todos)


  return (
    <div style={{height : "700px"}}>
      <Toptaskdiv>
        <Card>

          <h1>

            {<HiCheck style={{ height: "30px", width: " 50px", color: "gray" }} />}

          </h1>
          <H1>My Upcoming</H1>
        </Card>
        <Topbutton>
          <MdAdd style={{ width: "fit-content", fill: "white" }} /> <h2>Add Task</h2>
        </Topbutton>
        <hr style={{ backgroundColor: "white" }} />
      </Toptaskdiv>



      {

        days.map((e) =>
        (isToday(e.date) ?
          <div key={e.date} >
            <Card  ><H1>Today</H1> <Hr />
              <Add onClick={
                ()=>{
                  dispatch(AddInputBox(e.date))
                }
              }
              >{<MdAdd style={{ width: "fit-content", fill: "grey" }} />}</Add>
              
              </Card>
              <Input placeholder="Enter your task" style={{display : e.status===true ? "inline" : 'none'}} 
              
              onChange={ (e)=>{
                  setinput(e.target.value)
                      }
                      
                }

                onKeyPress={(eve)=>{ eve.key == "Enter" && handleinput(e.date)}}
               
              ></Input>
            <Taskdiv>
              <ul>
              {e.task ? e.task.map((task)=> (
       <li style={{color: "red"}}>{task}</li>
       )) : null}
              </ul>
            </Taskdiv>
            </div>

          : isTomorrow(e.date) ?
            <div key={e.date}><Card ><H1>Tomorrow</H1>
              <Hr />
               <Add onClick={
                ()=>{
                  dispatch(AddInputBox(e.date))
                }
              }
              >{<MdAdd style={{ width: "fit-content", fill: "grey" }} />}
              </Add>
            </Card>
            <input placeholder="Enter your task" style={{display : e.status===true ? "inline" : 'none'}} ></input>
            {e.tasklist ? e.task.map((task)=> (
       <li>{task}</li>
       )) : null}
            </div>


            : <div key={e.date}>
              <Card ><H1>{format(e.date, 'EEEE')}</H1>
                <Hr />
                <Add onClick={
                ()=>{
                  dispatch(AddInputBox(e.date))
                }
              }
              >{<MdAdd style={{ width: "fit-content", fill: "grey"}} />}
                </Add>
                
              </Card>
              <input placeholder="Enter your task" style={{display : e.status===true ? "inline" : 'none'}} ></input>
            </div>))
      }

    </div>
  )
}


  