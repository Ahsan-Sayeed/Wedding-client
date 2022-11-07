import React from "react";

const Comments = () => {
  return (
    <div>
      <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <li>
          <article>
            <a
              rel="noopener noreferrer"
              href="#"
              className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
            >
              <div className="flex mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                <div>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 inline" />
                </div>
                <div className="mx-2">
                    <span> Earum at ipsa aliquid quis, exercitationem est.</span><br />
                    <span className="font-light text-xs"> November 4, 2022 |<span className="text-sky-400/100"> ★★★☆☆</span></span>   
                </div>
              </div>
              <time
                datetime=""
                className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
              >
                Oct 13, 2020
              </time>
              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique saepe exercitationem numquam, labore necessitatibus
                deleniti quasi. Illo porro nihil necessitatibus debitis delectus
                aperiam, fuga impedit assumenda odit, velit eveniet est.
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
