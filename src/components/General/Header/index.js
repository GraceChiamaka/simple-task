import React, { useContext } from "react";
import { AppContext } from '../../../context/AppContext';
import { Button } from '../Button';
import { Svg } from '../../assets/svg';
import "./style.css";

const { PlusIcon } = Svg;


const Header = () => {
  const { openModal } = useContext(AppContext);
 
const headerText = (<><img src={PlusIcon} alt="plus icon" /> <span>Add New Task</span></>)
  return (
    <header className="header">
      <h1>
        Simple Todo App
      </h1>
      <Button onClick={ openModal } variant="secondary" showIcon icon={PlusIcon} text={headerText} />   
    </header>
  );
};

export  {Header};
