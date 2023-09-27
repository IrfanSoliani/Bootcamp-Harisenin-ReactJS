const ContactForm = () => {
  return (
    <div className="w-7/8 text-gray-700 body-font relative outline outline-1 bg-base-300 mx-auto box-border rounded-xl">
      <div className="container px-0 py-0 mx-auto bg-transparent  ">
        <div className="flex flex-col text-center w-full mb-1 pt-5 bg-transparent ">
          <h1 className="sm:text-2xl text-2xl font-medium title-font text-neutral-50 bg-transparent">
            Send Us a Message
          </h1>
        </div>
        <div className="lg:w-4/5 md:w-4/5 mx-14 bg-base-300">
          <div className="flex flex-wrap bg-transparent">
            <div className="p-2 w-full bg-transparent">
              <div className="relative flex flex-col bg-transparent ">
                <label className="leading-7 text-sm text-neutral-50 bg-transparent">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full bg-transparent">
              <div className="relative bg-transparent">
                <label className="leading-7 text-sm text-neutral-50 bg-transparent">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
            </div>
            <div className="p-2 w-full bg-transparent">
              <div className="relative bg-transparent">
                <label className="leading-7 text-sm text-neutral-50 bg-transparent">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full bg-transparent text-end">
              <button className="btn btn-primary bg-neutral-300 text-neutral-900 hover:text-[#fff] hover:bg-neutral-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
