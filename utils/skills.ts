import { FaReact, FaNodeJs, FaDocker, FaPython, FaFigma, FaGitAlt, FaAws } from "react-icons/fa";
import { TbBrandFramerMotion, TbApi, TbBrandSocketIo } from "react-icons/tb";
import { SiNextdotjs, SiPostgresql, SiMongodb, SiPrisma, SiMongoose, SiRedis, SiTailwindcss, SiExpress, SiRedux, SiJavascript, SiTypescript, SiFramer, SiSocketdotio, SiTurborepo, SiLangchain, SiOpenai, SiKubernetes, SiHuggingface } from "react-icons/si";

export const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#dfc22fff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    
    // { name: "WebSocket", icon: TbApi, color: "#000000", colorDark: "#ffffff" }, // Generic icon, white in dark mode
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", colorDark: "#ffffff" },
    { name: "Node.js", icon: FaNodeJs, color: "#2fbf2fff" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#7091f3ff" },
    // { name: "Motion", icon: TbBrandFramerMotion, color: "#dfca0eff" },

    // Row 2 starts here (index 9)
    // { name: "Prisma", icon: SiPrisma, color: "#5b6a84ff" },
    // { name: "Socket.io", icon: SiSocketdotio, color: "#000000", colorDark: "#ffffff" },
    { name: "Mongoose", icon: SiMongoose, color: "#880000" },
    // { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Tailwind  ", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Express", icon: SiExpress, color: "#000000", colorDark: "#ffffff" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    // { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },

    // // New additions
    // { name: "Turborepo", icon: SiTurborepo, color: "#EF4444" },
    // { name: "LangChain", icon: SiLangchain, color: "#1C3C3C", colorDark: "#ffffff" }, // Dark logo usually
    // { name: "GenAI", icon: SiOpenai, color: "#b0aeb8ff" }, // Using OpenAI as proxy for GenAI/RAG
    // { name: "HuggingFace", icon: SiHuggingface, color: "#FFD21E" },
    // { name: "DevOps", icon: SiKubernetes, color: "#326CE5" },
    // { name: "AWS", icon: FaAws, color: "#FF9900" },
];