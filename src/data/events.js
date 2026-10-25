import rachnakshatraImage from "../assets/music-events/rachnakshatra-cultural-fest.jpg";
import burdwanConcertImage from "../assets/music-events/burdwan-medical-college-live-concert.jpg";
import tarakeswarFestImage from "../assets/music-events/tarakeswar-college-cultural-fest.jpg";
import arongomImage from "../assets/music-events/arongom-2026-concert.jpg";
import gRocksImage from "../assets/music-events/g-rocks-concert.jpg";
import southliveImage from "../assets/music-events/southlive-fest-james.jpg";
import artcellImage from "../assets/music-events/artcell-live-in-toronto.png";
import warfazeImage from "../assets/music-events/warfaze-live-concert.png";
import aurthohinImage from "../assets/music-events/aurthohin-live-concert.jpg";
import prithibiImage from "../assets/music-events/prithibi-live-concert.jpg";
import cybersecurityImage from "../assets/business-events/cybersecurity-industrial-tour-training.jpg";
import leadTheWorldImage from "../assets/business-events/lead-the-world-shape-the-future.jpg";
import startupAcceleratorImage from "../assets/business-events/startup-accelerator-founder-talk.jpg";
import socialInnovationImage from "../assets/business-events/bangladesh-digital-social-innovation-award.jpg";
import worldGovernmentImage from "../assets/business-events/world-government-summit.jpg";
import leadershipImage from "../assets/business-events/business-leadership-roundtable.jpg";
import freelancersImage from "../assets/business-events/dhaka-freelancers-meetup.jpg";
import aiWorkshopImage from "../assets/workshop-events/zero-to-production-ai-workshop.jpg";
import creativeDesignImage from "../assets/workshop-events/creative-design-female-chapter.jpg";
import womenInTechImage from "../assets/workshop-events/women-in-tech-bangladesh-workshop.jpg";
import hacktoberfestImage from "../assets/technology-events/hacktoberfest-chittagong.jpg";
import icpcImage from "../assets/technology-events/icpc-asia-dhaka-regional-contest.jpg";
import engineeringConferenceImage from "../assets/technology-events/electrical-engineering-call-for-papers.jpg";
import dataScienceImage from "../assets/technology-events/data-science-call-for-papers.jpg";

export const categories = [
  { name: "All events", icon: "✦" },
  { name: "Music", icon: "♫" },
  { name: "Business", icon: "↗" },
  { name: "Workshop", icon: "⌘" },
  { name: "Sports", icon: "✧" },
  { name: "Technology", icon: "⌘" },
];

export const events = [
  { title: "Rachnakshatra Cultural Fest", category: "Music", date: "Oct 26, 2026", time: "6:30 PM", location: "KIB Auditorium, Dhaka", price: "৳800", image: rachnakshatraImage, accent: "orange" },
  { title: "Burdwan Live Concert", category: "Music", date: "Oct 30, 2026", time: "7:00 PM", location: "Bashundhara Convention City, Dhaka", price: "৳1,200", image: burdwanConcertImage, accent: "violet" },
  { title: "Tarakeswar Cultural Night", category: "Music", date: "Nov 03, 2026", time: "5:30 PM", location: "Bangabandhu International Conference Center", price: "৳700", image: tarakeswarFestImage, accent: "blue" },
  { title: "Arongom 2026", category: "Music", date: "Nov 08, 2026", time: "6:00 PM", location: "East Delta University Grounds, Chattogram", price: "৳900", image: arongomImage, accent: "orange" },
  { title: "G-Rocks Live", category: "Music", date: "Nov 12, 2026", time: "7:30 PM", location: "Army Stadium, Dhaka", price: "৳1,500", image: gRocksImage, accent: "violet" },
  { title: "Southlive Festival", category: "Music", date: "Nov 18, 2026", time: "6:30 PM", location: "International Convention City, Chattogram", price: "৳1,800", image: southliveImage, accent: "blue" },
  { title: "Artcell Live", category: "Music", date: "Nov 22, 2026", time: "7:00 PM", location: "Dhaka Arena, Bashundhara", price: "৳2,000", image: artcellImage, accent: "violet" },
  { title: "Warfaze Live Concert", category: "Music", date: "Nov 28, 2026", time: "7:30 PM", location: "Bashundhara Sports Complex, Dhaka", price: "৳1,800", image: warfazeImage, accent: "orange" },
  { title: "Aurthohin Live in Dhaka", category: "Music", date: "Dec 04, 2026", time: "7:00 PM", location: "Nabisco Field, Dhaka", price: "৳1,600", image: aurthohinImage, accent: "blue" },
  { title: "Prithibi Live Concert", category: "Music", date: "Dec 10, 2026", time: "6:30 PM", location: "Bangladesh Shilpakala Academy, Dhaka", price: "৳1,000", image: prithibiImage, accent: "orange" },
  { title: "Cybersecurity Industrial Tour & Training", category: "Business", date: "Dec 14, 2026", time: "10:00 AM", location: "ICT Tower, Agargaon, Dhaka", price: "৳500", image: cybersecurityImage, accent: "blue" },
  { title: "Lead the World, Shape the Future", category: "Business", date: "Dec 18, 2026", time: "3:00 PM", location: "Bangladesh-China Friendship Conference Center", price: "৳700", image: leadTheWorldImage, accent: "orange" },
  { title: "Startup Accelerator Founder Talk", category: "Business", date: "Dec 21, 2026", time: "4:00 PM", location: "Startup Bangladesh, Dhaka", price: "৳600", image: startupAcceleratorImage, accent: "violet" },
  { title: "Bangladesh Digital Social Innovation Award", category: "Business", date: "Dec 26, 2026", time: "6:00 PM", location: "Radisson Blu Dhaka Water Garden", price: "৳1,000", image: socialInnovationImage, accent: "blue" },
  { title: "World Government Technology Summit", category: "Business", date: "Jan 05, 2027", time: "9:30 AM", location: "Bangabandhu International Conference Center", price: "৳1,200", image: worldGovernmentImage, accent: "violet" },
  { title: "Business Leadership Roundtable", category: "Business", date: "Jan 10, 2027", time: "11:00 AM", location: "Gulshan Club, Dhaka", price: "৳800", image: leadershipImage, accent: "orange" },
  { title: "Dhaka Freelancers Meetup", category: "Business", date: "Jan 15, 2027", time: "4:30 PM", location: "KIB Auditorium, Dhaka", price: "৳400", image: freelancersImage, accent: "blue" },
  { title: "Zero to Production: AI Workshop", category: "Workshop", date: "Dec 16, 2026", time: "10:00 AM", location: "BRAC University, Dhaka", price: "৳750", image: aiWorkshopImage, accent: "violet" },
  { title: "Creative Design Female Chapter", category: "Workshop", date: "Dec 20, 2026", time: "2:00 PM", location: "UIU Campus, Dhaka", price: "৳500", image: creativeDesignImage, accent: "orange" },
  { title: "Women in Tech Bangladesh Workshop", category: "Workshop", date: "Jan 08, 2027", time: "10:30 AM", location: "Daffodil International University", price: "৳600", image: womenInTechImage, accent: "blue" },
  { title: "Hacktoberfest Hack Days Chittagong", category: "Technology", date: "Dec 12, 2026", time: "9:00 AM", location: "Chittagong Independent University", price: "৳300", image: hacktoberfestImage, accent: "violet" },
  { title: "ICPC Asia Dhaka Regional Contest", category: "Technology", date: "Dec 22, 2026", time: "8:00 AM", location: "IUBAT, Dhaka", price: "৳250", image: icpcImage, accent: "blue" },
  { title: "International Engineering Conference", category: "Technology", date: "Jan 12, 2027", time: "9:30 AM", location: "BUET, Dhaka", price: "৳900", image: engineeringConferenceImage, accent: "orange" },
  { title: "Data Science Research Conference", category: "Technology", date: "Jan 20, 2027", time: "10:00 AM", location: "North South University, Dhaka", price: "৳700", image: dataScienceImage, accent: "violet" },
];
