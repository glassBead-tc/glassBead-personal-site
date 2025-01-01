export default function About() {
  return (
    <div className="py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 relative">
        <span className="bg-gradient-to-r from-orange-500 via-teal-500 to-zinc-900 
          text-transparent bg-clip-text 
          [text-shadow:0_0_30px_rgba(251,146,60,0.5)]">
          About Me
        </span>
      </h1>
      <div className="space-y-6 text-gray-300">
        <p className="text-lg">
          person of the network. agentic developer and LangChain ecosystem specialist w/ TypeScript. 
          i write about GenAI and other things @ Medium
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mt-16 mb-6 text-orange-500">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "TypeScript", "LangChain.js", "Next.js",
          "LangSmith", "LangGraph Cloud", "GCP",
          "Anthropic", "Docker", "Vercel"
        ].map((tech) => (
          <div 
            key={tech}
            className="bg-zinc-900 p-3 rounded-lg text-gray-300 text-center"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}
