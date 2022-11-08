import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ServicesPage = () => {
    const [card,setCard] = useState();
    useEffect(()=>{
        fetch("http://localhost:5000/services/0")
          .then((response) => response.json())
          .then((data) => {
           setCard(data);
          })
          .catch((error) => {
            console.error(error);
          });
      },[])
    return (
        <div>
              <Services card={card}></Services>
        </div>
    );
};

export default ServicesPage;