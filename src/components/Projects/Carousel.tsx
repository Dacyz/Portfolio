import React, { useState, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {capitalize, formatShortDate, timeAgo} from "../../core/helper.ts";

export type Project = {
  title: string;
  description: string;
  imageUrl?: string;
  language?: string;
  updated_at?: string;
  link?: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 2, origin: "center" },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          origin: "center",
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const handleIndicatorClick = useCallback(
    (idx: number) => {
      slider?.current?.moveToIdx(idx, false);
    },
    [slider]
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <div ref={sliderRef} className="keen-slider items-end justify-between">
        {projects.map((project, i) => (
          <div key={i} className="keen-slider__slide px-4 group">
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 rounded-lg w-full object-contain px-6 transition-all duration-300 group-hover:scale-105"
              />
            )}
            <div
              className={`bg-gradient-to-t from-white/80 to-transparent dark:from-gray-800/80 group-hover:dark:from-gray-800/100 dark:to-transparent rounded-xl shadow-md px-6 pb-6 duration-300`}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-300">
                {project.title}
              </h3>
              {project.language && (
                <p className="text-lg font-semibold text-blue-200">
                  {project.language}
                </p>
              )}
              <time className="text-gray-600 dark:text-gray-400 mt-2">
                {project.updated_at && capitalize(timeAgo(project.updated_at))} ({project.updated_at && formatShortDate(project.updated_at)})
              </time>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-300 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4 gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleIndicatorClick(idx)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === idx ? "bg-blue-200 w-9" : "bg-gray-300/50 w-3"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
