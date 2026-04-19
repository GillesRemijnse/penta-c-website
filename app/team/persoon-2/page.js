import PageCta from "../../../components/page-cta";

export default function Persoon2Page() {
  return (
    <>
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

      <PageCta
        eyebrow="Contact"
        title="Kennismaken met Dennis Smith?"
        titleClassName="mt-4 text-3xl md:text-4xl font-semibold"
        body="Neem gerust contact op voor een vertrouwelijk eerste gesprek."
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
