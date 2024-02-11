import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="container overflow-x-hidden  h-full mx-auto text-primary ">
        <div className="flex flex-col items-center lg:flex-row gap-20  h-full">
          <div className="w-2/3  box-border pt-32  lg:pb-0 lg:w-auto px-[30px] flex flex-col justify-center items-center lg:absolute lg:items-start lg:max-w-3xl lg:pt-52">
            <h1 className="h1 text-center lg:text-start text-primary ">
              {" "}
              Lady M's Bakery & Cake Shop
            </h1>
            <p className="text-xl lg:text-2xl font-primary mb-4 lg:mb-12">
              Algeirs, Algeria
            </p>
            <Link to="contact" className="btn mb-[30px]">
              Hire me
            </Link>
          </div>
          <div className="flex justify-center items-end  lg:justify-end   h-screen w-screen">
            <div className="bg-amber-100 px-7 h-full flex items-end">
              <img
                src="home/woman.png"
                alt=""
                className="lg:max-h-[500px] max-h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
