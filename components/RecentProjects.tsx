"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const categories = ["all", "coding", "design"];

const RecentProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>


      <div className="flex justify-center gap-4 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full capitalize transition ${
              activeCategory === cat
                ? "bg-purple text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.title}>
              <div
                onClick={() => setPreviewImage(item.img)}
                className="relative flex cursor-pointer items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 group"
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>

                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 transition-transform group-hover:scale-105"
                />

                {/* Hover hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
                  Click to preview
                </div>
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="flex justify-center items-center">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            {/* Close button */}
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              ✕ Close
            </button>

            <img
              src={previewImage}
              alt="Preview"
              className="w-full rounded-xl object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
