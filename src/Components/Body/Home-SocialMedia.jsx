import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const HomeSocialMedia = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[98%] lg:w-4/5 gap-5 my-10 px-2 flex">
          <div className="flex flex-col-reverse lg:flex-col w-full border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <a href="/contact">
                <button className="btn btn-primary bg-base-300 hover:bg-neutral-500">
                  Send Us A Message
                </button>
              </a>
            </div>
            <div className="divider font-bold">OR</div>
            <span className="text-center font-semibold uppercase">
              Find Us On Social Media
            </span>
            <div className="grid h-20 card rounded-box place-items-center ">
              <div className="social-media text-3xl flex row gap-10 ">
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
                <a href="#">
                  <FaTwitterSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSocialMedia;
