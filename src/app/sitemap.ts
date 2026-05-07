import type { MetadataRoute } from "next";
import products from "@/data/products.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://srivinayagascientific.com";
  const routes = ["", "/about", "/products", "/brands", "/services", "/clients", "/contact"].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...routes, ...productRoutes];
}