import React, { createContext, useEffect, useState } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      background: "Background",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      copyLink: "Copy Link",
      copied: "Copied!",
      themeLight: "Light",
      themeDark: "Dark",
      languageToggle: "Switch to French",
    },
    hero: {
      title: "Hi, I'm Hermann",
      description:
        "Recent Computer Engineering graduate passionate about full-stack development, DevOps, database engineering, and data analytics — building reliable systems from front-end to infrastructure.",
      contactButton: "Contact Me",
      projectsButton: "View Projects",
      statusBadge: "Open to opportunities",
      statProjects: "Projects",
      statSkills: "Skills",
      statLanguages: "Spoken Languages",
    },
    about: {
      title: "About",
      items: [
        {
          title: "Frontend Developer",
          description:
            "Crafting pixel-perfect, responsive interfaces that delight users and drive engagement through intuitive design.",
        },
        {
          title: "Backend Developer",
          description:
            "Building scalable, performant systems and APIs that power seamless user experiences at scale.",
        },
        {
          title: "DevOps",
          description:
            "Containerizing applications with Docker, orchestrating workloads with Kubernetes, and building reliable CI/CD pipelines. Focused on infrastructure as code, automation, and keeping systems running smoothly in production.",
        },
        {
          title: "Database Engineer",
          description:
            "Designing and managing relational and non-relational databases — MySQL, PostgreSQL, MongoDB. Experienced in schema design, query optimization, ETL pipelines, and data warehousing for scalable storage solutions.",
        },
        {
          title: "Data Analyst",
          description:
            "Turning raw data into actionable insights through structured querying, data modeling, and visualization. Comfortable working across the full data pipeline from ingestion and transformation to reporting.",
        },
      ],
    },
    background: {
      title: "Background & Education",
      description:
        "Recently graduated in Computer Engineering from Assumption University in Thailand. Built a strong foundation in full-stack development, DevOps practices, database engineering, and data analytics through academic projects and hands-on coursework.",
    },
    experience: {
      title: "Experience",
      message:
        "I recently graduated and am at the start of my professional journey. Through my studies and personal projects I have developed practical skills in full-stack development, DevOps tooling, database design, and data analysis. I am actively looking for my first role where I can apply this knowledge, grow fast, and contribute meaningfully from day one.",
    },
    projects: {
      title: "Projects",
      demo: "Demo",
      source: "Source",
      report: "Report",
      certificate: "Certificate",
      imageAlt: "Image of",
      localizedCards: {
        "Dictionary App": {
          title: "Dictionary App",
          description:
            "A comprehensive dictionary application built with Kotlin featuring word search, definitions, and pronunciation guides.",
        },
        "Square Room": {
          title: "Square Room",
          description:
            "An interactive 3D square room environment built in Unity with realistic physics and visual effects.",
        },
        "Amazon Clone": {
          title: "Amazon Clone",
          description:
            "A fully functional e-commerce platform replicating Amazon's design and user interface with modern web technologies.",
        },
        "ODAC - Object Detection & Classification": {
          title: "ODAC - Object Detection & Classification",
          description:
            "An AI-powered system for real-time object detection and classification using CCTV cameras. Implemented with machine learning for educational environments.",
        },
        "HopeSpring": {
          title: "HopeSpring",
          description:
            "A social chat platform where users connect and communicate in real time through a clean, community-driven environment.",
        },
        "Resume Builder": {
          title: "Resume Builder",
          description:
            "A full-stack AI-powered resume builder with user authentication, live editing, image upload, and one-click PDF export.",
        },
        "Data Warehouse": {
          title: "Data Warehouse",
          description:
            "A structured data warehousing solution designed to efficiently store and query large volumes of data for business intelligence and analytics reporting.",
        },
        "Hotel Management Network": {
          title: "Hotel Management Network",
          description:
            "A complete network topology designed for a hotel environment, ensuring efficient communication and data exchange between all departments.",
        },
        "Network Design & Security": {
          title: "Network Design & Security",
          description:
            "Designed and secured TechSafe Ltd's full network infrastructure — including subnetting, Wireshark traffic analysis, and firewall configuration.",
        },
      },
    },
    contact: {
      title: "Let's Connect",
      description: "Recent graduate open to entry-level roles, internships, and collaborations in full-stack development, DevOps, database engineering, or data analytics. Feel free to reach out.",
      copyright: "All rights reserved.",
    },
  },

  fr: {
    nav: {
      about: "A propos",
      background: "Parcours",
      experience: "Experience",
      projects: "Projets",
      contact: "Contact",
      copyLink: "Copier le lien",
      copied: "Copie !",
      themeLight: "Clair",
      themeDark: "Sombre",
      languageToggle: "Passer en anglais",
    },
    hero: {
      title: "Bonjour, je suis Hermann",
      description:
        "Jeune diplômé en ingénierie informatique, passionné par le développement full-stack, le DevOps, l'ingénierie des bases de données et l'analyse de données — du front-end à l'infrastructure.",
      contactButton: "Me contacter",
      projectsButton: "Voir les projets",
      statusBadge: "Ouvert aux opportunités",
      statProjects: "Projets",
      statSkills: "Compétences",
      statLanguages: "Langues parlées",
    },
    about: {
      title: "A propos",
      items: [
        {
          title: "Developpeur Frontend",
          description:
            "Je crée des interfaces réactives et soignées qui captivent les utilisateurs grâce à un design intuitif.",
        },
        {
          title: "Developpeur Backend",
          description:
            "Je construis des systèmes évolutifs et performants ainsi que des API qui assurent des expériences fluides.",
        },
        {
          title: "DevOps",
          description:
            "Conteneurisation avec Docker, orchestration avec Kubernetes, et mise en place de pipelines CI/CD fiables. Axé sur l'infrastructure as code, l'automatisation et la stabilité des systèmes en production.",
        },
        {
          title: "Ingénieur Base de Données",
          description:
            "Conception et gestion de bases de données relationnelles et non relationnelles — MySQL, PostgreSQL, MongoDB. Expérience en modélisation de schémas, optimisation de requêtes, pipelines ETL et entrepôts de données.",
        },
        {
          title: "Data Analyst",
          description:
            "Transformer les données brutes en insights exploitables grâce à des requêtes structurées, la modélisation et la visualisation. À l'aise sur toute la chaîne de traitement, de l'ingestion à la restitution.",
        },
      ],
    },
    background: {
      title: "Parcours & Formation",
      description:
        "Fraîchement diplômé en ingénierie informatique de l'Assumption University en Thaïlande. J'ai acquis de solides bases en développement full-stack, DevOps, ingénierie des bases de données et analyse de données à travers des projets académiques et des travaux pratiques.",
    },
    experience: {
      title: "Experience",
      message:
        "Je viens de terminer mes études et je débute mon parcours professionnel. À travers mes projets académiques et personnels, j'ai développé des compétences concrètes en développement full-stack, DevOps, conception de bases de données et analyse de données. Je recherche activement mon premier poste pour appliquer ces acquis, progresser rapidement et apporter une contribution réelle dès le premier jour.",
    },
    projects: {
      title: "Projets",
      demo: "Démo",
      source: "Code",
      report: "Rapport",
      certificate: "Certificat",
      imageAlt: "Image du projet",
      localizedCards: {
        "Dictionary App": {
          title: "Application Dictionnaire",
          description:
            "Une application de dictionnaire complète développée en Kotlin avec recherche de mots, définitions et guide de prononciation.",
        },
        "Square Room": {
          title: "Pièce Carrée",
          description:
            "Un environnement 3D interactif créé avec Unity, incluant des effets visuels et une physique réaliste.",
        },
        "Amazon Clone": {
          title: "Clone d'Amazon",
          description:
            "Une plateforme e-commerce fonctionnelle qui reproduit l'interface et l'expérience utilisateur d'Amazon.",
        },
        "ODAC - Object Detection & Classification": {
          title: "ODAC - Détection et Classification d'Objets",
          description:
            "Un système basé sur l'IA pour la détection et la classification d'objets en temps réel via des caméras CCTV.",
        },
        "HopeSpring": {
          title: "HopeSpring",
          description:
            "Une plateforme de chat social où les utilisateurs se connectent et communiquent en temps réel dans un environnement communautaire.",
        },
        "Resume Builder": {
          title: "Générateur de CV",
          description:
            "Un générateur de CV full-stack alimenté par l'IA avec authentification, édition en direct, téléchargement d'image et export PDF.",
        },
        "Data Warehouse": {
          title: "Entrepôt de Données",
          description:
            "Une solution d'entreposage de données structurée pour stocker et interroger efficacement de grands volumes de données.",
        },
        "Hotel Management Network": {
          title: "Réseau Hôtelier",
          description:
            "Une topologie réseau complète conçue pour un hôtel, assurant une communication efficace entre tous les départements.",
        },
        "Network Design & Security": {
          title: "Conception Réseau & Sécurité",
          description:
            "Conception et sécurisation de l'infrastructure réseau de TechSafe Ltd — sous-réseaux, analyse Wireshark et configuration pare-feu.",
        },
      },
    },
    contact: {
      title: "Restons en contact",
      description:
        "Jeune diplômé ouvert aux postes juniors, aux stages et aux collaborations en développement full-stack, DevOps, ingénierie des bases de données ou analyse de données. N'hésitez pas à me contacter.",
      copyright: "Tous droits réservés.",
    },
  },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("portfolio-language");
    return saved === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
