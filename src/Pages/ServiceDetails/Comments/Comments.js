import React from "react";

const Comments = ({value}) => {
  // console.log(value);
  // console.log(value.email.split("@")[0])
 
// console.log(value.imageUrl)
  
  return (
    <div>
      <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 rounded">
        <li>
          <article>
            <a
              rel="noopener noreferrer"
              href="#"
              className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
            >
              <div className="flex mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                <div>
                    <img src={value.imageUrl||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 inline" />
                </div>
                <div className="mx-2">
                    <span>{value.displayName||value.email.split("@")[0]}</span><br />
                    <span className="font-light text-xs"> {value.date} |<span className="text-sky-400/100"> 
                       ::{value.rating}::
                       {
                        [...Array(Math.ceil(value.rating)).keys()].map(value=>"★")
                       }
                       {[...Array(5-Math.ceil(value.rating)).keys()].map(value=>"☆")}
                    </span></span>   
                </div>
              </div>
              <time
                dateTime=""
                className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
              >
                {value.date.split(" ").slice(1,4).join(" ")}
              </time>
              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                {value.message}
              </p>
            </a>
          </article>
        </li>
        {/* === */}

      </ul>
    </div>
  );
};

export default Comments;
