const gallery = () => {
  return (
    <div className="mt-10">
      <p className="text-center font-bold text-3xl capitalize">Gallery</p>
      <div className=" p-8 grid grid-cols-4 gap-6 text-semibold">
        <div className="text-center">
          <img className="w-full" src="galeri1.jpg" alt="kaos 1" />
          <p></p>
        </div>
        <div className="text-center">
          <img className="w-full" src="galeri11.jpg" alt="kaos 11" />
          <p></p>
        </div>
        <div className="text-center">
          <img className="w-full" src="galeri2.jpg" alt="kaos 2" />
          <p></p>
        </div>
        <div className="text-center">
          <img className="w-full" src="galeri3.jpg" alt="kaos 3" />
          <p></p>
        </div>
        <div className="text-center">
          <img className="w-full" src="galeri4.jpg" alt="kaos 4" />
          <p></p>
        </div>
        <div className="text-center">
          <img className="w-full" src="galeri5.jpg" alt="kaos 5" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default gallery;
