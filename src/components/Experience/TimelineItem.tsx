import React from 'react';

interface TimelineItemProps {
  title: string;
  duration: string;
  company: string;
  category: 'job' | 'study';
  description: string;
  link?: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  duration,
  company,
  category,
  description,
  link,
  isLeft,
}) => {
  return (
    <li
      className={`mb-6 ${
        isLeft
          ? 'pl-4 md:self-start'
          : 'pl-4 md:pr-4 md:pl-0 md:translate-x-[-100%] md:self-end md:text-end'
      }`}
    >
      <div
        className={`absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 ${
          isLeft
            ? 'left-[-0.375rem]'
            : 'md:right-[-0.375rem] left-[-0.375rem] md:left-auto'
        } border border-white dark:border-gray-900 dark:bg-gray-700`}
      ></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {duration}
      </time>
      <h3
        className={`text-lg font-semibold text-gray-900 ${
          category === 'job' ? 'dark:text-blue-300' : 'dark:text-yellow-300'
        }`}
      >
        {title}
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {company}
      </p>
      <div
        className="mt-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {link && (
        <a
          href={link}
          target='_BLANK'
          className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Read more
        </a>
      )}
    </li>
  );
};

export default TimelineItem;
