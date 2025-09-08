"use client";
import localFont from "next/font/local";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const aeonik = localFont({
  src: "../../../public/fonts/aeonik-medium.woff2",
  display: "swap",
});

const TimelineData = [
  {
    companyImg: "/img/jaypeebrothers_logo.jpeg",
    jobTitle: "Full-Stack Developer",
    company: "Jaypee Brothers Medical Publishers",
    jobType: "Full-time",
    duration: "May 2025 – Present",
    stuffIDid: [
      "Automated PDF → DOC conversion & translation using Node, Docker, Adobe PDF API & OpenAI, reducing effort from 9 months (10 people) to 2 months (5 people), deployed at conversion.jaypeebrothers.com.",
      "Built Reflect dashboard (React, Next.js, Django) with graphs & filters, reduced DB query time from 10s → 1s via Redis caching, and implemented secure refresh-token auth.",
      "Reduced CLS of ejaypee e-commerce site by ∼ 97% (0.466 → 0.013), enhancing UI stability and customer experience; contributed to Flask backend with Elasticsearch indexing.",
      "Improved responsiveness & stabilized UI of DigiNerve (EdTech) across devices (EJS, SCSS, Bootstrap), ensuring smooth user experience on tablets & phones.",
      "Deployed apps on Vercel & AWS EC2 (via PEM), implemented cron jobs for caching & data migration (MongoDB → PostgreSQL) with < 1% data loss.",
      "Led migration of Reflect data from MongoDB to PostgreSQL with automated cron jobs, ensuring < 1% data loss and seamless transition for production use.",
      "Developed complex state management using Zustand for scalable dashboards, improving maintainability over Redux.",
      "Collaborated with cross-functional teams (design, backend, QA) to deliver features end-to-end, strengthening API integration and release timelines.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 md:mt-20 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
