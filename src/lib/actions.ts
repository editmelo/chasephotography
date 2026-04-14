"use server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

export async function submitInquiry(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const preferredContact = formData.get("preferredContact") as string;
  const service = formData.get("service") as string;
  const date = formData.get("date") as string;
  const hearAbout = formData.get("hearAbout") as string;
  const referralName = formData.get("referralName") as string;
  const details = formData.get("details") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const hearAboutLine =
    hearAbout === "Referral" && referralName
      ? `How they heard: Referral (from ${referralName})`
      : `How they heard: ${hearAbout || "Not specified"}`;

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Chase Portraits <onboarding@resend.dev>",
        to: "chaseportraits@gmail.com",
        subject: `New Inquiry from ${name} — ${service || "General"}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Preferred Contact: ${preferredContact || "Not specified"}`,
          `Service: ${service || "Not specified"}`,
          `Preferred Date: ${date || "Not specified"}`,
          hearAboutLine,
          `\nDetails:\n${details || "Not provided"}`,
          `\nMessage:\n${message}`,
        ].join("\n"),
      });
    } else {
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        preferredContact,
        service,
        date,
        hearAbout,
        referralName,
        details,
        message,
      });
    }

    return { success: true, message: "Thank you! Your inquiry has been sent. We'll be in touch soon." };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Something went wrong. Please try again or call us directly." };
  }
}
