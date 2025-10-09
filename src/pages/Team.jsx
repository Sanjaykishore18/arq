import React, { useState } from 'react';

// BI Team
import biAssociate1 from "../photos/BI associate 1.webp";
import biAssociate2 from "../photos/BI associate 2.webp";
import biCoLead from "../photos/BI co lead.webp";
import biLead from "../photos/BI lead.webp";

// Management Team (excluding CEO/HR/President/VP/Secretary)
import managementAssociate2 from "../photos/management Associate 2.webp";
import managementCoLead from "../photos/management colead.webp";
import managementLead from "../photos/Management Lead.webp";
import managementAssociate1 from "../photos/Management-Associate 1.webp";

// Cinematography Team
import cinematographyAssociate from "../photos/cinimotography associate 2.webp";
import cinematographyAssociate2 from "../photos/cinematography associate 2.webp";
import cinematographyLead1 from "../photos/cinematography lead 1.webp";
import cinematographyLead from "../photos/cinematography lead.webp";

// Cloud Computing Team
import cloudComputingAssociate1 from "../photos/cloud computing associate 1.webp";
import cloudComputingAssociate2 from "../photos/cloud computing associate 2.webp";
import cloudComputingCoLead from "../photos/Cloud computing co Lead.webp";
import cloudComputingLead from "../photos/cloud computing lead.webp";

// Data Analytics / ML Team
import dataAnalyticsAssociate1 from "../photos/data analytics assosiate 1.webp";
import dataAnalyticsAssociate2 from "../photos/data analytics associate 2.webp";
import dataAnalyticsCoLead from "../photos/Data analytics co lead.webp";
import dataAnalyticsLead from "../photos/Data Analytics Lead.webp";

import mlAssociate1 from "../photos/ml associate 1.webp";
import mlAssociate2 from "../photos/ml  associate 2.webp";
import mlCoLead from "../photos/ml colead.webp";
import mlLead from "../photos/ml lead.webp";

// Data Security Team
import dataSecurityAssociate from "../photos/Data security associate.webp";
import dataSecurityAssociate2 from "../photos/data security associate 2.webp";
import dataSecurityCoLead from "../photos/data Security co lead.webp";
import dataSecurityLead from "../photos/data Security lead.webp";

// Design & Media Team
import designAndMediaAssociate from "../photos/design and media associate.webp";
import designAndMediaAssociate1 from "../photos/design and media associate 1.webp";
import designAssociate1 from "../photos/design associate 1.webp";
import designCoLead from "../photos/design co lead.webp";
import designLead2 from "../photos/design lead 2.webp";
import designLead from "../photos/Design lead.webp";

// Event Team
import eventAssociate from "../photos/event associate.webp";
import eventCoLead from "../photos/event co lead.webp";
import eventDomainAssociate from "../photos/event domain associate.webp";
import eventLead from "../photos/event lead.webp";

// IOT Team
import iotAssociate from "../photos/IOT associate.webp";
import iotAssociate1 from "../photos/IOT associate 1.webp";
import iotLead from "../photos/IOT lead.webp";

// PR / Public Relations Team
import prAssociate1 from "../photos/PR associate 1.webp";
import prAssociate2 from "../photos/PR associate 2.webp";
import prAssociate3 from "../photos/PR associate 3.webp";
import prAssociate4 from "../photos/PR associate 4.webp";
import prCoLead from "../photos/PR colead.webp";
import prLead from "../photos/PR lead.webp";

// Web Development Team
import webDevAssociate1 from "../photos/web dev assosciate 1.webp";
import webDevAssociate2 from "../photos/web dev associate 2.webp";
import webDevLead from "../photos/web dev lead.webp";
import webDevCoLead from "../photos/web development colead .webp";

// Executive Team
import president from "../photos/president.webp";
import hr from "../photos/HR.webp";
import ceo from "../photos/CEO.webp";
import vicePresident from "../photos/vice president.webp";
import secretary from "../photos/secretary.webp";

import { 
  Code, Database, Shield, Smartphone, Palette, Video, Gamepad2, 
  Zap, Target, Users, Linkedin, ChevronLeft, ChevronRight,
  BarChart3, Cloud, Camera, Calendar, Megaphone
} from 'lucide-react';

export default function TeamPage() {
  // State for tracking current person in each domain
  const [domainIndex, setDomainIndex] = useState({
    webdev: 0,
    dataanalytics: 0,
    machinelearning: 0,
    datasecurity: 0,
    cloudcomputing: 0,
    design: 0,
    cinematography: 0,
    iot: 0,
    bi: 0,
    management: 0,
    event: 0,
    pr: 0
  });

  // Executive team data
  const executives = [
    {
      name: "Sabarish P",
      position: "President",
      image: president,
      linkedin: "https://www.linkedin.com/in/sabarish-p-5170832a2/"
    },
    {
      name: "Kumaran D",
      position: "Vice President", 
      image: vicePresident,
      linkedin: "https://www.linkedin.com/in/kumaran-d-106893270/"
    },
      {
      name: "Pritvi R",
      position: "CEO",
      image: ceo,
      linkedin: "https://linkedin.com/in/pritvir"
    },
    {
      name: "Harini S",
      position: "Secretary",
      image: secretary,
      linkedin: "https://www.linkedin.com/in/harini-s-bba9112a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Hannah James",
      position: "HR",
      image: hr,
      linkedin: "https://www.linkedin.com/in/hannah-james-36129b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  // Domain teams data with actual imported images
  const domains = {
    webdev: {
      title: "Web Development",
      icon: Code,
      color: "#3b82f6",
      members: [
        { name: "Web Dev Lead", role: "Lead", image: webDevLead, linkedin: "https://www.linkedin.com/in/sanjaykishore-t-0931942a2/" },
        { name: "Web Dev Co-Lead", role: "Co-Lead", image: webDevCoLead, linkedin: "https://www.linkedin.com/in/shalini-k-39a1912a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
        { name: "Web Dev Associate ", role: "Associate", image: webDevAssociate1, linkedin: "https://www.linkedin.com/in/sanjaykumar-sg-3b441a330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Web Dev Associate ", role: "Associate", image: webDevAssociate2, linkedin: "https://www.linkedin.com/in/lejo-c-436a94318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
      ]
    },
    dataanalytics: {
      title: "Data Analytics",
      icon: Database,
      color: "#10b981",
      members: [
        { name: "Data Analytics Lead", role: "Lead", image: dataAnalyticsLead, linkedin: "https://linkedin.com/in/dataanalyticlead" },
        { name: "Data Analytics Co-Lead", role: "Co-Lead", image: dataAnalyticsCoLead, linkedin: "https://www.linkedin.com/in/sushmitha-murugan-5560832a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Data Analytics Associate ", role: "Associate", image: dataAnalyticsAssociate1, linkedin: "https://linkedin.com/in/dataanalyticsassociate1" },
        { name: "Data Analytics Associate ", role: "Associate", image: dataAnalyticsAssociate2, linkedin: "https://linkedin.com/in/dataanalyticsassociate2" }
      ]
    },
    machinelearning: {
      title: "Machine Learning",
      icon: Target,
      color: "#f97316",
      members: [
        { name: "ML Lead", role: "Lead", image: mlLead, linkedin: "https://www.linkedin.com/in/sakthi-mukesh-t?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "ML Co-Lead", role: "Co-Lead", image: mlCoLead, linkedin: "https://www.linkedin.com/in/ragulg06/" },
        { name: "ML Associate ", role: "Associate", image: mlAssociate1, linkedin: "https://linkedin.com/in/mlassociate1" },
        { name: "ML Associate ", role: "Associate", image: mlAssociate2, linkedin: "https://linkedin.com/in/mlassociate2" }
      ]
    },
    datasecurity: {
      title: "Data Security",
      icon: Shield,
      color: "#ef4444",
      members: [
        { name: "Data Security Lead", role: "Lead", image: dataSecurityLead, linkedin: "https://www.linkedin.com/in/tamilselvanak/" },
        { name: "Data Security Co-Lead", role: "Co-Lead", image: dataSecurityCoLead, linkedin: "https://www.linkedin.com/in/thejaashree-t-3754b1296?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
        { name: "Data Security Associate ", role: "Associate", image: dataSecurityAssociate, linkedin: "https://www.linkedin.com/in/manikandannx0" },
        { name: "Data Security Associate ", role: "Associate", image: dataSecurityAssociate2, linkedin: "https://linkedin.com/in/datasecurityassociate2" }
      ]
    },
    cloudcomputing: {
      title: "Cloud Computing",
      icon: Cloud,
      color: "#06b6d4",
      members: [
        { name: "Cloud Computing Lead", role: "Lead", image: cloudComputingLead, linkedin: "https://www.linkedin.com/in/sarathkumar27/" },
        { name: "Cloud Computing Co-Lead", role: "Co-Lead", image: cloudComputingCoLead, linkedin: "https://www.linkedin.com/in/giridharan-r-07a3b52a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Cloud Computing Associate ", role: "Associate", image: cloudComputingAssociate1, linkedin: "https://linkedin.com/in/cloudcomputingassociate1" },
        { name: "Cloud Computing Associate ", role: "Associate", image: cloudComputingAssociate2, linkedin: "linkedin.com/in/Nandupriya317"}
      ]
    },
    design: {
      title: "Design & Media",
      icon: Palette,
      color: "#f59e0b",
      members: [
        { name: "Design Lead", role: "Lead", image: designLead, linkedin: "https://linkedin.com/in/designlead" },
        { name: "Video Editing Lead", role: "Lead", image: designLead2, linkedin: "https://www.linkedin.com/in/mohammed-imran-j-522826325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Design Co-Lead", role: "Co-Lead", image: designCoLead, linkedin: "https://linkedin.com/in/designcolead" },
        { name: "Video Editing  Associate ", role: "Associate", image: designAssociate1, linkedin: "https://www.linkedin.com/in/nishanthanv200" },
        { name: "Design & Media Associate", role: "Associate", image: designAndMediaAssociate, linkedin: "https://linkedin.com/in/designmediaassociate" },
        { name: "Design & Media Associate ", role: "Associate", image: designAndMediaAssociate1, linkedin: "https://linkedin.com/in/designmediaassociate1" }
      ]
    },
    cinematography: {
      title: "Cinematography",
      icon: Camera,
      color: "#ec4899",
      members: [
        { name: "Cinematography Lead", role: "Lead", image: cinematographyLead, linkedin: "https://linkedin.com/in/cinematographylead" },
        { name: "Cinematography Lead ", role: "Co-Lead", image: cinematographyLead1, linkedin: "https://linkedin.com/in/cinematographylead1" },
        { name: "Cinematography Associate", role: "Associate", image: cinematographyAssociate, linkedin: "https://linkedin.com/in/cinematographyassociate" },
        { name: "Cinematography Associate ", role: "Associate", image: cinematographyAssociate2, linkedin: "https://linkedin.com/in/cinematographyassociate2" }
      ]
    },
    iot: {
      title: "IoT & Hardware",
      icon: Zap,
      color: "#84cc16",
      members: [
        { name: "IoT Lead", role: "Lead", image: iotLead, linkedin: "https://linkedin.com/in/iotlead" },
        { name: "IoT Associate", role: "Associate", image: iotAssociate, linkedin: "https://linkedin.com/in/iotassociate" },
        { name: "IoT Associate ", role: "Associate", image: iotAssociate1, linkedin: "https://linkedin.com/in/iotassociate1" }
      ]
    },
    bi: {
      title: "Business Intelligence",
      icon: BarChart3,
      color: "#8b5cf6",
      members: [
        { name: "BI Lead", role: "Lead", image: biLead, linkedin: "https://linkedin.com/in/bilead" },
        { name: "BI Co-Lead", role: "Co-Lead", image: biCoLead, linkedin: "https://www.linkedin.com/in/darshan-r-7070872a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "BI Associate ", role: "Associate", image: biAssociate1, linkedin: "https://linkedin.com/in/biassociate1" },
        { name: "BI Associate ", role: "Associate", image: biAssociate2, linkedin: "https://linkedin.com/in/biassociate2" }
      ]
    },
    management: {
      title: "Management",
      icon: Users,
      color: "#a855f7",
      members: [
        { name: "Management Lead", role: "Lead", image: managementLead, linkedin: "https://www.linkedin.com/in/jananirajan30" },
        { name: "Management Co-Lead", role: "Co-Lead", image: managementCoLead, linkedin: "https://www.linkedin.com/in/tanisha-shyamkumar-3561912a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Management Associate ", role: "Associate", image: managementAssociate1, linkedin: "https://linkedin.com/in/managementassociate1" },
        { name: "Management Associate ", role: "Associate", image: managementAssociate2, linkedin: "https://linkedin.com/in/managementassociate2" }
      ]
    },
    event: {
      title: "Event Management",
      icon: Calendar,
      color: "#06b6d4",
      members: [
        { name: "Event Lead", role: "Lead", image: eventLead, linkedin: "https://linkedin.com/in/eventlead" },
        { name: "Event Co-Lead", role: "Co-Lead", image: eventCoLead, linkedin: "https://linkedin.com/in/eventcolead" },
        { name: "Event Associate", role: "Associate", image: eventAssociate, linkedin: "https://www.linkedin.com/in/ramya-j-t-93238632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Event Associate", role: "Associate", image: eventDomainAssociate, linkedin: "https://linkedin.com/in/eventdomainassociate" }
      ]
    },
    pr: {
      title: "Public Relations",
      icon: Megaphone,
      color: "#f59e0b",
      members: [
        { name: "PR Lead", role: "Lead", image: prLead, linkedin: "https://linkedin.com/in/prlead" },
        { name: "PR Co-Lead", role: "Co-Lead", image: prCoLead, linkedin: "https://www.linkedin.com/in/suhirtha-m-p-37a0842a2" },
        { name: "PR Associate ", role: "Associate", image: prAssociate1, linkedin: "https://linkedin.com/in/prassociate1" },
        { name: "PR Associate ", role: "Associate", image: prAssociate2, linkedin: "https://linkedin.com/in/prassociate2" },
        { name: "PR Associate ", role: "Associate", image: prAssociate3, linkedin: "https://linkedin.com/in/prassociate3" },
        { name: "PR Associate ", role: "Associate", image: prAssociate4, linkedin: "https://www.linkedin.com/in/deiva-lakshmee-ai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
      ]
    }
  };

  // Navigation functions for domains
  const handleNext = (domain) => {
    setDomainIndex(prev => ({
      ...prev,
      [domain]: (prev[domain] + 1) % domains[domain].members.length
    }));
  };

  const handlePrev = (domain) => {
    setDomainIndex(prev => ({
      ...prev,
      [domain]: prev[domain] === 0 ? domains[domain].members.length - 1 : prev[domain] - 1
    }));
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .team-page {
          min-height: 100vh;
          background: #0b0b0e; /* Black background */
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          padding: 4rem 0;
          position: relative;
          overflow-x: hidden;
        }

        /* Subtle flowing background on black */
        .team-page::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background:
            radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.08) 20%, transparent 21%),
            radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.06) 15%, transparent 16%),
            radial-gradient(circle at 20% 70%, rgba(168, 85, 247, 0.07) 18%, transparent 19%);
          animation: float 20s ease-in-out infinite;
          z-index: -1;
        }

        .team-page::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(45deg, transparent 49%, rgba(168, 85, 247, 0.04) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(168, 85, 247, 0.04) 50%, transparent 51%);
          background-size: 60px 60px;
          animation: patternSlide 25s linear infinite;
          z-index: -1;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }

        .page-header {
          text-align: center;
          margin-bottom: 5rem;
          animation: fadeInDown 1s ease-out;
          position: relative;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
          border-radius: 50px;
          animation: breathe 3s ease-in-out infinite;
        }

        .page-title {
          font-size: 4rem;
          font-weight: 900;
          color: #f8fafc; /* near-white on black */
          margin-bottom: 1rem;
          text-shadow: 2px 2px 6px rgba(168, 85, 247, 0.15);
          animation: flipInY 1.5s ease-out;
          position: relative;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: #cbd5e1; /* muted light */
          max-width: 48rem;
          margin: 0 auto;
          font-weight: 500;
          animation: slideInUp 2s ease-out;
        }

        .executives-section {
          margin-bottom: 8rem;
          animation: fadeIn 1.5s ease-out;
          position: relative;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #f8fafc;
          text-align: center;
          margin-bottom: 4rem;
          text-shadow: 1px 1px 2px rgba(168, 85, 247, 0.15);
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
          border-radius: 50px;
        }

        .executives-flow {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 3rem;
          justify-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .executives-flow .executive-member:nth-child(1) {
          grid-column: 1 / 3;
        }

        .executives-flow .executive-member:nth-child(2) {
          grid-column: 3 / 5;
        }

        .executives-flow .executive-member:nth-child(3) {
          grid-column: 5 / 7;
        }

        .executives-flow .executive-member:nth-child(4) {
          grid-column: 2 / 4;
        }

        .executives-flow .executive-member:nth-child(5) {
          grid-column: 4 / 6;
        }

        /* Executive member as a white frame card */
        .executive-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          animation: slideInUp 1s ease-out;
          transition: all 0.4s ease;
          flex: 0 0 auto;
          max-width: 280px;
          width: 100%;
          background: #ffffff; /* white frame */
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 16px;
          padding: 1.25rem 1.25rem 1.5rem;
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.15), 0 6px 14px rgba(0,0,0,0.25);
        }

        .executive-member:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 14px 40px rgba(168, 85, 247, 0.22), 0 10px 18px rgba(0,0,0,0.35);
        }

        .member-profile {
          position: relative;
          margin-bottom: 1.2rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* White circular button with lilac hover */
        .linkedin-btn {
          position: absolute;
          top: 0.25rem;
          right: 0.25rem;
          width: 2.5rem;
          height: 2.5rem;
          background: #ffffff; /* white button */
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          text-decoration: none;
        }

        .linkedin-btn:hover {
          background: #a855f7; /* lilac fill on hover */
          transform: scale(1.08) rotateZ(360deg);
          box-shadow: 0 8px 22px rgba(168, 85, 247, 0.35);
          border-color: transparent;
        }

        .linkedin-btn svg {
          width: 1.25rem;
          height: 1.25rem;
          color: #0b0b0e; /* dark icon on white */
          transition: color 0.3s ease;
        }

        .linkedin-btn:hover svg {
          color: #ffffff; /* white on lilac */
        }

        /* White circular frame for images */
        .member-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid #ffffff; /* white frame */
          outline: 2px solid rgba(168, 85, 247, 0.35); /* lilac outline for depth */
          transition: all 0.4s ease;
          background: #fff;
        }

        .executive-member:hover .member-image {
          outline-color: rgba(168, 85, 247, 0.6);
          transform: scale(1.04);
          box-shadow: 0 15px 35px rgba(168, 85, 247, 0.25);
        }

        .member-info {
          background: transparent;
          padding: 0;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0b0b0e; /* dark on white card */
          margin-bottom: 0.35rem;
          transition: all 0.3s ease;
        }

        .executive-member:hover .member-name {
          color: #6b21a8; /* deeper lilac */
          transform: translateY(-1px);
        }

        .member-role {
          font-size: 0.95rem;
          color: #7c3aed; /* lilac text on white */
          font-weight: 700;
          position: relative;
        }

        .member-role::before {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: #a855f7;
          border-radius: 50px;
          transition: width 0.3s ease;
        }

        .executive-member:hover .member-role::before {
          width: 60px;
        }

        .domains-section {
          animation: fadeIn 2s ease-out;
          position: relative;
        }

        .domains-flow {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 5rem 4rem;
          margin-top: 2rem;
        }

        /* Each domain area as a white frame card */
        .domain-area {
          position: relative;
          transition: all 0.4s ease;
          animation: slideInUp 1.5s ease-out;
          padding: 1.25rem;
          background: #ffffff; /* white frame */
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.15), 0 6px 14px rgba(0,0,0,0.25);
        }

        .domain-area:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 40px rgba(168, 85, 247, 0.22), 0 10px 18px rgba(0,0,0,0.35);
        }

        .domain-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 2px solid rgba(168, 85, 247, 0.2);
          position: relative;
        }

        .domain-header::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #a855f7;
          transition: width 0.4s ease;
        }

        .domain-area:hover .domain-header::after {
          width: 100%;
        }

        /* White circular icon frame with lilac glyph */
        .domain-icon {
          width: 3rem;
          height: 3rem;
          background: #ffffff; /* white */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.35);
        }

        .domain-area:hover .domain-icon {
          transform: rotateY(180deg) scale(1.06);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.35);
        }

        .domain-icon svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #7c3aed; /* lilac icon on white */
        }

        .domain-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0b0b0e; /* dark on white frame */
          transition: all 0.3s ease;
        }

        .domain-area:hover .domain-title {
          color: #6b21a8;
        }

        .member-showcase {
          position: relative;
          text-align: center;
          background: transparent;
          padding: 0.75rem 0;
        }

        .navigation-arrows {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        /* White circular nav buttons */
        .nav-btn {
          width: 2.5rem;
          height: 2.5rem;
          background: #ffffff;
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .nav-btn:hover {
          background: #a855f7;
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.35);
          border-color: transparent;
        }

        .nav-btn svg {
          width: 1.25rem;
          height: 1.25rem;
          color: #0b0b0e; /* dark on white */
          transition: color 0.3s ease;
        }

        .nav-btn:hover svg {
          color: #ffffff;
        }

        .nav-btn-left { left: -1.25rem; }
        .nav-btn-right { right: -1.25rem; }

        /* White circular frame for domain member image */
        .domain-member-image {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 1.25rem;
          display: block;
          border: 6px solid #ffffff; /* white frame */
          outline: 2px solid rgba(168, 85, 247, 0.35);
          transition: all 0.4s ease;
          background: #fff;
        }

        .domain-area:hover .domain-member-image {
          outline-color: rgba(168, 85, 247, 0.6);
          transform: scale(1.04);
          box-shadow: 0 15px 35px rgba(168, 85, 247, 0.25);
        }

        /* Role pill on white card */
        .role-indicator {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(168, 85, 247, 0.12);
          color: #7c3aed;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 800;
          margin-bottom: 0.85rem;
          border: 1px solid rgba(168, 85, 247, 0.35);
          position: relative;
          overflow: hidden;
        }

        .role-indicator::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          transition: left 0.6s ease;
        }

        .domain-area:hover .role-indicator::before {
          left: 100%;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -15px) rotate(2deg); }
          66% { transform: translate(-10px, 10px) rotate(-1deg); }
        }

        @keyframes patternSlide {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        @keyframes breathe {
          0%, 100% { transform: translateX(-50%) scaleX(1); opacity: 0.7; }
          50% { transform: translateX(-50%) scaleX(1.2); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flipInY {
          from { opacity: 0; transform: rotateY(-90deg); }
          to { opacity: 1; transform: rotateY(0deg); }
        }

        /* Responsive tweaks */
        @media (max-width: 1200px) {
          .domains-flow { gap: 4rem 3rem; }
        }

        @media (max-width: 768px) {
          .team-page { padding: 2rem 0; }
          .page-title { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .page-header { margin-bottom: 4rem; }
          .executives-section { margin-bottom: 6rem; }
          .executives-flow { 
            grid-template-columns: 1fr; 
            gap: 3rem; 
            max-width: none;
          }
          .executives-flow .executive-member:nth-child(1),
          .executives-flow .executive-member:nth-child(2),
          .executives-flow .executive-member:nth-child(3),
          .executives-flow .executive-member:nth-child(4),
          .executives-flow .executive-member:nth-child(5) {
            grid-column: 1;
          }
          .domains-flow { grid-template-columns: 1fr; gap: 4rem 0; margin-top: 1rem; }
          .domain-area { padding: 1rem; }
          .member-image { width: 150px; height: 150px; }
          .domain-member-image { width: 140px; height: 140px; }
          .nav-btn-left { left: -1rem; }
          .nav-btn-right { right: -1rem; }
          .executive-member { max-width: 250px; }
          .domain-header { margin-bottom: 2rem; padding-bottom: 1rem; }
          .member-showcase { padding: 0.5rem 0; }
        }

        @media (max-width: 480px) {
          .page-title { font-size: 2rem; }
          .section-title { font-size: 1.75rem; }
          .member-image { width: 120px; height: 120px; }
          .domain-member-image { width: 110px; height: 110px; }
          .executives-flow { gap: 2.5rem; }
          .domains-flow { gap: 3rem 0; }
          .domain-area { padding: 0.75rem; }
        }
      `}</style>

      <div className="team-page">
        <div className="container">
          {/* Page Header */}
          <div className="page-header">
            <h1 className="page-title">Our Team</h1>
            <p className="page-subtitle">
              Meet the passionate individuals who drive our community forward and make innovation possible
            </p>
          </div>

          {/* Executive Section - 3-2 Grid Layout with Centered Bottom Row */}
          <div className="executives-section">
            <h2 className="section-title">Executive Team</h2>
            <div className="executives-flow">
              {executives.map((executive, index) => (
                <div key={index} className="executive-member">
                  <div className="member-profile">
                    <a 
                      href={executive.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="linkedin-btn"
                    >
                      <Linkedin />
                    </a>
                    <img 
                      src={executive.image} 
                      alt={executive.name}
                      className="member-image"
                    />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{executive.name}</h3>
                    <p className="member-role">{executive.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Domain Teams Section - Organic Grid */}
          <div className="domains-section">
            <h2 className="section-title">Domain Teams</h2>
            <div className="domains-flow">
              {Object.entries(domains).map(([domainKey, domain]) => {
                const currentMember = domain.members[domainIndex[domainKey]];
                const Icon = domain.icon;
                
                return (
                  <div key={domainKey} className="domain-area">
                    <div className="domain-header">
                      <div className="domain-icon">
                        <Icon />
                      </div>
                      <h3 className="domain-title">{domain.title}</h3>
                    </div>
                    
                    <div className="member-showcase">
                      {domain.members.length > 1 && (
                        <>
                          <div className="navigation-arrows nav-btn-left">
                            <button 
                              className="nav-btn"
                              onClick={() => handlePrev(domainKey)}
                            >
                              <ChevronLeft />
                            </button>
                          </div>
                          <div className="navigation-arrows nav-btn-right">
                            <button 
                              className="nav-btn"
                              onClick={() => handleNext(domainKey)}
                            >
                              <ChevronRight />
                            </button>
                          </div>
                        </>
                      )}
                      
                      <a 
                        href={currentMember.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="linkedin-btn"
                      >
                        <Linkedin />
                      </a>
                      
                      <img 
                        src={currentMember.image} 
                        alt={currentMember.name}
                        className="domain-member-image"
                      />
                      <div className="role-indicator">{currentMember.role}</div>
                      <h4 className="member-name">{currentMember.name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
