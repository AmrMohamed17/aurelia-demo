import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink pt-24 text-ivory">
      <div className="wrap">
        <p className="text-gold-soft">Page not found</p>
        <h1 className="display mt-3 max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)]">
          This address isn&rsquo;t on our map
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/projects" className="btn btn-gold">
            Browse projects
          </Link>
          <Link href="/" className="btn btn-line-light">
            Go to the home page
          </Link>
        </div>
      </div>
    </section>
  );
}
