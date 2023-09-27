const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content gap-5">
      <nav className="bg-transparent mt-5 ">
        <a
          className="bg-transparent uppercase text-xl text-neutral-400 font-extrabold"
          href="#"
        >
          Furniture Store
        </a>
      </nav>
      <nav className="grid grid-flow-col gap-10 mt-0 uppercase font-semibold text-xs text-neutral-500 bg-transparent ">
        <a href="/about" className="link link-hover bg-transparent">
          About us
        </a>
        <a href="/contact" className="link link-hover bg-transparent">
          Contact
        </a>
        <a href="/product" className="link link-hover bg-transparent">
          Product
        </a>
      </nav>
      {/* Icon */}
      <aside className="bg-transparent">
        <p className="bg-transparent text-[0.5rem] tracking-widest text-neutral-600">
          Copyright © 2023 - All right reserved by FURNITURE. Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
