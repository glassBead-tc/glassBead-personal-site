export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Linux"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Agile"] }
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
