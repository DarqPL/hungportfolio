import Image from "next/image";

type Side = "left" | "right";
type Theme = "dark" | "light";

const SIDE_VISUALS: Record<Theme, Record<Side, string>> = {
  dark: {
    left: "/images/side-visuals/dark/left.webp",
    right: "/images/side-visuals/dark/right.webp",
  },
  light: {
    left: "/images/side-visuals/light/left.webp",
    right: "/images/side-visuals/light/right.webp",
  },
};

export function SideVisuals() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden 2xl:block">
      <VisualRail side="left" />
      <VisualRail side="right" />
    </div>
  );
}

function VisualRail({ side }: { side: Side }) {
  return (
    <div className={`side-visual side-visual--${side}`}>
      <div className={`side-visual__track side-visual__track--${side}`}>
        <VisualSequence side={side} />
        <VisualSequence side={side} />
      </div>
    </div>
  );
}

function VisualSequence({ side }: { side: Side }) {
  return (
    <div className="side-visual__sequence">
      <Image
        className="side-visual__image side-visual__image--dark"
        src={SIDE_VISUALS.dark[side]}
        alt=""
        fill
        sizes="(min-width: 1536px) 420px, 0px"
        loading="lazy"
        decoding="async"
        priority={false}
      />
      <Image
        className="side-visual__image side-visual__image--light"
        src={SIDE_VISUALS.light[side]}
        alt=""
        fill
        sizes="(min-width: 1536px) 420px, 0px"
        loading="lazy"
        decoding="async"
        priority={false}
      />
    </div>
  );
}
