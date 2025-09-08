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
        <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
          <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-md">
            <AnimatedBody className="tracking-wide leading-7">
              My name is Ashish Chaudhary, a FullStack Software Engineer based
              in India. <em>&ldquo;Developer-turned-people&rsquo;s</em>{" "}
              person&ldquo; — I started my career building and fixing things
              behind the screen, from optimizing websites for lightning-fast
              performance to untangling database spaghetti. Now, I’m taking that
              same problem-solving mindset and moving into the client-facing
              world of LegalTech Sales.
            </AnimatedBody>
            <AnimatedBody className="tracking-wide leading-7">
              I love translating tech jargon into plain English, helping teams
              make smarter decisions, and turning complex ideas into simple
              wins. Competitive by nature, curious by default, and always up for
              a challenge — whether it’s closing a deal, explaining CLS to a
              non-techie, or obsessing the best bike in town. <br />
              Wanna learn more? Here&apos;s{" "}
              <Link
                className="underline"
                href={
                  "https://drive.google.com/file/d/1SZv5rLCOJ2sffHzzJnmM8sQ_wR2fyLgz/view?usp=sharing"
                }
              >
                my résumè
              </Link>
              .
            </AnimatedBody>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2"
              >
                Frontend
              </AnimatedTitle>
              <AnimatedBody className="text-white/60 tracking-wide">
                JavaScript, TypeScript, React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS, Sass/SCSS
              </AnimatedBody>
            </div>
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2"
              >
                Backend
              </AnimatedTitle>
              <AnimatedBody className="text-white/60 tracking-wide">
                Node.js, Express.js, Python, Django, RESTful APIs, MongoDB, Mongoose, MySQL, PostgreSQL
              </AnimatedBody>
            </div>
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2"
              >
                DevOps/Tools
              </AnimatedTitle>
              <AnimatedBody className="text-white/60 tracking-wide">
                Git, GitHub, Docker, CI/CD, Firebase, Heroku, Netlify, Vercel
              </AnimatedBody>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
