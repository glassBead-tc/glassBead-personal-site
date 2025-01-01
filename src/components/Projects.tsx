import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project. What problems did it solve? What technologies did you use?",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://project-demo.com"
    },
    {
      title: "Project Two",
      description: "Description of your second project. Highlight the key features and your role in development.",
      tech: ["TypeScript", "Next.js", "PostgreSQL"],
      github: "https://github.com",
      live: "https://project-demo.com"
    },
    // Add more projects as needed
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-slate-700 rounded-full text-sm text-cyan-400">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
