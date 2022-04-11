import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import FolderForm from './FolderForm';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FcFolder } from 'react-icons/fc';

import useFolder from '../hooks/useFolder';





const Folder = ({ folders, removeFolder, updateFol }) => {
  
  const { setcurrentFolder } = useFolder()
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    console.log(value, edit.id)
    const id = edit.id
    updateFol(id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <FolderForm edit={edit} onSubmit={submitUpdate} />;
  }

  const todolist =  () => {

    navigate('/todolist');

}

  return folders.map((folder, index) => (
    <div
      className='todo-row'
      key={index}
    > 
      <FcFolder onClick={() => { todolist(); const id=folder._id; const fol=folder.name; setcurrentFolder({id, fol});}}/>
      <div key={folder._id} onClick={() => { todolist(); const id=folder._id; const fol=folder.name; setcurrentFolder({id, fol});}}>
        {folder.name}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeFolder(folder._id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: folder._id, value: folder.name })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Folder;