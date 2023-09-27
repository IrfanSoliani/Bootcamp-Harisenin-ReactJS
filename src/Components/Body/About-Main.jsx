import React from "react";

const AboutPages = (props) => {
  const { children } = props;
  return { children };
};

const Head = () => {
  return (
    <div className="product-detail w-full  sm:w-full lg:w-[120rem]sm:text-justify md:w-full md:text-justify h-4/5 relative text-sm lg:ml-5 lg:pt-2 lg:p-0 lg:mt-[0rem] flex flex-col gap-5">
      <h1 className="text-center text-2xl font-bold uppercase">About Us</h1>
      <p className="text-about text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        vero sit, vitae atque quasi ad deleniti similique dolore tempore
        quibusdam commodi dolores a error iste reiciendis. Iusto quod, nemo iure
        sit deserunt ut tenetur dicta asperiores omnis, debitis veniam sint
        totam nihil quia ratione facere ab reprehenderit modi a vel mollitia
        quos. Repudiandae doloribus omnis magnam, vel unde dolore mollitia
        architecto aut! Officiis aliquam esse molestiae voluptates blanditiis!
        Sunt odit veniam aliquid modi voluptatum nostrum nobis vitae est debitis
        minima vel dicta deserunt earum, facilis tenetur eligendi accusamus,
        facere commodi. Magni earum laudantium error esse quia quasi et
        consequuntur vero!
      </p>
      <p className="text-about">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        vero sit, vitae atque quasi ad deleniti similique dolore tempore
        quibusdam commodi dolores a error iste reiciendis. Iusto quod, nemo iure
        sit deserunt ut tenetur dicta asperiores omnis, debitis veniam sint
        totam nihil quia ratione facere ab reprehenderit modi a vel mollitia
        quos. Repudiandae doloribus omnis magnam, vel unde dolore mollitia
        architecto aut! Officiis aliquam esse molestiae voluptates blanditiis!
        Sunt odit veniam aliquid modi voluptatum nostrum nobis vitae est debitis
        minima vel dicta deserunt earum, facilis tenetur eligendi accusamus,
        facere commodi. Magni earum laudantium error esse quia quasi et
        consequuntur vero!
      </p>
    </div>
  );
};

const img = () => {
  return (
    <div className="hidden lg:flex lg:pl-5 ">
      <div className="box-border w-full my-auto mx-auto ">
        <img
          className="w-4/5 mx-auto "
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

const foot = () => {
  return (
    <div className="product-detail flex  md:w-full lg:w-7/8 relative text-sm lg:ml-5 sm:ml-0 md:ml-0 pt-2 pb-10 flex-col gap-5">
      <h1 className="text-2xl font-bold uppercase text-center">Our Story</h1>
      <p className="text-about mx-auto text-justify md:w-4/5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        vero sit, vitae atque quasi ad deleniti similique dolore tempore
        quibusdam commodi dolores a error iste reiciendis. Iusto quod, nemo iure
        sit deserunt ut tenetur dicta asperiores omnis, debitis veniam sint
        totam nihil quia ratione facere ab reprehenderit modi a vel mollitia
        quos. Repudiandae doloribus omnis magnam, vel unde dolore mollitia
        architecto aut! Officiis aliquam esse molestiae voluptates blanditiis!
        Sunt odit veniam aliquid modi voluptatum nostrum nobis vitae est debitis
        minima vel dicta deserunt earum, facilis tenetur eligendi accusamus,
        facere commodi. Magni earum laudantium error esse quia quasi et
        consequuntur vero!
      </p>
    </div>
  );
};

const card = () => {
  return (
    <div className="relative flex gap-2 h-3/4 ml-5 mr-auto my-auto">
      <div className="box-border w-1/5 mx-auto ">
        <img
          className="w-full h-3/4 mx-auto "
          src="https://plus.unsplash.com/premium_photo-1661317440179-6b6d43cdc0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VwYm9hcmR8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div className="box-border w-1/5 mx-auto ">
        <img
          className="w-full h-3/4 mx-auto "
          src="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cGJvYXJkfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div className="box-border w-1/5 mx-auto ">
        <img
          className="w-full h-3/4 mx-auto "
          src="https://images.unsplash.com/photo-1588939349575-7ab15c8bd1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN1cGJvYXJkfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

AboutPages.Head = Head;
AboutPages.img = img;
AboutPages.foot = foot;
AboutPages.card = card;
export default AboutPages;
