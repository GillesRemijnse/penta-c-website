import Image from "next/image";
import PageCta from "../../../components/page-cta";

export const metadata = {
  title: "Dennis Smith - Managing Partner",
  description:
    "Profiel van Dennis Smith, Managing Partner en mede-oprichter van Penta-C, met focus op management consultancy, financiële vraagstukken en projectbegeleiding.",
};

export default function DennisSmithPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="bg-white rounded-2xl p-4 border border-[#EAE6E0]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#ECE8E1]">
              <Image
                src="/team/dennis-smith.jpg"
                alt="Dennis Smith, Managing Partner at Penta-C"
                fill
                priority
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover"
              />
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

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Team</p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Dennis Smith
            </h1>

            <p className="mt-3 text-lg text-gray-500">Managing Partner</p>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              Dennis Smith is Managing Partner en mede-oprichter van Penta-C,
              met een sterke achtergrond in financieel management, interim
              opdrachten en de inrichting van administratieve en IT-gedreven
              processen. Hij combineert analytische diepgang met een
              praktische, uitvoeringsgerichte aanpak.
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
              Structuur en uitvoering
              <br />
              als basis voor inzicht
            </h2>
          </div>

          <div>
            <p className="text-gray-600 leading-8">
              Gedurende zijn loopbaan heeft Dennis uitgebreide ervaring
              opgebouwd in financiële managementrollen, interim opdrachten en
              consultancytrajecten binnen uiteenlopende organisaties. Hij
              vervulde onder meer functies als directeur, financieel manager,
              controller en consultant, waarbij hij zich richtte op het
              structureren en verbeteren van administratieve processen,
              rapportages en systemen.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Binnen Penta-C ligt zijn focus op management consultancy,
              financiële vraagstukken en projectbegeleiding. Hij ondersteunt
              organisaties bij het verkrijgen van inzicht in hun financiële
              positie, het opzetten van financiële prognoses en het verbeteren
              van interne processen. Daarbij speelt ook de integratie van IT en
              systemen een belangrijke rol, met als doel om structuur,
              efficiëntie en betrouwbaarheid te creëren.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Naast zijn advieswerk is Dennis actief geweest als ondernemer en
              mede-oprichter van verschillende initiatieven. Deze combinatie
              van praktijkervaring en consultancy zorgt voor een benadering die
              niet alleen analytisch sterk is, maar ook gericht op uitvoering
              en resultaat.
            </p>
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
