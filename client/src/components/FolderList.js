import React, { useState, useEffect } from 'react';
import FolderForm from './FolderForm';
import Folder from './Folder';
import { addFolderS, deleteFolder, updateFolder, getFolders } from '../services/apiServices';
import useAuth from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import {FaRegFolder} from 'react-icons/fa'



function FolderList() {
  const [folders, setFolders] = useState([]);

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate()

  
 
  useEffect(() => {
    fol();
  },[]);

  const fol = async() => {
        const response = await getFolders(auth.accessToken)
        const data = response.data.data
        setFolders(data)
        console.log( folders )
    }

  const addFolder = async (folder) => {
    if (!folder.name || /^\s*$/.test(folder.name)) {
      return;
    }
    console.log(folder.name)
    const token = auth.accessToken
    await addFolderS({ name:folder.name } , token )
    const response = await getFolders(auth?.accessToken)
    const data = await response.data.data

    const lastFolder = data[data.length - 1]
    console.log(lastFolder)
    const newFolders = [lastFolder, ...folders];

    setFolders(newFolders);
    console.log(...folders);
  };

  const updateFol = (folderId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.name)) {
      return;
    }
    
    console.log(newValue, folderId)
    updateFolder(folderId,{ "name":newValue.name },auth.accessToken)
    const newActVal = {
      _id:folderId,
      name:newValue.name,

    }

    setFolders(prev => prev.map(item => (item._id === folderId ? newActVal : item)));
    console.log("ded",newValue)
    console.log("ACTUAL VALUE", newActVal)
    
  };

  const removeFolder = id => {
    deleteFolder(id, auth.accessToken)
    const removedArr = [...folders].filter(folder => folder._id !== id);

    setFolders(removedArr);
  };

  const logout = async () => {
    setAuth({});
    navigate('/login');
}


 

  return (
    <>
      <h1>Your Folders  <FaRegFolder/></h1>
      <FolderForm onSubmit={addFolder} />
      <Folder classname="Folder"
        folders={folders}
        removeFolder={removeFolder}
        updateFol={updateFol}
      />
      <div className="flexGrow">
                <button className="logout" onClick={logout} >Sign Out</button>
      </div>      
    </>
  );
}

export default FolderList;