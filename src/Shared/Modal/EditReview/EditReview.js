import React from "react";
import { ToastContainer, toast } from "react-toastify";

const EditReview = ({ value, setEdit, setStateChange }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/review/${value._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ comment: e.target.comment.value }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.modifiedCount) {
          notify("Comment Updated succesfully");
          setStateChange(Math.random().toString());
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setEdit(false);
  };
  return (
    <div>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
          <form
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit your review
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => setEdit(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6 flex flex-col">
              <span className="text-lg">
                {value?.displayName} <br />{" "}
                <span className="text-xs">
                  {" "}
                  {value?.date} ||{" "}
                  <span className="text-sky-400/100">
                    ::{value.rating}::
                    {[...Array(Math.ceil(value.rating)).keys()].map(
                      (value) => "★"
                    )}
                    {[...Array(5 - Math.ceil(value.rating)).keys()].map(
                      (value) => "☆"
                    )}
                  </span>{" "}
                </span>
              </span>

              <textarea
                rows="3"
                placeholder="Message..."
                name="comment"
                defaultValue={value?.message}
                className="p-4 mt-2 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 w-full"
              ></textarea>
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => setEdit(false)}
              >
                Decline
              </button>
            </div>
          </form>
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
    </div>
  );
};

export default EditReview;
