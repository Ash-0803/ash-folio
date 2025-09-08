import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
    const { setSectionInView } = useView();

    const works = [
        {
            title: "The Haven Store",
            gitLink: "https://github.com/Ash-0803/thehavenstore",
            liveLink: "https://thehavenstore.vercel.app",
            about: "Designed and deployed a full-stack eCommerce application with integrated Razorpay payments. Built a scalable frontend using React + Redux for efficient state management and smooth UX. Developed REST APIs in Node.js & Express.js, ensuring secure product and order handling. Integrated MongoDB for product catalog, user accounts, and order management with optimized queries. Implemented search & pagination features, making product discovery seamless for users.",
            stack: ["react", "redux", "node.js", "express.js", "mongodb"],
            img: "/img/projects/thehavenstore.gif",
            owner: "Personal Project",
        },
        {
            title: "StudyBug",
            gitLink: "https://github.com/Ash-0803/DJANGO/tree/master/studybug",
            liveLink: "",
            about: "Created a real-time chatroom platform with full CRUD support for user messages. Implemented backend in Django, managing chatrooms, participants, and user authentication. Built interactive frontend with HTML, CSS, and Vanilla JavaScript for smooth message flow. Added profile editing and admin control features (add/remove participants, manage rooms). Ensured robust data consistency across chatrooms, improving collaboration reliability.",
            stack: ["django", "html", "css", "javascript", "python"],
            img: "/img/projects/studybug.gif",
            owner: "Personal Project",
        },
        {
            title: "p2pSolar",
            gitLink: "https://github.com/trijagati/p2psolar",
            liveLink: "https://p2psolar.vercel.app",
            about: "Designed a platform for peer-to-peer solar energy trading with future blockchain integration. Delivered a visually appealing, intuitive frontend that simplifies energy transactions. Built REST APIs to handle POST/GET requests, ensuring reliable data exchange. Developed a scalable backend to support future blockchain features and real-time updates. Pioneered the concept of making solar energy buying/selling as easy as online shopping.",
            stack: ["react", "node.js", "rest api", "blockchain", "javascript"],
            img: "/img/projects/p2psolar.jpg",
            owner: "Personal Project",
        },
    ];

    const { ref, inView } = useInView({
        threshold: 0.1,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inView) setSectionInView("work");
    }, [inView, setSectionInView]);

    return (
        <section
            className="flex flex-col gap-6 md:gap-10 pt-[110px]"
            ref={ref}
            id="work"
        >
            <Title>Projects</Title>
            {works.map((work, index) => (
                <FolioCard
                    key={index}
                    img={work.img}
                    title={work.title}
                    gitLink={work.gitLink}
                    liveLink={work.liveLink}
                    about={work.about}
                    stack={work.stack}
                    owner={work.owner}
                />
            ))}

            <Timeline />
        </section>
    );
}
