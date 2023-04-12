import React from "react";

function Hydrogen() {
  return (
    <section className="mt-0 container lg:px-14  pt-8">
      <div className="px-3 md:px-0 my-[100px] bg-white text-start">
        <h1 className="heading text-2xl text-center mb-10 bg-bg-color text-white sm:text-3xl font-bold py-5 md:py-10 xl:py-14 lg:text-3xl xl:text-5xl">
          Hydrogen
        </h1>
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          Hydrogen gas is a clean and renewable source of energy that could
          replace fossil fuels in a wide range of applications, from
          transportation to power generation. One of the most promising methods
          of producing hydrogen gas is through the process of electrolysis,
          which involves using electricity to split water into hydrogen and
          oxygen molecules
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          On average, producing 1 kilogram of hydrogen gas requires
          approximately 50 kilowatt-hours (kWh) of electricity. This means that
          the efficiency of the process is approximately 60-70%, depending on
          the specific equipment and conditions used.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          To put this into perspective, a typical car with a 100-kilowatt fuel
          cell engine would require approximately 1 kg of hydrogen gas to travel
          100 km. To produce this amount of hydrogen gas would require
          approximately 50 kWh of electricity.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          In terms of percentages, this means that approximately 30-40% of the
          energy used to produce the hydrogen gas is lost as waste heat during
          the electrolysis process. The remaining 60-70% of the energy is stored
          in the hydrogen gas.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          Also wind or solar power, can further improve the environmental
          sustainability of the process.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          In conclusion, producing hydrogen gas from electricity and water is an
          efficient and promising method of producing clean, renewable energy.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          There are still some challenges to go through in order to have
          hydrogen usage becoming very popular, mainly the safety issues:
        </p>
        <br />
        <ul className="list-disc pl-[20px]">
          <li className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium mb-4">
            Storage: hydrogen is a very small molecule and can escape from
            storage tanks or pipelines more easily than other gases. If there is
            a leak, the hydrogen can quickly disperse and represent danger.
          </li>
          <li className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
            Hydrogen is often stored in
            <span className=" font-extrabold"> high-pressure tanks </span> (700
            bars), which can rupture if the pressure exceeds the tank's
            capacity.
          </li>
        </ul>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          To avoid these issues high-quality materials should be used,
          maintenance, regular inspections and implementing safety features like
          pressure relief valves and leak detection systems should be applied.
        </p>
        <br />
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          By optimizing the efficiency of the electrolysis process, and the
          safety challenges we could reduce our dependence on fossil fuels and
          contribute to a more sustainable future.
        </p>
        <br />
      </div>
    </section>
  );
}

export default Hydrogen;
