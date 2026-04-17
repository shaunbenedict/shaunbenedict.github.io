import React from 'react';
import { User, Briefcase, GraduationCap, Code2, Award, Globe, Search, Monitor } from 'lucide-react';
import { AboutApp, MicIoTApp, SRMApp, SkillsApp, ProjectsApp, SocialApp, CertificationsApp } from '../components/Apps';

export const appsConfig = [
  { name: 'About', iconComponent: User },
  { name: 'Experience', iconComponent: Briefcase },
  { name: 'Education', iconComponent: GraduationCap },
  { name: 'Projects', iconComponent: Code2 },
  { name: 'Certifications', iconComponent: Award },
  { name: 'Skills', iconComponent: Code2 },
  { name: 'LinkedIn', iconComponent: Globe },
  { name: 'GitHub', iconComponent: Monitor },
  { name: 'Instagram', iconComponent: Search }
];

export const getAppContent = (appName) => {
  if (appName === 'About') return <AboutApp />;
  if (appName === 'Experience') return <MicIoTApp />;
  if (appName === 'Education') return <SRMApp />;
  if (appName === 'Projects') return <ProjectsApp />;
  if (appName === 'Certifications') return <CertificationsApp />;
  if (appName === 'Skills') return <SkillsApp />;
  if (appName === 'LinkedIn') return <SocialApp url="https://www.linkedin.com/in/shaunbenedict/" name="LinkedIn" />;
  if (appName === 'GitHub') return <SocialApp url="https://github.com/shaunbenedict" name="GitHub" />;
  if (appName === 'Instagram') return <SocialApp url="https://www.instagram.com/s.shaunbenedict/" name="Instagram" />;
  return null;
};
