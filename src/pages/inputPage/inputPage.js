import "./inputPage.scss";
import { useState } from "react";
const inputPage = () => {
   return (
      <div className="inputPage">
         <form className="inputPage__form">
            <input
               type="textbox"
               className="inputPage__textbox"
               placeholder="input array of tasks here..."
            ></input>
            <button className="inputPage__button">Submit</button>
         </form>
      </div>
   );
};

export default inputPage;
