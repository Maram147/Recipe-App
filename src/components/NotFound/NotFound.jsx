import React from 'react';
import notfound from '../../assets/images/NotFound.svg';

export default function NotFound() {
  return (
    <>
      <div className="text-center my-10">
        <img
          src={notfound}
          alt="notfound"
          className="mx-auto rounded-xl w-80 sm:w-96 md:w-[450px] max-w-full"
        />
        <h3 className="font-bold text-center my-3 text-xl sm:text-2xl text-black">You may check a page not found</h3>
        <p className="font-semibold text-muted-foreground text-lg mb-3 text-center text-black">
          Please check your page
        </p>
      </div>
    </>
  );
}