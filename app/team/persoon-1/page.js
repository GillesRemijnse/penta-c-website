import PageCta from "../../../components/page-cta";

export default function Persoon1Page() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <div className="grid md:grid-cols-[420px_1fr] gap-12 items-start">
          
          {/* FOTO + LINKEDIN */}
          <div className="bg-white rounded-2xl p-4 border border-[#EAE6E0]">
            <div className="aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden">
              {/* Hier later foto toevoegen */}
              {/* <img src="/jacob-remijnse.jpg" className="w-full h-full object-cover" /> */}
            </div>

            <a
              href="https://www.linkedin.com/in/jacob-remijnse-062853/"
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
              Jacob Remijnse
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Managing Partner
            </p>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              Jacob Remijnse is Managing Partner en mede-oprichter van
              Penta - C en beschikt over meer dan veertig jaar ervaring binnen
              de financiële sector, consultancy en ondernemingsbestuur. Hij
              begeleidt organisaties bij strategische en transactionele
              vraagstukken, met een focus op overzicht, rust en weloverwogen
              besluitvorming.
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

      {/* CONTENT */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Achtergrond</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Senioriteit en ervaring
              <br />
              als basis voor vertrouwen
            </h2>
          </div>

          <div>
            <p className="text-gray-600 leading-8">
              Gedurende zijn loopbaan heeft Jacob een brede en diepgaande
              ervaring opgebouwd op het snijvlak van finance, consultancy en
              ondernemingsontwikkeling. Hij vervulde onder meer rollen als CFO,
              directeur en interim manager binnen uiteenlopende organisaties,
              variërend van corporates tot innovatieve groeibedrijven. Deze
              achtergrond stelt hem in staat om complexe situaties snel te
              doorgronden en terug te brengen tot de kern.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Binnen Penta - C ligt zijn focus op fusies en overnames,
              strategische trajecten en vraagstukken rondom financiering en
              organisatieontwikkeling. Hij is nauw betrokken bij het volledige
              proces: van voorbereiding en positionering tot besluitvorming en
              uitvoering. Zijn aanpak kenmerkt zich door analytische scherpte,
              praktische toepasbaarheid en een constante focus op het belang
              van de cliënt.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Naast zijn werkzaamheden binnen Penta - C is Jacob actief geweest
              in verschillende ondernemingen en projecten, onder meer als CFO
              en directeur binnen organisaties in uiteenlopende sectoren. Deze
              combinatie van advies en praktijkervaring zorgt voor een
              benadering die niet alleen strategisch, maar ook uitvoerbaar en
              realistisch is.
            </p>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Contact"
        title="Kennismaken met Jacob Remijnse?"
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
