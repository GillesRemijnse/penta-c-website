const navLink = "hover:opacity-60 transition duration-200";
const activeNavLink = "font-medium hover:opacity-60 transition duration-200";

export default function DienstenPage() {
  return (
    <main className="bg-[#F7F5F2] text-[#2F3A4C] min-h-screen">
      <header className="sticky top-0 bg-[#F7F5F2]/80 backdrop-blur border-b border-[#EAE6E0] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
          <a href="/" className="block shrink-0" aria-label="Ga naar home">
            <img
              src="/logo-clean.jpg"
              alt="Penta-C logo"
              className="w-full max-w-[180px] h-auto object-contain mix-blend-multiply"
            />
          </a>

          <nav className="hidden md:flex gap-10 text-sm items-center">
            <a href="/" className={navLink}>Home</a>
            <a href="/diensten" className={activeNavLink}>Diensten</a>
            <div className="relative group">
              <a href="/over-ons" className={navLink}>Over ons</a>
              <div className="absolute top-full left-0 w-52 pt-3">
                <div className="bg-white border border-[#EAE6E0] rounded-xl shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <a href="/over-ons" className="block px-4 py-3 hover:bg-[#F7F5F2]">Over ons</a>
                 <a href="/team/persoon-1" className="block px-4 py-3 hover:bg-[#F7F5F2] font-medium">Jacob Remijnse</a>
                  <a href="/team/persoon-2" className="block px-4 py-3 hover:bg-[#F7F5F2]">Dennis Smith</a>
                </div>
              </div>
            </div>
            <a href="/contact" className={navLink}>Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Diensten</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
          Gericht advies bij strategische
          <br />
          en transactionele beslissingen
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-8">
          Penta - C ondersteunt ondernemingen en aandeelhouders bij vraagstukken
          waar senioriteit, discretie en zorgvuldige begeleiding essentieel zijn.
          Van M&amp;A trajecten tot strategische advisering en waarderingsvraagstukken.
        </p>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-8">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[#EAE6E0] shadow-sm">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Dienst 01</p>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">M&amp;A advisory</h2>
                <p className="mt-5 text-gray-600 leading-8">
                  Penta - C begeleidt ondernemingen en aandeelhouders bij aan-
                  en verkooptrajecten. Daarbij staat een zorgvuldige aanpak centraal,
                  met aandacht voor voorbereiding, structurering, positionering,
                  onderhandelingen en besluitvorming.
                </p>
              </div>

              <div className="border border-[#EAE6E0] rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Waarbij wij ondersteunen</h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Verkooptrajecten, acquisities, voorbereiding op transacties en
                  begeleiding gedurende het proces, met oog voor overzicht,
                  vertrouwelijkheid en kwaliteit.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[#EAE6E0] shadow-sm">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Dienst 02</p>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Management consultancy</h2>
                <p className="mt-5 text-gray-600 leading-8">
                  Naast transacties ondersteunt Penta - C bij bredere strategische
                  en organisatorische vraagstukken. Denk aan situaties waarin
                  ondernemers behoefte hebben aan een ervaren sparringpartner met
                  financieel inzicht en gevoel voor bestuurlijke verhoudingen.
                </p>
              </div>

              <div className="border border-[#EAE6E0] rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Waarbij wij ondersteunen</h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Strategische heroriëntatie, besluitvorming, positionering en
                  complexe vraagstukken waarbij helderheid, richting en senioriteit
                  nodig zijn.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[#EAE6E0] shadow-sm">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Dienst 03</p>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Waardering &amp; positionering</h2>
                <p className="mt-5 text-gray-600 leading-8">
                  Een goede waardering vormt vaak de basis voor strategische keuzes
                  en transacties. Penta - C ondersteunt bij het verkrijgen van
                  inzicht in de waarde van een onderneming, rekening houdend met
                  relevante financiële, operationele en marktgerelateerde factoren.
                </p>
              </div>

              <div className="border border-[#EAE6E0] rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Waarbij wij ondersteunen</h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Waarderingsvraagstukken, onderbouwing van gesprekken,
                  transactiestructuur en de positionering van de onderneming
                  richting vervolgstappen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Werkwijze</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Kleinschalig, betrokken en zorgvuldig</h2>
            <p className="mt-6 text-gray-600 leading-8">
              Penta - C kiest bewust voor een persoonlijke aanpak, met directe
              senior betrokkenheid en korte lijnen gedurende het traject.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            <div className="border border-[#EAE6E0] rounded-2xl p-6"><p className="text-sm text-gray-500">01</p><h3 className="mt-3 font-semibold text-lg">Verkennen</h3><p className="mt-3 text-gray-600 leading-7">Inzicht krijgen in context, belangen en doelstellingen.</p></div>
            <div className="border border-[#EAE6E0] rounded-2xl p-6"><p className="text-sm text-gray-500">02</p><h3 className="mt-3 font-semibold text-lg">Aanscherpen</h3><p className="mt-3 text-gray-600 leading-7">Het vraagstuk helder definiëren en structureren.</p></div>
            <div className="border border-[#EAE6E0] rounded-2xl p-6"><p className="text-sm text-gray-500">03</p><h3 className="mt-3 font-semibold text-lg">Begeleiden</h3><p className="mt-3 text-gray-600 leading-7">Zorgvuldige uitvoering met aandacht voor kwaliteit en proces.</p></div>
            <div className="border border-[#EAE6E0] rounded-2xl p-6"><p className="text-sm text-gray-500">04</p><h3 className="mt-3 font-semibold text-lg">Afronden</h3><p className="mt-3 text-gray-600 leading-7">Toewerken naar een helder besluit of een zorgvuldig resultaat.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center bg-[#2F3A4C] text-white rounded-2xl p-12 md:p-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Contact</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
            Meer weten over onze
            <br className="hidden md:block" />
            dienstverlening?
          </h2>
          <p className="mt-6 text-gray-200 leading-8 max-w-2xl mx-auto">
            Wij maken graag kennis in een vertrouwelijk eerste gesprek over uw
            vraagstuk, onderneming of voorgenomen traject.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:info@penta-c.nl" className="bg-white text-[#2F3A4C] px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-md transition duration-200">Stuur een e-mail</a>
            <a href="/contact" className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#2F3A4C] transition duration-200">Naar contactpagina</a>
          </div>
        </div>
      </section>

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
