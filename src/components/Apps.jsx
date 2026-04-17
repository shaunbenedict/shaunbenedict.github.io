import React from 'react';
import { User, Briefcase, GraduationCap, Code2, Globe, Server, Terminal, Code, Heart, Music, MessageSquare, Award, CheckCircle, Mail, MessageCircle, Shield, Zap } from 'lucide-react';

export const AboutApp = () => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <User size={24} color="#8b5a2b" /> About S. Shaun Benedict
    </h3>
    <p style={{ lineHeight: '1.6' }}>
      Passionate AI & Software developer currently pursuing B.Tech CSE at **SRMIST**. I specialize in building intelligent agents and secure systems, with a strong focus on Python, Local LLMs, and Flutter.
    </p>
    <div className="clay" style={{ padding: '15px', marginTop: '20px', borderRadius: '15px', background: 'rgba(139, 90, 43, 0.05)' }}>
      <h4 style={{ margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Music size={18} /> Fun Fact
      </h4>
      <p style={{ margin: 0, fontSize: '14px' }}>
        I make music and love integrating Computers with Music! 🫡👌
      </p>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
       <span className="glass" style={{ padding: '5px 15px', borderRadius: '15px', fontSize: '12px' }}>Interim CTO</span>
       <span className="glass" style={{ padding: '5px 15px', borderRadius: '15px', fontSize: '12px' }}>Core Team Lead</span>
       <span className="glass" style={{ padding: '5px 15px', borderRadius: '15px', fontSize: '12px' }}>AI/ML Engineer</span>
    </div>
  </div>
);

export const MicIoTApp = () => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Briefcase size={24} color="#8b5a2b" /> Experience
    </h3>
    
    <div className="clay" style={{ padding: '15px', marginBottom: '15px', borderRadius: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>Coding Literacy Initiative</strong>
        <span style={{ fontSize: '10px', opacity: 0.6 }}>DEC 2025 — PRESENT</span>
      </div>
      <div style={{ color: '#8b5a2b', fontSize: '12px' }}>Core Team Lead / Student Mentor</div>
      <p style={{ fontSize: '12px', margin: '8px 0', opacity: 0.8 }}>Managing team coordination and mentoring students in Python programming.</p>
    </div>

    <div className="clay" style={{ padding: '15px', marginBottom: '15px', borderRadius: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>MicIoT PVT LTD</strong>
        <span style={{ fontSize: '10px', opacity: 0.6 }}>MAY 2023 — PRESENT</span>
      </div>
      <div style={{ color: '#8b5a2b', fontSize: '12px' }}>Interim Chief Technology Officer (Part-time)</div>
      <p style={{ fontSize: '12px', margin: '8px 0', opacity: 0.8 }}>Leading mobile application development and technology management strategies.</p>
    </div>
  </div>
);

export const SRMApp = () => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <GraduationCap size={24} color="#8b5a2b" /> Education
    </h3>
    <div className="clay" style={{ padding: '20px', borderRadius: '20px' }}>
      <strong>SRM Institute of Science and Technology (SRMIST)</strong>
      <div style={{ fontSize: '12px', opacity: 0.6, margin: '5px 0' }}>AUG 2025 — AUG 2029</div>
      <p style={{ fontSize: '14px' }}>B.Tech in Computer Science and Engineering</p>
      <div style={{ marginTop: '10px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '10px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Activities:</div>
        <div style={{ fontSize: '11px', opacity: 0.7 }}>Core Team Lead @ Coding Literacy Initiative</div>
      </div>
    </div>
  </div>
);

export const CertificationsApp = () => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Award size={24} color="#8b5a2b" /> Licenses & Certifications
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
      {[
        { title: "Getting Started with AI", issuer: "IBM", date: "MAR 2025" },
        { title: "4th Place - National Level Hackathon", issuer: "IIT Palakkad", date: "FEB 2025" },
        { title: "GenAI Apps with Gemini & Streamlit", issuer: "Google Cloud", date: "JUL 2025" },
        { title: "Vertex AI Gemini API Skill Badge", issuer: "Google Cloud", date: "JUL 2025" },
        { title: "AI DevCamp Outstanding Performer", issuer: "GDG London", date: "JUL 2025" },
        { title: "Technology Job Simulation", issuer: "Deloitte / Forage", date: "JUL 2025" }
      ].map((cert, i) => (
        <div key={i} className="clay" style={{ padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CheckCircle size={16} color="#27c93f" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: '600' }}>{cert.title}</div>
            <div style={{ fontSize: '11px', opacity: 0.6 }}>{cert.issuer} • {cert.date}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ProjectsApp = () => (
  <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 5px' }}>
      <Zap size={24} color="#8b5a2b" /> Projects
    </h3>
    
    <div className="clay" style={{ padding: '12px', borderRadius: '15px' }}>
      <h4 style={{ margin: '0 0 5px', display: 'flex', alignItems: 'center', gap: '5px' }}><MessageCircle size={14} /> Revital</h4>
      <p style={{ fontSize: '12px', opacity: 0.7, margin: '5px 0' }}>Interactive Streamlit app where multiple AI agents engage in dynamic debates.</p>
      <div style={{ fontSize: '10px', color: '#8b5a2b' }}>Python, Web Services API</div>
    </div>

    <div className="clay" style={{ padding: '12px', borderRadius: '15px' }}>
      <h4 style={{ margin: '0 0 5px', display: 'flex', alignItems: 'center', gap: '5px' }}><Shield size={14} /> Lol-Crypt</h4>
      <p style={{ fontSize: '12px', opacity: 0.7, margin: '5px 0' }}>Secure web-based encrypted chat system built with Streamlit and Firebase.</p>
    </div>

    <div className="clay" style={{ padding: '12px', borderRadius: '15px' }}>
      <h4 style={{ margin: '0 0 5px', display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={14} /> Mail-LLM</h4>
      <p style={{ fontSize: '12px', opacity: 0.7, margin: '5px 0' }}>Flask server with IMAP/SMTP integration for automated Gmail management.</p>
    </div>

    <div className="clay" style={{ padding: '12px', borderRadius: '15px' }}>
      <h4 style={{ margin: '0 0 5px' }}>MoodyLune</h4>
      <p style={{ fontSize: '12px', opacity: 0.7, margin: '5px 0' }}>Mental health companion app built with Flutter.</p>
    </div>
  </div>
);

export const SkillsApp = () => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Code2 size={24} color="#8b5a2b" /> Skills
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
      <div className="clay" style={{ padding: '12px', borderRadius: '12px' }}>
        <strong>Languages</strong>
        <div style={{ fontSize: '12px', opacity: 0.7 }}>Python, Flutter/Dart, Flask, Streamlit</div>
      </div>
      <div className="clay" style={{ padding: '12px', borderRadius: '12px' }}>
        <strong>AI/ML</strong>
        <div style={{ fontSize: '12px', opacity: 0.7 }}>Local LLMs, GenAI Apps, Gemini API</div>
      </div>
    </div>
  </div>
);

export const SocialApp = ({ url, name }) => {
  const isLinkedIn = name === 'LinkedIn';
  const isGitHub = name === 'GitHub';
  const isInstagram = name === 'Instagram';
  
  const accentColor = isLinkedIn ? '#0077b5' : isInstagram ? '#e4405f' : '#333';
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      background: '#f9f4f0', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '40px',
      textAlign: 'center'
    }}>
      <div style={{ 
        position: 'absolute', 
        fontSize: '200px', 
        opacity: 0.03, 
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        {name[0]}
      </div>

      <div className="clay" style={{ padding: '30px', borderRadius: '30px', zIndex: 1, maxWidth: '400px', background: 'white' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: accentColor, 
          borderRadius: '20px', 
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '40px',
          fontWeight: 'bold',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          {name[0]}
        </div>
        <h2 style={{ margin: '0 0 10px', color: '#333' }}>{name}</h2>
        <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '25px' }}>
          Launched in a secure sandbox. Please view the full profile in the official browser.
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="clay-button" style={{ background: accentColor, textDecoration: 'none', display: 'inline-block' }}>
          Launch {name} App
        </a>
      </div>
    </div>
  );
};
