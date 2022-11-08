import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import Services from "../Home/Services/Services";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [card,setCard] = useState();
  const [insertedId,setInsertedId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = e.target.imageUrl.value;
    const title = e.target.title.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const shortDesc = e.target.shortDesc.value;
    const fullDesc = e.target.fullDesc.value;
    const data = { imageUrl, title, email, price, shortDesc, fullDesc };

    fetch("http://localhost:5000/services", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.acknowledged){
          form.reset();
          setInsertedId(data.insertedId);
        }
        else{
          alert('something went wrong');  
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(()=>{
    fetch("http://localhost:5000/services/20")
      .then((response) => response.json())
      .then((data) => {
       setCard(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[insertedId])

  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Service Information</p>
              <p className="text-xs">
                Insert Service information to add available service.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Iname" className="text-sm">
                  Thumbnail URL
                </label>
                <br />
                <input
                  type="text"
                  id="Iname"
                  placeholder="Image URL"
                  name="imageUrl"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Tname" className="text-sm">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  id="Tname"
                  placeholder="Title"
                  name="title"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <br />
                <input
                  readOnly
                  defaultValue={user.email}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Price per hour
                </label>
                <br />
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Short Description
                </label>
                <br />
                <input
                  id="address"
                  name="shortDesc"
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Full Description</label>
                <br />
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Full description..."
                  name="fullDesc"
                ></textarea>
              </div>
              <div>
                <button className="btn btn-blue" type="submit">
                  add to service
                </button>
              </div>
            </div>
          </fieldset>
          <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-900">
            <h1 className="text-4xl text-center">My services</h1>
            <Services card={card}/>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
