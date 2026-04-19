"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    naam: "",
    email: "",
    onderwerp: "",
    bericht: "",
  });

  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Er ging iets mis.");
      }

      setStatus("success");
      setFeedback("Uw bericht is succesvol verzonden.");
      setForm({
        naam: "",
        email: "",
        onderwerp: "",
        bericht: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Er ging iets mis bij het verzenden.");
    }
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Contact
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
          Neem contact op over een
          <br />
          strategisch of transactioneel vraagstuk
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-8">
          Wilt u in vertrouwen van gedachten wisselen over een onderneming,
          traject of vraagstuk? Vul hieronder uw gegevens in en wij nemen
          zo spoedig mogelijk contact met u op.
        </p>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#EAE6E0] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="naam" className="block text-sm text-gray-600 mb-2">
                    Naam
                  </label>
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    value={form.naam}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#EAE6E0] bg-[#F7F5F2] px-4 py-3 outline-none focus:border-[#2F3A4C]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#EAE6E0] bg-[#F7F5F2] px-4 py-3 outline-none focus:border-[#2F3A4C]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="onderwerp" className="block text-sm text-gray-600 mb-2">
                  Onderwerp
                </label>
                <input
                  id="onderwerp"
                  name="onderwerp"
                  type="text"
                  value={form.onderwerp}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#EAE6E0] bg-[#F7F5F2] px-4 py-3 outline-none focus:border-[#2F3A4C]"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm text-gray-600 mb-2">
                  Bericht
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows="8"
                  value={form.bericht}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#EAE6E0] bg-[#F7F5F2] px-4 py-3 outline-none focus:border-[#2F3A4C] resize-none"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#2F3A4C] text-white px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-md transition duration-200 disabled:opacity-60"
                >
                  {status === "loading" ? "Bezig met verzenden..." : "Verstuur aanvraag"}
                </button>

                {feedback && (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
