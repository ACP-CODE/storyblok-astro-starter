declare namespace App {
  interface Locals {
    seo: SEO;
  }

  interface SEO {
    title: string;
    description: string | null;
    site?: string | null;
    creator?: string | null;
  }
}
