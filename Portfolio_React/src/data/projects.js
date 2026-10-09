import frontImage from "../assets/Front.png";
import portfolioImage from "../assets/Portfolio.png";

export const projects = [
  {
    id: "procedural-environment",
    number: "01",
    title: "Procedural Environment",
    category: "3D × Python",
    area: "3d",
    tools: ["Blender", "Python", "Geometry Nodes"],
    description: "An exploration of procedural scene generation and repeatable 3D workflows.",
    visual: "visual--city"
  },
  {
    id: "product-visualization",
    number: "02",
    title: "Product Visualization",
    category: "3D",
    area: "3d",
    tools: ["Blender", "Materials", "Lighting"],
    description: "A product visualization study focused on modeling, materials, and lighting.",
    visual: "visual--product",
    image: frontImage // única foto real por enquanto
  },
  {
    id: "react-interface",
    number: "03",
    title: "Interactive Interface",
    category: "Code",
    area: "code",
    tools: ["React", "JavaScript", "CSS"],
    description: "A responsive interface experiment focused on structure, motion, and usability.",
    visual: "visual--code",
    image: portfolioImage
  },
  {
    id: "creative-tool",
    number: "04",
    title: "Creative Tool",
    category: "3D × Code",
    area: "3d",
    tools: ["Python", "Blender API"],
    description: "An automation concept connecting programming with a 3D workflow.",
    visual: "visual--tool"
  },
  {
    id: "aureus-tcc",
    number: "05",
    title: "Aureus (TCC)",
    category: "Code",
    area: "code",
    featured: true,
    tools: ["React", "Node.js", "FastAPI"],
    description: "An AI agent for financial management and market research. This PWA prototype was developed as a graduation project. It analyzes and categorizes user-entered financial data, generates personalized reports and insights, and gathers economic indicators and news from public APIs.",
    visual: "visual--tool"
  }
];
