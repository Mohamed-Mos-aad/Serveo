export default function Demo() {
  return (
    <>
      <section
        id="book-demo"
        className="bg-surface px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-5xl rounded-[28px] border border-[#e8e1d3] bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <span className="rounded-full bg-surface-tint px-4 py-2 text-[10px] font-semibold text-primary">
            Setup & Training in under 48 hours
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-4xl leading-tight text-dark sm:text-5xl">
            Ready to simplify your restaurant?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-muted">
            Join 450+ forward-thinking food businesses across Dubai, Abu Dhabi,
            and Riyadh. Get a tailored walk-through with our GCC culinary tech
            team.
          </p>
          <form className="mx-auto mt-7 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your work email (e.g. chef@restaurant.ae)"
              className="min-w-0 flex-1 rounded-xl border border-[#e8e1d3] bg-surface-light px-4 py-3 text-xs outline-none focus:border-primary"
            />
            <button className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover">
              Book a Demo
            </button>
          </form>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] text-gray-subtle">
            <span>No long-term lock-in</span>
            <span>Free legacy hardware audit</span>
            <span>On-site team onboarding</span>
          </div>
        </div>
      </section>
    </>
  );
}
