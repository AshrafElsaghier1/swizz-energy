import React from "react";
import { Parallax } from "react-scroll-parallax";
import Main_section from "./Main_section";
import Secondary_section from "./Secondary_section";

function Main_home() {
  return (
    <section className="mt-0 pt-8">
      <div className="h-[100px] bg-white"></div>
      <Main_section reverse={false} />
      <Main_section reverse={true} />
      <Main_section reverse={false} />
      <Secondary_section />
    </section>
  );
}

export default Main_home;
