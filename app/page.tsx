export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-white-900">
      <div className="mx-auto max-w-4xl px-6 py-14">
        {/* Header */}
        <header className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border border-sky-500 bg-blue-500 px-4 py-2 text-sm font-medium">
            Pivot Point Central • UT Austin
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A UT community built to reduce isolation—and rebuild belonging.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-700">
            We believe the trend of declining mental health in teens and young adults has a
            strong correlation with mental and physical isolation. Especially in a new
            environment like college, almost 100% of freshmen feel lost and lonely at some
            point of their freshman year—and many sophomores through seniors feel the same.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/join"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-500 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Join Pivot Point
            </a>
            <a
              href="/events"
              className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              See Format & Events
            </a>
          </div>
        </header>

        {/* Sections */}
        <main className="mt-14 grid gap-10">
          <section className="rounded-2xl border border-sky-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Our mission</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              We are trying to spread awareness of this mental health decline in college
              students, targeting the UT campus, preventing excessive mental and physical
              isolation that are leading to depression, anxiety, and various harmful effects.
            </p>
          </section>

          <section className="rounded-2xl border border-sky-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Our goal</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              To make UT a community where you truly can find your identity through reflection,
              the “Why?” in your goals, and focus more on your well-being than putting all your
              eggs in one basket (academics, internships, career opportunities, relationships
              with one particular group or person).
            </p>
          </section>

          <section className="rounded-2xl border border-sky-200 bg-white p-6">
            <h2 className="text-xl font-semibold">What we do</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              <li className="rounded-xl border border-sky-200 p-4">
                <div className="text-sm font-semibold">Psychology insight</div>
                <div className="mt-2 text-zinc-700 text-sm leading-6">
                  Psychological studies + practical takeaways to prevent isolation and reduce
                  social anxiety.
                </div>
              </li>
              <li className="rounded-xl border border-sky-200 p-4">
                <div className="text-sm font-semibold">Student story</div>
                <div className="mt-2 text-zinc-700 text-sm leading-6">
                  Personal stories and reflection—so you realize you’re not the only one.
                </div>
              </li>
              <li className="rounded-xl border border-sky-200 p-4">
                <div className="text-sm font-semibold">Skill mini-workshop</div>
                <div className="mt-2 text-zinc-700 text-sm leading-6">
                  Time management, stress control, and other practical skills.
                </div>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-sky-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Quick links</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="/links"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-zinc-100"
              >
                Instagram • HornsLink • Discord
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-zinc-100"
              >
                Read the mission
              </a>
            </div>
          </section>
        </main>

        
      </div>
    </div>
  );
}

