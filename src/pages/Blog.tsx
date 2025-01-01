import { ExternalLink } from 'lucide-react'

export default function Blog() {
  return (
    <div className="py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 relative">
        <span className="bg-gradient-to-r from-orange-500 via-teal-500 to-zinc-900 
          text-transparent bg-clip-text 
          [text-shadow:0_0_30px_rgba(251,146,60,0.5)]">
          Blog
        </span>
      </h1>
      
      <div className="space-y-6">
        <p className="text-gray-300 text-lg">
          I write about artificial intelligence, software development, and tech insights on Medium.
          My articles focus on practical applications of GenAI, LangChain ecosystem, and modern development practices.
        </p>

        <a
          href="https://glassbead-tc.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 
            text-white px-6 py-3 rounded-lg transition-colors"
        >
          <span>Read on Medium</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Recent Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "LangChain Development",
            "GenAI Applications",
            "TypeScript Best Practices",
            "AI Integration Patterns"
          ].map((topic) => (
            <div 
              key={topic}
              className="bg-zinc-900 p-4 rounded-lg text-gray-300"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
