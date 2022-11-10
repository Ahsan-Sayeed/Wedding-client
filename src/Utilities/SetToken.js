import React from "react";

const GetToken = (token) => {

  fetch("http://localhost:5000/jwt", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({key:token}),
  })
    .then((response) => response.json())
    .then((data) => {
      setCookie("Token",data.token,7);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let ca = document.cookie.split(';');
  //   for(let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }
  
  // function checkCookie() {
  //   let user = getCookie("username");
  //   if (user != "") {
  //     alert("Welcome again " + user);
  //   } else {
  //     user = prompt("Please enter your name:", "");
  //     if (user != "" && user != null) {
  //       setCookie("username", user, 365);
  //     }
  //   }
  // }

export default GetToken;
