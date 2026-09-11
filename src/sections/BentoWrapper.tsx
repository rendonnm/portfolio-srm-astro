import { type MouseEvent, type PropsWithChildren } from "react";

const SPOTLIGHT_QUERY = "(hover: hover) and (pointer: fine)";

function supportsSpotlight() {
  return window.matchMedia(SPOTLIGHT_QUERY).matches;
}

export function BentoWrapper({ children }: PropsWithChildren) {
  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (!supportsSpotlight()) return;

    const cards =
      e.currentTarget.querySelectorAll<HTMLElement>("[data-bento-card]");

    cards.forEach((card) => {
      const { left, top } = card.getBoundingClientRect();

      card.style.setProperty("--mouse-x", `${e.clientX - left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - top}px`);
    });
  }

  function handleMouseEnter(e: MouseEvent<HTMLElement>) {
    if (!supportsSpotlight()) return;

    e.currentTarget.style.setProperty("--spotlight-opacity", "1");
  }

  function handleMouseLeave(e: MouseEvent<HTMLElement>) {
    e.currentTarget.style.setProperty("--spotlight-opacity", "0");
  }

  return (
    <article
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-40
        gap-4
        auto-rows-auto
        sm:auto-rows-fr
        mb-30
      "
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </article>
  );
}
