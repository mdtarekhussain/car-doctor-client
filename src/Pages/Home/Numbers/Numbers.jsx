import { BsBuildingExclamation } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const Number = () => {
  return (
    <div className="bg-black mt-10 px-10 py-8 border-2 border-white rounded-lg flex justify-center ">
      <div className="flex gap-4 items-center text-white w-full">
        <h1>
          <BsBuildingExclamation className="text-3xl" />
        </h1>
        <div>
          <h1>We are open monday-friday</h1>
          <h1>7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex gap-4 items-center text-white w-full">
        <h1>
          <MdOutlinePhoneInTalk className="text-3xl" />
        </h1>
        <div>
          <h1>Have a question?</h1>
          <h1>01928658800</h1>
        </div>
      </div>
      <div className="flex gap-4 items-center text-white w-full">
        <h1>
          <IoLocation className="text-3xl" />
        </h1>
        <div>
          <h1>Need a repair? our address</h1>
          <h1>POGAON MONOHARGONJ CUMILL</h1>
        </div>
      </div>
    </div>
  );
};

export default Number;
