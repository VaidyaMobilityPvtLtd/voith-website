import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

/**
 * Global component mapping for MDX content (App Router convention — required by
 * @next/mdx). Elements are styled via the `.ms-prose` wrapper in globals.css;
 * here we only enhance links (internal → next/link) and images (lazy loading).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal) {
        return <Link href={href} {...props} />;
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    },
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      <img loading="lazy" {...props} />
    ),
    ...components,
  };
}
