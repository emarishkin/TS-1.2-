import { ChangeEvent, FC, useState } from "react";
import { Button } from "./Button";

interface GretingProps{
    width:string
    height:string

}

export const Greting:FC<GretingProps> = ({width,height}) => {

const [names,setNames] = useState<{id:number ;name:string}[]>([
    {id:1 ,name:'Egor'},
    {id:2 ,name:'Igor'}
])
const [newName,setNewName] = useState<string>('')


const changeName = (e:ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value)
}

const AddName = () =>{
    if(newName!==''){
        setNames([...names,{id:Date.now(),name:newName}])
        setNewName('')
    }
}

const ClearList = () => {
    setNames([])
}

const deleteName = (id:number) =>{
   setNames(names.filter(name=>name.id!==id))
}

    return(
        <div >
           <h3>Список Пользователей:</h3>
           <ol>
            {names.map(nameObj=>(
                <li style={{width,height,marginBottom:'30px',display:'flex',justifyContent:'space-between'}} key={nameObj.id}>
                    {nameObj.name}
                    <Button onClick={()=>deleteName(nameObj.id)}>удалить</Button>
                </li>
            ))}
           </ol>

           <input
            type="text"
            placeholder='Введите новое имя'
            value={newName}
            onChange={changeName}
            />

           <Button onClick={AddName}>Добавить в список</Button>
           <Button onClick={ClearList}>Очистить список</Button>

        </div>
    )
}