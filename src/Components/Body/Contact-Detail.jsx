import { PiMapPinLine } from "react-icons/Pi";

const ContactAddress = () => {
  return (
    <div className="w-full lg:w-1/2 ">
      <h1 className="uppercase font-bold ml-7 text-xl mt-4">Furniture</h1>
      <div className="address flex flex-row gap-2 items-start border-[#000]">
        <div className="icon text-lg pt-[0.12rem] ">
          <PiMapPinLine />
        </div>
        <div className="flex flex-col ">
          <a
            className="m-0 text-base font-roboto p-0  "
            href="https://maps.app.goo.gl/SkE37YGcRdDv6hCR8"
          >
            Kawasan xxxx, Gedung xxxx xxxxx Tower II, lantai.xx, Jl. Jenderal
            Gatot Subroto Kav. xx, Kuningan Barat, Mampang Prapatan, Jakarta
            Selatan, Jakarta, Indonesia
          </a>
          <span>No. Telp : 0812-xxxx-xxxx</span>
          <span>Email : Furniture_xxx@gmail.com</span>
        </div>
      </div>
      <iframe
        className="border-none mt-10 w-full ml-5  rounded-lg h-1/2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65639195533!2d106.66469956399575!3d-6.2293795833745484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1695572405668!5m2!1sid!2sid"
      ></iframe>
    </div>
  );
};

export default ContactAddress;
