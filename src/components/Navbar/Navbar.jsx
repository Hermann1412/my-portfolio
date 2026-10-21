import React, { useState, useContext } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { ThemeContext } from "../../ThemeContext.jsx";
import { LanguageContext } from "../../LanguageContext.jsx";

const NAV_LINKS = [
  { href: "#about", key: "about" },
  { href: "#more_background", key: "background" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
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
    <div className={styles.navbarWrap}>
      <nav className={styles.navbar}>
        <a className={styles.title} href="#">Hermann</a>
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
            {NAV_LINKS.map(({ href, key }) => (
              <li key={key}>
                <a href={href} className={styles.navLink}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
            <li className={styles.divider} aria-hidden="true" />
            <li>
              <button
                type="button"
                className={`${styles.iconBtn} ${copied ? styles.copied : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  copyPortfolioLink();
                }}
                aria-label={t.nav.copyLink}
                title={copied ? t.nav.copied : t.nav.copyLink}
              >
                {copied ? "✓" : "🔗"}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles.pillBtn}
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
                className={styles.iconBtn}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleTheme();
                }}
                aria-label="Toggle theme"
                title={isDark ? t.nav.themeLight : t.nav.themeDark}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
