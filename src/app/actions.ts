"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import * as Sentry from "@sentry/nextjs";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const AppointmentSchema = z.object({
  nume: z
    .string()
    .min(3, { message: "Numele complet trebuie să aibă cel puțin 3 caractere" })
    .max(50, { message: "Numele complet nu poate depăși 50 de caractere" }),
  telefon: z
    .string()
    .regex(/^(07[0-9]{8})$/, {
      message: "Introduceți un număr de telefon valid în formatul 07xxxxxxxx (10 cifre)",
    }),
  dispozitiv: z.enum(["laptop", "calculator", "altul"], {
    message: "Vă rugăm să selectați un tip de dispozitiv valid",
  }),
  serviciu: z
    .string()
    .min(3, { message: "Vă rugăm să selectați sau să descrieți serviciul dorit" }),
  mesaj: z.string().optional(),
});

export type AppointmentState = {
  success: boolean;
  errors?: {
    nume?: string[];
    telefon?: string[];
    dispozitiv?: string[];
    serviciu?: string[];
    mesaj?: string[];
  };
  message?: string;
};

export async function submitAppointment(
  prevState: AppointmentState | null,
  formData: FormData
): Promise<AppointmentState> {
  return Sentry.withServerActionInstrumentation(
    "submitAppointment",
    {
      formData: formData,
    },
    async () => {
      const rawData = {
        nume: formData.get("nume"),
        telefon: formData.get("telefon"),
        dispozitiv: formData.get("dispozitiv"),
        serviciu: formData.get("serviciu"),
        mesaj: formData.get("mesaj") || undefined,
      };

      const validatedFields = AppointmentSchema.safeParse(rawData);

      if (!validatedFields.success) {
        return {
          success: false,
          errors: validatedFields.error.flatten().fieldErrors,
          message: "Datele introduse sunt invalide. Vă rugăm să verificați formularul.",
        };
      }

      try {
        // 1. Inserare în Supabase
        const { error: dbError } = await supabase
          .from("contact_requests")
          .insert([
            {
              nume: validatedFields.data.nume,
              telefon: validatedFields.data.telefon,
              dispozitiv: validatedFields.data.dispozitiv,
              serviciu: validatedFields.data.serviciu,
              mesaj: validatedFields.data.mesaj,
              status: "nou"
            }
          ]);

        if (dbError) {
          console.error("Eroare Supabase:", dbError);
          throw new Error("Eroare la salvarea în baza de date.");
        }

        // 2. Trimitere Email de Notificare către echipă via Resend
        const { error: emailError } = await resend.emails.send({
          from: "Programari <onboarding@resend.dev>", // Domeniul de test Resend
          to: ["maeie681@gmail.com"],
          subject: `Cerere nouă: ${validatedFields.data.serviciu} - ${validatedFields.data.nume}`,
          html: `
            <h2>Programare nouă din website</h2>
            <p><strong>Nume:</strong> ${escapeHtml(validatedFields.data.nume)}</p>
            <p><strong>Telefon:</strong> ${escapeHtml(validatedFields.data.telefon)}</p>
            <p><strong>Dispozitiv:</strong> ${escapeHtml(validatedFields.data.dispozitiv)}</p>
            <p><strong>Serviciu:</strong> ${escapeHtml(validatedFields.data.serviciu)}</p>
            <p><strong>Mesaj adițional:</strong> ${validatedFields.data.mesaj ? escapeHtml(validatedFields.data.mesaj) : "N/A"}</p>
          `,
        });

        if (emailError) {
          console.error("Eroare Resend:", emailError);
          Sentry.captureException(emailError);
        }

        return {
          success: true,
          message: "Programarea a fost înregistrată cu succes! Vă vom contacta în cel mai scurt timp.",
        };
      } catch (error) {
        console.error(error);
        Sentry.captureException(error);
        return {
          success: false,
          message: "A apărut o eroare internă. Vă rugăm să încercați din nou sau să ne sunați.",
        };
      }
    }
  );
}
