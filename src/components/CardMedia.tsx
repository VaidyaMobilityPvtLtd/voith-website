type Props = {
  image?: string;
  mark: string;
  name: string;
  color: string;
  className?: string;
};

/**
 * Card/hero media slot. Renders the supplied image when present, otherwise a
 * branded gradient placeholder carrying the brand initials — so layouts stay
 * complete before real photography is dropped in.
 */
export default function CardMedia({
  image,
  mark,
  name,
  color,
  className = "",
}: Props) {
  const classes = ["card-media", className].filter(Boolean).join(" ");
  return (
    <div
      className={classes}
      style={
        {
          "--media-color": color,
        } as React.CSSProperties
      }
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={name} loading="lazy" />
      ) : (
        <span className="card-media-mark" aria-hidden="true">
          {mark}
        </span>
      )}
    </div>
  );
}
