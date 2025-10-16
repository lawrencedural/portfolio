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
      description: 'Real-time room occupancy detection system using ESP32-CAM and YOLO. Integrated with Firebase for live dashboard updates serving multiple facilities.',
      fullDescription: 'EduSpace is an intelligent occupancy management system that combines embedded systems and machine learning. Using ESP32-CAM with YOLO v5, the system detects and counts people in real-time. Data is processed and pushed to Firebase, where a web dashboard displays live occupancy status, historical trends, and analytics for facility managers.',
      technologies: ['ESP32', 'Python', 'OpenCV', 'YOLO', 'Firebase'],
      year: '2024-2025',
      category: 'IoT',
      gradient: 'from-blue-500 to-cyan-500',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Account Allocation System',
      description: 'Enterprise platform managing 365+ users across US, INDO, and Manila offices. Features comprehensive user management and database operations.',
      fullDescription: 'A robust enterprise system built with React and Supabase to manage user accounts across multiple international locations. The platform handles account creation, role-based access control, permission management, and comprehensive audit logging for 365+ active users.',
      technologies: ['React.js', 'Supabase', 'JavaScript', 'PostgreSQL'],
      year: '2025',
      category: 'Web Development',
      gradient: 'from-purple-500 to-pink-500',
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611092437281-4dba5e36371e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'TravAry',
      description: 'Mobile travel tracking application enabling users to post and track travels in real-time with intuitive interface design.',
      fullDescription: 'TravAry is an Android mobile application designed for travel enthusiasts to share and track their journeys. Built with Kotlin and Android Studio, it features real-time location tracking, social sharing capabilities, and a clean, intuitive user interface for seamless travel updates.',
      technologies: ['Kotlin', 'Android Studio', 'Firebase'],
      year: '2023',
      category: 'Mobile',
      gradient: 'from-green-500 to-emerald-500',
      images: [
        'https://images.unsplash.com/photo-1526628653108-45a45e7a72d8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488381540891-48cf1f3ca4cf?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Purchase Order System',
      description: 'Enterprise PO system with PDF/Word export, duplicate detection, and JSON-based querying for efficient procurement management.',
      fullDescription: 'A comprehensive purchase order management system designed for enterprise procurement. Features include PO creation, automatic duplicate detection using JSON queries, multi-format export capabilities (PDF/Word), and real-time status tracking for better supply chain visibility.',
      technologies: ['React.js', 'Supabase', 'PDF Generation'],
      year: '2025',
      category: 'Web Development',
      gradient: 'from-orange-500 to-red-500',
      images: [
        'https://images.unsplash.com/photo-1554224311-beee415c15c7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-aec3b2e7074e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516534775068-bb57e6de3f00?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Supply Chain Components',
      description: 'Modular search and data display components for enterprise supply chain management with dynamic filtering capabilities.',
      fullDescription: 'A set of reusable React components designed for supply chain management systems. Includes advanced search functionality, dynamic data filtering, modal interfaces for data entry, and API integration for real-time inventory updates.',
      technologies: ['React.js', 'JavaScript', 'REST API'],
      year: '2025',
      category: 'Web Development',
      gradient: 'from-indigo-500 to-purple-500',
      images: [
        'https://images.unsplash.com/photo-1633356713697-336e4ee9b4a8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Checkers Board Game',
      description: 'Interactive board game demonstrating discrete structure logic and algorithmic thinking through functional C programming.',
      fullDescription: 'An interactive checkers implementation in C that demonstrates proficiency in data structures and game logic. Features include move validation, piece jumping mechanics, turn-based gameplay, and a text-based UI for player interaction.',
      technologies: ['C Programming', 'Data Structures', 'Algorithms'],
      year: '2022',
      category: 'Game Development',
      gradient: 'from-pink-500 to-rose-500',
      images: [
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1579546957665-4d5f7d4e2c90?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&h=600&fit=crop'
      ]
    }
  ];
  
  export const categories = ['All', 'Web Development', 'IoT', 'Mobile', 'Game Development'];