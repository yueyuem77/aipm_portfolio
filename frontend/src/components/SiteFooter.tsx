import { contact, hero } from '../data/siteData'

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-outline-variant py-16 px-8 md:px-16 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto pl-2 md:pl-8 lg:pl-12 gap-8">
        <div>
          <div className="text-lg font-bold text-primary font-display tracking-tight">
            LUNA
          </div>
          <p className="text-outline font-mono text-[10px] uppercase mt-2 tracking-wider">
            &copy; {new Date().getFullYear()} Luna &middot; AI Product Manager
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-on-surface-variant hover:text-accent transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-on-surface-variant hover:text-accent transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="cursor-pointer text-on-surface-variant hover:text-accent transition-colors duration-300"
          >
            Email
          </a>
          <span className="text-outline">{contact.wechatLabel}</span>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-accent font-medium hover:text-accent-cyan transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
