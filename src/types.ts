export interface CommitteeMember {
  role: string;
  members: {
    name: string;
    designation: string;
    institution: string;
  }[];
}

export interface Speaker {
  name: string;
  designation: string;
  institution: string;
  topic?: string;
  type: 'Keynote' | 'Plenary' | 'Invited';
  imagePlaceholderColor: string;
}

export interface ImportantDate {
  event: string;
  date: string;
  status: 'upcoming' | 'passed' | 'active';
  highlight?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category?: string;
}

export interface ProceedingVolume {
  volume: number;
  title: string;
  subtitle: string;
  editors: string[];
  description: string;
  topics: string[];
  publisher: string;
  link?: string;
}
