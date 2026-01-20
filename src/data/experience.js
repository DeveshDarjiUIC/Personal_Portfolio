export const experiences = [
  {
    id: 1,
    title: 'AI Engineer Intern',
    company: 'CCC Intelligent Solutions',
    location: 'Chicago, IL',
    period: 'August 2025 - December 2025',
    description: 'Developed a POC using split inference of vision model to significantly reduce latency and ensure security.',
    achievements: [
      'Engineered split inference pipeline by spliting fine-tunes mobilenetv2 model into edge and cloud components',
      'Ensured consistent model performance with no accuracy degradation post-split',
      'Developed FastAPI wrapper for hosting the split model components'
    ],
    technologies: ['PyTorch', 'ONNX', 'FastAPI', 'Docker', 'Cuda']
  },
  {
    id: 2,
    title: 'Solution Delivery Associate',
    company: 'Deloitte',
    location: 'Hyderabad, India',
    period: 'Jun 2021 - Dec 2023',
    description: 'Worked with Invesco',
    achievements: [
      'Architected data lake processing 500GB+ daily data with 99.9% uptime',
      'Reduced data pipeline processing time by 60% through optimization',
      'Implemented automated data quality checks catching 95% of anomalies'
    ],
    technologies: ['Python', 'Spark', 'Kafka', 'PostgreSQL', 'GCP']
  },
  {
    id: 3,
    title: 'Junior Data Scientist',
    company: 'StartupAI Inc',
    location: 'Boston, MA',
    period: 'Jul 2018 - May 2020',
    description: 'Worked on various ML projects from prototyping to production deployment.',
    achievements: [
      'Created predictive models for customer churn reducing attrition by 25%',
      'Developed automated reporting dashboards used by executive team',
      'Collaborated with engineering team to productionize 5+ ML models'
    ],
    technologies: ['Python', 'Scikit-learn', 'SQL', 'Tableau', 'Git']
  }
];