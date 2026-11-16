import { siWhatsapp } from "simple-icons";

// Opens WhatsApp with a prefilled message. A real build would add the sales number to the URL.
export default function ChatButton() {
  const text = encodeURIComponent("Hello Aurelia, I'd like to know more about your homes in Dubai.");
  return (
    <a
      href={`https://wa.me/?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with sales on WhatsApp"
      className="lift fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-black/20 transition-transform active:scale-95 md:flex"
      style={{ backgroundColor: `#${siWhatsapp.hex}` }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden>
        <path d={siWhatsapp.path} />
      </svg>
    </a>
  );
}
