import React, { useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import ContraButton from "./ContraButton";

const aeonik = localFont({
  src: "../../../public/fonts/aeonik-medium.woff2",
  display: "swap",
});

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      className="min-h-screen 2xl:min-h-[1000px]  flex items-center justify-center py-20 md:py-32"
      id="about"
    >
      <div className="">
        <AnimatedTitle
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          className={`uppercase ${aeonik.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
        >
          I amplify brand voices through the web
        </AnimatedTitle>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-6">
          {/* First paragraph - spans 3 columns on lg+ screens, full width on mobile */}
          <div className="lg:col-span-3 antialiased text-white/80 text-md">
            <AnimatedBody className="tracking-wide leading-7">
              My name is Ashish Chaudhary, a FullStack Software Engineer based
              in India. <em>&ldquo;Developer-turned-people&rsquo;s</em>{" "}
              person&ldquo; — I started my career building and fixing things
              behind the screen, from optimizing websites for lightning-fast
              performance to untangling database spaghetti. Now, I&apos;m taking
              that same problem-solving mindset and moving into the
              client-facing world of LegalTech Sales.
            </AnimatedBody>
          </div>

          {/* Second paragraph - spans 3 columns on lg+ screens, full width on mobile */}
          <div className="lg:col-span-3 antialiased text-white/80 text-md">
            <AnimatedBody className="tracking-wide leading-7">
              I love translating tech jargon into plain English, helping teams
              make smarter decisions, and turning complex ideas into simple
              wins. Competitive by nature, curious by default, and always up for
              a challenge — whether it&apos;s closing a deal, explaining CLS to
              a non-techie, or obsessing the best bike in town.
            </AnimatedBody>
          </div>
          {/* Skills Section - each spans 2 columns on lg+ screens, full width on mobile */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 p-4 rounded-lg h-full">
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-4 text-white/90"
              >
                Frontend
              </AnimatedTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    name: "JavaScript",
                    icon: "devicon-javascript-plain colored",
                  },
                  {
                    name: "TypeScript",
                    icon: "devicon-typescript-plain colored",
                  },
                  { name: "React", icon: "devicon-react-original colored" },
                  { name: "Next.js", icon: "devicon-nextjs-plain colored" },
                  { name: "Redux", icon: "devicon-redux-original colored" },
                  { name: "HTML5", icon: "devicon-html5-plain colored" },
                  { name: "CSS3", icon: "devicon-css3-plain colored" },
                  {
                    name: "Tailwind",
                    icon: "devicon-tailwindcss-plain colored",
                  },
                  { name: "Sass", icon: "devicon-sass-original colored" },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <i className={`${skill.icon} text-lg`} />
                    <span className="text-xs text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/5 p-4 rounded-lg h-full">
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-4 text-white/90"
              >
                Backend
              </AnimatedTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
                  { name: "Express", icon: "devicon-express-original colored" },
                  { name: "Python", icon: "devicon-python-plain colored" },
                  { name: "Django", icon: "devicon-django-plain colored" },
                  { name: "REST", icon: "devicon-postman-plain colored" },
                  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                  { name: "MySQL", icon: "devicon-mysql-plain colored" },
                  {
                    name: "PostgreSQL",
                    icon: "devicon-postgresql-plain colored",
                  },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <i className={`${skill.icon} text-lg`} />
                    <span className="text-xs text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/5 p-4 rounded-lg h-full">
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-4 text-white/90"
              >
                DevOps & Tools
              </AnimatedTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Git", icon: "devicon-git-plain colored" },
                  { name: "GitHub", icon: "devicon-github-original colored" },
                  { name: "Docker", icon: "devicon-docker-plain colored" },
                  {
                    name: "CI/CD",
                    icon: "devicon-githubactions-plain colored",
                  },
                  { name: "Firebase", icon: "devicon-firebase-plain colored" },
                  { name: "Heroku", icon: "devicon-heroku-plain colored" },
                  { name: "Netlify", icon: "devicon-netlify-plain colored" },
                  { name: "Vercel", icon: "devicon-vercel-plain colored" },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <i className={`${skill.icon} text-lg`} />
                    <span className="text-xs text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="antialiased text-white/80 text-md mt-10 ">
          <AnimatedBody className="tracking-wide leading-7 flex justify-center">
            Wanna learn more? Here&apos;s&nbsp;
            <Link
              className="underline text-white"
              href={
                "https://drive.google.com/file/d/1SZv5rLCOJ2sffHzzJnmM8sQ_wR2fyLgz/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>
      </div>
    </section>
  );
}
