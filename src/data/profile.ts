export const profile = {
  name: "Huỳnh Ánh Hưng",
  asciiName: "Huynh Anh Hung",
  seoNames: ["Huynh Anh Hung", "Huỳnh Ánh Hưng", "HuynhAnhHung", "DarqPL"],
  handle: "DarqPL",
  title: "Backend Developer",
  secondaryTitle: "Web3 Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "anhhung020904@gmail.com",
  status: "Open to work",
  preferredOpportunities: ["Java", "Spring Boot", "Backend", "Web3"],
  tagline: "Backend-focused developer building with Java, Spring Boot, and Web3.",
  summary:
    "I build reliable backend systems and explore the decentralized web with a practical engineering mindset.",
  about:
    "I’m a backend-focused developer who enjoys exploring new technologies and turning what I learn into working applications. My main interests are Java, Spring Boot, backend systems, and Web3. I like digging into technical problems, learning independently, and moving projects from idea to completion without overcomplicating the process.",
} as const;

export type Profile = typeof profile;
