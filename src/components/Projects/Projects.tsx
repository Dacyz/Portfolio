import React, { useEffect, useState } from "react";
import type { Project } from "./Carousel";
import ProjectCarousel from "./Carousel";

const projects: Project[] = [
  {
    title: "Isometric HPE",
    description:
      "A home exercise flutter project",
    language: "Flutter project",
    imageUrl:
      "/images/projects/isometric-hpe/isometric-hpe-captures.webp",
    updated_at: "2025-05-06T13:25:05Z",
    link: "https://play.google.com/store/apps/details?id=com.dacydev.app_position",
  },
  {
    title: "Adaptive display (adaptive_display)",
    description:
      "A abstract widget around BoxConstrains to make them easier to use and more reusable.",
    language: "Flutter package",
    imageUrl:
      "https://github.com/user-attachments/assets/4af2d14f-14fe-42b0-9241-d5fc16bf78e9",
    updated_at: "2025-01-07T10:05:08Z",
    link: "https://pub.dev/packages/adaptive_display",
  },
  {
    title: "Movies Repo",
    description: "A project for delfosti",
    language: "Flutter project",
    imageUrl: "/images/projects/movies_flutter.webp",
    updated_at: "2024-08-16T00:17:58Z",
    link: "https://github.com/Dacyz/diego_yangua_movies",
  },
  {
    title: "FlutterAnimatedLogIn",
    description: "Animated Login screen on load",
    language: "Flutter project",
    imageUrl: "/images/projects/animated_login.webp",
    updated_at: "2024-09-19T06:20:23Z",
    link: "https://github.com/Dacyz/FlutterAnimatedLogIn",
  },
  {
    title: "Contador Fms",
    description: "Java project for fms",
    language: "Desktop Java",
    imageUrl: "/images/projects/contador_fms.webp",
    updated_at: "2023-01-09T20:20:32Z",
    link: "https://github.com/Dacyz/Contador-Fms",
  },
  {
    title: "Diabetrometro App",
    description: "Android application",
    imageUrl: "/images/projects/diabetrometro.webp",
    language: "Android Java",
    updated_at: "2023-01-07T18:44:38Z",
    link: "https://github.com/Dacyz/DiabetrometroApp",
  },
  {
    title: "Logistic System for Inserge",
    description: "software",
    imageUrl: "/images/projects/inserge_logistic.webp",
    language: "PHP CodeIgniter",
    updated_at: "2023-09-22T21:36:48Z",
    link: "https://github.com/Dacyz/inserge-logistic-system",
  },
  {
    title: "Human Interpreter to SQL",
    description: "Chatbot acting as a human language to SQL interpreter (prior to the GPT boom).",
    language: "Python SQL Interpreter",
    imageUrl: "/images/projects/ai_language.webp",
    updated_at: "2022-11-06T21:19:31Z",
    link: "https://github.com/Dacyz/interpretation-system-inserge",
  },
  // {
  //   title: "IrrigationApplication",
  //   description: "A new flutter application",
  //   language: "Dart",
  //   updated_at: "2023-06-19T06:52:47Z",
  //   link: "https://github.com/Dacyz/IrrigationApplication",
  // },
  {
    title: "ISG-CReports",
    description: "Aplicación movil de Inserge",
    language: "Flutter Application",
    imageUrl: "/images/projects/isg_reports.webp",
    updated_at: "2023-01-05T19:28:58Z",
    link: "https://github.com/Dacyz/ISG-CReports",
  },
  {
    title: "LightConsume",
    description: "Java & JavaFx project",
    language: "Desktop JavaFx",
    imageUrl: "/images/projects/light_consume.webp",
    updated_at: "2023-01-09T22:15:44Z",
    link: "https://github.com/Dacyz/LightConsume",
  },
  {
    title: "Identity Document Detection (Discontinued)",
    description:
      "A Flutter package for detect identity documents and cards on real time with a model of object detection and tflite_flutter",
    language: "Flutter package",
    imageUrl: "/images/projects/identity_document_detection.webp",
    updated_at: "2024-07-30T07:10:22Z",
    link: "https://pub.dev/packages/identity_document_detection",
  },
  {
    title: "QuickDartRequest",
    description: "quick type project based",
    imageUrl: "/images/projects/quickdart_request.webp",
    language: "TypeScript",
    updated_at: "2023-11-20T22:07:01Z",
    link: "https://quick-dart-request-8rb25rmte-dacyz.vercel.app/",
  },
];

const ProjectSection: React.FC = () => {
  return <ProjectCarousel projects={projects} />;
};

export default ProjectSection;
