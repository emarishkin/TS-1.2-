import { FC, ReactNode } from "react";

interface ButtonProps{
    children:ReactNode
    onClick:()=>void
}


export const Button:FC<ButtonProps> = ({onClick,children}) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}