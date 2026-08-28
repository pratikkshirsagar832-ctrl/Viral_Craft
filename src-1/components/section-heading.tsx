import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  dark,
  align = "center",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2.5",
            align === "center" && "justify-center",
          )}
        >
          <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#FF5722] rounded-full" />
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 text-xs font-bold tracking-widest uppercase text-[#FF5722]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
            {eyebrow}
          </span>
          <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#FF5722] rounded-full" />
        </div>
      )}
      <h2
        className={cn(
          "mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.12]",
          dark ? "text-white" : "text-[#111111]",
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-[#FF7043] via-[#FF5722] to-[#D8450E] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            dark ? "text-white/70" : "text-[#6E6E73]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}