import { IoPerson } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import wasimResume from "../../assets/Cv/wasimResume.pdf";
import wasimImg from "../../assets/myPic/profile-.png";
import Name from "../../Components/Name/Name";

export const Home = () => {
  return (
    <>
      <section className="bg-gray-800 text-white p-4">
        <div className="md:flex mt-5 mb-10">
          <section className="md:w-1/3 flex justify-center items-center">
            <img
              className="border-4 w-72 mb-5 md:w-64 border-gray-700 rounded-full"
              src={wasimImg}
            />
          </section>
          <section className="md:w-2/3 mt-3 md:mt-0">
            <h1>HI THERE!</h1>
            <Name />
            <p>
              I am a MERN Stack Developer specializing in building dynamic,
              scalable, and user-friendly web applications. With React.js,
              Node.js, Express.js, MongoDB and mongoose. I create seamless
              full-stack solutions tailored to meet business needs. I focus on
              delivering clean, efficient code and intuitive user interfaces,
              backed by robust server-side logic and secure database management.
              With experience in deploying and optimizing applications, I bring
              a results-driven approach to every project.
            </p>
            <div className="mt-10 flex gap-x-10">
              <Link
                to="/about"
                className="flex justify-center items-center gap-x-2 hover:bg-white font-semibold hover:text-orange-500 rounded-full px-8 py-2 delay-150 transition-colors bg-orange-500"
              >
                {" "}
                <IoPerson /> MORE ABOUT ME
              </Link>
              <a
                href={wasimResume}
                download
                className="flex justify-center items-center gap-x-2 hover:text-white font-semibold hover:bg-orange-500 rounded-full px-8 py-2 text-orange-500 delay-150 transition-colors bg-white"
              >
                <MdOutlineFileDownload /> Resume
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
