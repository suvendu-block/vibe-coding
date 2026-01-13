
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  architecture: string;
  tech: string[];
  challenge: string;
  link?: string;
  image: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: 'AI Agents' | 'Automation' | 'Blockchain' | 'System Design';
  status: 'Experimental' | 'Alpha' | 'Beta';
  description: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
  icon: string;
}
