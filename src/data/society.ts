export interface Amenity {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Plot {
  id: string;
  size: string;
  price: string;
  status: "Available" | "Sold";
  category: string;
}

export interface PaymentTier {
  size: string;
  totalPrice: string;
  downPayment: string;
  monthly: string;
  duration: string;
  isFullPayment?: boolean;
  note?: string;
}

export interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
}

export const societyData = {
  name: "Zahoor Orchards",
  tagline: "Where Nature Meets Luxury Living",
  description:
    "Zahoor Orchards is a premier housing society located in the heart of nature, offering a perfect blend of modern amenities and serene living. Spread across lush green landscapes, our community is designed for families seeking peace, security, and a vibrant neighborhood.",

  aboutDetails: `Situated in a prime location with excellent connectivity, Zahoor Orchards offers meticulously planned residential plots, parks, and community spaces. Our vision is to create a self-sustained community where every resident enjoys a high quality of life with access to top-tier facilities.

With wide roads, modern sewerage, and 24/7 security, we ensure a safe and comfortable environment for your family. The society is developed with modern infrastructure standards and eco-friendly practices.`,

  phone: "0333 8073719",
  email: "info@zahoororchards.com",
  address: "Main Office, Zahoor Orchards,\nMadhrianwala Bypass, 52110",
  mapUrl: "https://maps.app.goo.gl/fHTe6VDyBv4uGgUBA",
  facebook: "https://www.facebook.com/zahoororchards/",
  instagram: "https://www.instagram.com/zahoororchards/",
  tiktok: "https://www.tiktok.com/@zahoororchards",

  amenities: [
    {
      title: "Parks & Green Spaces",
      description: "Beautifully landscaped parks, children's play areas and open gym.",
      icon: "park",
    },
    {
      title: "24/7 Security",
      description: "Trained security personnel round the clock.",
      icon: "security",
    },
    {
      title: "Wide Roads",
      description: "30-60 ft wide carpeted roads with street lights.",
      icon: "road",
    },
    {
      title: "Underground Sewerage",
      description: "Modern underground sewerage system for the entire society.",
      icon: "plumbing",
    },
    {
      title: "Jamia Masjid",
      description: "A spacious mosque within walking distance.",
      icon: "mosque",
    },
    {
      title: "Hospital",
      description: "A hospital offering a wide variety of health facilities.",
      icon: "hospital",
    },
  ] as Amenity[],

  paymentPlans: [
    {
      size: "3 Marla",
      totalPrice: "PKR 1,800,000",
      downPayment: "PKR 600,000",
      monthly: "PKR 50,000",
      duration: "24 Months",
    },
    {
      size: "5 Marla",
      totalPrice: "PKR 3,000,000",
      downPayment: "PKR 1,000,000",
      monthly: "PKR 80,000",
      duration: "24 Months",
    },
    {
      size: "10 Marla",
      totalPrice: "PKR 6,000,000",
      downPayment: "PKR 2,000,000",
      monthly: "PKR 160,000",
      duration: "24 Months",
    },
    {
      size: "1 Kanal",
      totalPrice: "PKR 12,000,000",
      downPayment: "Full Payment",
      monthly: "—",
      duration: "—",
      isFullPayment: true,
    },
  ] as PaymentTier[],

  premiumNote:
    "10% additional charges for premium plots facing park, corner and main boulevard.",

  management: [
    { name: "Ch. Muhammad Zahoor", role: "Chairman" },
    { name: "Ch. Shahbaz Ahmad", role: "Chief Executive" },
    { name: "Ch. Ahsan Zahoor", role: "Director Finance" },
    { name: "Mr. Ahmad Raza", role: "Project Manager" },
  ] as TeamMember[],

  plots: [
    { id: "A-01", size: "5 Marla (125 sq.yds)", price: "PKR 2,500,000", status: "Available", category: "Residential" },
    { id: "A-02", size: "5 Marla (125 sq.yds)", price: "PKR 2,500,000", status: "Sold", category: "Residential" },
    { id: "B-01", size: "10 Marla (250 sq.yds)", price: "PKR 4,800,000", status: "Available", category: "Residential" },
    { id: "B-02", size: "10 Marla (250 sq.yds)", price: "PKR 4,800,000", status: "Available", category: "Residential" },
    { id: "C-01", size: "1 Kanal (500 sq.yds)", price: "PKR 9,000,000", status: "Available", category: "Residential" },
    { id: "C-02", size: "1 Kanal (500 sq.yds)", price: "PKR 9,000,000", status: "Sold", category: "Residential" },
    { id: "COM-01", size: "4 Marla (100 sq.yds)", price: "PKR 5,500,000", status: "Available", category: "Commercial" },
    { id: "COM-02", size: "8 Marla (200 sq.yds)", price: "PKR 10,000,000", status: "Available", category: "Commercial" },
  ] as Plot[],

  news: [
    {
      title: "Inauguration Ceremony of Main Gate",
      date: "March 15, 2026",
      excerpt: "The grand inauguration of the main entrance gate was held with distinguished guests.",
    },
    {
      title: "New Park Development Completed",
      date: "February 10, 2026",
      excerpt: "The central park with walking tracks and children's play area is now open.",
    },
    {
      title: "Road Paving Underway",
      date: "January 5, 2026",
      excerpt: "Internal road network paving is in progress. Block A and B completed.",
    },
  ] as NewsItem[],

  galleryImages: [
    "/images/ad_0.jpg",
    "/images/ad_1.jpg",
    "/images/ad_2.jpg",
    "/images/ad_3.jpg",
    "/images/ad_4.jpg",
    "/images/ad_5.jpg",
  ],
};

export const sectionLabels = [
  "Home",
  "About",
  "Amenities",
  "Gallery",
  "Plots",
  "Payment Plan",
  "Management",
  "News",
  "Contact",
];
