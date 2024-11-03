interface Skill {
  name: string;
  level: "advanced" | "intermediate" | "beginner";
}

export const techStack: Record<string, Skill[]> = {
  languages: [
    { name: "TypeScript", level: "advanced" },
    { name: "JavaScript", level: "advanced" },
    { name: "Node", level: "advanced" },
    { name: "Go", level: "intermediate" },
    { name: "C++", level: "beginner" },
    { name: "Python", level: "intermediate" },
    { name: "Java", level: "beginner" },
    { name: "Kotlin", level: "beginner" },
  ],
  frontend: [
    { name: "React", level: "advanced" },
    { name: "Next.js", level: "advanced" },
    { name: "Redux", level: "advanced" },
    { name: "Angular", level: "beginner" },
    { name: "jQuery", level: "beginner" },
    { name: "Tailwind CSS", level: "advanced" },
    { name: "CSS3", level: "advanced" },
    { name: "HTML5", level: "advanced" },
  ],
  mobile: [
    { name: "React Native", level: "advanced" },
    { name: "React Native CLI", level: "intermediate" },
    { name: "Expo", level: "intermediate" },
    { name: "Android Studio", level: "beginner" },
  ],
  backend: [
    { name: "Express", level: "advanced" },
    { name: "Fastify", level: "advanced" },
    { name: "Babel", level: "intermediate" },
  ],
  databases: [
    { name: "MongoDB", level: "advanced" },
    { name: "InfluxDB", level: "intermediate" },
    { name: "MySQL", level: "intermediate" },
    { name: "PostgreSQL", level: "intermediate" },
    { name: "Redshift", level: "intermediate" },
    { name: "SQLite", level: "intermediate" },
    { name: "Redis", level: "intermediate" },
    { name: "DynamoDB", level: "intermediate" },
  ],
  testing: [
    { name: "Cypress", level: "intermediate" },
    { name: "Jest", level: "intermediate" },
  ],
  buildTools: [{ name: "Rollup", level: "intermediate" }],
  cloudCI: [
    { name: "AWS", level: "intermediate" },
    { name: "GCP", level: "intermediate" },
    { name: "ECS", level: "intermediate" },
    { name: "GitHub Actions", level: "intermediate" },
    { name: "Docker", level: "intermediate" },
    { name: "CI/CD", level: "intermediate" },
  ],
  dataVisualization: [
    { name: "Grafana", level: "intermediate" },
    { name: "Kibana", level: "intermediate" },
    { name: "Google Analytics", level: "intermediate" },
  ],
  apiDevTools: [
    { name: "Postman", level: "intermediate" },
    { name: "Swagger", level: "intermediate" },
  ],
  auth: [
    { name: "OAuth", level: "intermediate" },
    { name: "Auth0", level: "intermediate" },
    { name: "Keycloak", level: "intermediate" },
  ],
  infrastructure: [{ name: "Nginx", level: "intermediate" }],
  other: [
    { name: "Elasticsearch", level: "intermediate" },
    { name: "Sentry", level: "intermediate" },
    { name: "Kafka", level: "intermediate" },
  ],
  editors: [
    { name: "Neovim", level: "advanced" },
    { name: "Vim", level: "advanced" },
  ],
  scripting: [
    { name: "Bash", level: "advanced" },
    { name: "Shell", level: "advanced" },
    { name: "Zsh", level: "intermediate" },
    { name: "Fish", level: "intermediate" },
  ],
  codeQuality: [
    { name: "ESLint", level: "intermediate" },
    { name: "Prettier", level: "intermediate" },
  ],
  versionControl: [
    { name: "Git", level: "advanced" },
    { name: "GitHub", level: "advanced" },
    { name: "Bitbucket", level: "intermediate" },
  ],
  projectManagement: [
    { name: "Jira", level: "intermediate" },
    { name: "Confluence", level: "intermediate" },
    { name: "Slack", level: "advanced" },
  ],
};
