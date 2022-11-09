import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/Context";

const InsertReview = ({setInsertedId}) => {
  const {user} = useContext(AuthContext);
  const [check,setCheck] = useState(1);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const message = e.target.message.value;
    const imageUrl = user.photoURL;
    const displayName = user.displayName;
    const data = {email:user.email,imageUrl,displayName,message,rating:check};

        fetch('http://localhost:5000/review', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.acknowledged){
              e.target.reset();
              //insertedId
              setInsertedId(data.insertedId);
            }
          })
          .catch((error) => {
            alert("something went wrong");
          });
  }

  return (
    <div>
      <form className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100"
      onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating" className="rating-hidden" />
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" onChange={()=>setCheck(0.5)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" onChange={()=>setCheck(1)} defaultChecked/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" onChange={()=>setCheck(1.5)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" onChange={()=>setCheck(2)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" onChange={()=>setCheck(2.5)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" onChange={()=>setCheck(3)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" onChange={()=>setCheck(3.5)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" onChange={()=>setCheck(4)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" onChange={()=>setCheck(4.5)}/>
              <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" onChange={()=>setCheck(5)}/>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
            >
              Leave feedback
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InsertReview;
