import BasePanel from "./BasePanel";
import TopPanel from "./TopPanel";

const Laptop = () => {
  return (
    <div className="full-screen flex sm:flex-row xs:flex-col xs:gap-12 md:gap-24 lg:gap-40 items-center justify-center hover:cursor-pointer w-screen h-screen">
      <div className="laptop-wrapper flex flex-col  xs:w-4/5 xs:h-3/4 sm:w-1/2 sm:h-[65%] md:h-3/4 lg:h-4/5 xl:h-[95vh] xl:w-[42%]">
        <TopPanel />
        <BasePanel />
      </div>
      keybord
    </div>
  );
}

export default Laptop;

