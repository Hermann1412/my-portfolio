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
        "Full-stack developer and cybersecurity enthusiast focused on clean interfaces, reliable back-end systems, and practical solutions using modern web technologies.",
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
          title: "UI Designer",
          description:
            "Designing thoughtful, accessible interfaces and systems that elevate product experiences.",
        },
        {
          title: "Game Developer",
          description:
            "Exploring interactive experiences with Unity. Creating engaging gameplay and immersive worlds.",
        },
        {
          title: "Cybersecurity & Networking",
          description:
            "Hands-on experience with Kali Linux, Wireshark, Burp Suite, Nmap, and Cisco Packet Tracer for network design, security assessments, and threat analysis.",
        },
      ],
    },
    background: {
      title: "Background & Education",
      description:
        "I Have Pursuied Computer Engineering at Assumption University in Thailand. Build Strong foundation in modern tech stack, systems design, and collaborative problem-solving.",
    },
    experience: {
      title: "Experience",
      message:
        "While I am at the beginning of my professional career, I have built a strong foundation through my studies and hands-on projects. I am eager to apply my knowledge in real-world environments and continue developing the skills required in my field. The projects I have completed reflect my dedication, technical ability, and readiness to add value to your organization.",
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
      description: "Open to collaborations, internships, and interesting opportunities. Feel free to reach out.",
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
        "Developpeur full-stack et passionné de cybersécurité, axé sur des interfaces soignées, des systèmes back-end fiables et des solutions pratiques.",
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
          title: "Designer UI",
          description:
            "Je conçois des interfaces accessibles et cohérentes qui valorisent l'expérience produit.",
        },
        {
          title: "Developpeur de jeux",
          description:
            "J'explore des expériences interactives avec Unity en créant des gameplays engageants et des univers immersifs.",
        },
        {
          title: "Cybersécurité & Réseaux",
          description:
            "Expérience pratique avec Kali Linux, Wireshark, Burp Suite, Nmap et Cisco Packet Tracer pour la conception réseau, les audits de sécurité et l'analyse des menaces.",
        },
      ],
    },
    background: {
      title: "Parcours & Formation",
      description:
        "Je poursuis des études en ingénierie informatique à l'Assumption University en Thaïlande, avec une base solide en technologies modernes, architecture des systèmes et travail collaboratif.",
    },
    experience: {
      title: "Experience",
      message:
        "Bien que je sois au début de ma carrière professionnelle, j'ai construit une base solide grâce à mes études et à des projets concrets. Je suis motivé à appliquer mes connaissances dans des contextes réels et à continuer de développer les compétences nécessaires à mon domaine. Les projets que j'ai réalisés reflètent ma rigueur, mes capacités techniques et ma volonté d'apporter de la valeur à votre organisation.",
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
        "Ouvert aux collaborations, aux stages et aux opportunités intéressantes. N'hésitez pas à me contacter.",
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
