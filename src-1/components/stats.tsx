import { STATS } from "@/lib/site-data";
import { Icon } from "./icons";

export default function Stats() {
  return (
    <section className="py-16 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card-dark p-6 rounded-2xl border border-white/10 flex flex-col gap-2 hover:border-[#FF5722]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight group-hover:text-[#FF5722] transition-colors">
                  {stat.value}
                  <span className="text-[#FF5722] text-2xl sm:text-3xl">
                    {stat.suffix}
                  </span>
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5722]">
                  <Icon name={stat.icon} className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-white">
                  {stat.label}
                </span>
                <span className="text-xs text-white/60">
                  {stat.label === "Creators" && "Vetted creator network across India & APAC"}
                  {stat.label === "Views" && "Organic & paid viral reach generated"}
                  {stat.label === "Brands" && "Scalable ad creatives produced"}
                  {stat.label === "Rating" && "Average client satisfaction score"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
