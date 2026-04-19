import PageCta from "../components/page-cta";

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Management consultancy &amp; M&amp;A advisory
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            Discreet maatwerk
            <br />
            bij strategische beslissingen
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
            Penta - C ondersteunt ondernemers en organisaties bij fusies,
            overnames en strategische vraagstukken met senior betrokkenheid,
            analytische scherpte en een aanpak die draait om vertrouwen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#2F3A4C] text-white px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-md transition duration-200"
            >
              Plan een kennismaking
            </a>

            <a
              href="/diensten"
              className="border border-[#2F3A4C] px-6 py-3 rounded-md hover:bg-[#2F3A4C] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition duration-200"
            >
              Bekijk onze diensten
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>40 jaar ervaring</span>
            <span>Senior betrokkenheid</span>
            <span>Discreet en zorgvuldig</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[#EAE6E0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] w-full max-w-[440px] min-h-[260px] flex items-center justify-center">
            {/* Preserved current image element during the shell refactor. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-clean.jpg"
              alt="Penta-C logo"
              className="w-full max-w-[240px] h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Wanneer Penta - C
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Ondersteuning bij beslissende momenten
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Penta - C wordt ingeschakeld op momenten waarop de belangen groot zijn
              en een ervaren, discrete sparringpartner van directe waarde is.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Verkoop van uw onderneming</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Begeleiding bij het verkoopproces, van voorbereiding en positionering
                tot een zorgvuldig en beheerst traject richting transactie.
              </p>
            </a>

            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Overname of acquisitie</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Ondersteuning bij het verkennen, beoordelen en structureren van
                overnamekansen met oog voor strategische fit en risico&apos;s.
              </p>
            </a>

            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Inzicht in ondernemingswaarde</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Onafhankelijke waarderingsinzichten als basis voor strategische keuzes,
                onderhandelingen en een sterke uitgangspositie.
              </p>
            </a>

            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Strategische heroriëntatie</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Een ervaren klankbord bij vraagstukken rondom groei, positionering,
                herstructurering en toekomstige koersbepaling.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Diensten</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Advies op maat voor ondernemers en organisaties
            </h2>
            <p className="mt-6 text-gray-600 leading-8">
              Van strategische positionering tot begeleiding bij transacties:
              Penta - C biedt doelgericht advies bij vraagstukken waar ervaring,
              discretie en zorgvuldigheid het verschil maken.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0] shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="text-xl font-semibold">M&amp;A advisory</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Begeleiding bij aan- en verkooptrajecten met aandacht voor voorbereiding,
                structuur, onderhandeling en een beheerst procesverloop.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0] shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="text-xl font-semibold">Management consultancy</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Strategisch advies voor ondernemers en organisaties die behoefte hebben
                aan scherpte, overzicht en een ervaren sparringpartner.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0] shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="text-xl font-semibold">Waardering &amp; positionering</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Inzichtelijke analyses ter ondersteuning van beslissingen,
                onderhandelingen en de positionering van de onderneming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Waarom Penta - C
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Een boutique aanpak
              <br />
              voor trajecten waar veel op het spel staat
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="border border-[#EAE6E0] rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Senior van begin tot eind</h3>
              <p className="mt-3 text-gray-600 leading-8">
                Geen gelaagde teams of overdrachtsmomenten, maar directe betrokkenheid
                van ervaren adviseurs gedurende het volledige traject.
              </p>
            </div>

            <div className="border border-[#EAE6E0] rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Discreet en zorgvuldig</h3>
              <p className="mt-3 text-gray-600 leading-8">
                Bij strategische en transactionele vraagstukken zijn timing,
                vertrouwelijkheid en precisie essentieel. Onze aanpak is daarop ingericht.
              </p>
            </div>

            <div className="border border-[#EAE6E0] rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Gebouwd op ervaring</h3>
              <p className="mt-3 text-gray-600 leading-8">
                Met circa 40 jaar ervaring in de financiële sector brengt Penta - C
                overzicht, scherpte en rust in complexe besluitvorming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Over ons</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Een kleinschalig kantoor
              <br />
              met een persoonlijke benadering
            </h2>
          </div>

          <div>
            <p className="text-gray-600 leading-8">
              Penta - C is een boutique adviespraktijk op het gebied van
              management consultancy en M&amp;A advisory. Juist doordat het
              kantoor bewust kleinschalig opereert, krijgt iedere opdracht
              de aandacht en senioriteit die nodig zijn.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Wij geloven in korte lijnen, heldere communicatie en een aanpak
              die past bij de aard van het vraagstuk. Niet gericht op volume,
              maar op vertrouwen, kwaliteit en duurzame relaties.
            </p>

            <a
              href="/over-ons"
              className="inline-block mt-8 border border-[#2F3A4C] px-6 py-3 rounded-md hover:bg-[#2F3A4C] hover:text-white transition duration-200"
            >
              Lees meer over Penta - C
            </a>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Contact"
        title={
          <>
            In gesprek over een strategisch
            <br className="hidden md:block" />
            of transactioneel vraagstuk?
          </>
        }
        titleClassName="mt-4 text-3xl md:text-4xl font-semibold leading-tight"
        body={
          <>
            Wij maken graag kennis in een vertrouwelijk eerste gesprek en denken
            zorgvuldig met u mee over de context, de uitdagingen en de mogelijke
            vervolgstappen.
          </>
        }
        bodyClassName="mt-6 text-gray-200 max-w-2xl mx-auto leading-8"
        actionsClassName="mt-8 flex flex-col md:flex-row justify-center gap-4"
        actions={
          <>
            <a
              href="mailto:info@penta-c.nl"
              className="bg-white text-[#2F3A4C] px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-md transition duration-200"
            >
              Stuur een e-mail
            </a>

            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#2F3A4C] transition duration-200"
            >
              Naar contactpagina
            </a>
          </>
        }
      />
    </>
  );
}
