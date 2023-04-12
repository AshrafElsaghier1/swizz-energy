import bgImg from "../../assets/img-4.jpeg";
import { RightOutlined } from "@ant-design/icons";

const Secondary_section = () => {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <style jsx="true"></style>
      <a href="mailto: abc@example.com" className="secondary_sec ">
        <div className="">
          <div className="img-container relative">
            <img
              src={bgImg}
              alt=""
              className="w-[100%] h-[550px] object-cover"
            />

            <div className="absolute  inset-0   items-center lg:items-end flex flex-col justify-between py-10 ">
              <h2 className="heading mr-0 text-white font-bold text-center mb-5 pb-5 md:pb-7 xl:pb-10 text-4xl max-w-[95%] md:max-w-[85%] lg:mr-16 lg:text-5xl xl:max-w-[27%] xl:mr-10">
                More information on Sustainability at MSC?
              </h2>
              <div className="relative  z-20 ">
                <button
                  className="no-underline gap-1 bg-none  rounded-full  mb-4 flex  items-center justify-center    mx-auto  border-white border-[3px] font-medium  text-base text-white hover:text-text-color hover:bg-white lg:mr-[8vw] outline-none h-[45px] md:h-[50px]  w-[165px] md:w-[220px] "
                  onClick={clickHandler}
                >
                  <b className="text-[14px]  leading-[1px] ">
                    <RightOutlined />
                  </b>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};
export default Secondary_section;
