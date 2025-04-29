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
const [editingNameId,setEditingNameId] = useState<number | null>(null)


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

const deleteName = (idToRemove:number) =>{
   setNames(names.filter(name=>name.id!==idToRemove))
}

const startEditing = (id:number) => {
    setEditingNameId(id)
    const nameToEdit = names.find(name=>name.id===id)
    if(nameToEdit) setNewName(nameToEdit.name)
}

const saveName = () =>{
    if(newName!==''){
        setNames(names.map((name)=>
            name.id===editingNameId? {...name,name:newName}:name
        ))
        setEditingNameId(null)
        setNewName('')
    }
}


    return(
        <div >
           <h3>Список Пользователей:</h3>
           <ol>
            {names.map(nameObj=>(
                <li style={{width,height,marginBottom:'30px',display:'flex',justifyContent:'space-between'}} key={nameObj.id}>
                    {editingNameId===nameObj.id?(
                        <>
                        <input
                          type="text"
                          value={newName}
                          onChange={changeName}
                          placeholder="Редактируйте имя"
                          style={{ fontSize: 18 }}
                        />
                        <Button onClick={saveName}>Сохранить</Button>
                      </>
                    ):(
                       <>
                       {nameObj.name}
                       <Button onClick={() => startEditing(nameObj.id)}>Редактировать</Button>
                       <Button onClick={()=>deleteName(nameObj.id)}>удалить</Button>
                       </>
                    )}
                    
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