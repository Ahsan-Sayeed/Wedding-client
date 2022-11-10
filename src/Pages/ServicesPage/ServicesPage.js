import React, { useEffect, useState } from "react";
import Pagination from "../../Shared/Pagination/Pagination";
import Services from "../Home/Services/Services";
import useTitle from '../../Hooks/useTitle';

const ServicesPage = () => {
  const [card, setCard] = useState();
  const [cardLength,setCardLength] = useState();
  const [skip,setSkip] = useState(0);
  useTitle('Services');
  useEffect(() => {
    fetch(`https://wedding-nine-steel.vercel.app/services?limit=9&&skip=${skip}`)
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
