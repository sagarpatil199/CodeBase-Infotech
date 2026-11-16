/**
 * The verified technology stack, grouped into the five learning stages.
 * Do not add technologies here unless the institute actually teaches them.
 */
export type LearningStage = {
  number: string;
  title: string;
  summary: string;
  technologies: string[];
};

export const learningStages: LearningStage[] = [
  {
    number: "01",
    title: "Frontend Development",
    summary: "Build the part of an application people see and use.",
    technologies: ["React.js"],
  },
  {
    number: "02",
    title: "Backend Development",
    summary: "Write the server-side logic and APIs behind the interface.",
    technologies: [".NET", "ASP.NET Core", "Web API", "MVC"],
  },
  {
    number: "03",
    title: "Database Management",
    summary: "Store, query and manage application data.",
    technologies: ["SQL Server", "Oracle", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Cloud Technologies",
    summary: "Work with applications in the cloud.",
    technologies: ["Azure Cloud"],
  },
  {
    number: "05",
    title: "Data Engineering",
    summary: "Move from application data to data engineering.",
    technologies: ["Data Engineering", "Databricks"],
  },
];

export const allTechnologies = learningStages.flatMap((s) => s.technologies);
