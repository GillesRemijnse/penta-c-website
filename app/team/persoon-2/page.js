const navLink = "hover:opacity-60 transition duration-200";
const activeNavLink = "font-medium hover:opacity-60 transition duration-200";

export default function Persoon2Page() {
  return (
    <main className="bg-[#F7F5F2] text-[#2F3A4C] min-h-screen">
      
      {/* HEADER */}
      <header className="sticky top-0 bg-[#F7F5F2]/80 backdrop-blur border-b border-[#EAE6E0] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
          <a href="/" className="block shrink-0">
            <img
              src="/logo-clean.jpg"
              alt="Penta-C logo"
              className="w-full max-w-[180px] h-auto object-contain mix-blend-multiply"
            />
          </a>

          <nav className="hidden md:flex gap-10 text-sm items-center">
            <a href="/" className={navLink}>Home</a>
            <a href="/diensten" className={navLink}>Diensten</a>

            <div className="relative group">
              <a href="/over-ons" className={activeNavLink}>Over ons</a>

              <div className="absolute top-full left-0 w-52 pt-3">
                <div className="bg-white border border-[#EAE6E0] rounded-xl shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <a href="/over-ons" className="block px-4 py-3 hover:bg-[#F7F5F2]">Over ons</a>
                  <a href="/team/persoon-1" className="block px-4 py-3 hover:bg-[#F7F5F2]">Jacob Remijnse</a>
                  <a href="/team/persoon-2" className="block px-4 py-3 hover:bg-[#F7F5F2] font-medium">Dennis Smith</a>
                </div>
              </div>
            </div>

            <a href="/contact" className={navLink}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <div className="grid md:grid-cols-[420px_1fr] gap-12 items-start">
          
          {/* FOTO + LINKEDIN */}
          <div className="bg-white rounded-2xl p-4 border border-[#EAE6E0]">
            <div className="aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden">
              {/* Hier later foto toevoegen */}
              {/* <img src="/dennis-smith.jpg" className="w-full h-full object-cover" /> */}
            </div>

            <a
              href="https://www.linkedin.com/in/profieldennissmith/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-[#2F3A4C] hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* INFO */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Team</p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Dennis Smith
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Managing Partner
            </p>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              Ervaren adviseur met een focus op consultancy, waarderingsvraagstukken
              en strategische begeleiding. Binnen Penta - C ligt de nadruk op
              heldere analyse, persoonlijke betrokkenheid en het zorgvuldig
              begeleiden van complexe beslissingen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="border border-[#2F3A4C] px-6 py-3 rounded-md hover:bg-[#2F3A4C] hover:text-white transition duration-200"
              >
                Neem contact op
              </a>

              <a
                href="/over-ons"
                className="bg-[#2F3A4C] text-white px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-md transition duration-200"
              >
                Terug naar over ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center bg-[#2F3A4C] text-white rounded-2xl p-12 md:p-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Contact</p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Kennismaken met Dennis Smith?
          </h2>

          <p className="mt-6 text-gray-200 leading-8">
            Neem gerust contact op voor een vertrouwelijk eerste gesprek.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="bg-white text-[#2F3A4C] px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-md transition duration-200"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#EAE6E0] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-[#2F3A4C]">Penta - C</p>
            <p className="mt-2">Management consultancy &amp; M&amp;A advisory</p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="/" className="hover:underline">Home</a>
            <a href="/diensten" className="hover:underline">Diensten</a>
            <a href="/over-ons" className="hover:underline">Over ons</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="mailto:info@penta-c.nl" className="hover:underline">info@penta-c.nl</a>

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
    </main>
  );
}