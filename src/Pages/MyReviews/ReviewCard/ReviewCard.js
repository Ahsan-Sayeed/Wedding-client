import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

const ReviewCard = ({ value, setSelect, idx, setStateChange, setEdit }) => {
  const notify = (value) =>
    toast.success(value, {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.deletedCount > 0) {
            setStateChange(id);
            setSelect(0);
            notify("Delete Successful");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <li
      className={`flex flex-col py-6 sm:flex-row sm:justify-between hover:bg-gray-800 px-2 hover:rounded`}
      onClick={() => {
        return setSelect(idx);
      }}
    >
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={
            value.thum ||
            "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
          }
          alt=""
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {value.title}
              </h3>
              <p className="text-sm dark:text-gray-400">
                {value.shortDesc.slice(0, 20) + "..."}
              </p>
              <p className="text-sm dark:text-gray-600">
                <em>Message: {value.message.slice(0, 10) + "..."}</em>
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">${value.price}</p>
              <p className="text-sm dark:text-gray-600">
                Rating {value.rating}
              </p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-red-600"
              onClick={() => handleRemove(value._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1  hover:text-yellow-400"
              onClick={() => setEdit(true)}
            >
              <FiEdit />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </li>
  );
};

export default ReviewCard;
