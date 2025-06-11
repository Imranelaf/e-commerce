import Button from "@/components/common/Button";

const Notified = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <div className="w-full max-w-2xl px-6 sm:px-10 py-8 flex flex-col border rounded-md shadow-md bg-white">
        <h1 className="font-black text-2xl sm:text-3xl text-center p-4">
          Colors Always Come And Go
        </h1>
        <p className="mx-2 sm:mx-4 text-center text-sm sm:text-base mb-4">
          Once limited edition colors sell out, they’re gone for good. But on
          the upside, new colors aren’t far behind. Sign up and we’ll let you
          know when they’re here, along with other fun updates.
        </p>

        <h3 className="font-extrabold mb-1">Email Address</h3>
        <input
          type="text"
          className="bg-gray-200 border-b-2 p-2 font-extrabold mb-4 outline-none focus:border-black"
          placeholder="Enter Your Email Address"
        />

        <Button className="py-3 mb-4">GET NOTIFIED</Button>

        <p className="text-gray-700 text-xs sm:text-sm">
          Note: You can opt-out at any time. See our Privacy Policy and Terms
          below.
        </p>
      </div>
    </div>
  );
};

export default Notified;
