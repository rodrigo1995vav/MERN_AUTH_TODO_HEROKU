import { useContext } from "react";
import FolderContext from "../context/FolderProvider";

const useFolder = () => {
    return useContext(FolderContext);
}

export default useFolder;