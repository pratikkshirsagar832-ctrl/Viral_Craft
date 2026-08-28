"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Capabilities from "@/components/capabilities";
import ServiceCategories from "@/components/service-categories";
import ServiceDetail from "@/components/service-detail";
import ProductPipeline from "@/components/product-pipeline";
import Portfolio from "@/components/portfolio";
import Workflow from "@/components/workflow";
import Advantage from "@/components/advantage";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BookingModal from "@/components/booking-modal";
import VideoModal from "@/components/video-modal";
import WhatsAppButton from "@/components/whatsapp-button";
import CustomCursor from "@/components/custom-cursor";
import { INDUSTRIES, SERVICE_CATEGORIES } from "@/lib/site-data";
import { graphic } from "@/lib/utils";
import { track } from "@/lib/track";
import { Icon } from "@/components/icons";

function PageHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "pt-28 pb-14 bg-[#0F172A] text-white relative overflow-hidden"
          : "pt-28 pb-14 bg-[#F8F7F5] text-[#111111] relative overflow-hidden"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-3">
        <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight">
          {title}
        </h1>
        <p className={dark ? "text-gray-300 font-body max-w-2xl" : "text-[#6E6E73] font-body max-w-2xl"}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ServicesPage({
  onNavigate,
  onOpenBooking,
  initialService,
}: {
  onNavigate: (page: string) => void;
  onOpenBooking: (service?: string) => void;
  initialService: string;
}) {
  const [active, setActive] = useState(initialService);
  const service = SERVICE_CATEGORIES.find((s) => s.id === active) ?? SERVICE_CATEGORIES[0];

  const selectService = (id: string) => {
    setActive(id);
    requestAnimationFrame(() => {
      document
        .getElementById("service-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="One Studio. Every Creative Engine You Need."
        description="Eight specialized creative engines — from AI video, UGC and CGI to performance marketing and social media management. One system for your entire growth stack."
        dark
      />
      <ServiceCategories
        selected={active}
        onSelect={selectService}
        onExplore={selectService}
      />
      <ServiceDetail service={service} onOpenBooking={onOpenBooking} />
      <Capabilities onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      <Workflow onOpenBooking={() => onOpenBooking()} />
      <CTA onOpenBooking={() => onOpenBooking()} onNavigate={onNavigate} />
    </>
  );
}

function PortfolioPage({
  onNavigate,
  onOpenVideo,
}: {
  onNavigate: (page: string) => void;
  onOpenVideo: (url: string, title: string) => void;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Real Campaigns. Real Results."
        description="Explore the campaign creative that generated millions of views and millions in revenue across Meta, TikTok and YouTube."
        dark
      />
      <Portfolio onNavigate={onNavigate} onOpenVideo={onOpenVideo} />
      <Stats />
      <Testimonials />
    </>
  );
}

function IndustriesPage({
  onOpenBooking,
  onNavigate,
}: {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Creative That Wins In Your Niche"
        description="Specialized creative engines tailored to the highest-converting verticals in India and beyond."
        dark
      />
      <section className="py-24 bg-[#F8F7F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="group p-8 rounded-3xl glass-card border border-[#EAEAEA] transition-all duration-300 hover:border-[#FF5722]/40 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative -mt-8 mb-6 h-40 rounded-2xl overflow-hidden bg-slate-900 border border-[#EAEAEA]">
                  <img
                    src={graphic(ind.image)}
                    alt={ind.name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div
                    className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${ind.bgGradient} border border-white/20 text-[#FF5722] bg-white flex items-center justify-center`}
                  >
                    <Icon name={ind.icon} className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="mt-5 font-heading font-bold text-lg text-[#111111]">
                  {ind.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#FF5722]">
                  {ind.subtitle}
                </p>
                <p className="mt-2 text-sm text-[#6E6E73] font-body leading-relaxed">
                  {ind.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111111]">{ind.stats}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FF5722]/10 text-[#FF5722] uppercase font-heading">
                    {ind.keyFormats.length} Formats
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ind.keyFormats.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#F8F7F5] border border-[#EAEAEA] text-[#6E6E73]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="mt-5 w-full orange-gradient-btn orange-glow text-white text-xs font-bold py-3 rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Get Custom Quote For {ind.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </>
  );
}

function PricingPage({ onOpenBooking }: { onOpenBooking: (service?: string) => void }) {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple Plans. Serious Creative Output."
        description="No long-term contracts. Pause or cancel anytime. Flexible plans designed for fast ad testing and rapid scaling."
        dark
      />
      <Pricing onOpenBooking={onOpenBooking} />
      <Advantage />
    </>
  );
}

function AboutPage({
  onOpenBooking,
  onNavigate,
}: {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}) {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="India's Premier AI & UGC Creative Agency"
        description="We exist to make world-class ad creative accessible to every ambitious brand — powered by AI, UGC and performance strategy."
      />
      <Stats />
      <Advantage />
      <Workflow onOpenBooking={onOpenBooking} />
      <CTA onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </>
  );
}

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client Wall of Love"
        title="Founders & Growth Leaders Trust Us"
        description="Read how our AI and UGC video ads transformed ad performance for D2C brands and marketing agencies."
      />
      <Testimonials />
      <Stats />
    </>
  );
}

function FAQPage({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <>
      <PageHeader
        eyebrow="Got Questions?"
        title="Every Question, Answered Straight"
        description="Everything you need to know about working with ViralCraft Media — delivery, pricing, process and more."
      />
      <FAQ />
      <CTA onOpenBooking={onOpenBooking} onNavigate={() => {}} />
    </>
  );
}

function ContactPage({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <>
      <Contact />
      <CTA onOpenBooking={onOpenBooking} onNavigate={() => {}} />
    </>
  );
}

function NotFoundPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden flex items-center">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-6 relative z-10">
        <span className="text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#E64A19]">
          404
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-300 font-body max-w-xl">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="orange-gradient-btn orange-glow text-white font-bold py-4 px-10 rounded-full text-base hover:scale-[1.03] transition-all cursor-pointer"
        >
          Back To Home
        </button>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>();
  const [video, setVideo] = useState<{ url: string; title: string } | null>(null);
  const [serviceParam, setServiceParam] = useState("ai-video");

  const navigate = useCallback((p: string, service?: string) => {
    setPage(p);
    if (p === "services" && service) setServiceParam(service);
    if (!(p === "services" && service)) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
    track("activity", { kind: "page_view", page: p });
  }, []);

  useEffect(() => {
    if (page !== "services") return;
    const raf = requestAnimationFrame(() => {
      document
        .getElementById("service-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [page, serviceParam]);

  const openBooking = useCallback((service?: string) => {
    setBookingService(service);
    setBookingOpen(true);
    track("activity", { kind: "booking_modal_open", service: service ?? null });
  }, []);

  const openVideo = useCallback((url: string, title: string) => {
    setVideo({ url, title });
    track("activity", { kind: "video_play", data: { title } });
  }, []);

  const dark = page !== "home";

  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#111111] font-sans antialiased selection:bg-[#FF5722] selection:text-white">
      <CustomCursor />
      <Header
        currentPage={page}
        onNavigate={navigate}
        dark={dark}
        onOpenBooking={() => openBooking()}
      />
      <main className="relative z-[2]">
        {page === "home" && (
          <>
            <Hero onNavigate={navigate} onOpenVideo={openVideo} />
            <Stats />
            <ServiceCategories onExplore={(id) => navigate("services", id)} />
            <ProductPipeline onExplore={(id) => navigate("services", id)} />
            <Portfolio onNavigate={navigate} onOpenVideo={openVideo} />
            <Workflow onOpenBooking={() => openBooking()} />
            <Advantage />
            <Testimonials />
            <Pricing onOpenBooking={openBooking} />
            <FAQ />
            <CTA onOpenBooking={() => openBooking()} onNavigate={navigate} />
            <Contact />
          </>
        )}
        {page === "services" && (
          <ServicesPage
            onNavigate={navigate}
            onOpenBooking={openBooking}
            initialService={serviceParam}
          />
        )}
        {page === "portfolio" && (
          <PortfolioPage onNavigate={navigate} onOpenVideo={openVideo} />
        )}
        {page === "industries" && (
          <IndustriesPage
            onOpenBooking={() => openBooking()}
            onNavigate={navigate}
          />
        )}
        {page === "pricing" && <PricingPage onOpenBooking={openBooking} />}
        {page === "about" && (
          <AboutPage onOpenBooking={() => openBooking()} onNavigate={navigate} />
        )}
        {page === "testimonials" && <TestimonialsPage />}
        {page === "faq" && <FAQPage onOpenBooking={() => openBooking()} />}
        {page === "contact" && <ContactPage onOpenBooking={() => openBooking()} />}
        {page === "404" && <NotFoundPage onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} onOpenBooking={() => openBooking()} />
      <BookingModal
        key={bookingOpen ? "open" : "closed"}
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={bookingService}
      />
      <VideoModal
        key={video?.url ?? "none"}
        videoUrl={video?.url ?? null}
        title={video?.title}
        onClose={() => setVideo(null)}
      />
      <WhatsAppButton />
    </div>
  );
}