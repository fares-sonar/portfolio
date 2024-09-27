import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Contact() {
  return (
    <section id="contact" className=" mt-12 px-9 py-9">
      <div className="flex justify-between">
        <div>
          <div>
            <h1 className="text-[2.1rem] text-title mb-4">
              <span className="icon-envelope text-subtitle mr-4 text-[1.8rem]" />
              Contact us
            </h1>
            <p className="text-subtitle mb-8 leading-[1.6rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae <br />
              impedit cupiditate facere officia quisquam fugit.
            </p>
          </div>
          <form className=" ">
            <div className=" flex sm:flex-row flex-col">
              <label className="text-subtitle" htmlFor="email">
                Email Address:
              </label>
              <input
                required
                className=" w-[70%] border border-[rgb(63,63,70)] bg-transparent outline-none py-2 px-4 sm:ml-4 ml-0 rounded-[5px] text-[1.1rem]"
                type="email"
                id="email"
              />
            </div>

            <div className=" flex sm:flex-row flex-col mt-6">
              <label className="text-subtitle " htmlFor="message">
                Your Message:
              </label>
              <textarea
                required
                className=" w-[70%] border border-[rgb(63,63,70)] bg-transparent outline-none py-2 px-4 sm:ml-4 ml-0 rounded-[5px] text-[1.1rem] min-h-[9rem] resize-y"
                name="message"
                id="message"
              ></textarea>
            </div>

            <button className="bg-[rgba(36,37,46,1)] py-3 mt-7 w-32 text-center rounded-md cursor-pointer transition-all opacity-50 hover:opacity-100">
              Submit
            </button>
          </form>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <DotLottieReact
            className="h-[350px]"
            loop
            autoplay
            src="./animation/Animation-contact.json"
          />
        </div>
      </div>
    </section>
  );
}
