import PageCta from "../../../components/page-cta";

export const metadata = {
  title: "Eefje Wassenaar - Associate Partner",
  description:
    "Profiel van Eefje Wassenaar, Associate Partner en Legal Counsel bij Penta-C, met focus op ondernemings- en contractrecht, arbeidsrecht en intellectueel eigendom.",
};

export default function EefjeWassenaarPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="bg-white rounded-2xl p-4 border border-[#EAE6E0]">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-[#ECE8E1]">
              <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
                Foto volgt
              </span>
            </div>

            <a
              href="https://www.linkedin.com/in/eefje-wassenaar-a8b17545/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-[#2F3A4C] hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Team</p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Eefje Wassenaar
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Associate Partner
            </p>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              Eefje Wassenaar is Associate Partner en Legal Counsel bij
              Penta-C en beschikt over meer dan twintig jaar ervaring binnen
              juridische en internationale omgevingen. Zij ondersteunt
              organisaties bij juridische vraagstukken, met een focus op
              zorgvuldigheid, helderheid en praktische toepasbaarheid.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@penta-c.nl"
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

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Achtergrond</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Juridische scherpte
              <br />
              als onderdeel van het adviesproces
            </h2>
          </div>

          <div>
            <p className="text-gray-600 leading-8">
              Eefje heeft een brede juridische achtergrond opgebouwd,
              variërend van civielrechtelijke advisering tot internationale
              werkzaamheden binnen diplomatieke context. In haar huidige rol
              als Legal Counsel is zij verantwoordelijk voor het begeleiden van
              juridische vraagstukken binnen organisaties, evenals voor het
              ondersteunen van bredere advies- en transactieprocessen.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Binnen Penta-C richt zij zich op ondernemings- en
              contractrecht, arbeidsrecht en intellectueel eigendom. Zij wordt
              betrokken bij trajecten waarin juridische scherpte essentieel is,
              zowel in voorbereidende fases als gedurende onderhandelingen en
              besluitvorming. Haar werkwijze kenmerkt zich door grondige
              analyse, heldere communicatie en het vertalen van complexe
              juridische materie naar praktische oplossingen.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Door haar ervaring in zowel commerciële als publieke omgevingen
              is zij in staat om juridische vraagstukken te plaatsen binnen de
              bredere context van de organisatie. Daarmee vormt zij een
              belangrijke schakel in trajecten waar juridische, strategische en
              operationele belangen samenkomen.
            </p>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Contact"
        title="Kennismaken met Eefje Wassenaar?"
        titleClassName="mt-4 text-3xl md:text-4xl font-semibold"
        body="Neem gerust contact op voor een vertrouwelijk eerste gesprek."
        bodyClassName="mt-6 text-gray-200 leading-8"
        actionsClassName="mt-8"
        actions={
          <a
            href="mailto:info@penta-c.nl"
            className="bg-white text-[#2F3A4C] px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-md transition duration-200"
          >
            Neem contact op
          </a>
        }
      />
    </>
  );
}
