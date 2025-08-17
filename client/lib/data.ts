// Location data for the interactive map
export const locations = [
  { 
    id: 'uk', 
    name: 'United Kingdom', 
    coordinates: { x: 45, y: 33 }, 
    details: 'Three care homes and one child care facility offering specialized, person-centered care.' 
  },
  { 
    id: 'qatar', 
    name: 'Qatar', 
    coordinates: { x: 60, y: 45 }, 
    details: 'Healthcare and technology services in the Middle East region.' 
  },
  { 
    id: 'india', 
    name: 'India', 
    coordinates: { x: 73, y: 48 }, 
    details: 'Distribution networks and healthcare investments across multiple regions.' 
  }
];

export const teamMembers = [
  {
    name: "Dr. Mohsin Ditta",
    role: "Family Medicine specialist | co-founder of Pristine Care Homes",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  },
  {
    name: "Dr. Syed Sayeed Ahmed", 
    role: "Consultant Pediatrician | MBA | leader across our UK, Middle East, and Indian healthcare ventures",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  },
  {
    name: "Dr. Ahmed Rashid Shaik",
    role: "Family Physician | Academic Faculty | co-founder | overseeing IT and healthcare investments across regions",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  },
  {
    name: "Tanveer Mohamed",
    role: "CEO of Precedence Technologies | driving strategy and long-term planning for our IT and investment arm",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
  }
];

export const coreValues = [
  {
    title: "Patient-Centric Care",
    description: "We prioritize comfort, respect, and holistic well-being in every service we offer.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/185cc1dc08b118c8b51c0d872bbaeb16436787e2?width=336"
  },
  {
    title: "Compassion & Professionalism", 
    description: "From our caregiving homes in the UK to staffing services that bring warmth and reliability, our ethos spans continents.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/e9d926fb940d816d92ad26636e5408712f82af7d?width=336"
  },
  {
    title: "Innovation & Expansion",
    description: "Whether scaling healthcare facilities in the UK or optimizing distribution networks in India and Qatar, we continuously pursue excellence.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/5ad614595d2444835c98001062298ad71a787583?width=336"
  }
];

// Types
export interface Location {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  details: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}
