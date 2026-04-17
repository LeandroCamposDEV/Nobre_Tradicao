import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
}

export function Section({ children, className, id, containerClass }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClass)}>
        <FadeIn>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
