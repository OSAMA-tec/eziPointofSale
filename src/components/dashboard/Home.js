import Navbra from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const Home1 = () => {
  
 
  const clicked = useSelector((state) => state.sidebar.value);
  return (
    <div className="overflow-y-hidden">
      <Navbra />
      <div className={`flex max-h-[90vh]`}>
        <div
          className={`${
            clicked ? "w-[50%] md:w-[4%]" : "md:w-[17%]"
          }  overflow-y-auto`}
        >
          <SideBar />
        </div>
        <div
          className={`${
            clicked ? "w-[50%] md:w-[96%]" : "w-full md:w-[83%]"
          }  overflow-y-auto`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Home1;
