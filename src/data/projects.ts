/**
 * EXAMPLE project concepts only. These show what can be built with the
 * verified technology stack. They are NOT completed client work and NOT
 * actual student projects. Every card is labelled "Example Project Concept".
 * Never describe them as built or delivered.
 */
export type ProjectConcept = {
  category: string;
  title: string;
  description: string;
  /** How the pieces connect, in order. Uses verified technologies only. */
  flow: string[];
};

export const projectConceptLabel = "Example Project Concept";

export const projectConcepts: ProjectConcept[] = [
  {
    category: "Full stack",
    title: "Full Stack Web Application",
    description:
      "A React.js interface that talks to an ASP.NET Core Web API, with the data kept in SQL Server.",
    flow: ["React.js", "ASP.NET Core Web API", "SQL Server"],
  },
  {
    category: "Database",
    title: "Database Management Application",
    description:
      "An MVC application for creating, searching and updating records in a relational database.",
    flow: ["ASP.NET Core MVC", "PostgreSQL"],
  },
  {
    category: "Cloud",
    title: "Cloud-Based Application",
    description:
      "A .NET web application and its database, set up to run on Azure Cloud.",
    flow: [".NET", "SQL Server", "Azure Cloud"],
  },
  {
    category: "Data engineering",
    title: "Data Engineering Pipeline",
    description:
      "A pipeline that takes data from a database and prepares it in Databricks for further use.",
    flow: ["Oracle", "Databricks"],
  },
  {
    category: "Data analytics",
    title: "Data Analytics Dashboard",
    description:
      "Data prepared in Databricks, served through a Web API and shown in a React.js dashboard.",
    flow: ["Databricks", "Web API", "React.js"],
  },
];
