import React, { useState } from "react";

const Pagination = ({cardLength,setSkip}) => {
    // const lgt = [...Array(Math.ceil((cardLength/9)||0)).keys()].length;
    // console.log(count);
    return (
    <div>
      <div className="flex justify-center space-x-1 dark:text-gray-100">
        {
            [...Array(Math.ceil((cardLength/9)||0)).keys()].map(value=><button
                type="button"
                title="Page 1"
                className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
                key={value}
                onClick={()=>{
                    return setSkip(value*9)}}
              >
                {value+1}
              </button>)
        }
      </div>
    </div>
  );
};

export default Pagination;
