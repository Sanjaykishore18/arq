import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav style={{
        ...(isMobile ? styles.mobnav : styles.nav),
      }}>
        <div style={styles.brand}>
          <div style={styles.logoContainer}>
            <img src="/logo.png" alt="Quizzards Logo" style={styles.logoImage} />
          </div>
        </div>

        {isMobile && (
          <div style={styles.hamburger} onClick={() => setMenuOpen(true)}>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
          </div>
        )}

        {!isMobile && (
          <div style={styles.links}>
            {links.map((item, i) => (
              <a key={i} href={item.to} className="nav-link" style={styles.navLink}>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          {menuOpen && (
            <div 
              style={styles.backdrop}
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          <div style={{
            ...styles.sidebar,
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            opacity: menuOpen ? 1 : 0,
          }}>
            <div style={styles.sidebarHeader}>
              <div style={styles.sidebarLogo}>
                <span style={styles.sidebarLogoIcon}>🧠</span>
                <span>Quizzards</span>
              </div>
              <button style={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                ×
              </button>
            </div>

            <div style={styles.sidebarContent}>
              {links.map((item, i) => (
                <a
                  key={i}
                  href={item.to}
                  className="sidebar-link"
                  style={styles.sidebarLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      {/* CSS Animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

          * {
            font-family: 'Inter', sans-serif;
          }

          .nav-link {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            overflow: hidden;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }

          .nav-link:hover::before {
            left: 100%;
          }

          .nav-link:hover {
            transform: translateY(-3px);
            color: #667eea !important;
            text-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
          }

          .sidebar-link {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .sidebar-link:hover {
            transform: translateX(15px) scale(1.05);
            color: #ffd700 !important;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 12px 16px !important;
          }

          @media (max-width: 768px) {
            .hero-stats {
              flex-direction: column;
              gap: 15px;
            }
          }
        `}
      </style>
    </>
  );
}

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
];

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "15px 40px",
    background: "rgba(102, 126, 234, 0.1)",
    backdropFilter: "blur(20px)",
    borderRadius: "50px",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    transition: "all 0.4s ease",
    position: "relative",
    zIndex: 10,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  },
  mobnav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 25px",
    background: "rgba(102, 126, 234, 0.1)",
    backdropFilter: "blur(20px)",
    margin: "20px",
    borderRadius: "25px",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    position: "relative",
    zIndex: 10,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logoContainer: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    cursor: "pointer",
    padding: "10px",
    background: "rgba(102, 126, 234, 0.2)",
    borderRadius: "12px",
    transition: "all 0.3s ease",
  },
  hamburgerLine: {
    width: "25px",
    height: "3px",
    backgroundColor: "#667eea",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    fontSize: "16px",
    padding: "10px 18px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(102, 126, 234, 0.1)",
    border: "1px solid rgba(102, 126, 234, 0.2)",
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    zIndex: 998,
  },
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "300px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "-10px 0 30px rgba(0,0,0,0.3)",
    zIndex: 999,
    transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    display: "flex",
    flexDirection: "column",
  },
  sidebarHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  },
  sidebarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
  },
  sidebarLogoIcon: {
    fontSize: "24px",
  },
  closeBtn: {
    fontSize: "30px",
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sidebarContent: {
    flex: 1,
    padding: "30px 25px",
  },
  sidebarLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    margin: "15px 0",
    padding: "12px 16px",
    fontSize: "16px",
    borderRadius: "12px",
  },
};