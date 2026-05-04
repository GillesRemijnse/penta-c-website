import PageCta from "../../components/page-cta";

export const metadata = {
  title: "Diensten",
  description:
    "De dienstverlening van Penta - C omvat M&A advisory, management consultancy, projectbegeleiding en Legal Counsel.",
};

export default function DienstenPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Diensten</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
          Gericht advies bij strategische
          <br />
          en transactionele beslissingen
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-8">
          Penta - C ondersteunt ondernemingen en aandeelhouders bij
          transacties, management- en projectvraagstukken en biedt juridische
          ondersteuning in trajecten waar senioriteit, discretie en heldere
          afwegingen essentieel zijn.
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
                  Penta - C ondersteunt ondernemingen en aandeelhouders bij aan-
                  en verkooptrajecten. Daarbij ligt de nadruk op voorbereiding,
                  waardering, positionering, onderhandeling en besluitvorming,
                  met oog voor een beheerst en overzichtelijk proces.
                </p>
              </div>

              <div className="border border-[#EAE6E0] rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Waarbij wij ondersteunen</h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Verkooptrajecten, acquisities, waarderingsvraagstukken,
                  positionering richting transactie, onderbouwing van gesprekken
                  en ondersteuning tijdens het proces.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[#EAE6E0] shadow-sm">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Dienst 02</p>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Management consultancy &amp; projectbegeleiding</h2>
                <p className="mt-5 text-gray-600 leading-8">
                  Naast transacties ondersteunt Penta - C bij
                  managementvraagstukken, projecttrajecten en de inrichting
                  van complexe administratieve en financiële processen.
                  Daaronder vallen ook financiële prognoses, structurering en de
                  praktische uitwerking van vraagstukken die om richting en
                  uitvoering vragen.
                </p>
              </div>

              <div className="border border-[#EAE6E0] rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Waarbij wij ondersteunen</h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Complexe administratieve en financiële processen, financiële
                  prognoses, projectbegeleiding, organisatorische inrichting,
                  managementvraagstukken en de uitwerking van verandertrajecten.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[#EAE6E0] shadow-sm">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Dienst 03</p>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Legal Counsel</h2>
                <p className="mt-5 text-gray-600 leading-8">
                  Penta - C biedt juridische ondersteuning bij ondernemings- en
                  contractrechtelijke vraagstukken, arbeidsrecht,
                  intellectueel eigendom en dossiers waarin juridische scherpte
                  onderdeel is van een breder advies- of transactietraject.
                  Daarbij vormen legal research en heldere juridische
                  uitwerking een belangrijke basis.
                </p>
              </div>

              <div className="border border-[#EAE6E0] rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Waarbij wij ondersteunen</h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Ondernemings- en contractrecht, arbeidsrecht, intellectueel
                  eigendom, juridische ondersteuning bij fusies en overnames,
                  legal research en legal writing.
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

      <PageCta
        eyebrow="Contact"
        title={
          <>
            Meer weten over onze
            <br className="hidden md:block" />
            dienstverlening?
          </>
        }
        titleClassName="mt-4 text-3xl md:text-4xl font-semibold leading-tight"
        body={
          <>
            Wij maken graag kennis in een vertrouwelijk eerste gesprek over uw
            vraagstuk, onderneming of voorgenomen traject.
          </>
        }
        bodyClassName="mt-6 text-gray-200 leading-8 max-w-2xl mx-auto"
        actionsClassName="mt-8"
        actions={
          <a
            href="mailto:info@penta-c.nl"
            className="bg-white text-[#2F3A4C] px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-md transition duration-200"
          >
            Stuur een e-mail
          </a>
        }
      />
    </>
  );
}
