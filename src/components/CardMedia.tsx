type Props = {
  image?: string;
  /** Brand logo shown in place of the photo (contained on a clean surface). */
  logo?: string;
  mark?: string;
  name: string;
  color: string;
  className?: string;
};

/**
 * Card/hero media slot. Renders the brand logo when supplied, otherwise the photo,
 * otherwise a plain branded gradient placeholder.
 */
export default function CardMedia({
  image,
  logo,
  name,
  color,
  className = "",
}: Props) {
  const classes = ["card-media", logo ? "card-media--logo" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      className={classes}
      style={
        {
          "--media-color": color,
        } as React.CSSProperties
      }
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} loading="lazy" />
      ) : image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={name} loading="lazy" />
      ) : (
        null
      )}
    </div>
  );
}
