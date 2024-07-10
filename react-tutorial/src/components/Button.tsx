import React from 'react'

interface Props{
  children: string;
  color?: 'primary' | 'danger' | 'secondary';
  onclick: () => void; 
}

const Button = ({children,color ='primary', onclick} : Props) => {
  return (
    <button className={'btn btn-'+ color} onClick={onclick}>{children}</button>
  )
}

export default Button