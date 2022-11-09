import React, { useState } from "react";

const Pagination = ({cardLength,setSkip}) => {
    const lgt = [...Array(Math.ceil((cardLength/9)||0)).keys()].length;
    const [count,setCount] = useState(0);
    // console.log(count);
    return (
    <div>
      <div className="flex justify-center space-x-1 dark:text-gray-100">
        <button
          title="previous"
          type="button"
          className={`${count===0&&"hidden"} inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800`}
          onClick={()=>{
            setCount(((count/9)-1));
            return setSkip((count/9)-1)
        }}
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {
            [...Array(Math.ceil((cardLength/9)||0)).keys()].map(value=><button
                type="button"
                title="Page 1"
                className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
                key={value}
                onClick={()=>{
                    setCount(value*9)
                    return setSkip(value*9)}}
              >
                {value+1}
              </button>)
        }

        <button
          title="next"
          type="button"
          className={`${count===(lgt-1)*9&&"hidden"} inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800`}
          onClick={()=>{
            setCount((count+1)*9);
            return setSkip((count+1)*9)}}

        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
