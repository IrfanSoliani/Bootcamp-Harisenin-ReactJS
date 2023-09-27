import React from "react";

// const CardProduct = () =>
function CardProduct({ item }) {
  return (
    <>
      {item.map((DataProduct) => (
        <div className="wrapper-home-img box-border">
          <div
            key={DataProduct.id}
            className="flex justify-end 
           w-full lg:p-2 "
          >
            <div className="box-border ">
              <img
                className=" w-full object-cover h-[315px]"
                src={DataProduct.img}
                alt=""
              />
              <div
                key={DataProduct.id}
                className="detail-price flex justify-between text-xs font-semibold"
              >
                <span className="name-product">{DataProduct.tittle}</span>
                <span className="price">{DataProduct.price}</span>
              </div>
              {/* <div>{DataProduct.Table}</div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardProduct;
