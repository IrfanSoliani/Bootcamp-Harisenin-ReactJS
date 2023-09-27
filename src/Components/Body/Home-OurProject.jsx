const HomeOurProject = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[98%] lg:w-full gap-5 px-2 flex flex-col">
          <div className="font-roboto text-2xl font-semibold text-center">
            OUR PRODUCT
          </div>
          <div className="card-project mx-auto flex flex-wrap justify-center lg:flex-row lg:flex-nowrap gap-5 ">
            <div className="card rounded-none w-[300px] bg-base-100 shadow-xl">
              <div className="">
                <h2 className="font-roboto text-base font-semibold text-center border-base-300 uppercase leading-3 mb-2">
                  Kitchen Set
                </h2>
              </div>
              <figure className="w-[300px] h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1557752624-e5fa8fdcdf5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbiUyMGNhYmluZXRzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="card rounded-none w-[300px] bg-base-100 shadow-xl">
              <div className="">
                <h2 className="font-roboto  font-semibold text-center border-base-300 uppercase leading-3 mb-2 text-base">
                  Cupboard
                </h2>
              </div>
              <figure className="w-[300px] h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1595515106864-077d30192c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="card rounded-none w-[300px] bg-base-100 shadow-xl">
              <div className="">
                <h2 className="font-roboto text-base font-semibold text-center border-base-300 uppercase leading-3 mb-2">
                  Table
                </h2>
              </div>
              <figure className="w-[300px] h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhYmxlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOurProject;
