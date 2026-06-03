import { Compass, Heart, Search, Bell, ShieldCheck } from "lucide-react";

const inquiries = [
  { traveler: "Rahul Sharma", package: "Royal Rajasthan", guests: "5 Guests", status: "Sent" },
  { traveler: "Amit Patel", package: "Udaipur Honeymoon", guests: "2 Guests", status: "Sent" },
  { traveler: "Priya Singh", package: "Pink City Local", guests: "4 Guests", status: "Pending" }
];

export function ProjectMockup() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#0d0d0d] p-3 shadow-panel">
      {/* Visual Accent */}
      <div className="absolute inset-x-12 top-0 h-28 bg-gold/10 blur-3xl" />
      
      <div className="relative rounded-lg border border-white/10 bg-[#151515]">
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gold text-background">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Maruti Travels</p>
              <p className="text-xs text-muted">Tour & Package Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Search className="h-4 w-4" />
            <Bell className="h-4 w-4" />
          </div>
        </div>

        {/* Mockup Body */}
        <div className="grid gap-4 p-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column: Quick Stats */}
          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Active Packages</p>
              <div className="mt-8 flex items-end justify-between">
                <p className="text-5xl font-semibold text-ink">50+</p>
                <Compass className="h-9 w-9 text-gold" />
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[90%] rounded-full bg-gold" />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-gold/10 p-4">
              <div className="flex justify-between items-start">
                <Heart className="h-5 w-5 text-gold animate-pulse" />
                <span className="text-[9px] uppercase tracking-wider bg-gold/20 text-gold px-2 py-0.5 rounded-full font-bold">Trending</span>
              </div>
              <p className="mt-4 text-xs text-muted">Royal Honeymoon Package</p>
              <p className="text-lg font-semibold text-ink leading-snug">Udaipur & Mount Abu</p>
              <div className="mt-3 flex justify-between items-center text-xs">
                <span className="text-muted">5 Days / 4 Nights</span>
                <span className="font-bold text-gold">₹24,999</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Inquiry stream */}
          <div className="rounded-lg border border-white/10 bg-background/80 p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-ink">Recent Tour Quotes</p>
                <p className="text-xs text-muted">Real-time traveler requests</p>
              </div>
              <ShieldCheck className="h-5 w-5 text-gold" />
            </div>

            <div className="space-y-3">
              {inquiries.map((inquiry) => (
                <div
                  key={inquiry.traveler}
                  className="grid grid-cols-[1.1fr_1.1fr_0.6fr_0.7fr] items-center gap-2 rounded-lg border border-white/8 bg-white/[0.035] px-4 py-3 text-xs sm:text-sm"
                >
                  <span className="font-medium text-ink truncate">{inquiry.traveler}</span>
                  <span className="text-muted truncate text-[10px]">{inquiry.package}</span>
                  <span className="text-ink font-semibold">{inquiry.guests}</span>
                  <span
                    className={`text-right text-[10px] uppercase font-bold tracking-wider ${
                      inquiry.status === "Sent" ? "text-gold" : "text-muted"
                    }`}
                  >
                    {inquiry.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom active routes stats */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { type: "Honeymoon", price: "₹24k+" },
                { type: "Sightseeing", price: "₹2.4k+" },
                { type: "Safari", price: "₹14k+" }
              ].map((item) => (
                <div key={item.type} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
                  <p className="text-[10px] font-semibold text-gold truncate">{item.type}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{item.price}</p>
                  <p className="text-[8px] text-muted">Packages</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
