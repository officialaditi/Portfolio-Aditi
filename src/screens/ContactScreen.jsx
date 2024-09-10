import { HiMail, HiPhone } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const ContactScreen = () => {
  const email = "gaikwadaditi002@gmail.com";
  const phone = "+ 917400234891";
  const linkedin = "https://www.linkedin.com/in/aditi-gaikwad-1a3954210";
  const github = "https://github.com/officialaditi";
  return (
    <>
      <div className=" w-full  ">
        <div className="items-center justify-center flex flex-col border py-4 rounded-3xl border-gray-300  border-1 mt-20 md:m-28 gap-4">
          <h1 className="font-semibold text-2xl text-blue-900">
            ADITI GAIKWAD
          </h1>
          <p className="text-xl break-words w-3/4 md:text-center text-purple-700">
            Full-stack developer with 1 year of experience in building web
            applications in both frontend and backed. Proficient in JavaScript,
            React, Node.js, and MongoDB.
          </p>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-4 py-1">
              <HiMail className="text-3xl text-amber-300" />
              <a className="text-xl" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 py-1">
              <HiPhone className="text-3xl text-gray-400" />
              <a className="text-xl" href={`tel:${phone}`}>
                +91 7400234891
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 py-1">
              <AiFillLinkedin className="text-3xl text-sky-500" />
              <a className="text-xl" href={`${linkedin}`} target="_blank">
                Linkedin Profile
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 py-1">
              <FaGithub className="text-3xl " />
              <a className="text-xl" href={`${github}`} target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactScreen;
