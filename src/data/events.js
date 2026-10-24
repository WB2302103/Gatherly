import neonNightsImage from "../assets/music-events/neon-nights-dj.jpg";
import futureWorkImage from "../assets/business-events/future-work-summit.jpg";
import clayCalmImage from "../assets/workshop-events/clay-calm-workshop.jpg";
import sunriseRunImage from "../assets/sports-events/sunrise-run-club.jpg";

export const categories = [
  { name: "All events", icon: "✦" },
  { name: "Music", icon: "♫" },
  { name: "Business", icon: "↗" },
  { name: "Workshop", icon: "⌘" },
  { name: "Sports", icon: "✧" },
];

export const events = [
  { title: "Neon Nights Festival", category: "Music", date: "Oct 26, 2026", time: "7:00 PM", location: "Rooftop Arena, Dhaka", price: "$35", image: neonNightsImage, accent: "violet" },
  { title: "Future of Work Summit", category: "Business", date: "Nov 02, 2026", time: "10:00 AM", location: "Innovation Hub, Dhaka", price: "$20", image: futureWorkImage, accent: "orange" },
  { title: "Clay & Calm Workshop", category: "Workshop", date: "Nov 08, 2026", time: "4:30 PM", location: "The Makers Space", price: "$18", image: clayCalmImage, accent: "blue" },
  { title: "Sunrise Run Club", category: "Sports", date: "Nov 15, 2026", time: "6:30 AM", location: "Hatirjheel Lake, Dhaka", price: "$12", image: sunriseRunImage, accent: "violet" },
];
