import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-15"></div>
        <div className="relative bg-slate-800 rounded-lg p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">glassBead</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            Software Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            I build exceptional digital experiences that make people's lives easier. 
            Focused on creating clean, user-friendly solutions.
          </p>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:your@email.com" icon={<Mail />} />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}
