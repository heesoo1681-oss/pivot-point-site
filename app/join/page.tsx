export default function JoinPage() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">How to Join</h1>
  
        <div className="mt-8 grid gap-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Membership</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              We do not have any qualifications to be a member.
            </p>
          </section>
  
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Active member expectations</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              To be considered an active member, you need to attend:
            </p>
            <ul className="mt-4 list-disc pl-5 text-zinc-700">
              <li>At least 50% of general meetings</li>
              <li>1 informational session per semester</li>
              <li>2 social events per semester</li>
            </ul>
          </section>
  
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Executive board</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              To be a part of the exec board, you do need to go through an interview process to show that you will
              put in a few hours per week of commitment consistently.
            </p>
          </section>
  
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Next step</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              Connect with us via Instagram, HornsLink, and Discord on the Links page.
            </p>
            <a
              href="/links"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Go to Links
            </a>
          </section>
        </div>
      </div>
    );
  }
  