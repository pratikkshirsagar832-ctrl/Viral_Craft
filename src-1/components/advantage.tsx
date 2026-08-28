import { ADVANTAGES } from "@/lib/site-data";
import { Icon } from "./icons";

export default function Advantage() {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
            Why ViralCraft Media
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Why Brands Win With ViralCraft
          </h2>
          <p className="text-base text-white/60 font-body max-w-2xl">
            The unfair advantages that make us different from every other video
            production agency in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className="group glass-card-dark p-8 rounded-3xl border border-white/10 transition-all duration-300 hover:border-[#FF5722]/50 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#FF5722] flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                <Icon name={adv.icon} className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-heading font-bold text-lg text-white">
                {adv.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 font-body leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
