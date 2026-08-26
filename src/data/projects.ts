export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  context: string;
  objective: string;
  challenges: { title: string; solution: string }[];
  tech: string[];
  url: string;
  image: string;
  gradient: string; // used as visual placeholder
  category: string;
}

export const projects: Project[] = [
  {
    slug: "djafak-corporate-bi",
    name: "Djafak Corporate Bi",
    shortDescription:
      "Site vitrine moderne dédié à la vente de voitures, avec catalogue dynamique et fiches véhicules détaillées.",
    fullDescription:
      "Djafak Corporate Bi est une plateforme vitrine élégante pour un concessionnaire automobile. Le site met en avant les véhicules en vente à travers un catalogue soigné, des fiches détaillées et une interface pensée pour convertir les visiteurs en prospects qualifiés.",
    context:
      "Le client souhaitait renforcer sa présence en ligne et mettre en valeur son parc automobile avec une identité visuelle premium et une navigation fluide sur tous les supports.",
    objective:
      "Livrer un site vitrine performant, esthétique et pleinement responsive, capable d'afficher un catalogue extensible tout en encourageant la prise de contact.",
    challenges: [
      {
        title: "Catalogue extensible",
        solution:
          "Mise en place d'une architecture de contenu modulaire permettant d'ajouter facilement de nouveaux véhicules sans toucher au code.",
      },
      {
        title: "Performance sur mobile",
        solution:
          "Optimisation des images, lazy loading et rendu côté serveur pour un chargement quasi instantané.",
      },
    ],
    tech: ["HTML", "Next.js", "React Native"],
    url: "https://djafak-corporate-bi-0905c237.vercel.app/",
    image:
      "https://image.thum.io/get/width/1400/crop/900/noanimate/https://djafak-corporate-bi-0905c237.vercel.app/",
    gradient: "from-[#ff551f] via-[#6b210c] to-[#07070a]",
    category: "Site vitrine",
  },
  {
    slug: "us-store",
    name: "Us.store",
    shortDescription:
      "Site vitrine dédié à la vente d'accessoires informatiques, avec présentation produit soignée et parcours utilisateur fluide.",
    fullDescription:
      "Us.store est un site vitrine pour une boutique d'accessoires informatiques. L'expérience met l'accent sur la lisibilité des produits, la clarté des informations et une esthétique moderne inspirée des sites e-commerce internationaux.",
    context:
      "Un jeune commerçant souhaitait passer de la vente informelle sur les réseaux sociaux à une véritable vitrine en ligne, structurée et professionnelle.",
    objective:
      "Créer une interface propre, rapide et responsive, capable de valoriser chaque accessoire et d'inspirer confiance dès la première visite.",
    challenges: [
      {
        title: "Cohérence visuelle",
        solution:
          "Mise en place d'un système de design réutilisable pour garantir l'harmonie entre toutes les pages produits.",
      },
      {
        title: "Prise en main simple",
        solution:
          "Architecture claire permettant au client d'ajouter facilement de nouveaux produits par la suite.",
      },
    ],
    tech: ["HTML", "Next.js", "React Native"],
    url: "https://us-store-one.vercel.app/",
    image:
      "https://image.thum.io/get/width/1400/crop/900/noanimate/https://us-store-one.vercel.app/",
    gradient: "from-[#ff7a47] via-[#7a2a10] to-[#07070a]",
    category: "Site vitrine",
  },
];
