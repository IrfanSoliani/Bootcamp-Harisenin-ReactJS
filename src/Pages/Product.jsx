import React, { useState } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SidebarProduct from "../Fragment/Sidebar.product";
import "../index.css";
import CardProduct from "../Fragment/Card.product";
import { Data } from "../Data";

function Product() {
  const [item, setItems] = useState(Data);
  const menuItems = [
    ...new Set(Data.map((DataProduct) => DataProduct.category)),
  ];

  const filterItems = (cat) => {
    const newItems = Data.filter(
      (newDataProduct) => newDataProduct.category === cat
    );
    setItems(newItems);
  };
  return (
    <>
      <div className="border-none mb-16 ">
        <Navbar />
        <div className="boxcontainer flex justify-center items-center pt-20">
          <div className="w-[98%] lg:w-[95%] gap-5 lg:-ml-0 px-2 pt-7 pb-0 flex flex-col md:flex-row min-h-[120vh]">
            <div className="w:full md:w-2/5 flex md:flex-col">
              <SidebarProduct
                menuItems={menuItems}
                filterItems={filterItems}
                setItems={setItems}
              />
            </div>
            <div className=" box-border w-full flex gap-10 flex-wrap justify-end">
              <CardProduct item={item} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
