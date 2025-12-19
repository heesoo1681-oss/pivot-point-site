const LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/pivotpointcentral?igsh=MXdoYnZhZ2p1NmR5dQ%3D%3D&utm_source=qr" },
    { label: "HornsLink", href: "https://utexas.campuslabs.com/engage/organization/pivotpointcentral" },
    { label: "Discord", href: "https://discord.gg/gg5DahtE" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/pivot-pointcentral/?viewAsMember=true"}
  ];
  
  export default function LinksPage() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Links</h1>
        <p className="mt-3 max-w-2xl leading-7 text-white">
          Follow and join Pivot Point Central on the platforms below.
        </p>
  
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 bg-sky-200 p-6 text-center font-semibold hover:bg-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
  