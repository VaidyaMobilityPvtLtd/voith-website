/**
 * Content barrel, re-exports every section so existing `@/data/content`
 * imports keep working unchanged. Do NOT add content here; edit the
 * page-wise files instead:
 *
 *   shared.ts          site-wide: company, routes, nav, footer, page meta
 *   home.ts            home page sections
 *   industries/        sectorPages split per sector (mobility, construction,
 *                      hospitality, diversified) + types + helpers
 *   impact.ts          milestones, story timeline, footprint map
 *   footprint-map.ts   Nepal map (/nepal.svg) brands + dot markers
 *   people.ts          family, leadership, teams
 *   future.ts          future page
 *   contact.ts         contact desk, offices, topics
 *   why.ts             why-choose-us
 *   legal.ts           legal / privacy
 */
export * from "./shared";
export * from "./home";
export * from "./industries/types";
export * from "./industries";
export * from "./impact";
export * from "./footprint-map";
export * from "./people";
export * from "./future";
export * from "./contact";
export * from "./why";
export * from "./legal";
