// ** Constants
const tickets = ["#108 · Table 4", "#109 · Table 9", "#110 · Deliveroo"];
const chartBars = [25, 32, 42, 78, 88, 65, 30];

export default function OperationsPreview() {
  return (
    <section className="bg-[#1b1918] px-4 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary-pale">
            UNMATCHED OPERATIONAL CLARITY
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl leading-tight sm:text-5xl">
            Designed for the adrenaline of peak dinner service.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
            High contrast layouts, large responsive touch targets, and instant
            latency feedback so your waitstaff and brigade never skip a beat.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#292624] p-4 shadow-2xl sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-[10px] text-white/60">
            <span>
              <i className="mr-2 inline-block h-2 w-2 rounded-full bg-red-500" />
              <i className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />
              <i className="mr-3 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              serveo-live://dubai-downtown-branch
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Head Chef: Marcus Vance
              <b className="ml-2 text-primary-pale">Service: Peak Active</b>
            </span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="space-y-3 lg:col-span-2">
              <h3 className="text-xs font-bold tracking-wide text-white/70">
                LIVE EXPEDITOR PASS (KDS)
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                {tickets.map((ticket, index) => (
                  <div
                    key={ticket}
                    className={`rounded-xl border border-white/10 border-t-2 ${
                      index === 1 ? "border-t-amber-400" : "border-t-primary"
                    } bg-[#1c1a19] p-4`}
                  >
                    <div className="flex justify-between text-xs font-bold">
                      <span>{ticket}</span>
                      <span className="text-primary-pale">
                        {14 - index * 4}m
                      </span>
                    </div>
                    <p className="mt-3 text-[10px] text-white/50">
                      {
                        [
                          "Server: Zayd K. · 4 Guests",
                          "Server: Layla S. · 2 Guests",
                          "Order ID: DLV-8491",
                        ][index]
                      }
                    </p>
                    <div className="my-3 h-px bg-white/10" />
                    <p className="whitespace-pre-line text-[10px] leading-5 text-white/70">
                      {
                        [
                          "2x Wagyu Sliders · Medium\n1x Truffle Fries · No Chives",
                          "1x Grilled Seabass · Asparagus\n1x Saffron Risotto · Standard",
                          "2x Spicy Chicken Bowl · Extra Sauce",
                        ][index]
                      }
                    </p>
                    <button className="mt-3 w-full rounded-md bg-white/10 py-2 text-[10px]">
                      {index === 2 ? "Ready for Driver" : "Mark Station Done"}
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1c1a19] p-4">
                <div className="flex justify-between text-[10px] text-white/50">
                  <span>Hourly Throughput vs Kitchen Capacity</span>
                  <span className="text-primary-pale">Today: AED 68,420</span>
                </div>
                <p className="mt-1 text-xs font-semibold">
                  Peak Hour Influx — 8:00 PM to 10:30 PM
                </p>
                <div className="mt-5 flex h-20 items-end gap-2">
                  {chartBars.map((height, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t-sm ${
                        height > 60 ? "bg-primary" : "bg-white/10"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[8px] text-white/60">
                  <span>17:00</span>
                  <span>18:00</span>
                  <span>19:00</span>
                  <span className="text-primary-pale">20:00 (Peak)</span>
                  <span>21:00</span>
                  <span>22:00</span>
                  <span>23:00</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#1c1a19] p-4">
              <div className="flex justify-between text-[10px] text-white/60">
                <span>DINING ROOM STATUS</span>
                <span className="text-emerald-400">24/28 Active</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }, (_, index) => (
                  <div
                    key={index}
                    className={`rounded-md border p-2 text-center ${
                      index < 5
                        ? "border-primary/70 bg-primary/15"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <p className="text-[9px] font-bold">
                      T-{String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[8px] text-white/50">
                      {index < 5 ? "Seated" : "Open"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-[9px] leading-relaxed text-amber-200">
                Real-time Stock Warning
                <br />
                <span className="text-white/50">
                  Wagyu Tenderloin is running low. Auto-purchase order is ready.
                </span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-primary py-2.5 text-[10px] font-bold">
                Floorplan Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
