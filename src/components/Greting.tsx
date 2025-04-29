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

    return(
        <div >
           <h3>Список Пользователей:</h3>
           <ol>
            {names.map(name=>(
                <li style={{width,height,marginBottom:'10px'}} key={name.id}>
                    {name.name}
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