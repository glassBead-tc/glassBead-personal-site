import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 relative">
        <span className="bg-gradient-to-r from-teal-500 via-orange-500 to-zinc-900 
          text-transparent bg-clip-text 
          [text-shadow:0_0_30px_rgba(45,212,191,0.5)]">
          Get in Touch
        </span>
      </h1>
      
      <div className="space-y-8">
        <p className="text-gray-300 text-lg">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of these channels:
        </p>

        <div className="space-y-6">
          <ContactLink 
            href="mailto:glassBead@waldzellai.com"
            icon={<Mail className="w-6 h-6" />}
            label="glassBead@waldzellai.com"
          />
          <ContactLink 
            href="https://github.com/glassBead-tc"
            icon={<Github className="w-6 h-6" />}
            label="GitHub Profile"
          />
          <ContactLink 
            href="https://www.linkedin.com/in/glassbead-tc/"
            icon={<Linkedin className="w-6 h-6" />}
            label="LinkedIn Profile"
          />
        </div>
      </div>
    </div>
  )
}

function ContactLink({ 
  href, 
  icon, 
  label 
}: { 
  href: string
  icon: React.ReactNode
  label: string 
}) {
  return (
    <a 
      href={href}
      className="flex items-center space-x-4 text-gray-300 hover:text-orange-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
