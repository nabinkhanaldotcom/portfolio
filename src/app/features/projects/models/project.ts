export interface Project {
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
  status: 'Live' | 'In Progress' | 'Planned';
  featured?: boolean;
}