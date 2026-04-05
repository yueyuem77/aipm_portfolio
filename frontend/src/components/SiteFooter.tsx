import { contact, hero } from '../data/siteData'

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-outline-variant py-16 px-8 md:px-16 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto pl-2 md:pl-8 lg:pl-12">
        <div className="mb-8 md:mb-0">
          <div className="text-lg font-bold text-on-surface font-mono tracking-tighter">
            LUNA · AI Product Manager
          </div>
          <p className="text-on-surface/40 font-mono text-[10px] uppercase mt-2">
            © {new Date().getFullYear()} LUNA [TERMINAL_CURATOR]
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-mono text-xs uppercase text-on-surface/60">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary underline decoration-dotted transition-all ease-in-out"
          >
            LINKEDIN
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary underline decoration-dotted transition-all ease-in-out"
          >
            GITHUB
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-secondary underline decoration-dotted transition-all ease-in-out"
          >
            EMAIL
          </a>
          <span className="text-on-surface/40">{contact.wechatLabel}</span>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-acid font-bold hover:text-secondary transition-all ease-in-out"
          >
            → Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
