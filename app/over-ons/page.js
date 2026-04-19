import PageCta from "../../components/page-cta";

export default function OverOnsPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Over ons</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
          Ervaring en discretie
          <br />
          bij trajecten die ertoe doen
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-8">
          Penta - C is een boutique advieskantoor dat zich richt op
          management consultancy en fusies en overnames. Wij ondersteunen
          ondernemers en organisaties bij beslissingen waar financiële,
          strategische en persoonlijke belangen samenkomen.
        </p>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Een ervaren adviseur
              <br />
              aan uw zijde
            </h2>
          </div>
          <div>
            <p className="text-gray-600 leading-8">
              Met circa 40 jaar ervaring in de financiële sector brengt
              Penta - C overzicht en rust in complexe trajecten.
              Die ervaring vertaalt zich in een aanpak die zowel analytisch
              scherp als praktisch toepasbaar is.
            </p>
            <p className="mt-6 text-gray-600 leading-8">
              Wij werken niet met standaardmodellen of generieke oplossingen,
              maar stemmen iedere opdracht af op de specifieke context,
              doelstellingen en belangen van de cliënt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0]"><h3 className="text-xl font-semibold">Persoonlijk</h3><p className="mt-4 text-gray-600 leading-7">Direct contact en betrokkenheid bij iedere opdracht, met korte lijnen en heldere communicatie.</p></div>
          <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0]"><h3 className="text-xl font-semibold">Discreet</h3><p className="mt-4 text-gray-600 leading-7">Wij begrijpen dat timing, vertrouwelijkheid en zorgvuldigheid essentieel zijn bij strategische en transactionele vraagstukken.</p></div>
          <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0]"><h3 className="text-xl font-semibold">Resultaatgericht</h3><p className="mt-4 text-gray-600 leading-7">Gericht op duurzame uitkomsten en weloverwogen beslissingen, niet op volume of standaardprocessen.</p></div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Team</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">De mensen achter Penta - C</h2>
            <p className="mt-6 text-gray-600 leading-8">
              Penta - C werkt met een compact team van ervaren adviseurs.
              Hierdoor blijft de betrokkenheid hoog en is er altijd directe
              toegang tot senior expertise.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F7F5F2] rounded-2xl p-8 border border-[#EAE6E0]">
              <div className="aspect-[4/5] bg-gray-200 rounded-xl mb-6" />
              <h3 className="text-xl font-semibold">Naam Persoon 1</h3>
              <p className="text-sm text-gray-500 mt-1">Functietitel</p>
              <p className="mt-4 text-gray-600 leading-7">
                Ervaren adviseur met focus op M&amp;A en strategische trajecten.
                Combineert financiële diepgang met een praktische aanpak.
              </p>
              <div className="mt-6 flex gap-4 text-sm">
                <a href="/team/persoon-1" className="hover:underline">Bekijk profiel</a>
                <a href="/contact" className="hover:underline">Neem contact op</a>
              </div>
            </div>

            <div className="bg-[#F7F5F2] rounded-2xl p-8 border border-[#EAE6E0]">
              <div className="aspect-[4/5] bg-gray-200 rounded-xl mb-6" />
              <h3 className="text-xl font-semibold">Naam Persoon 2</h3>
              <p className="text-sm text-gray-500 mt-1">Functietitel</p>
              <p className="mt-4 text-gray-600 leading-7">
                Specialist in consultancy en waarderingsvraagstukken,
                met oog voor structuur, strategie en besluitvorming.
              </p>
              <div className="mt-6 flex gap-4 text-sm">
                <a href="/team/persoon-2" className="hover:underline">Bekijk profiel</a>
                <a href="/contact" className="hover:underline">Neem contact op</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Kennismaken?"
        titleClassName="text-3xl md:text-4xl font-semibold"
        body="Wij maken graag kennis in een vertrouwelijk eerste gesprek."
        bodyClassName="mt-6 text-gray-200 leading-8"
        actionsClassName="mt-8"
        actions={
          <a
            href="/contact"
            className="bg-white text-[#2F3A4C] px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-md transition duration-200"
          >
            Neem contact op
          </a>
        }
      />
    </>
  );
}
