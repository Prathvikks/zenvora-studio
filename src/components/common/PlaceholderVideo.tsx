import { Play } from "lucide-react";

type PlaceholderVideoProps = {
  title: string;
  src?: string;
};

export function PlaceholderVideo({ title, src }: PlaceholderVideoProps) {
  if (src) {
    return (
      <video
        className="aspect-9/16 w-full max-h-[720px] bg-charcoal object-cover"
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div
      className="relative mx-auto flex aspect-9/16 w-full max-w-sm items-center justify-center overflow-hidden bg-deep"
      role="img"
      aria-label={`${title}. Local video file not yet added.`}
    >
      <div className="absolute inset-6 border border-beige/25" />
      <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-beige/20" />
      <div className="flex flex-col items-center gap-4 px-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/40 text-ivory">
          <Play className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="font-serif text-2xl text-ivory">{title}</p>
        <p className="text-xs uppercase tracking-[0.24em] text-beige">
          Video placeholder · MP4 ready
        </p>
      </div>
    </div>
  );
}
