export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-8 border-t border-slate-800">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
        <a 
          href="mailto:your@email.com"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          your@email.com
        </a>
        <p className="mt-8 text-gray-400">
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
