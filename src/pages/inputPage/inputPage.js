import "./inputPage.scss";
const inputPage = () => {
   return (
      <div className="inputPage">
         <form className="inputPage__form">
            <input type="textbox" className="inputPage__textbox"></input>
            <button className="inputPage__button">Submit</button>
         </form>
      </div>
   );
};

export default inputPage;
