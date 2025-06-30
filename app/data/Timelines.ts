export type Timeline = {
    id: number,
    startDate: string,
    endDate: string,
    title: string,
    company: string,
    description: string,
    journey?: string
  }
  

const timelineEvents: Timeline[] = [
    {
      id: 1,
      startDate: 'December 1, 2024',
      endDate: 'Present',
      title: 'Data Scientist',
      company: 'Smart Pay Network Global Inc',
      description: 'Backend Support and Data Analytics Development for SmartPay', 
      journey: "At smart pay network global inc., I was responsible for backend development and data analytics supporting the Merchant Analysis Dashboard. I designed and built features that enabled data-driven decision-making for businesses, including sales analytics, customer metrics (CAC, CLTV, retention), payment method analysis, sales trend visualizations, and geographic sales mapping. I also integrated chatbot functionality to improve user support and contributed to the development of KPI-focused dashboards for sales and marketing. My work included designing system architecture and wireframes to ensure alignment between technical execution and business goals, strengthening my expertise in backend infrastructure, data visualization, and performance monitoring."

    },
    {
      id: 2,
      startDate: 'August 2024',
      endDate: 'NOVEMBER 2024',
      title: 'Machine Learning Engineer',
      company: 'HexSoftwares',
      description: 'Developed Sentiment Analysis, Music Recommendation System, Image Classification.',
      journey: "At HexSoftwares, I applied machine learning techniques to build and deploy models for real-world use cases. I developed a sentiment analysis system capable of classifying text data to support customer feedback analysis, a music recommendation engine leveraging user behavior and content-based filtering, and an image classification model for visual data recognition. My work involved data preprocessing, model training and evaluation, and hyperparameter tuning to improve accuracy and performance. This role deepened my experience in applied ML, algorithm development, and delivering intelligent systems aligned with business needs."
      
    },
    {
      id: 3,
      startDate: 'FEBRUARY, 2024',
      endDate: 'MAY, 2024',
      title: 'Project Manager',
      company: 'Sichuan Road & Bridge Co., Ltd.',
      description: 'Led a team of developers to deliver a web application for a construction company.',
    },
    {
      id: 4,
      startDate: 'May 1, 2023',
      endDate: 'August 30, 2024',
      title: 'Data science with Python',
      company: 'ALX',
      description: 'Completed course in Data science with Python.',
      journey: "At ALX, I gained hands-on experience in data science using Python, including data preprocessing, analysis, and visualization. I applied statistical methods, machine learning algorithms, and data visualization techniques to solve real-world problems. This role enhanced my skills in data analysis, machine learning, and data visualization, preparing me for a career in data science."
    },
  ]

  export default timelineEvents;


