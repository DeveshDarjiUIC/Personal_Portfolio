export const projects = [
  {
    id: 1,
    title: 'Real-time Fraud Detection System',
    category: 'Machine Learning',
    description: 'Built an end-to-end ML pipeline for detecting fraudulent transactions in real-time with 98% accuracy.',
    longDescription: 'Developed a comprehensive fraud detection system using ensemble methods and deep learning. The system processes millions of transactions daily and flags suspicious activity in real-time. Implemented model monitoring and automated retraining pipelines.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'Kafka', 'Redis', 'Docker'],
    github: 'https://github.com/yourusername/fraud-detection',
    demo: 'https://fraud-demo.example.com',
    highlights: [
      '98% accuracy with <0.1% false positive rate',
      'Processing 10K+ transactions per second',
      'Reduced fraud losses by $2M annually'
    ]
  },
  {
    id: 2,
    title: 'Customer Segmentation Engine',
    category: 'Data Science',
    description: 'Unsupervised learning system for intelligent customer segmentation enabling personalized marketing campaigns.',
    longDescription: 'Created a scalable customer segmentation solution using clustering algorithms and dimensionality reduction. The system analyzes customer behavior patterns and demographics to create actionable segments for marketing teams.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Python', 'Scikit-learn', 'Spark', 'Tableau', 'AWS'],
    github: 'https://github.com/yourusername/customer-segmentation',
    highlights: [
      'Identified 12 distinct customer segments',
      '40% increase in campaign conversion rates',
      'Automated weekly segment updates'
    ]
  },
  {
    id: 3,
    title: 'Automated Data Pipeline Platform',
    category: 'Data Engineering',
    description: 'Orchestration platform for managing complex ETL workflows with monitoring and alerting capabilities.',
    longDescription: 'Designed and implemented a robust data pipeline platform handling diverse data sources. Features include automatic schema detection, data quality validation, incremental loading, and comprehensive monitoring dashboards.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
    technologies: ['Python', 'Airflow', 'PostgreSQL', 'Docker', 'Grafana'],
    github: 'https://github.com/yourusername/data-pipeline',
    highlights: [
      'Manages 50+ data pipelines',
      '99.9% uptime SLA',
      'Reduced pipeline development time by 70%'
    ]
  },
  {
    id: 4,
    title: 'NLP Chatbot for Customer Support',
    category: 'Machine Learning',
    description: 'Intelligent chatbot using transformer models to handle customer inquiries and reduce support ticket volume.',
    longDescription: 'Built a production-grade chatbot leveraging BERT and GPT models for intent classification and response generation. Integrated with existing CRM systems and includes continuous learning from customer interactions.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'MongoDB', 'React'],
    github: 'https://github.com/yourusername/nlp-chatbot',
    demo: 'https://chatbot-demo.example.com',
    highlights: [
      '85% query resolution without human intervention',
      'Reduced support costs by 45%',
      'Average response time under 2 seconds'
    ]
  },
  {
    id: 5,
    title: 'Predictive Maintenance System',
    category: 'Data Science',
    description: 'IoT-based predictive maintenance solution using time series analysis to prevent equipment failures.',
    longDescription: 'Developed a predictive maintenance platform analyzing sensor data from industrial equipment. Uses LSTM networks and anomaly detection to predict failures 2-3 weeks in advance, enabling proactive maintenance scheduling.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'InfluxDB', 'Grafana', 'Azure'],
    github: 'https://github.com/yourusername/predictive-maintenance',
    highlights: [
      '75% reduction in unplanned downtime',
      'Monitoring 500+ industrial sensors',
      '2-3 week failure prediction window'
    ]
  },
  {
    id: 6,
    title: 'Image Classification API',
    category: 'Machine Learning',
    description: 'Scalable REST API for image classification using state-of-the-art computer vision models.',
    longDescription: 'Production-ready API service for image classification tasks. Supports multiple pre-trained models, batch processing, and custom fine-tuning. Includes comprehensive documentation and SDKs for multiple languages.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    technologies: ['Python', 'FastAPI', 'PyTorch', 'Docker', 'Kubernetes'],
    github: 'https://github.com/yourusername/image-api',
    demo: 'https://image-api-demo.example.com',
    highlights: [
      'Processes 1000+ images per second',
      '95%+ accuracy across 1000 classes',
      'Auto-scaling based on demand'
    ]
  }
];

export const projectCategories = ['All', 'Machine Learning', 'Data Science', 'Data Engineering'];