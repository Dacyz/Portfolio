export type ExperienceModel = {
  category: 'job' | 'study',
  title: string,
  company: string,
  location: string,
  description: string,
  duration: string,
}
export const EXPERIENCES = <ExperienceModel[]>[
  {
    category: "job",
    title: "Mobile Especialist",
    company: "Seidor (BANBIF)",
    location: "Lima, Perú (Hibrid)",
    description: `<ol class="text-base font-normal text-gray-600 dark:text-gray-500">
      <li> Developed apps: New Banbif App</li>
      <li> Cross-platforms: iOS, Android, Onpremise & Web.</li>
      <li> Kit: React Native & .NET.</li>
    </ol>`,
    duration: "Jun. 2025 - Present",
  },
  {
    category: "job",
    title: "Flutter Developer",
    company: "Grupo Mendieta",
    location: "Lima, Perú (Remote)",
    description: `<ol class="text-base font-normal text-gray-600 dark:text-gray-500">
      <li> Developed apps: V-Mend(Android).</li>
      <li> Cross-platforms: iOS, Android & Windows.</li>
      <li> Kit: BloC, Cubit & Clean Architecture.</li>
    </ol>`,
    duration: "Jan. 2025 - Present (Freelance)",
  },
  {
    category: "study",
    title: "Degree Systems Engineering",
    company: "Universidad Cesar Vallejo",
    location: "Piura, Perú",
    link: "https://drive.google.com/file/d/1_2C9iw1s0dfty_uQ77CzddAsloxYHdrb/view?usp=sharing",
    duration: "Jul. 2024",
  },
  {
    category: "study",
    title: "First place – Expo-work International Fourth Category",
    company: "Universidad Cesar Vallejo",
    location: "Piura, Perú",
    link: 'https://drive.google.com/file/d/1ZqrGJ5doHfAQUaw6i77gv_DBZakkDNgw/view?usp=sharing',
    description: `<p class="text-base text-gray-600 dark:text-gray-500">
      Awarded first place in the International Expo-work (Fourth Category) 2023-1.<br/>
    </p>`,
    duration: "Jul. 2023",
  },
  {
    category: "job",
    title: "Front-end Developer",
    company: "FRACTAL",
    location: "Lima, Perú (Remote)",
    link: "https://fractal.com.pe/",
    description: `<ol class="text-base font-normal text-gray-600 dark:text-gray-500">
      <li> Developed apps: Fractal, Meraki, Ubikate.</li>
      <li> Cross-platforms: iOS, Android & Windows.</li>
      <li> Kit: BloC & Clean Architecture.</li>
    </ol>`,
    duration: "Jan. 2023 - Present",
  },
  {
    category: "study",
    title: "First place – Entrepreneurship Fair",
    company: "Universidad Cesar Vallejo",
    location: "Piura, Perú",
    link: "https://drive.google.com/file/d/1Zk4MDRimH_5Q2auo3pcn-EAr1KyYqoqH/view?usp=sharing",
    description: `<p class="text-base text-gray-600 dark:text-gray-500">
      First place in the Entrepreneurship Fair on 2022-2.<br/>
    </p>`,
    duration: "Dec. 2022",
  },
  {
    category: "study",
    title: "First place – Entrepreneurship Fair",
    company: "Universidad Cesar Vallejo",
    location: "Piura, Perú",
    link: "https://drive.google.com/file/d/1PX7_sk1U_WKMFkt2q8lGB7PDGUCHpOMe/view?usp=sharing",
    description: `<p class="text-base text-gray-600 dark:text-gray-500">
      First place in the Entrepreneurship Fair on 2022-1.<br/>
    </p>`,
    duration: "Jul. 2022",
  },
  {
    category: "study",
    title: "Third place – Expo-work International Third Category",
    company: "Universidad Cesar Vallejo",
    location: "Piura, Perú",
    link: "https://drive.google.com/file/d/1BDM6w3thhJ1xoUrRMarilPrHDCveGW8_/view?usp=sharing",
    description: `<p class="text-base text-gray-600 dark:text-gray-500">
      Awarded third place in the International Expo-work (Third Category) 2022-1.<br/>
    </p>`,
    duration: "Jul. 2022",
  },
  {
    category: "job",
    title: "Systems Engineering Intern",
    company: "INSERGE",
    location: "Piura, Peru",
    description: `<ol class="text-base font-normal text-gray-600 dark:text-gray-500">
      <li> Gestión de sistemas de información.</li>
      <li> Desarrollo y mantenimiento de software.</li>
      <li> Manejo de bases de datos y ofimática.</li>
    </ol><p class="text-gray-400"> Otras habilidades aprendidas: Delineante CAD.</p>`,
    duration: "Jan. 2021 - Oct. 2022",
  },
  {
    category: "study",
    title: "First place – Expo-work National Second Category",
    company: "Universidad Cesar Vallejo",
    location: "Piura, Perú",
    link: "https://drive.google.com/file/d/1YOcJpWjulJ-HINzNVRE4SAWYCpIVKRZS/view?usp=sharing",
    description: `<p class="text-base text-gray-600 dark:text-gray-500">
      Awarded first place in the National Expo-work (Second Category) 2020-2.<br/>
    </p>`,
    duration: "Dec. 2020",
  },
];