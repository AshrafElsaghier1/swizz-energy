import React from "react";
import { BsArrow90DegDown, BsArrow90DegRight } from "react-icons/bs";

function Energy() {
  return (
    <section className="mt-0 container lg:px-14  pt-8">
      <div className="px-3 md:px-0 my-[100px] bg-white text-start">
        <h1 className="heading text-2xl text-center mb-10 bg-bg-color text-white sm:text-3xl font-bold py-5 md:py-10 xl:py-14 lg:text-3xl xl:text-5xl">
          Energy
        </h1>
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          One of our core businesses is the ecological generation of electricity
          and heat from steam by burning pellets. Pellets is a high efficient
          and renewable source of energy.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          Here is an example to show the ratio between heat and electricity in
          case 1 Megawatt electricity is needed.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          When burning pellets, the process begins by heating water to generate
          steam. This steam is then directed to turbines, where it flows over
          the blades and causes them to rotate. As the turbine blades rotate,
          the mechanical energy generates electricity.
        </p>
        <br />
        <p className="px-3 md:px-0 colored text-bg-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          <BsArrow90DegDown /> 1 kg pellets contains
          <span className="font-extrabold">5 megajoules (MJ)</span> energy
        </p>
        <br />
        <p className="px-3 md:px-0 colored text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          To generate{" "}
          <span className="font-extrabold text-text-color">1 MW</span> (1000
          kwh) of electricity, we need to burn approximately{" "}
          <span className="font-extrabold text-text-color">
            200 kg of pellets
          </span>
          per hour (assuming an efficiency of 20%). When burning
          <span className="font-extrabold text-text-color"> 200 kg</span> of
          pellets, we generate approximately{" "}
          <span className="font-extrabold text-text-color"> 1000 MJ</span> of
          heat per hour (depending on the energy content of the pellets) which
          means the heat output is about{" "}
          <span className="font-extrabold text-text-color">96%</span> of the
          electrical output.
        </p>
        <br />
        <p className="px-3 md:px-0 colored text-bg-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          <BsArrow90DegDown /> 200 kg x 5 MJ/kg = 1000 MJ (1'000’000 kJ){" "}
        </p>
        <br />
        <p className="px-3 md:px-0 colored text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          The lost energy during the process is heat which could be captured and
          used for heating buildings, water or even cooling applications through
          a process called{" "}
          <span className="font-extrabold text-text-color"> cogeneration </span>
          or{" "}
          <span className="font-extrabold text-text-color">
            {" "}
            combined heat and power (CHP)
          </span>
          .
        </p>
        <p className="px-3 md:px-0 colored text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          <span className="font-extrabold text-text-color">
            {" "}
            The leftover heat energy
          </span>{" "}
          can be captured and used for{" "}
          <span className="font-extrabold text-text-color"> cooling </span>
          through{" "}
          <span className="font-extrabold text-text-color">
            {" "}
            absorption chillers
          </span>
          , which use heat to drive a refrigeration cycle instead of
          electricity.
          <span className="font-extrabold text-text-color">
            Absorption chillers are commonly used in large commercial
          </span>
          and industrial applications, such as{" "}
          <span className="font-extrabold text-text-color">
            hospitals, universities, and data centers.
          </span>
        </p>
        <br />
        <p className="px-3 md:px-0 colored text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          Overall, generating electricity and heat from steam by burning pellets
          is an efficient method, with a high ratio output of heat to
          electricity. By using pellets as a renewable energy source, we can
          reduce our dependence on fossil fuels and contribute to a more
          sustainable future.
        </p>
        <br />
      </div>
    </section>
  );
}

export default Energy;
