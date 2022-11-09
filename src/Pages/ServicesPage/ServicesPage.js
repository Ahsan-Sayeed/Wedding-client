import React, { useEffect, useState } from "react";
import Pagination from "../../Shared/Pagination/Pagination";
import Services from "../Home/Services/Services";

const ServicesPage = () => {
  const [card, setCard] = useState();
  const [cardLength,setCardLength] = useState();
  const [skip,setSkip] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=9&&skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data.result);
        setCardLength(data.count);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [skip]);
  return (
    <div>
      <Services card={card}></Services>
      <div className="my-5">
        <Pagination cardLength={cardLength} setSkip={setSkip}/>
      </div>
    </div>
  );
};

export default ServicesPage;
