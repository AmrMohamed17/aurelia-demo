import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Register your interest, book a viewing or ask about a home. Sales gallery in Dubai Harbour.",
};

const contacts = [
  ["New homes and viewings", "sales@hom.example"],
  ["Owners and handover", "care@hom.example"],
  ["Brokers and agents", "partners@hom.example"],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="photo-1600607687939-ce8a6c25118c"
        alt="Living room with a timber feature wall and grey sofa"
        title="Speak to our sales team"
        intro="Send us a note and a sales advisor will reply within one working day with floor plans, prices and availability."
      />

      <section id="enquire" className="section bg-ink text-ivory" aria-labelledby="form-h">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <h2 id="form-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              Tell us what you are looking for
            </h2>
            <dl className="mt-12 space-y-8">
              {contacts.map(([t, e]) => (
                <div key={t}>
                  <dt className="text-sm text-mist">{t}</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${e}`} className="link-draw text-lg">
                      {e}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section className="section bg-ivory" aria-labelledby="visit-h">
        <div className="wrap">
          <h2 id="visit-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
            Visit us
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              ["Sales gallery", "Dubai Harbour, Dubai", "Monday to Saturday, 9:00 to 19:00. Walk-ins welcome; viewings of show homes by appointment."],
              ["Head office", "Downtown Dubai, Dubai", "Sunday to Thursday, 8:30 to 17:30. Owner services and handover appointments."],
            ].map(([t, a, h]) => (
              <div key={t} className="border-t border-stone pt-6">
                <h3 className="display text-3xl">{t}</h3>
                <p className="mt-3 text-lg">{a}</p>
                <p className="mt-2 max-w-md text-muted">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
