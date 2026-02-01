export const projects = [
  
  {
    id: 1,
    title: 'Agentic Email Labeler',
    category: 'Agentic AI',
    description: 'AI Agent to automatically label and categorize emails based on content and context.',
    longDescription: 'Developed a agentic eamil labeler powerd by local small language model to understand and categorize emails. The system uses NLP techniques to analyze email content and context, providing accurate labels for better organization and retrieval.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    technologies: ['Python', 'LangChain', 'Ollama', 'FastAPI', 'Docker', 'Gmail API'],
    github: 'https://github.com/DeveshDarjiUIC/AI_Gamil_Labler',
    demo: 'https://github.com/DeveshDarjiUIC/AI_Gamil_Labler',
    highlights: [
      'Processes 1000+ emails per day',
      '100% accuracy in labeling for tested categories',
      'Used Llama2-7B model for on-device processing'
    ]
  },
  {
    id: 2,
    title: 'Distributed Inference for CCC',
    category: 'Machine Learning',
    description: 'Built a split inference pipeline for deploying vision models across edge and cloud to reduce latency and enhance security.',
    longDescription: 'Developed a distributed inference system for CCC that splits vision model processing between edge devices and cloud servers. This approach reduces latency and enhances data security by minimizing data transfer.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    technologies: ['PyTorch', 'ONNX', 'Hugging Face', 'FastAPI', 'Docker', 'Gmail API'],
    github: 'https://github.com/DeveshDarjiUIC/UIC-CCC-IDS-560',
    demo: 'https://github.com/DeveshDarjiUIC/UIC-CCC-IDS-560',
    highlights: [
      'Reduced latency by 40% compared to cloud-only inference',
      'Maintained model accuracy with no degradation post-split',
      'Split a fine-tuned MobileNetV2 model into edge and cloud components'
    ]
  }
];

export const projectCategories = ['All', 'Machine Learning', 'Data Science', 'Agentic AI'];