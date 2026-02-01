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
    technologies: ['Python', 'Spark', 'Kafka', 'PostgreSQL', 'AWS']
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Infosys',
    location: 'Mysore, India',
    period: 'May 2020 - June 2021',
    description: 'Developed and maintained data piplines for a incident response team.',
    achievements: [
      'Engineered scalable Databricks ETL pipelines to automate SIEM data transformation',
      'Utilized PySpark and SQL to transform and structure complex, unstructured real time event logs, for ML models',
      'Maintained an end-to-end data pipeline to stream logs via Apache Kafka into Spark for processing, feeding the data to DataBricks'
    ],
    technologies: ['Python', 'Databricks', 'SQL', 'Tableau', 'Git']
  }
];