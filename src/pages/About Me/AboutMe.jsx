import { Link } from "react-router-dom";
import wasim from "../../assets/myPic/profile-.png";
import Name from "../../Components/Name/Name";
import Skills from "../../Components/Skills/Skills";
import Education from '../../Components/Education/Education';
import FunFact from '../../Components/Fun Fact/FunFact';

const AboutMe = () => {
  return (
    <>
      <section className="container mx-auto bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="md:text-5xl text-3xl uppercase font-bold py-5">
            About Me
          </h1>
          <h1 className="mb-10">
            <Link className="text-orange-400" to={"/"}>
              Home
            </Link>{" "}
            / About
          </h1>
        </div>
        <div className="md:flex justify-center items-center">
          <section className="md:w-1/4 relative flex justify-center">
            <img
              className="border-4 w-72 mb-5 md:w-64 border-gray-700 rounded-full"
              src={wasim}
            />
          </section>
          <section className="w-3/4 md:ml-20 lg:ml-40">
            <div className="overflow-x-auto">
              <Name />
              <table className="table-md">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Name :</td>
                    <td>Wasim Hossain</td>
                    <td>Language :</td>
                    <td>Bangla, English</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Nationality :</td>
                    <td>Bangladeshi</td>
                    <td>Phone :</td>
                    <td>+8801718885075</td>
                  </tr>
                  <tr>
                    <td>Address :</td>
                    <td>Dhaka, Bangladesh</td>
                    <td>Email :</td>
                    <td>wasim.hossain005@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div>
          <Skills />
        </div>

        <div className="mt-20 border-b py-10">
          <Education/>
        </div>

        <div className="md:mt-40 border-y py-20">
         <FunFact/>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
