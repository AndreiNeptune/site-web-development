"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitAppointment, AppointmentState } from "@/app/actions";
import { AlertCircle, CheckCircle2, Send, Loader2 } from "lucide-react";
import posthog from "posthog-js";

const FormSchema = z.object({
  nume: z
    .string()
    .min(3, { message: "Numele complet trebuie să aibă cel puțin 3 caractere" })
    .max(50, { message: "Numele complet nu poate depăși 50 de caractere" }),
  telefon: z
    .string()
    .regex(/^(07[0-9]{8})$/, {
      message: "Numărul de telefon trebuie să fie de forma 07xxxxxxxx (10 cifre)",
    }),

  serviciu: z
    .string()
    .min(3, { message: "Vă rugăm să selectați sau să introduceți serviciul" }),
  mesaj: z.string().optional(),
});

type FormInput = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<AppointmentState | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nume: "",
      telefon: "",

      serviciu: "",
      mesaj: "",
    },
  });

  const onSubmit = (data: FormInput) => {
    setState(null);
    startTransition(async () => {
      const formData = new FormData();
      formData.append("nume", data.nume);
      formData.append("telefon", data.telefon);

      formData.append("serviciu", data.serviciu);
      if (data.mesaj) formData.append("mesaj", data.mesaj);

      const result = await submitAppointment(null, formData);
      setState(result);
      if (result.success) {
        posthog.capture("contact_form_submitted", {

          serviciu: data.serviciu,
          has_message: !!data.mesaj,
        });
        reset();
      } else {
        posthog.capture("contact_form_failed", {

          serviciu: data.serviciu,
          error_message: result.message || "Unknown error",
        });
      }
    });
  };

  const commonServices = [
    "Creare Site de Prezentare",
    "Creare Magazin Online (eCommerce)",
    "Re-design Site Existent",
    "Mentenanță & Administrare Web",
    "Instalare Windows & Optimizare PC",
    "Alt Serviciu (Detaliez în mesaj)",
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Programare Rapidă
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Trimite o solicitare
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Completează formularul de mai jos și te vom contacta în cel mai scurt timp pentru a discuta detaliile proiectului tău Web sau pentru programarea instalării Windows.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Decorative Side Accents */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500" />

          {/* Success state message */}
          {state?.success && (
            <div className="mb-8 p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-start gap-3.5 text-emerald-800 dark:text-emerald-400">
              <CheckCircle2 className="w-5.5 h-5.5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-base">Solicitare Trimisă cu Succes!</h4>
                <p className="text-sm mt-1 leading-relaxed">{state.message}</p>
              </div>
            </div>
          )}

          {/* Error general state message */}
          {state && !state.success && (
            <div className="mb-8 p-5 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-start gap-3.5 text-rose-800 dark:text-rose-400">
              <AlertCircle className="w-5.5 h-5.5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-base">Eroare în Formular</h4>
                <p className="text-sm mt-1 leading-relaxed">{state.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Grid Container Name + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="nume" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Nume Complet *
                </label>
                <input
                  type="text"
                  id="nume"
                  placeholder="Popescu Ion"
                  disabled={isPending}
                  {...register("nume")}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all ${
                    errors.nume
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-slate-200 dark:border-slate-800 focus:ring-blue-500"
                  }`}
                  aria-invalid={errors.nume ? "true" : "false"}
                />
                {errors.nume && (
                  <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.nume.message}
                  </p>
                )}
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label htmlFor="telefon" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Număr Telefon *
                </label>
                <input
                  type="tel"
                  id="telefon"
                  placeholder="0770198233"
                  disabled={isPending}
                  {...register("telefon")}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all ${
                    errors.telefon
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-slate-200 dark:border-slate-800 focus:ring-blue-500"
                  }`}
                  aria-invalid={errors.telefon ? "true" : "false"}
                />
                {errors.telefon && (
                  <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.telefon.message}
                  </p>
                )}
              </div>

            </div>

            {/* Desired Service Select/Input */}
            <div className="space-y-2">
              <label htmlFor="serviciu" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Serviciu Solicitat *
              </label>
              <input
                list="services-list"
                id="serviciu"
                placeholder="Selectează sau scrie serviciul"
                disabled={isPending}
                {...register("serviciu")}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all ${
                  errors.serviciu
                    ? "border-rose-500 focus:ring-rose-500"
                    : "border-slate-200 dark:border-slate-800 focus:ring-blue-500"
                }`}
                aria-invalid={errors.serviciu ? "true" : "false"}
              />
              <datalist id="services-list">
                {commonServices.map((srv, idx) => (
                  <option key={idx} value={srv} />
                ))}
              </datalist>
              {errors.serviciu && (
                <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.serviciu.message}
                </p>
              )}
            </div>

            {/* Optional message field */}
            <div className="space-y-2">
              <label htmlFor="mesaj" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Detalii suplimentare (Opțional)
              </label>
              <textarea
                id="mesaj"
                rows={4}
                placeholder="Ex: Laptopul se oprește după 10 minute de la pornire sau se supraîncălzește în jocuri..."
                disabled={isPending}
                {...register("mesaj")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Se procesează solicitarea...
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    Trimite Solicitarea de Programare
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
