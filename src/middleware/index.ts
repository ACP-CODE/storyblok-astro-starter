import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = ({ locals }, next) => {
  locals.seo = {
    title: "Welcome to Astro -  start with Storyblok",
    description: "The boilerplate for astro project with Storyblok CMS.",
    // site: "@你的Twitter账号",
    // creator: "@ACPAMOY"
  }

  return next();
}