import Button from "./Button";
import Heading from "./Heading";

const Modal = ({ onToggle }) => {
  return (
    <div className="sticky bottom-[15%] 2xl:bottom-1/4 left-0 right-0 max-w-xl mx-auto p-8 bg-white rounded-md shadow-3xl z-40">
      <Heading
        text1="Get in Touch"
        smallText="text-xl"
        largeText="xl:text-2xl"
      />
      <htmlForm action="#" method="POST">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-greenLite"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-greenLite"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="How can we help you?"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-greenLite"
          ></textarea>
        </div>
        <Button text="Submit Your Message" onClick={onToggle} />
      </htmlForm>
    </div>
  );
};

export default Modal;
