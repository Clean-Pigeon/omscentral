import { PartialModelObject as PMO } from 'objection';

import { Course } from '../../src/models';

// https://omscs.gatech.edu/current-courses

export const courses: PMO<Course>[] = [
  {
    id: 'CS-6035',
    department: 'CS',
    number: '6035',
    name: 'Introduction to Information Security',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6035-introduction-to-information-security`,
  },
  {
    id: 'CS-6200',
    department: 'CS',
    number: '6200',
    name: 'Introduction to Operating Systems',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6200-introduction-operating-systems`,
  },
  {
    id: 'CS-6210',
    department: 'CS',
    number: '6210',
    name: 'Advanced Operating Systems',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6210-advanced-operating-systems`,
  },
  {
    id: 'CS-6250',
    department: 'CS',
    number: '6250',
    name: 'Computer Networks',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6250-computer-networks`,
  },
  {
    id: 'CS-6262',
    department: 'CS',
    number: '6262',
    name: 'Network Security',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6262-network-security`,
  },
  {
    id: 'CS-6290',
    department: 'CS',
    number: '6290',
    name: 'High Performance Computer Architecture',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6290-high-performance-computer-architecture`,
  },
  {
    id: 'CS-6291',
    department: 'CS',
    number: '6291',
    name: 'Embedded Systems Optimization',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6291-embedded-systems-optimization`,
  },
  {
    id: 'CS-6300',
    department: 'CS',
    number: '6300',
    name: 'Software Development Process',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6300-software-development-process`,
  },
  {
    id: 'CS-6310',
    department: 'CS',
    number: '6310',
    name: 'Software Architecture & Design',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6310-software-architecture-design`,
  },
  {
    id: 'CS-6400',
    department: 'CS',
    number: '6400',
    name: 'Database Systems Concepts & Design',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design`,
  },
  {
    id: 'CS-6440',
    department: 'CS',
    number: '6440',
    name: 'Introduction to Health Informatics',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6440-intro-health-informatics`,
  },
  {
    id: 'CS-6460',
    department: 'CS',
    number: '6460',
    name: 'Educational Technology',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6460-educational-technology`,
  },
  {
    id: 'CS-6475',
    department: 'CS',
    number: '6475',
    name: 'Computational Photography',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6475-computational-photography`,
  },
  {
    id: 'CS-6476',
    department: 'CS',
    number: '6476',
    name: 'Computer Vision',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6476-computer-vision`,
  },
  {
    id: 'CS-6601',
    department: 'CS',
    number: '6601',
    name: 'Artificial Intelligence',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6601-artificial-intelligence`,
  },
  {
    id: 'CS-7641',
    department: 'CS',
    number: '7641',
    name: 'Machine Learning',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-7641-machine-learning`,
  },
  {
    id: 'CS-7642',
    department: 'CS',
    number: '7642',
    name: 'Reinforcement Learning',
    foundational: true,
    deprecated: false,
    link: `https://www.omscs.gatech.edu/cs-7642-reinforcement-learning`,
  },
  {
    id: 'CS-7646',
    department: 'CS',
    number: '7646',
    name: 'Machine Learning for Trading',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-7646-machine-learning-trading`,
  },
  {
    id: 'CSE-6242',
    department: 'CSE',
    number: '6242',
    name: 'Data & Visual Analytics',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cse-6242-data-visual-analytics`,
  },
  {
    id: 'CSE-6250',
    department: 'CSE',
    number: '6250',
    name: 'Big Data for Health Informatics',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cse-8803-special-topics-big-data-for-health-informatics`,
  },
  {
    id: 'ISYE-6402',
    department: 'ISYE',
    number: '6402',
    name: 'Time Series Analysis',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/isye-6402-time-series-analysis`,
  },
  {
    id: 'ISYE-6644',
    department: 'ISYE',
    number: '6644',
    name: 'Simulation',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6725',
    department: 'PUBP',
    number: '6725',
    name: 'Information Security Policies',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/pubp-6725-information-security-policies`,
  },
  {
    id: 'CS-6238',
    department: 'CS',
    number: '6238',
    name: 'Secure Computer Systems',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6238-secure-computer-systems`,
  },
  {
    id: 'CS-6263',
    department: 'CS',
    number: '6263',
    name: 'Introduction to Cyber Physical Systems Security',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-8803-special-topics-cyber-physical-systems`,
  },
  {
    id: 'CS-6465',
    department: 'CS',
    number: '6465',
    name: 'Computational Journalism',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-6515',
    department: 'CS',
    number: '6515',
    name: 'Introduction to Graduate Algorithms',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms`,
  },
  {
    id: 'CS-6750',
    department: 'CS',
    number: '6750',
    name: 'Human-Computer Interaction',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6750-human-computer-interaction`,
  },
  {
    id: 'CS-7450',
    department: 'CS',
    number: '7450',
    name: 'Information Visualization',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8813',
    department: 'CS',
    number: '8813',
    name: 'Malware Analysis & Defense',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6140',
    department: 'CSE',
    number: '6140',
    name: 'Computational Science & Engineering Algorithms',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6240',
    department: 'CSE',
    number: '6240',
    name: 'Web Search & Text Mining',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-6320',
    department: 'ECE',
    number: '6320',
    name: 'Power Systems Control & Operation',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'INTA-6014',
    department: 'INTA',
    number: '6014',
    name: 'Scenario & Path Gathering',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'INTA-8803',
    department: 'INTA',
    number: '8803',
    name: 'Data Analytics & Security',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6404',
    department: 'ISYE',
    number: '6404',
    name: 'Nonparametric Data Analysis',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6413',
    department: 'ISYE',
    number: '6413',
    name: 'Design & Analysis of Experiments',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6416',
    department: 'ISYE',
    number: '6416',
    name: 'Computational Statistics',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6420',
    department: 'ISYE',
    number: '6420',
    name: 'Bayesian Statistics',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/isye-6420-bayesian-statistics`,
  },
  {
    id: 'ISYE-6501',
    department: 'ISYE',
    number: '6501',
    name: 'Introduction to Analytics Modeling',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/isye-6501-intro-analytics-modeling`,
  },
  {
    id: 'ISYE-6650',
    department: 'ISYE',
    number: '6650',
    name: 'Probabilistic Models',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-7406',
    department: 'ISYE',
    number: '7406',
    name: 'Data Mining & Statistical Learning',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6111',
    department: 'PUBP',
    number: '6111',
    name: 'Internet & Public Policy',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6502',
    department: 'PUBP',
    number: '6502',
    name: 'Information & Communications Policy',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-6260',
    department: 'CS',
    number: '6260',
    name: 'Applied Cryptography',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-6340',
    department: 'CS',
    number: '6340',
    name: 'Software Analysis',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6340-software-analysis`,
  },
  {
    id: 'CS-7638',
    department: 'CS',
    number: '7638',
    name: 'Robotics: AI Techniques',
    foundational: true,
    deprecated: false,
  },
  {
    id: 'CS-7639',
    department: 'CS',
    number: '7639',
    name: 'Cyber Physical Design & Analytics',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-7639-cyber-physical-design-and-analysis`,
  },
  {
    id: 'INTA-8803G',
    department: 'INTA',
    number: '8803',
    name: 'Challenge of Terrorism in Democratic Societies',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6040',
    department: 'CSE',
    number: '6040',
    name: 'Computing for Data Analytics',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8803x',
    department: 'CS',
    number: '8803',
    name: 'Security Operations & Incidence Response',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-6265',
    department: 'CS',
    number: '6265',
    name: 'Information Security Lab: Binary Exploitation',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6265-information-security-lab`,
  },
  {
    id: 'CS-8803-O01',
    department: 'CS',
    number: '8803-01',
    name: 'Artificial Intelligence for Robotics',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics`,
  },
  {
    id: 'ECE-6323',
    department: 'ECE',
    number: '6323',
    name: 'Power Systems Protection',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6414',
    department: 'ISYE',
    number: '6414',
    name: 'Regression Analysis',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6669',
    department: 'ISYE',
    number: '6669',
    name: 'Deterministic Optimization',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8803-O11',
    department: 'CS',
    number: '8803-11',
    name: 'Information Security Lab: System & Network Defenses',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-8803-o11-information-security-lab-system-and-network-defenses`,
  },
  {
    id: 'MGT-6311',
    department: 'MGT',
    number: '6311',
    name: 'Digital Marketing',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-6748',
    department: 'MGT',
    number: '6748',
    name: 'Applied Analytics Practicum',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-8813',
    department: 'MGT',
    number: '8813',
    name: 'Financial Modeling',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-8833',
    department: 'MGT',
    number: '8833',
    name: 'Privacy for Professionals',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-6457',
    department: 'CS',
    number: '6457',
    name: 'Video Game Design',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6457-video-game-design`,
  },
  {
    id: 'PUBP-6501',
    department: 'PUBP',
    number: '6501',
    name: 'Information Policy & Management',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8803a',
    department: 'ECE',
    number: '8803',
    name: 'Computational Aspects of Cyber Physical Systems',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803c',
    department: 'ECE',
    number: '8803',
    name: 'Embedded Systems',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803d',
    department: 'ECE',
    number: '8803',
    name: 'Embedded Systems Security',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803e',
    department: 'ECE',
    number: '8803',
    name: 'Introduction to Cyber Physical Electric Energy Systems',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803g',
    department: 'ECE',
    number: '8803',
    name: 'Smart Grids',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803h',
    department: 'ECE',
    number: '8803',
    name: 'Software Vulnerabilities & Security',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-6747',
    department: 'CS',
    number: '6747',
    name: 'Advanced Malware Analysis',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8823',
    department: 'ECE',
    number: '8823',
    name: 'Cyber Physical Design',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8803-O08',
    department: 'CS',
    number: '8803-08',
    name: 'Compilers: Theory & Practice',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-8803-o08-compilers-theory-and-practice`,
  },
  {
    id: 'CS-7637',
    department: 'CS',
    number: '7637',
    name: 'Knowledge-Based Artificial Intelligence: Cognitive Systems',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems`,
  },
  {
    id: 'CS-6727',
    department: 'CS',
    number: '6727',
    name: 'Cyber Security Practicum',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'INTA-6450',
    department: 'INTA',
    number: '6450',
    name: 'Data Analytics & Security',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8803-O04',
    department: 'CS',
    number: '8803-04',
    name: 'Embedded Software',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'MGT-6203',
    department: 'MGT',
    number: '6203',
    name: 'Data Analytics & Business',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-8823',
    department: 'MGT',
    number: '8823',
    name: 'Data Analytics & Continuous Improvement',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8803-O10',
    department: 'CS',
    number: '8803-10',
    name: 'AI, Ethics & Society',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-6603-ai-ethics-and-society`,
  },
  {
    id: 'CS-8803-O05',
    department: 'CS',
    number: '8803-05',
    name: 'Data Visualization for Health Informatics',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-8803-O06',
    department: 'CS',
    number: '8803-06',
    name: 'Biomedical Analytics',
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CSE-6220',
    department: 'CSE',
    number: '6220',
    name: 'High Performance Computing',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cse-6220-intro-hpc`,
  },
  {
    id: 'CS-7643',
    department: 'CS',
    number: '7643',
    name: 'Deep Learning',
    foundational: true,
    deprecated: false,
    link: `https://omscs.gatech.edu/cs-7643-deep-learning`,
  },
  {
    id: 'ECE-8843',
    department: 'ECE',
    number: '8843',
    name: 'Side Channels in Cyber Space',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/ece-8843-side-channels-and-their-role-cybersecurity`,
  },
  {
    id: 'INTA-6742',
    department: 'INTA',
    number: '6742',
    name: 'Mod, Sim & Military Gaming',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6740',
    department: 'ISYE',
    number: '6740',
    name: 'Computational Data Analysis',
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-8803',
    department: 'ISYE',
    number: '8803',
    name: 'High-Dimensional Data Analytics',
    foundational: false,
    deprecated: false,
    link: `https://omscs.gatech.edu/isye-8803-topics-high-dimensional-data-analytics`,
  },
  {
    id: 'MGT-8803',
    department: 'MGT',
    number: '8803',
    name: 'Business Fundamentals for Analytics',
    foundational: true,
    deprecated: false,
  },
];
