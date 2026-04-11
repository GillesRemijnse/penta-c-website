import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { naam, email, onderwerp, bericht } = body;

    if (!naam || !email || !onderwerp || !bericht) {
      return Response.json(
        { error: "Vul alle velden in." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "E-mail is nog niet geconfigureerd." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Nieuwe aanvraag via website: ${onderwerp}`,
      reply_to: email,
      text: `
Naam: ${naam}
E-mail: ${email}
Onderwerp: ${onderwerp}

Bericht:
${bericht}
      `,
    });

    console.log("Resend result:", result);

    if (result.error) {
      return Response.json(
        { error: result.error.message || "Verzenden via Resend is mislukt." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: result.data?.id || null });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Er ging iets mis bij het verzenden van de e-mail." },
      { status: 500 }
    );
  }
}