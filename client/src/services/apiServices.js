import axios from "axios";
const apiUrl = "http://localhost:3001/api/auth";
const apiUrl2="http://localhost:3001/api/tasks"
const apiUrl3="http://localhost:3001/api/folders"


export function registerUser(body) {
    return axios.post(apiUrl + "/register", body);
}

export function loginUser(body) {
    return axios.post(apiUrl + "/login", body);
}

export function getTasks(token,id) {
    return axios.post(apiUrl2,{folderId:id},
        {
            headers:{
                'Authorization': `Bearer ${token}`
            },
        }
    ) 
}

export function addTask(task, token) {
    return axios.post(apiUrl2  + "/new" , task ,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function updateTask(id, task, token) {
    return axios.put(apiUrl2 + "/" + id, task, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function deleteTask(id,token) {
    return axios.delete(apiUrl2 + "/" + id,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function getFolders(token) {
        return axios.get(apiUrl3, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function addFolderS( folder ,token) {
    return axios.post(apiUrl3 , folder,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function updateFolder(id, task, token) {
    return axios.put(apiUrl3 + "/" + id, task, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function deleteFolder(id, token) {
    return axios.delete(apiUrl3 + "/" + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })}