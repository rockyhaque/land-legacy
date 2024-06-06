import { TfiLocationPin } from "react-icons/tfi";
import { MdMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="pt-16 bg-neutral-50">
        <Helmet>
        <title>Land Legacy | Contact Us</title>
      </Helmet>
      <div className="text-center space-y-3 bg-neutral-50">
        <h5 className="text-customTeal font-semibold text-xl">What we do</h5>
        <h2 className="font-semibold text-3xl">Our Main Speciality</h2>
        <div className="flex gap-1 justify-center items-center pt-4">
          <h1 className="border-2 border-neutral-400  w-3"></h1>
          <h1 className="border-2 border-neutral-900 w-8"></h1>
          <h1 className="border-2 border-neutral-400  w-3"></h1>
        </div>
      </div>
      <div className="flex gap-8 bg-neutral-50 py-12">
        <div className="w-1/3 shadow-xl bg-customWhite rounded-lg">
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <TfiLocationPin className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>40 Bulu Ocean Tower, Kemal Ataturk Ave, Dhaka 1213</p>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-200 mx-4"></div>
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <MdMarkEmailUnread className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>info@bookish.com</p>
              <p>support@bookish.com</p>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-200 mx-4"></div>
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <LuPhoneCall className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>(+880) 1742460399</p>
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl rounded-xl bg-customWhite px-10 py-5">
          <div className="space-y-5 ">
            <h1 className="text-xl font-semibold">Just Say Hello!</h1>
            <p className="text-customGray">
              BookishBliss is a perfect blend of traditional bookstore charm and
              cutting-edge technology, offering a user-friendly and enjoyable
              platform for book lovers.
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
              <input
                type="email"
                placeholder="email@gmail.com"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Say Hello..."
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered w-full h-36"
                placeholder="Subjects"
              ></textarea>
            </div>
            <button className="rounded-full px-14 btn bg-customTeal text-neutral-100">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="mb-10">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.700523887522!2d90.4028106047616!3d23.793676362079477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e61d7a8e5%3A0x2f089a60bc187f92!2sBulu%20Ocean%20Tower!5e0!3m2!1sen!2sbd!4v1714184376634!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
