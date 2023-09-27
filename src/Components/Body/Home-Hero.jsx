import React from "react";

const HomeHero = (props) => {
  const { children } = props;
  return { children };
};

const Main = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[98%] lg:w-5/6 gap-7 lg:-ml-16 px-2 pt-20 pb-0 flex flex-wrap-reverse lg:flex-row lg:gap-5">
        <div className="product-detail relative w-[90%] lg:w-1/3 text-sm ml-5 pt-2 lg:p-0 lg:mt-[18rem]">
          <h1 className="text-2xl uppercase font-bold">Product Details</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            atque vitae earum culpa debitis, ut fugit repellat excepturi
            suscipit obcaecati reprehenderit enim id saepe, et dolor dolore
            magnam pariatur voluptates.
          </p>
        </div>
        <div className="wrapper-home-img w-full md:w-full lg:w-3/5 box-border flex lg:flex-col ">
          <div className="flex flex-col-reverse w-full md:flex-col lg:flex-col lg:p-5 ">
            <div className="text-home flex flex-col -mt-8 bg-transparent lg:-mr-14 md:-mb-9 lg:-mb-8">
              <span className="z-50 w-full -ml-[0.92rem] sm:ml-0 lg:-ml-72 bg-transparent uppercase font-bold text-7xl sm:tracking-[1rem] md:tracking-[1.5rem] md:text-8xl lg:text-8xl lg:tracking-[2rem] ">
                Furniture
              </span>
              <span className="z-50 ml-36 sm:ml-72 md:ml-[19.2rem] lg:ml-36  bg-transparent uppercase font-bold text-7xl md:text-8xl lg:text-8xl sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[2rem] ">
                Store
              </span>
            </div>
            <div className="box-border mx-auto w-full">
              <img
                className=""
                src="https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <div className="hero min-h-screen flex justify-center items-center md:mt-5">
      <div className="w-[98%] lg:w-4/5 gap-5 px-2 flex  flex-col-reverse lg:flex-row">
        <div className="hero-content flex-col justify-between text-center lg:text-right lg:flex-row">
          <div className="flex flex-col-reverse w-2/4 lg:flex-col lg:p-5 ">
            <div className="box-border mx-auto w-full ">
              <img
                className="lg:h-3/5"
                src="https://images.unsplash.com/photo-1589911057719-81914cd42d3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMHNldHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-2/5">
            <h1 className="text-2xl font-bold uppercase ">
              Why Our Company ?{" "}
            </h1>
            <p className="py-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              libero fuga distinctio, deleniti earum cumque harum voluptatibus
              suscipit sunt. Eius exercitationem mollitia recusandae ad odio
              cumque nemo blanditiis excepturi eum!
            </p>
            <a href="/product">
              <button className="btn btn-primary bg-base-300 hover:bg-neutral-500 md: ">
                View More Product
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeHero.Main = Main;
HomeHero.Second = Second;
export default HomeHero;
