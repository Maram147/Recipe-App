import React from 'react';
import offline from '../../assets/images/offlinepage.svg';

export default function OfflinePage() {
  return (
    <>
     

      <div className="text-center my-10">
        <img
          src={offline}
          alt="Offline"
          className="mx-auto rounded-xl w-80 sm:w-96 md:w-[450px] max-w-full"
        />
        <h3 className="font-bold text-center my-3 text-xl sm:text-2xl text-black">You are offline!</h3>
        <p className="font-semibold text-muted-foreground text-lg mb-3 text-center text-black">
          Please check your internet connection
        </p>
      </div>
    </>
  );
}