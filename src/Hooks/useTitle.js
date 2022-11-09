import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(()=>{
    window.document.title = title;
   },[title]);
};

export default useTitle;