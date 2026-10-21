import React, { useState, useContext } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { ThemeContext } from "../../ThemeContext.jsx";
import { LanguageContext } from "../../LanguageContext.jsx";

const NAV_LINKS = [
  { href: "#about", key: "about", file: "about.jsx" },
  { href: "#more_background", key: "background", file: "background.json" },
  { href: "#experience", key: "experience", file: "experience.ts" },
  { href: "#projects", key: "projects", file: "projects.tsx" },
  { href: "#contact", key: "contact", file: "contact.sh" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  const copyPortfolioLink = async () => {
    const cleanUrl = "https://hermann1412.github.io/my-portfolio/";

    try {
      await navigator.clipboard.writeText(cleanUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#">
        <span className={styles.prompt}>~/</span>hermann
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map(({ href, key, file }) => (
            <li key={key}>
              <a href={href} className={styles.tab}>
                {t.nav[key]}
                <span className={styles.ext}>{file}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
              onClick={(event) => {
                event.stopPropagation();
                copyPortfolioLink();
              }}
            >
              {copied ? `✓ ${t.nav.copied}` : `$ ${t.nav.copyLink}`}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.langBtn}
              onClick={(event) => {
                event.stopPropagation();
                toggleLanguage();
              }}
              aria-label={t.nav.languageToggle}
            >
              {language === "en" ? "FR" : "EN"}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.themeBtn}
              onClick={(event) => {
                event.stopPropagation();
                toggleTheme();
              }}
              aria-label="Toggle theme"
            >
              {isDark ? `☀ ${t.nav.themeLight}` : `● ${t.nav.themeDark}`}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
