import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-teal-500 via-orange-500 to-zinc-900 
            text-transparent bg-clip-text 
            [text-shadow:0_0_15px_rgba(45,212,191,0.3)]">
            glassBead
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-teal-500 mb-8">
          Software Developer
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
          Creating elegant solutions through clean, efficient code.
        </p>
        <div className="flex justify-center space-x-6">
          <SocialLink href="https://github.com/glassBead-tc" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/glassbead-tc/" icon={<Linkedin />} />
          <SocialLink href="mailto:glassBead@waldzellai.com" icon={<Mail />} />
        </div>
      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="p-3 text-gray-400 hover:text-orange-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}
