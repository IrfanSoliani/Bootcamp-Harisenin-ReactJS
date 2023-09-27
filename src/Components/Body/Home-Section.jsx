const HomeSection = () => {
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className="w-[98%] lg:w-4/5 gap-5 mb-10 px-2 flex">
          <div className="wrapper-home-img w-full box-border flex flex-col-reverse lg:flex-col ">
            <div className="flex flex-col -mt-10 lg:-mb-40 w-full lg:flex-col lg:p-5 bg-transparent  ">
              <span className="z-50 bg-transparent uppercase font-bold text-7xl lg:text-8xl sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[3rem] xl:tracking-[5rem] text-center mr-40">
                Order
              </span>
              <span className="z-50 bg-transparent uppercase font-bold text-7xl lg:text-8xl sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[2.5rem] text-center ml-16">
                Now
              </span>
            </div>
            <div className="box-border mx-auto w-full ">
              <img
                className="w-full h-[300px] object-cover"
                src="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
