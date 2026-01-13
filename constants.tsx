
import React from 'react';
import { Bot, Cpu, Workflow, Database, Shield, Layers, Code2, Globe } from 'lucide-react';
import { Project, LabExperiment, SkillGroup } from './types';

export const NAV_LINKS = [
  { label: 'System', path: '/' },
  { label: 'Cognition', path: '/about' },
  { label: 'Architecture', path: '/skills' },
  { label: 'Deployments', path: '/projects' },
  { label: 'Lab', path: '/lab' },
  { label: 'Connect', path: '/contact' }
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-code-editor',
    title: 'Aether: AI-Native IDE Core',
    description: 'A headless code editor engine optimized for LLM context injection and real-time AST manipulation.',
    problem: 'Standard editors treat AI as an add-on, leading to high latency and poor context awareness for large-scale backend systems.',
    architecture: 'Built with a Rust-based core, Node.js orchestration layer, and a WebSocket-driven event bus for real-time collaboration.',
    tech: ['Node.js', 'TypeScript', 'LSP', 'Tree-sitter', 'Redis'],
    challenge: 'Implementing high-performance diffing algorithms that preserve code integrity while allowing AI agents to perform complex multi-file refactors.',
    image: 'https://picsum.photos/seed/aether/1200/600'
  },
  {
    id: 'agentic-backend',
    title: 'Nexus Agent Orchestrator',
    description: 'Distributed backend system that manages swarms of AI agents using n8n and specialized Node.js worker nodes.',
    problem: 'Managing state across multiple autonomous agents leads to race conditions and "hallucination loops" in business workflows.',
    architecture: 'Event-driven architecture using RabbitMQ for reliable messaging and MongoDB for state persistence across agent steps.',
    tech: ['n8n', 'Express.js', 'MongoDB', 'RabbitMQ', 'OpenAI SDK'],
    challenge: 'Designing a robust retry-and-repair mechanism that allows agents to self-correct during failure cycles without manual intervention.',
    image: 'https://picsum.photos/seed/nexus/1200/600'
  },
  {
    id: 'blockchain-automation',
    title: 'Trustless Ledger Bridge',
    description: 'Blockchain-integrated automation service that triggers n8n workflows based on smart contract events.',
    problem: 'Bridging the gap between deterministic blockchain state and asynchronous real-world APIs with high reliability.',
    architecture: 'Uses Ethers.js for chain listeners and a secure Express gateway with signature verification for off-chain execution.',
    tech: ['Solidity', 'Ethers.js', 'Express', 'n8n', 'PostgreSQL'],
    challenge: 'Handling chain re-organizations and maintaining idempotent execution of automated backend workflows.',
    image: 'https://picsum.photos/seed/ledger/1200/600'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Cognition (AI)',
    skills: ['Agentic Architectures', 'Prompt Engineering', 'RAG Pipelines', 'Vector Databases', 'LangChain'],
    icon: 'Bot'
  },
  {
    name: 'Core Backend',
    skills: ['Node.js', 'Express.js', 'Microservices', 'API Design', 'Performance Tuning'],
    icon: 'Cpu'
  },
  {
    name: 'Orchestration',
    skills: ['n8n Workflows', 'Event-Driven Systems', 'Docker', 'CI/CD Pipelines', 'Automation'],
    icon: 'Workflow'
  },
  {
    name: 'Storage & Logic',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Auth0 / JWT', 'Complex Data Modeling'],
    icon: 'Database'
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-01',
    title: 'Self-Optimizing Database Query Agent',
    category: 'AI Agents',
    status: 'Experimental',
    description: 'An autonomous agent that monitors slow queries in MongoDB and suggests index optimizations or refactors code automatically.'
  },
  {
    id: 'exp-02',
    title: 'Zero-Knowledge Auth Bridge',
    category: 'Blockchain',
    status: 'Alpha',
    description: 'Exploring trustless backend authentication using ZK-proofs to verify user identity without revealing sensitive data.'
  },
  {
    id: 'exp-03',
    title: 'Infinite Automation Loops with n8n',
    category: 'Automation',
    status: 'Beta',
    description: 'A study on recursive n8n workflows for complex autonomous decision-making trees in enterprise systems.'
  }
];
