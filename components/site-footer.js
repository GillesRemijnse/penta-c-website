import { footerLinks } from "./site-nav-data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#EAE6E0] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-[#2F3A4C]">Penta - C</p>
          <p className="mt-2">
            M&amp;A advisory, management consultancy &amp;
            projectbegeleiding, en Legal Counsel
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
          <a href="mailto:info@penta-c.nl" className="hover:underline">
            info@penta-c.nl
          </a>
          <a
            href="https://www.linkedin.com/company/penta-c-management-consultants/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
