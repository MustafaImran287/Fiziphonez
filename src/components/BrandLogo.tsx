import Image from "next/image";

type BrandLogoProps = {
  /** `heroBar`: hero top lockup (explicit img sizing — avoids flex + `fill` collapse). */
  variant?: "heroBar" | "footer";
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "heroBar",
  priority = false,
  className = "",
}: BrandLogoProps) {
  if (variant === "heroBar") {
    return (
      <div className={`inline-block max-w-full ${className}`}>
        <Image
          src="/logo_transparent.png"
          alt="Fizi Phonez — your trusted phone specialist"
          width={1440}
          height={600}
          priority={priority}
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 75vw, 792px"
          className="h-36 w-auto max-w-[min(100%,29.25rem)] object-contain object-left drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:h-[9.5625rem] sm:max-w-[min(100%,33.75rem)] md:h-[10.125rem] md:max-w-[min(100%,41.625rem)] lg:h-[11.25rem] lg:max-w-[min(100%,49.5rem)]"
        />
      </div>
    );
  }

  const box =
    "relative h-24 w-[210px] md:h-[7.5rem] md:w-[270px]";

  return (
    <div className={`${box} ${className}`}>
      <Image
        src="/logo_transparent.png"
        alt="Fizi Phonez — your trusted phone specialist"
        fill
        className="object-contain object-left"
        sizes="(max-width: 768px) 210px, 270px"
        priority={priority}
      />
    </div>
  );
}
