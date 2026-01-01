// src/components/TimelineFilter.jsx
import { useState } from "react";
import TimelineItem from "./TimelineItem"; // versión React, si la necesitas
import type { ExperienceModel } from "./experience";
import BooksIcon from "../../icons/Books";
import BriefcaseIcon from "../../icons/Briefcase";

export default function TimelineFilter({
  experiences,
}: {
  experiences: ExperienceModel[];
}) {
  const [study, setStudy] = useState(true);
  const [job, setJob] = useState(true);

  const filtered =
    !study && !job
      ? []
      : study && job
        ? experiences
        : study
          ? experiences.filter((e) => e.category === "study")
          : experiences.filter((e) => e.category === "job");

  return (
    <>
      <div className="flex items-center justify-start space-x-4 ">
        <button
          onClick={() => (study ? job && setJob(false) : setStudy(true))}
          className={`cursor-pointer text-xl font-semibold flex gap-x-3 items-center flex-row ${study ? "text-yellow-300 " : "text-yellow-100 opacity-50 hover:opacity-100"}`}
        >
          <BooksIcon />
          Studies
        </button>
        <button
          onClick={() => (job ? study && setStudy(false) : setJob(true) )}
          className={`cursor-pointer text-xl font-semibold flex gap-x-3 items-center flex-row ${job ? "text-blue-300 " : "text-blue-100 opacity-50 hover:opacity-100"}`}
        >
          <BriefcaseIcon />
          Experience
        </button>
      </div>
      <p className="opacity-50 mb-4">Toggle filters (choose at least one)</p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ml-[50%] md:w-1/2">
        {filtered.map((experience, index) => (
          <TimelineItem key={index} {...experience} isLeft={index % 2 === 0} />
        ))}
      </ol>
    </>
  );
}
