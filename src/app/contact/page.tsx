import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Locations from "@/components/Locations";
import PickUpReturn from "@/components/PickUpReturn";

export const metadata: Metadata = {
  title: "Contact Service Laptop & PC București",
  description: "Contactează-ne pentru programare service laptop, reparații PC sau instalare Windows. Preluare și retur gratuit la domiciliu.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <ContactForm />

      <div className="pt-10">
        <Locations />
      </div>
      
      <PickUpReturn />
    </div>
  );
}
