# Create folders
$folders = @(
    "src/app/about",
    "src/app/products/[id]",
    "src/app/brands",
    "src/app/services",
    "src/app/clients",
    "src/app/contact",
    "src/components/ui",
    "src/components/layout",
    "src/components/products",
    "src/components/common",
    "src/components/home",
    "src/components/contact",
    "src/data",
    "src/lib",
    "src/types",
    "public"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# Create files
$files = @(
    "package.json",
    "tsconfig.json",
    "next.config.ts",
    "tailwind.config.ts",
    "postcss.config.js",
    "next-sitemap.config.js",
    ".gitignore",
    "src/app/globals.css",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/robots.ts",
    "src/app/sitemap.ts",
    "src/app/about/page.tsx",
    "src/app/products/page.tsx",
    "src/app/products/[id]/page.tsx",
    "src/app/brands/page.tsx",
    "src/app/services/page.tsx",
    "src/app/clients/page.tsx",
    "src/app/contact/page.tsx",
    "src/components/layout/Header.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/common/Reveal.tsx",
    "src/components/common/SectionLabel.tsx",
    "src/components/home/Hero.tsx",
    "src/components/home/Manifesto.tsx",
    "src/components/home/FeaturedInstruments.tsx",
    "src/components/home/Industries.tsx",
    "src/components/home/Maisons.tsx",
    "src/components/home/Testimony.tsx",
    "src/components/home/Closing.tsx",
    "src/components/products/ProductCatalogue.tsx",
    "src/components/contact/ContactForm.tsx",
    "src/data/products.json",
    "src/data/brands.json",
    "src/data/clients.json",
    "src/data/industries.json",
    "src/data/navigation.json",
    "src/lib/utils.ts",
    "src/types/index.ts"
)

foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force | Out-Null
}

Write-Host "✅ Project structure created successfully!" -ForegroundColor Green