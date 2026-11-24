export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  link?: string;
  year: string;
  category: string;
  gradient: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: 'EduSpace',
    description: 'Classroom occupancy monitoring using ESP32-CAM, Python, and Firebase Firestore.',
    fullDescription: 'Capstone Project | Hardware Developer and IoT Integration Lead. I programmed ESP32-CAM modules to capture classroom images, used Python, OpenCV, and YOLO to count people in camera images, and integrated occupancy data with Firebase Firestore for real-time room availability monitoring.',
    technologies: ['ESP32-CAM', 'Python', 'OpenCV', 'YOLO', 'Firebase Firestore'],
    year: '2024–2025', category: 'Capstone Project', gradient: '', images: []
  },
  {
    title: 'Brand Assignment System',
    description: 'Internal application to track brand assignments across six factories.',
    fullDescription: 'During my IT internship at Madison 88 Business Solutions Asia, I developed a React, TypeScript, and Supabase application to track brand assignments across six factories.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    year: '2025', category: 'Internship Work', gradient: '', images: []
  },
  {
    title: 'Data Import and Export',
    description: 'Excel and CSV import/export functionality for internal operations.',
    fullDescription: 'During my IT internship at Madison 88 Business Solutions Asia, I worked on Excel and CSV import/export functionality using JavaScript, TypeScript, Express.js, and Supabase.',
    technologies: ['JavaScript', 'TypeScript', 'Express.js', 'Supabase'],
    year: '2025', category: 'Internship Work', gradient: '', images: []
  },
  {
    title: 'Purchase Order Forms',
    description: 'Purchase order forms with PDF and Word exports.',
    fullDescription: 'During my IT internship at Madison 88 Business Solutions Asia, I developed purchase order forms and generated PDF and Word exports to support operational processes.',
    technologies: ['PDF', 'Word'],
    year: '2025', category: 'Internship Work', gradient: '', images: []
  }
];
export const categories = ['All', 'Capstone Project', 'Internship Work'];
