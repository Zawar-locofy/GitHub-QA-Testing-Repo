import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[39px] text-left text-2xl text-primary-green font-paragraph">
      <div className="relative w-[346.7px] h-[51px] shrink-0">
        <b className="absolute top-[0px] left-[85.7px]">Our Mission</b>
        <div className="absolute top-[25.55px] left-[-1px] box-border w-[74px] h-0.5 border-t-[2px] border-solid border-primary-green" />
      </div>
      <div className="relative text-base leading-[157.4%] text-gray-200 inline-block w-[477.57px]">
        Our mission is to use our skills and knowledge to help organizations
        across various industries leverage the power of technology to improve
        their operations, reduce costs, and achieve their business goals.
        Technology has the potential to transform the world, and we are
        dedicated to using it to make a positive difference.
      </div>
    </div>
  );
};

export default FrameComponent;
