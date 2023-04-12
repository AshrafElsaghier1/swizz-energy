import React from "react";
import Main_section from "../components/main-home/Main_section";
import Secondary_section from "../components/main-home/Secondary_section";

function WhoWeAre() {
  return (
    <section className="mt-0 pt-8">
      <div className="my-[100px] bg-white text-center">
        <h1 className="heading  text-2xl  sm:text-3xl font-bold py-5 md:py-10 xl:py-14 lg:text-3xl xl:text-5xl text-text-color">
          who we are?
        </h1>
        <p className="text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          We are a group of technology & environment gurus with different
          backgrounds, IT, Software engineering, project management, mechanical
          engineering and scientific researchers
        </p>
        <br />
        <p className="text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium ">
          With our 5 spoken languages, multiple cultural and educational
          backgrounds, modern agile mindset and long years of experiences in
          different domains, we are confident that we could make a significant
          change in helping customers to reach their goals and get projects
          successfully completed
        </p>
      </div>
      <Main_section
        content={
          <>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              Our vision is a future where clean energy powers the world,
              communities flourish in harmony with the environment, and
              sustainable energy is affordable to everyone.
            </p>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              As a leading voice and catalyst for change, we are committed to
              inspiring a global movement towards a cleaner, more equitable
              future.
            </p>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              We strive to be the go-to partner for all stakeholders who share
              our passion for sustainability, innovation, and social
              responsibility to build together a sustainable and resilient
              future for ourselves and generations to come.
            </p>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              Through our consulting services, we enable our clients to
              contribute to the global transition towards clean energy by
              implementing renewable energy solutions across Europe, Africa, and
              the Middle East
            </p>
            {/* <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify mt-4 lg:mt-8">
              We enable logistics decarbonisation by aiming for
              <b className="md:ml-2 text-justify">
                carbon neutrality; supporting logistics transition solutions;
                and maintaining a focus on energy efficiency.
              </b>
            </p> */}
          </>
        }
        title="Vision"
        reverse={false}
      />
      <Main_section
        content={
          <>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              Our mission is dedicated to raising public awareness about the
              importance of transitioning from fossil fuels to sustainable
              energy sources. We aim to foster responsible behavior among
              individuals and encourage their active participation in promoting
              this critical initiative. Moreover, we offer consulting services
              to companies, governmental and non-governmental organizations, to
              facilitate the implementation of renewable energy projects across
              Europe, Africa, and the Middle East. Our ultimate goal is to
              promote sustainable energy solutions and contribute towards the
              global transition towards a clean earth for our next generations.
            </p>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              At our company, we're committed to promoting sustainable waste
              management best-practices and helping governments and
              organizations to find the optimal solution for their challenges.
            </p>
            <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
              we also connect partners with the right technology provider and
              follow-up with them to ensure the best quality of service and a
              project completion fulfilling the most added-value to our
              customers.
            </p>
          </>
        }
        reverse={true}
        title="Mission"
      />
      {/* <Secondary_section /> */}
    </section>
  );
}

export default WhoWeAre;
