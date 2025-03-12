import React from 'react';
const Addyourpage: React.FC = () => {
  return (
    <div className="Addyourpage">
      <form action="">
        <b>Add Your page</b>
        <section className="Imagesection"></section>
        <section className="Authorsection">
          <label htmlFor="" className="">
            Author
          </label>
          <input type="text" placeholder="@Author" className="" />
          <div className="leagalCases">
            <label htmlFor="" className="custom-checkbox">
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>
              I agree to using this image under your name written in Author
              input. I have copy right laws to this image and agree to give copy
              right laws to owner of this webside. And gathered this information
              in database{' '}
            </p>
          </div>
          <button className="ConfirmButton">Confirm</button>
        </section>
      </form>
    </div>
  );
};

export default Addyourpage;
