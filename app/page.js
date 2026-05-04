import Image from "next/image";
import PageCta from "../components/page-cta";

export const metadata = {
  title: "M&A advisory, management consultancy & Legal Counsel",
  description:
    "Penta - C ondersteunt ondernemers en organisaties bij M&A advisory, management consultancy, projectbegeleiding en Legal Counsel.",
};

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            M&amp;A advisory, management consultancy &amp; Legal Counsel
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            Discreet maatwerk
            <br />
            bij strategische beslissingen
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
            Penta - C ondersteunt ondernemers en organisaties bij fusies en
            overnames, managementvraagstukken, projecttrajecten en juridische
            vraagstukken, met senior betrokkenheid, analytische scherpte en een
            aanpak die draait om vertrouwen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:info@penta-c.nl"
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
          <div className="relative flex min-h-[260px] w-full max-w-[440px] items-center justify-center md:justify-end">
            <div className="pointer-events-none absolute inset-x-4 inset-y-6 rounded-[32px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5),_rgba(255,255,255,0)_72%)]" />
            <Image
              src="/brand/logo/penta-c-logo-horizontal.png"
              alt="Penta-C logo"
              width={899}
              height={286}
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 220px"
              className="relative h-auto w-full max-w-[220px] object-contain md:max-w-[300px] md:-translate-y-4 lg:max-w-[320px]"
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
              <h3 className="font-semibold text-lg">Verkoop of aankoop van een onderneming</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Ondersteuning bij transacties, waardering en de voorbereiding
                van gesprekken en besluitvorming.
              </p>
            </a>

            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Complexe administratieve en financiële processen</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Inzicht en structuur bij processen die vragen om overzicht,
                afstemming en een degelijke financiële basis.
              </p>
            </a>

            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Projectbegeleiding bij verandering of uitvoering</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Ondersteuning bij trajecten waarin voortgang, afstemming en
                heldere uitvoering bepalend zijn.
              </p>
            </a>

            <a href="/diensten" className="block bg-white rounded-2xl p-8 border border-[#EAE6E0] hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-lg">Juridische ondersteuning binnen transacties en ondernemingsvraagstukken</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Juridische scherpte bij contracten, ondernemingsrecht en
                vraagstukken die samenhangen met bredere trajecten.
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
              Van transacties en managementvraagstukken tot juridische
              ondersteuning: Penta - C biedt doelgericht advies bij
              vraagstukken waar ervaring, discretie en heldere afwegingen het
              verschil maken.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0] shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="text-xl font-semibold">M&amp;A advisory</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Begeleiding bij aan- en verkooptrajecten, met aandacht voor
                waardering, positionering, onderhandeling en een beheerst
                procesverloop.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0] shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="text-xl font-semibold">Management consultancy &amp; projectbegeleiding</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Ondersteuning bij managementvraagstukken, complexe
                administratieve processen, financiële prognoses en
                projecttrajecten die vragen om overzicht en uitvoering.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAE6E0] shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">
              <h3 className="text-xl font-semibold">Legal Counsel</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Juridische ondersteuning bij ondernemings- en contractrecht,
                arbeidsrecht, intellectueel eigendom en vraagstukken die
                samenhangen met fusies en overnames.
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
              M&amp;A advisory, management consultancy, projectbegeleiding en
              Legal Counsel. Juist doordat het kantoor bewust kleinschalig
              opereert, krijgt iedere opdracht de aandacht en senioriteit die
              nodig zijn.
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
            In gesprek over een transactie,
            <br className="hidden md:block" />
            project of juridisch vraagstuk?
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
