import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { testimonials } from "../assets/assets";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
  setIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

const nextSlide = () => {
  setIndex((prev) => (prev + 1) % testimonials.length);
};

  return (
    <section className="pb-10 md:pb-16">
      <div className="px-6 sm:px-12 lg:px-32">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-7">
          {/* Left */}
          <div className="w-full lg:w-2/5">
            <span className="text-sm text-gray-500 font-medium mb-4 block">
              Our Reviews
            </span>

            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
              23k+ Customers gave their{" "}
              <span className="text-secondary">Feedback</span>
            </h2>

            <div className="flex gap-10 justify-center md:justify-start">
              <button
                onClick={prevSlide}
                className="flex justify-center items-center border border-secondary text-secondary w-12 h-12 rounded-full hover:bg-secondary hover:text-white transition"
              >
                <IoMdArrowDropleft size={28} />
              </button>

              <button
                onClick={nextSlide}
                className="flex justify-center items-center border border-secondary text-secondary w-12 h-12 rounded-full hover:bg-secondary hover:text-white transition"
              >
                <IoMdArrowDropright size={28} />
              </button>
            </div>
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-3/5 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 50}%)` }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="w-full lg:w-1/2 flex-shrink-0 p-3">
                  <div className="bg-white border border-gray-300 p-6 hover:border-secondary transition">
                    <div className="flex items-center gap-5 mb-5">
                      <img
                        className="rounded-full object-cover w-14 h-14"
                        src={item.image}
                        alt={item.name}
                      />
                      <div>
                        <h5 className="text-gray-900 font-medium">
                          {item.name}
                        </h5>
                        <span className="text-sm text-gray-500">
                          ⭐⭐⭐⭐⭐
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
