import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PlaceholderVisual } from "@/components/common/PlaceholderVisual";
import { useSwipe } from "@/hooks/useSwipe";
import type { GalleryItem } from "@/types";

type ProjectGalleryProps = {
  items: GalleryItem[];
  brand: string;
};

export function ProjectGallery({ items, brand }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const go = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  const swipe = useSwipe({
    onSwipeLeft: () => go(index + 1),
    onSwipeRight: () => go(index - 1),
  });

  if (!current) {
    return (
      <p className="border border-charcoal/10 px-4 py-8 text-sm text-taupe">
        Gallery frames have not been added yet.
      </p>
    );
  }

  return (
    <div className="w-full">
      {/* Main gallery image */}
      <div
        className="relative touch-pan-y overflow-hidden bg-ivory"
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label={`${brand} gallery`}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(index + 1);
          if (event.key === "ArrowLeft") go(index - 1);
        }}
        {...swipe}
      >
        {current.image ? (
          <img
            src={current.image}
            alt={`${brand}: ${current.label}`}
            className="aspect-4/5 w-full object-cover sm:aspect-16/10"
          />
        ) : (
          <PlaceholderVisual
            variant={current.variant}
            label={`${brand}: ${current.label}`}
            showPlaceholderText={false}
            className="aspect-4/5 w-full sm:aspect-16/10"
          />
        )}

        {/* Navigation arrows */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-charcoal shadow-sm transition-colors hover:bg-white"
            aria-label="Previous image"
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-charcoal shadow-sm transition-colors hover:bg-white"
            aria-label="Next image"
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image caption — separated from the visual */}
      <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 py-4">
        <div>
          <p className="text-sm font-medium text-charcoal">
            {current.label}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-taupe">
            {current.caption}
          </p>
        </div>

        <span className="shrink-0 text-xs tabular-nums text-taupe">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      {/* Thumbnail navigation */}
      <div
        className="mt-4 flex gap-3 overflow-x-auto pb-3"
        role="listbox"
        aria-label="Gallery thumbnails"
      >
        {items.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            role="option"
            aria-selected={itemIndex === index}
            aria-label={`View ${item.label}`}
            onClick={() => setIndex(itemIndex)}
            className={`flex w-28 shrink-0 flex-col overflow-hidden border text-left transition-opacity ${
              itemIndex === index
                ? "border-charcoal opacity-100"
                : "border-charcoal/10 opacity-70 hover:opacity-100"
            }`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.label}
                className="aspect-[4/3] w-full object-cover"
              />
            ) : (
              <PlaceholderVisual
                variant={item.variant}
                label={item.label}
                decorative
                showPlaceholderText={false}
                className="aspect-[4/3] w-full"
              />
            )}

            <span className="w-full truncate bg-white/50 px-2 py-2 text-[11px] text-charcoal">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}