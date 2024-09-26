import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavBar } from "../components/NavBar";
import ImageContainer from "../components/ImageContainer";
import { ProjectButton } from "../components/ProjectButton";

const Projects = () => {
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".navbar",
      {
        x: 100, // Start position off-screen
        opacity: 0,
      },
      {
        x: 0, // End position in place
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    gsap.utils.toArray(".image-container").forEach((container, index) => {
      const q = gsap.utils.selector(container);
      gsap.utils.toArray(q(".image")).forEach((piece, i) => {
        gsap.from(piece, {
          x: (i + 1) * 1200,
          scale: 0.4,
          y: 60,
          duration: 1.5,
          scrollTrigger: {
            trigger: `.image-${index + 1}`,
            start: "top bottom",
            toggleActions: "play none none reverse"
          }
        })
      })
    })
  })

    
    
    return (
        <>
            <div className="flex flex-col gap-20 bg-black py-[15rem] px-20">
                <div className="flex gap-20 justify-center ">
                  <ImageContainer imgNum = "1" position = "place-self-start"/>
                  <div className="flex flex-col gap-10 w-full">
                    <div className="blank-space w-[90%] flex text-xl text-white">The Library Management System is a robust and user-friendly platform designed to manage various library functions efficiently. It allows users to manage book inventories, track lending and returns, and handle user registrations with ease. The system is built with an intuitive interface to enable seamless interactions, making it simple for both librarians and users to access library resources. Administrators can add, update, or remove books from the inventory, while users can search for books, check availability, and borrow or reserve titles. The system also ensures the accurate tracking of borrowed books and return deadlines.</div>
                    <div className="blank-space w-[90%] flex text-xl text-white">This project utilizes a combination of backend and frontend technologies to ensure smooth and secure operations. The backend ensures efficient data management, while the frontend provides a responsive user experience. With features such as user authentication and role-based access control, the system ensures data security and integrity, making it ideal for educational institutions or public libraries.</div>
                    <a href="https://github.com/R3tr0gh057/LibraryManagementSystem">
                      <ProjectButton children={"View Project"}/>
                    </a>
                    
                  </div>
                </div>
                <div className="flex gap-20 justify-center ">
                <div className="flex flex-col gap-10 w-full">
                <div className="blank-space w-[90%] flex text-xl text-white">The NoSQL-based Library Management System is designed to offer a flexible and scalable solution for managing library operations. This system leverages the advantages of NoSQL databases to store and manage data, providing enhanced performance when handling large datasets. It supports essential library functions, including book catalog management, user registration, book lending, and returns. By utilizing NoSQL, the system can efficiently handle complex queries and large amounts of data, making it well-suited for libraries with growing collections or multiple branches.</div>
                    <div className="blank-space w-[90%] flex text-xl text-white">Built with scalability in mind, this system accommodates changes in user and book data with ease. The NoSQL database structure allows for dynamic data models, ensuring flexibility in storing various book attributes and user information. The platform's user interface is designed for simplicity, ensuring that both users and administrators can easily interact with the system. Additionally, the use of NoSQL provides faster data retrieval, making the system highly responsive, even with extensive data.</div>
                    <a href="https://github.com/R3tr0gh057/LMS-nosql">
                      <ProjectButton children={"View Project"}/>
                    </a>
                  </div>
                  <ImageContainer imgNum = "2" position = "place-self-end"/>
                </div>
                <div className="flex gap-20 justify-center ">
                  <ImageContainer imgNum = "3" position = "place-self-start"/>
                  <div className="flex flex-col gap-10 w-full">
                  <div className="blank-space w-[90%] flex text-xl text-white">The LumosAI project is an AI-driven platform designed to provide intelligent solutions across a variety of use cases. Leveraging advanced machine learning models, LumosAI can analyze data, generate predictions, and automate decision-making processes. The system is built to be flexible, allowing it to adapt to different domains such as healthcare, finance, or education. With a focus on usability, LumosAI offers a user-friendly interface that simplifies interaction with AI models, making it accessible even for non-technical users.</div>
                    <div className="blank-space w-[90%] flex text-xl text-white">At its core, LumosAI integrates cutting-edge AI technologies to enhance productivity and streamline operations. The platform’s ability to process vast amounts of data enables it to offer insightful recommendations, identify patterns, and optimize workflows. Whether deployed in real-time applications or used for data analysis, LumosAI delivers powerful performance with accuracy and efficiency. The project is designed for scalability and can be tailored to meet the specific needs of different industries or research fields.</div>
                    <a href="https://github.com/R3tr0gh057/LumosAI_">
                      <ProjectButton children={"View Project"}/>
                    </a>
                  </div>
                </div>
            </div>
        </>
    )
};

export default Projects;