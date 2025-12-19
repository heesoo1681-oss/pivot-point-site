export default function AboutPage() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Mission & Goal</h1>
  
        <div className="mt-8 grid gap-6">
          <section className="rounded-2xl border border-white bg-sky-200 p-6">
            <h2 className="text-black text-xl font-semibold"
            >Underlying problems</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              We believe that the trend of declining mental health in teens and young adults has a strong
              correlation with mental and physical isolation. Especially in a new environment like college,
              almost 100% of freshmen feel lost and lonely at some point of their freshmen year. Numerous
              sophomores to senior years also feel the same.
            </p>
          </section>
  
          <section className="rounded-2xl border border-white bg-sky-200 p-6">
            <h2 className="text-black text-xl font-semibold"
            >Our mission</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              We are trying to spread awareness of this mental health decline in college students, targeting
              the UT campus, preventing excessive mental and physical isolation that are leading to depression,
              anxiety, and various harmful effects.
            </p>
          </section>
  
          <section className="rounded-2xl border border-white bg-sky-200 p-6">
            <h2 className="text-black text-xl font-semibold"
            >Our goal</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              To make UT a community where you truly can find your identity through reflection, the “Why?”
              in your goals, and focus more on your well-being than putting all your eggs in one basket
              (academics, internships, career opportunities, relationships with one particular group or person).
            </p>
          </section>
        </div>
      </div>
    );
  }
  