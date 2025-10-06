"use client";
import styles from "./ProjectList.module.css";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type CardType = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export default function ProjectList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <section className="w-full">
      <div className="w-full py-20 flex flex-col items-center">
        <h2 className="w-full max-w-7xl px-4 mx-auto text-2xl md:text-5xl font-bold text-white text-center font-sans">
          My listed projects
        </h2>
        <div className="w-full mt-8">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

const data: CardType[] = [
  {
    src: "/path/to/image.jpg",
    title: "React Bussiness Website",
    description:
    "Developed a responsive, SEO-optimized React/Tailwind site and integrated Make (Integromat) automation to send form submissions automatically.",
    link: "https://sintmex.netlify.app/",
  },
  {
    src: "/path/to/image.jpg",
    title: "Storage Management System",
    description:
    "Built a full-stack, serverless data-management app with passwordless OTP authentication, file upload/preview/rename/share features, Google-style search, responsive UI, and clean architecture with robust backend logic.",
    link: "https://example.com/project2",
  },
  {
    src: "/path/to/image.jpg",
    title: "NodeJS PostgreSQL & NGINX App with AWS Deployment",
    description:
    "Deployed a Node.js, PostgreSQL, and NGINX backend on AWS using EC2, RDS, Application Load Balancer, and IAM, gaining hands-on experience with the AWS ecosystem and cloud infrastructure management. ",
    link: "https://example.com/project3",
  },
    {
    src: "/path/to/image.jpg",
    title: "DevOps & Backend API Development",
    description:
    "Built and deployed an API with JWT authentication and authorization, role-based access control, and user management for accounts, listings, and deal management; implemented health monitoring for endpoints, request validation via Zod, structured logging with Winston, and secure endpoints using Arcjet; used PostgreSQL for data management, Docker for containerization, and Kubernetes for container orchestration at scale; applied Jest and Supertest for automated testing and validation, and designed CI/CD pipelines for streamlined build, test, and deployment workflows.",
    link: "https://example.com/project3",
  },
];
