import React from 'react';

function Custom404() {
  return (
    <div className="flex flex-col p-4 text-center justify-center items-center h-screen">
      <h1 className="text-9xl font-bold mb-2 sm:text-7xl sm:mb-1">404</h1>
      <h3 className="text-3xl font-medium sm:text-xl">Not Found</h3>
      <p className="text-xl mt-6 sm:text-sm sm:mt-4">
        The resource requested could not be found on this server!
      </p>
    </div>
  );
}

export default Custom404;
