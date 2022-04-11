import { createContext, useState } from "react";

const FolderContext = createContext({})

export const FolderProvider = ({ children }) => {
    const [currentFolder, setcurrentFolder] = useState({});

    return (
        <FolderContext.Provider value={{ currentFolder, setcurrentFolder }}>
            {children}
        </FolderContext.Provider>
    )
}

export default FolderContext
