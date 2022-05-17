import React, {createContext, useState} from "react";

 export const AssestContext = createContext();

export const AssestContextProvider = ({ children }) => {
   const [bgColor, setBgColor] = useState();
   const [iconColor, setIconColor] = useState();
   const [assest, setAssest] = useState([]);
   return (
      <AssestContext.Provider 
      value={{ assest, setAssest, bgColor, setBgColor, iconColor, setIconColor }}>
         {children}
      </AssestContext.Provider>
   );
};