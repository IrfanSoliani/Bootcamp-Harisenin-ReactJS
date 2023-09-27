import React from "react";
import Data from "../Data";

const SidebarProduct = ({ menuItems, filterItems, setItems }) => {
  return (
    <>
      <div key={Data.id} className="w-full ">
        <button
          key={Data.id}
          className="btn btn-primary w-fit md:w-full text-left text-neutral-400 bg-transparent hover:bg-transparent hover:text-[#000] selection:text-[#000] focus:text-[#000] "
          onClick={() => setItems(Data)}
        >
          All Product
        </button>

        {menuItems.map((DataProduct) => (
          <button
            key={DataProduct.id}
            className="btn btn-primary w-fit md:w-full text-neutral-400 bg-transparent hover:bg-transparent hover:text-[#000] selection:text-[#000] focus:text-[#000] "
            onClick={() => filterItems(DataProduct)}
          >
            {DataProduct}
          </button>
        ))}
      </div>
    </>
  );
};

export default SidebarProduct;
