const seedProjectRows = [
  ["TerraFlux", "TerraFlux.jpg", "2025", "Generative World", "Systems"],
  ["SecondMatter", "SecondMatter.jpg", "2025", "Material System", "Matter"],
  ["One Sun", "one sun.jpg", "2025", "Competition Project", "Worlds"],
  ["Waiting for Migration", "Waiting for Migration.jpg", "2025", "Competition Project", "Worlds"],
  ["922-Fabricated Surface", "922-Fabricated Surface.jpg", "2024", "Visual Study", "Images"],
  ["After Everyone Left", "After Everyone Left.jpg", "2025", "Competition Project", "Worlds"],
  ["Commune for Elderly", "Commune for Elderly.png", "2024", "Housing Proposal", "Architecture"],
  ["Corrrupted Parliment", "Corrrupted Parliment.jpg", "2024", "Speculative Institution", "Worlds"],
  ["Hospital Clinic", "Hospital Clinic.png", "2023", "Professional Work", "Architecture"],
  ["Housing in Kadikoy", "Housing in kadıköy.png", "2022", "Housing Project", "Architecture"],
  ["Castellated RE-USE", "Castellated RE-USE.gif", "2026", "Material Research", "Matter"],
  ["Soul Metropolitan Library", "Soul Metropolitan Library.jpg", "2023", "Public Building", "Architecture"],
  ["Urchin Pavilion", "Urchin Pavilion.png", "2026", "Pavilion Proposal", "Architecture"],
  ["Color Atlas", "Color Atlas.jpg", "2024", "Image Research", "Images"],
  ["Core Optimization", "Core Optimization.gif", "2026", "Structural Research", "Systems"],
  ["Counter Growth", "Counter Growth.png", "2025", "Territorial Study", "Systems"],
  ["Llum", "Llum.png", "2025", "Spatial Experiment", "Images"],
  ["When Things Get Out of Hand", "When Things Get Out of Hand.jpg", "2025", "Narrative Project", "Worlds"],
  ["Fractal Clay", "Fractal Clay.gif", "2024", "Material Research", "Matter"],
  ["Wood Joinery", "Wood Joinery.jpg", "2026", "Joinery Study", "Matter"],
  ["Woodcraft", "Woodcraft.png", "2024", "Fabrication Research", "Matter"],
  ["Workshop Prototype", "Workshop Prototype.jpg", "2024", "Prototype Study", "Matter"],
];

const placeholderVisuals = [
  {
    bg: "linear-gradient(140deg, #ecece8, #d7d7cf)",
    shapeA: "linear-gradient(135deg, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.24))",
    clipA: "polygon(10% 18%, 62% 18%, 42% 48%, 12% 56%)",
    shapeB: "linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(13, 13, 13, 0.16))",
    clipB: "polygon(54% 10%, 92% 18%, 78% 86%, 38% 72%)",
  },
  {
    bg: "linear-gradient(160deg, #e8e7e1, #cecbc0)",
    shapeA: "linear-gradient(180deg, rgba(13, 13, 13, 0.94), rgba(13, 13, 13, 0.12))",
    clipA: "polygon(18% 14%, 32% 12%, 72% 78%, 58% 82%)",
    shapeB: "linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.1))",
    clipB: "polygon(6% 68%, 52% 46%, 90% 66%, 58% 92%)",
  },
  {
    bg: "linear-gradient(135deg, #efefe9, #d5d3ca)",
    shapeA: "linear-gradient(135deg, rgba(13, 13, 13, 0.82), rgba(13, 13, 13, 0.28))",
    clipA: "polygon(16% 24%, 84% 18%, 86% 34%, 18% 42%)",
    shapeB: "linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(13, 13, 13, 0.14))",
    clipB: "polygon(28% 52%, 72% 46%, 68% 88%, 34% 84%)",
  },
  {
    bg: "linear-gradient(145deg, #e4e4dd, #d4d2c8)",
    shapeA: "linear-gradient(135deg, rgba(13, 13, 13, 0.88), rgba(13, 13, 13, 0.18))",
    clipA: "polygon(18% 20%, 44% 12%, 56% 40%, 22% 64%)",
    shapeB: "linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.12))",
    clipB: "polygon(54% 16%, 84% 30%, 68% 82%, 40% 70%)",
  },
  {
    bg: "linear-gradient(180deg, #e8e7df, #d0cec4)",
    shapeA: "linear-gradient(180deg, rgba(13, 13, 13, 0.84), rgba(13, 13, 13, 0.2))",
    clipA: "polygon(8% 54%, 42% 18%, 58% 34%, 20% 84%)",
    shapeB: "linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(13, 13, 13, 0.12))",
    clipB: "polygon(52% 20%, 92% 16%, 86% 48%, 58% 54%)",
  },
  {
    bg: "linear-gradient(140deg, #edece5, #cfcdc3)",
    shapeA: "linear-gradient(140deg, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.18))",
    clipA: "polygon(14% 22%, 88% 20%, 72% 36%, 22% 38%)",
    shapeB: "linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.14))",
    clipB: "polygon(34% 48%, 54% 42%, 74% 88%, 52% 92%)",
  },
  {
    bg: "linear-gradient(145deg, #f0efe8, #d7d4ca)",
    shapeA: "linear-gradient(180deg, rgba(13, 13, 13, 0.86), rgba(13, 13, 13, 0.16))",
    clipA: "polygon(18% 16%, 34% 16%, 42% 88%, 28% 88%)",
    shapeB: "linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(13, 13, 13, 0.16))",
    clipB: "polygon(44% 22%, 88% 36%, 74% 54%, 36% 38%)",
  },
  {
    bg: "linear-gradient(145deg, #ecebe3, #d1cec4)",
    shapeA: "linear-gradient(135deg, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.28))",
    clipA: "polygon(12% 16%, 78% 18%, 52% 52%, 14% 52%)",
    shapeB: "linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.18))",
    clipB: "polygon(54% 48%, 90% 34%, 84% 84%, 52% 74%)",
  },
  {
    bg: "linear-gradient(150deg, #efeee8, #d8d6cc)",
    shapeA: "linear-gradient(180deg, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.18))",
    clipA: "polygon(18% 18%, 82% 14%, 86% 28%, 22% 34%)",
    shapeB: "linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(13, 13, 13, 0.12))",
    clipB: "polygon(18% 58%, 44% 46%, 78% 88%, 42% 84%)",
  },
];

const projectMediaBySlug = {
  "after-everyone-left": [
    "after everyone left/1.png",
    "after everyone left/2.png",
    "after everyone left/3.png",
    "after everyone left/4.png",
  ],
  "castellated-re-use": [
    "Castellated RE-USE/1.gif",
    "Castellated RE-USE/2.png",
    "Castellated RE-USE/3.png",
    "Castellated RE-USE/4.gif",
    "Castellated RE-USE/5 (1).jpg",
    "Castellated RE-USE/5 (2).jpg",
    "Castellated RE-USE/6.jpg",
    "Castellated RE-USE/7 (1).jpg",
    "Castellated RE-USE/7 (2).jpg",
    "Castellated RE-USE/7 (3).jpg",
  ],
  "color-atlas": [
    "color atlas/1.gif",
    "color atlas/2.jpg",
    "color atlas/3.jpg",
    "color atlas/4.jpg",
    "color atlas/5.png",
  ],
  "corrrupted-parliment": [
    "Corrupted Parliment/2.png",
    "Corrupted Parliment/corpted 1.png",
    "Corrupted Parliment/corpted 2.png",
    "Corrupted Parliment/kesit.png",
    "Corrupted Parliment/maket.jpg",
    "Corrupted Parliment/post/behance_Çalışma Yüzeyi 1 kopya 2.jpg",
    "Corrupted Parliment/post/behance_Çalışma Yüzeyi 1 kopya 3.jpg",
    "Corrupted Parliment/post/behance-13.jpg",
    "Corrupted Parliment/post/behance-14.jpg",
    "Corrupted Parliment/post/behance-15.jpg",
    "Corrupted Parliment/post/behance-16.jpg",
    "Corrupted Parliment/post/behance-17.jpg",
    "Corrupted Parliment/post/behance-19.jpg",
    "Corrupted Parliment/post/behance-20.jpg",
    "Corrupted Parliment/render.jpg",
    "Corrupted Parliment/render2.jpg",
    "Corrupted Parliment/yakın.jpg",
  ],
  "counter-growth": [
    "Counter Growth/1.jpeg",
    "Counter Growth/2.jpg",
    "Counter Growth/3.png",
    "Counter Growth/4.jpg",
    "Counter Growth/5.jpg",
    "Counter Growth/6.png",
    "Counter Growth/7.png",
  ],
  "fractal-clay": [
    "Fractal Clay/1.png",
    "Fractal Clay/10.png",
    "Fractal Clay/10-1.gif",
    "Fractal Clay/10-2.gif",
    "Fractal Clay/2.png",
    "Fractal Clay/2-3.png",
    "Fractal Clay/2-4.png",
    "Fractal Clay/3.png",
    "Fractal Clay/4.png",
    "Fractal Clay/5.png",
    "Fractal Clay/5-2.png",
    "Fractal Clay/6.png",
    "Fractal Clay/6-2.png",
    "Fractal Clay/7.png",
    "Fractal Clay/7-2.png",
    "Fractal Clay/8.png",
    "Fractal Clay/8-2.png",
    "Fractal Clay/9.png",
    "Fractal Clay/9-1.png",
    "Fractal Clay/9-2.png",
  ],
  "hospital-clinic": [
    "hospital clinic/diagram2.jpg",
    "hospital clinic/ViewCapture20260402_225005.png",
    "hospital clinic/ViewCapture20260402_225212.png",
  ],
  "housing-in-kadikoy": [
    "housing in kadıköy/1.png",
    "housing in kadıköy/2.png",
    "housing in kadıköy/3.png",
    "housing in kadıköy/4.jpg",
    "housing in kadıköy/5.jpg",
  ],
  "llum": [
    "llum/1.jpg",
    "llum/2.gif",
    "llum/3.gif",
  ],
  "one-sun": [
    "one sun/Project images/ARoomWithOneSun_cover_image.png",
    "one sun/Project images/ARoomWithOneSun_image_1.png",
    "one sun/Project images/ARoomWithOneSun_image_2.png",
    "one sun/Project images/ARoomWithOneSun_image_3.png",
  ],
  "secondmatter": [
    "second matter/1.gif",
    "second matter/10.png",
    "second matter/11.png",
    "second matter/2.png",
    "second matter/3.jpg",
    "second matter/4.jpg",
    "second matter/5.jpg",
    "second matter/6.jpg",
    "second matter/7.jpg",
    "second matter/8.jpg",
    "second matter/9.jpg",
  ],
  "terraflux": [
    "terraflux/kapak.jpg",
    "terraflux/1.png",
    "terraflux/1.render.jpg",
    "terraflux/2.png",
    "terraflux/2.render.jpg",
    "terraflux/3.png",
    "terraflux/4.png",
    "terraflux/5.png",
    "terraflux/6.png",
    "terraflux/7.png",
    "terraflux/8.png",
    "terraflux/Başlıksız-3.png",
    "terraflux/BDA_Pelinsu_Sahin.jpg",
    "terraflux/buolur2.jpg",
    "terraflux/buolur3.jpg",
    "terraflux/IMG_5884.jpg",
    "terraflux/map.png",
    "terraflux/Model_picture.jpg",
    "terraflux/plan_Çalışma Yüzeyi 1.jpg",
    "terraflux/plan_Çalışma Yüzeyi 1.png",
    "terraflux/post/behance_Çalışma Yüzeyi 1.jpg",
    "terraflux/post/behance-02.jpg",
    "terraflux/post/behance-03.jpg",
    "terraflux/post/behance-04.jpg",
    "terraflux/post/behance-05.jpg",
    "terraflux/post/behance-06.jpg",
    "terraflux/Render1Alt.png",
    "terraflux/Render2Alt.png",
    "terraflux/Render3Alt.png",
    "terraflux/Render4Alt.png",
    "terraflux/yakınçekim.png",
  ],
  "urchin-pavilion": [
    "urchin pavilion/1.png",
    "urchin pavilion/2.png",
    "urchin pavilion/3.gif",
    "urchin pavilion/4.png",
  ],
  "waiting-for-migration": [
    "waiting for migration/Waiting for Migration 02.jpg",
    "waiting for migration/Waiting for Migration.jpg",
  ],
  "wood-joinery": [
    "Wood Joinery/1.jpg",
    "Wood Joinery/2.jpg",
    "Wood Joinery/3.jpg",
    "Wood Joinery/4.jpg",
    "Wood Joinery/5.jpg",
    "Wood Joinery/6.jpg",
    "Wood Joinery/7.jpg",
  ],
  "workshop-prototype": [
    "workshop prototype/detay facade-01.jpg",
    "workshop prototype/detay facade-022.jpg",
    "workshop prototype/Gemini_Generated_Image_6s877e6s877e6s87.jpg",
    "workshop prototype/Gemini_Generated_Image_7df5u77df5u77df5.jpg",
    "workshop prototype/Gemini_Generated_Image_7df5u77df5u77df53.jpg",
  ],
};

projectMediaBySlug["terraflux"] = [
  "terraflux/kapak.jpg",
  "terraflux/1.png",
  "terraflux/1.render.jpg",
  "terraflux/2.png",
  "terraflux/2.render.jpg",
  "terraflux/3.png",
  "terraflux/4.png",
  "terraflux/5.png",
  "terraflux/6.png",
  "terraflux/7.png",
  "terraflux/8.png",
  "terraflux/Ba\u015fl\u0131ks\u0131z-3.png",
  "terraflux/BDA_Pelinsu_Sahin.jpg",
  "terraflux/buolur2.jpg",
  "terraflux/buolur3.jpg",
  "terraflux/IMG_5884.jpg",
  "terraflux/map.png",
  "terraflux/Model_picture.jpg",
  "terraflux/plan_\u00c7al\u0131\u015fma Y\u00fczeyi 1.jpg",
  "terraflux/plan_\u00c7al\u0131\u015fma Y\u00fczeyi 1.png",
  "terraflux/post/behance_\u00c7al\u0131\u015fma Y\u00fczeyi 1.jpg",
  "terraflux/post/behance-02.jpg",
  "terraflux/post/behance-03.jpg",
  "terraflux/post/behance-04.jpg",
  "terraflux/post/behance-05.jpg",
  "terraflux/post/behance-06.jpg",
  "terraflux/Render1Alt.png",
  "terraflux/Render2Alt.png",
  "terraflux/Render3Alt.png",
  "terraflux/Render4Alt.png",
  "terraflux/yak\u0131n\u00e7ekim.png",
];

function mediaPath(relativePath) {
  return `./projects/${relativePath.split("/").map((segment) => encodeURIComponent(segment)).join("/")}`;
}

const projectWebMediaBySlug = {
  "922-fabricated-surface": [
    "922/for web/1.jpg",
    "922/for web/12.jpg",
    "922/for web/13.jpg",
    "922/for web/14.jpg",
  ],
  "after-everyone-left": [
    "after everyone left/for web/1.jpg",
    "after everyone left/for web/12.jpg",
    "after everyone left/for web/13.jpg",
  ],
  "castellated-re-use": [
    "Castellated RE-USE/for web/1.jpg",
    "Castellated RE-USE/for web/12.jpg",
    "Castellated RE-USE/for web/13.jpg",
    "Castellated RE-USE/for web/14.jpg",
    "Castellated RE-USE/for web/15.jpg",
  ],
  "color-atlas": [
    "color atlas/for web/1.jpg",
    "color atlas/for web/12.jpg",
    "color atlas/for web/13.jpg",
    "color atlas/for web/14.jpg",
  ],
  "corrrupted-parliment": [
    "Corrupted Parliment/for web/1.jpg",
    "Corrupted Parliment/for web/12.jpg",
    "Corrupted Parliment/for web/13.jpg",
    "Corrupted Parliment/for web/14.jpg",
    "Corrupted Parliment/for web/15.jpg",
    "Corrupted Parliment/for web/16.jpg",
  ],
  "hospital-clinic": [
    "hospital clinic/for web/1.jpg",
    "hospital clinic/for web/12.jpg",
  ],
  "housing-in-kadikoy": [
    "housing in kad\u0131k\u00f6y/for web/1.jpg",
    "housing in kad\u0131k\u00f6y/for web/12.jpg",
    "housing in kad\u0131k\u00f6y/for web/13.jpg",
    "housing in kad\u0131k\u00f6y/for web/14.jpg",
    "housing in kad\u0131k\u00f6y/for web/15.jpg",
    "housing in kad\u0131k\u00f6y/for web/16.jpg",
  ],
  "llum": [
    "llum/for web/1.jpg",
    "llum/for web/12.jpg",
    "llum/for web/13.jpg",
    "llum/for web/14.jpg",
    "llum/for web/15.jpg",
  ],
  "one-sun": [
    "one sun/for web/1.jpg",
    "one sun/for web/12.jpg",
    "one sun/for web/13.jpg",
    "one sun/for web/14.jpg",
  ],
  "secondmatter": [
    "second matter/for web/1.jpg",
    "second matter/for web/2.jpg",
    "second matter/for web/3.jpg",
    "second matter/for web/4.jpg",
    "second matter/for web/5.jpg",
    "second matter/for web/6.jpg",
    "second matter/for web/a.jpg",
    "second matter/for web/b.jpg",
    "second matter/for web/c.jpg",
  ],
  "terraflux": [
    "terraflux/for web/behance_\u00c7al\u0131\u015fma Y\u00fczeyi 1.jpg",
    "terraflux/for web/behance-02.jpg",
    "terraflux/for web/behance-03.jpg",
    "terraflux/for web/behance-04.jpg",
    "terraflux/for web/behance-05.jpg",
    "terraflux/for web/behance-06.jpg",
  ],
  "urchin-pavilion": [
    "urchin pavilion/3.gif",
  ],
  "workshop-prototype": [
    "workshop prototype/for web/1.jpg",
    "workshop prototype/for web/12.jpg",
    "workshop prototype/for web/13.jpg",
  ],
};

const projectTextBySlug = {
  "secondmatter": {
    description: "A material research project exploring second-life matter, transformation, and new architectural logics through iterative physical and digital testing.",
  },
  "terraflux": {
    description: "A world-building project connecting territorial reading, environmental forces, and architectural speculation through layered visual and spatial systems.",
  },
  "one-sun": {
    description: "A narrative architectural project structured through a sequence of images, scenes, and spatial moods.",
  },
  "fractal-clay": {
    description: "A fabrication and material study focused on repetition, variation, and the tectonic potential of clay-based systems.",
  },
  "corrrupted-parliment": {
    description: "A speculative institutional project exploring rupture, representation, and civic form through image-making and spatial fragmentation.",
  },
};

function buildProjectText(slug, title, type, category) {
  const custom = projectTextBySlug[slug];
  return {
    description:
      custom?.description ||
      `${title} is presented here as a ${type.toLowerCase()} within ${category.toLowerCase()}. This page gathers selected images, studies, and development frames from the wider project archive.`,
    sections: {
      context: `${title} is organised as an archive of key project moments, gathering the visual, spatial, and research material that shaped the work.`,
      system: `The project is driven by a design system that connects representation, material logic, and architectural intention rather than treating them as separate layers.`,
      process: `The sequence of images traces the project through iterations, drawings, renders, and intermediate studies, making the process legible alongside the final output.`,
      output: `Taken together, these frames position ${title} as both a design proposal and a curated body of visual research.`,
    },
  };
}

const seedProjects = seedProjectRows.map(([title, fileName, year, type, category]) => {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  const coverFileName = title === "Housing in Kadikoy" ? "Housing in kad\u0131k\u00f6y.png" : fileName;
  const thumbnail = `./projects/${encodeURIComponent(coverFileName)}`;
  const webMedia = (projectWebMediaBySlug[slug] || []).map(mediaPath);
  const media = webMedia.length
    ? slug === "one-sun"
      ? [thumbnail, ...webMedia]
      : webMedia
    : [thumbnail, thumbnail];
  const text = buildProjectText(slug, title, type, category);
  return {
    slug,
    title,
    category: category.toUpperCase(),
    year,
    type,
    tag: type,
    status: "Portfolio",
    thumbnail,
    media,
    description: text.description,
    sections: text.sections,
  };
});

const projectMap = new Map(
  seedProjects.map((project) => {
    if (project.title === "Housing in Kadikoy") {
      return [
        project.title,
        {
          ...project,
          thumbnail: `./projects/${encodeURIComponent("Housing in kadıköy.png")}`,
        },
      ];
    }

    return [project.title, project];
  })
);

const projectOrder = [
  "TerraFlux",
  "SecondMatter",
  "One Sun",
  "Waiting for Migration",
  "922-Fabricated Surface",
  "After Everyone Left",
  "Commune for Elderly",
  "Corrrupted Parliment",
  "Hospital Clinic",
  "Housing in Kadikoy",
  "Color Atlas",
  "Soul Metropolitan Library",
  "Urchin Pavilion",
  "Fractal Clay",
  "Castellated RE-USE",
  "Counter Growth",
  "Llum",
  "When Things Get Out of Hand",
  "Core Optimization",
  "Wood Joinery",
  "Woodcraft",
  "Workshop Prototype",
];

const housingProject = projectMap.get("Housing in Kadikoy");
if (housingProject) {
  housingProject.thumbnail = `./projects/${encodeURIComponent("Housing in kad\u0131k\u00f6y.png")}`;
}

const projects = projectOrder
  .map((title) => projectMap.get(title))
  .filter(Boolean);

const rootStyle = document.documentElement.style;
const storyScene = document.getElementById("story-scene");
const heroBubble = document.getElementById("hero-bubble");
const bubbleStage = document.querySelector(".hero-bubble-stage");
const projectsGrid = document.getElementById("projects-grid");
const projectsSection = document.getElementById("projects-section");
const projectsGapCell = document.getElementById("projects-gap-cell");
const navHomeButton = document.getElementById("nav-home");
const navHomeLink = document.getElementById("nav-home-link");
const navWorksButton = document.getElementById("nav-works");
const navAboutButton = document.getElementById("nav-about");
const navContactButton = document.getElementById("nav-contact");
const navCvLink = document.getElementById("nav-cv");
const overlay = document.getElementById("overlay");
const overlayBackdrop = document.getElementById("overlay-backdrop");
const projectModal = document.getElementById("project-modal");
const aboutPanel = document.getElementById("about-panel");
const cvPanel = document.getElementById("cv-panel");
const contactPanel = document.getElementById("contact-panel");
const modalTitlebar = document.getElementById("modal-titlebar");
const modalContent = document.getElementById("modal-content");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function easeInOut(amount) {
  return amount < 0.5
    ? 4 * amount * amount * amount
    : 1 - Math.pow(-2 * amount + 2, 3) / 2;
}

function segmentProgress(progress, start, end) {
  return clamp((progress - start) / Math.max(end - start, 0.0001), 0, 1);
}

function placeholderVars(index) {
  const visual = placeholderVisuals[index % placeholderVisuals.length];
  return [
    `--placeholder-bg:${visual.bg}`,
    `--placeholder-shape-a:${visual.shapeA}`,
    `--placeholder-clip-a:${visual.clipA}`,
    `--placeholder-shape-b:${visual.shapeB}`,
    `--placeholder-clip-b:${visual.clipB}`,
  ].join(";");
}

function projectPlaceholderMarkup(index) {
  return `<div class="project-placeholder" style="${placeholderVars(index)}"></div>`;
}

function getMediaFilename(src) {
  const clean = src.split("/").pop() || src;
  return decodeURIComponent(clean);
}

function getMediaGroupKey(src) {
  const fileName = getMediaFilename(src);
  const stem = fileName.replace(/\.[^.]+$/, "");
  return stem
    .replace(/\s+\(\d+\)$/, "")
    .replace(/-\d+$/, "")
    .trim()
    .toLowerCase();
}

function getMediaGroupLabel(src) {
  const fileName = getMediaFilename(src);
  const stem = fileName.replace(/\.[^.]+$/, "");
  return stem
    .replace(/\s+\(\d+\)$/, "")
    .replace(/-\d+$/, "")
    .trim();
}

function groupProjectMedia(media) {
  const groups = [];

  media.forEach((src) => {
    const key = getMediaGroupKey(src);
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && lastGroup.key === key) {
      lastGroup.items.push(src);
      return;
    }

    groups.push({
      key,
      label: getMediaGroupLabel(src),
      items: [src],
    });
  });

  return groups;
}

function renderSecondMatterProject(project, heroMedia, media, introLine) {
  const frames = media.slice(1);
  const frame = (index, label) => {
    const src = frames[index];
    if (!src) return "";
    return `
      <figure class="project-gallery-item${label ? " project-gallery-item--wide" : ""}">
        <div class="project-gallery-image">
          <img src="${src}" alt="${project.title} image ${index + 2}" loading="lazy" />
        </div>
      </figure>
    `;
  };

  return `
    <article class="project-article project-article--secondmatter">
      <header class="project-hero">
        <div class="project-hero-top">
          <span class="meta-line">Selected work</span>
          <div class="project-hero-tags">
            <span>${project.year}</span>
            <span>${project.type}</span>
          </div>
        </div>

        <div class="project-hero-body">
          <h2>${project.title}</h2>
          <div class="project-hero-side">
            <p class="project-hero-kicker">${introLine}</p>
          </div>
        </div>
      </header>

      <figure class="project-hero-visual">
        <div class="project-hero-image">
          ${heroMedia}
        </div>
      </figure>

      <section class="project-meta-strip">
        <div class="project-fact-row">
          <span>Year</span>
          <span>${project.year}</span>
        </div>
        <div class="project-fact-row">
          <span>Type</span>
          <span>${project.type}</span>
        </div>
      </section>

      <section class="project-gallery project-gallery--secondmatter">
        ${frame(0)}
        ${frame(1)}
        ${frame(2, true)}
        ${frame(3)}
        ${frame(4)}
        ${frame(5, true)}
        ${frame(6)}
        ${frame(7)}
        ${frame(8, true)}
        ${frame(9)}
      </section>
    </article>
  `;
}

function createProjectTile(project, index) {
  const item = document.createElement("button");
  item.type = "button";
  item.className = "project-tile";
  item.dataset.index = String(index);
  item.setAttribute("aria-label", project.title);

  const thumbMarkup = project.thumbnail
    ? `<div class="project-thumb"><img src="${project.thumbnail}" alt="${project.title} thumbnail" /></div>`
    : `<div class="project-thumb project-thumb--placeholder" style="${placeholderVars(index)}"></div>`;

  item.innerHTML = `
    ${thumbMarkup}
    <span class="sr-only">${project.title}</span>
  `;

  const image = item.querySelector("img");
  if (image) {
    image.addEventListener("error", () => {
      item.querySelector(".project-thumb").outerHTML =
        `<div class="project-thumb project-thumb--placeholder" style="${placeholderVars(index)}"></div>`;
    });
  }

  item.addEventListener("click", () => openProject(project.slug));
  return item;
}

function renderProjectsGrid() {
  const gap = projectsGapCell;
  projectsGrid.innerHTML = "";
  if (gap) {
    projectsGrid.appendChild(gap);
  }

  projects.forEach((project, index) => {
    projectsGrid.appendChild(createProjectTile(project, index));
  });
}

function renderProjectModal(project) {
  modalTitlebar.textContent = `${project.title} / ${project.year}`;
  const projectIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const media = project.media?.length ? project.media : [project.thumbnail].filter(Boolean);
  const heroMedia = media[0]
    ? `<img src="${media[0]}" alt="${project.title} project image" />`
    : projectPlaceholderMarkup(projectIndex < 0 ? 0 : projectIndex);
  const introLine = [project.type, project.year].filter(Boolean).join(" / ");
  const galleryMarkup = media.slice(1).filter(Boolean).map((src, index) => `
    <figure class="project-gallery-item project-gallery-item--wide">
      <div class="project-gallery-image">
        <img src="${src}" alt="${project.title} image ${index + 2}" loading="lazy" />
      </div>
    </figure>
  `).join("");

  modalContent.innerHTML = `
    <article class="project-article">
      <header class="project-hero">
        <div class="project-hero-top">
          <span class="meta-line">Selected work</span>
          <div class="project-hero-tags">
            <span>${project.year}</span>
            <span>${project.type}</span>
          </div>
        </div>

        <div class="project-hero-body">
          <h2>${project.title}</h2>
          <div class="project-hero-side">
            <p class="project-hero-kicker">${introLine}</p>
          </div>
        </div>
      </header>

      <figure class="project-hero-visual">
        <div class="project-hero-image">
          ${heroMedia}
        </div>
        <figcaption>${project.title} / archive sequence</figcaption>
      </figure>

      <section class="project-meta-strip">
        <div class="project-fact-row">
          <span>Year</span>
          <span>${project.year}</span>
        </div>
        <div class="project-fact-row">
          <span>Type</span>
          <span>${project.type}</span>
        </div>
      </section>

      ${galleryMarkup ? `<section class="project-gallery">${galleryMarkup}</section>` : ""}
    </article>
  `;

  modalContent.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      const wrapper = image.parentElement;
      if (!wrapper) return;
      wrapper.innerHTML = projectPlaceholderMarkup(projectIndex < 0 ? 0 : projectIndex);
    });
  });
}

function openOverlay(panel) {
  overlay.classList.remove("is-hidden");
  document.body.classList.add("overlay-open");
  projectModal.classList.add("is-hidden");
  aboutPanel.classList.add("is-hidden");
  cvPanel.classList.add("is-hidden");
  contactPanel.classList.add("is-hidden");
  panel.classList.remove("is-hidden");
}

function closeOverlay() {
  overlay.classList.add("is-hidden");
  document.body.classList.remove("overlay-open");
  projectModal.classList.add("is-hidden");
  aboutPanel.classList.add("is-hidden");
  cvPanel.classList.add("is-hidden");
  contactPanel.classList.add("is-hidden");
}

function openProject(slug) {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return;
  renderProjectModal(project);
  openOverlay(projectModal);
}

function scrollToWorks() {
  const target = projectsSection.getBoundingClientRect().top + window.scrollY - 40;
  window.scrollTo({ top: target, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handlePortfolioRoute(hashValue) {
  const route = (hashValue || window.location.hash || "").replace(/^#/, "");

  if (!route) {
    return;
  }

  if (route === "works" || route === "projects-section") {
    window.setTimeout(scrollToWorks, 40);
    return;
  }

  if (route === "about") {
    window.setTimeout(() => openOverlay(aboutPanel), 40);
    return;
  }

  if (route === "cv") {
    window.setTimeout(() => openOverlay(cvPanel), 40);
    return;
  }

  if (route === "contact") {
    window.setTimeout(() => openOverlay(contactPanel), 40);
    return;
  }

  if (route === "home") {
    window.setTimeout(scrollToTop, 40);
  }
}

navHomeButton.addEventListener("click", scrollToTop);
navHomeLink.addEventListener("click", scrollToTop);
navWorksButton.addEventListener("click", scrollToWorks);
navAboutButton.addEventListener("click", () => openOverlay(aboutPanel));
navContactButton.addEventListener("click", () => openOverlay(contactPanel));
navCvLink.addEventListener("click", (event) => {
  event.preventDefault();
  openOverlay(cvPanel);
});

if (heroBubble && bubbleStage) {
  heroBubble.addEventListener("pointermove", (event) => {
    const bounds = heroBubble.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    bubbleStage.style.setProperty("--bubble-shift-x", `${x * 22}px`);
    bubbleStage.style.setProperty("--bubble-shift-y", `${y * 18}px`);
    heroBubble.style.setProperty("--bubble-light-x", `${x * 28}px`);
    heroBubble.style.setProperty("--bubble-light-y", `${y * 22}px`);
    heroBubble.style.setProperty("--bubble-pointer-rotate", `${x * 7}deg`);
  });

  heroBubble.addEventListener("pointerleave", () => {
    bubbleStage.style.setProperty("--bubble-shift-x", "0px");
    bubbleStage.style.setProperty("--bubble-shift-y", "0px");
    heroBubble.style.setProperty("--bubble-light-x", "0px");
    heroBubble.style.setProperty("--bubble-light-y", "0px");
    heroBubble.style.setProperty("--bubble-pointer-rotate", "0deg");
  });
}

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  }
);

overlayBackdrop.addEventListener("click", closeOverlay);
document.querySelectorAll("[data-close-overlay]").forEach((button) => {
  button.addEventListener("click", closeOverlay);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeOverlay();
  }
});

window.addEventListener("hashchange", () => {
  handlePortfolioRoute(window.location.hash);
});

let sceneTicking = false;
let targetSceneProgress = 0;
let currentSceneProgress = 0;
let rafId = 0;

function readSceneProgress() {
  const rect = storyScene.getBoundingClientRect();
  const scrollable = Math.max(rect.height - window.innerHeight, 1);
  return clamp(-rect.top / scrollable, 0, 1);
}

function getBubbleTarget() {
  if (!projectsGapCell || !heroBubble) {
    return { x: 0, y: 140, scale: 0.31 };
  }

  const gapRect = projectsGapCell.getBoundingClientRect();
  const bubbleBaseSize = heroBubble.offsetWidth || 360;
  const targetX = gapRect.left + gapRect.width / 2 - window.innerWidth / 2;
  const targetY = gapRect.top + gapRect.height / 2 - window.innerHeight / 2;
  const targetSize = Math.min(gapRect.width, gapRect.height) * 0.92;
  const targetScale = clamp(targetSize / bubbleBaseSize, 0.24, 0.42);

  return {
    x: targetX,
    y: targetY,
    scale: targetScale,
  };
}

function renderSceneProgress(progress) {
  const textExit = easeInOut(segmentProgress(progress, 0.04, 0.7));
  const bubbleSettle = easeInOut(segmentProgress(progress, 0.06, 0.86));
  const bubbleFollow = easeInOut(segmentProgress(progress, 0.86, 1));
  const target = getBubbleTarget();

  const baseScale = lerp(1, 0.34, bubbleSettle);
  const baseY = lerp(0, 30, bubbleSettle);
  const bubbleScale = lerp(baseScale, target.scale, bubbleFollow);
  const bubbleX = lerp(0, target.x, bubbleFollow);
  const bubbleY = lerp(baseY, target.y, bubbleFollow);
  const bubbleRotate = lerp(0, -3, bubbleSettle);
  const bubbleShadow = lerp(1, 1.08, bubbleSettle);

  storyScene.style.setProperty("--hero-fade", textExit.toFixed(3));
  storyScene.style.setProperty("--hero-shift-y", `${textExit * 86}px`);
  storyScene.style.setProperty("--hero-role-shift", `${textExit * -180}px`);
  storyScene.style.setProperty("--hero-name-shift", `${textExit * -300}px`);
  storyScene.style.setProperty("--hero-aside-shift", `${textExit * -220}px`);
  rootStyle.setProperty("--story-bubble-x", `${bubbleX.toFixed(2)}px`);
  rootStyle.setProperty("--story-bubble-scale", bubbleScale.toFixed(3));
  rootStyle.setProperty("--story-bubble-y", `${bubbleY.toFixed(2)}px`);
  rootStyle.setProperty("--story-bubble-rotate", `${bubbleRotate}deg`);
  rootStyle.setProperty("--story-bubble-shadow", bubbleShadow.toFixed(3));
  rootStyle.setProperty("--story-bubble-opacity", "1");
}

function tickSceneProgress() {
  currentSceneProgress = lerp(currentSceneProgress, targetSceneProgress, 0.14);
  if (Math.abs(targetSceneProgress - currentSceneProgress) < 0.0015) {
    currentSceneProgress = targetSceneProgress;
  }

  renderSceneProgress(currentSceneProgress);

  if (Math.abs(targetSceneProgress - currentSceneProgress) >= 0.0015) {
    rafId = window.requestAnimationFrame(tickSceneProgress);
  } else {
    rafId = 0;
    sceneTicking = false;
  }
}

function requestSceneUpdate() {
  targetSceneProgress = readSceneProgress();
  if (sceneTicking) return;
  sceneTicking = true;
  if (rafId) {
    window.cancelAnimationFrame(rafId);
  }
  rafId = window.requestAnimationFrame(tickSceneProgress);
}

window.addEventListener("scroll", requestSceneUpdate, { passive: true });
window.addEventListener("resize", requestSceneUpdate);

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetOpeningState() {
  const route = window.location.hash.replace(/^#/, "");
  const shouldResetScroll = !route || route === "home";

  if (shouldResetScroll) {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  targetSceneProgress = 0;
  currentSceneProgress = 0;
  renderSceneProgress(0);
}

resetOpeningState();
window.addEventListener("load", () => {
  window.setTimeout(resetOpeningState, 0);
  window.setTimeout(resetOpeningState, 60);
  window.setTimeout(() => handlePortfolioRoute(window.location.hash), 120);
});
window.addEventListener("pageshow", resetOpeningState);

renderProjectsGrid();
document.querySelectorAll(".project-tile").forEach((item) => {
  projectObserver.observe(item);
});
resetOpeningState();
handlePortfolioRoute(window.location.hash);
