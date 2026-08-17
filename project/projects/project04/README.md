# Generative Art Studio — Scene Engine v1

Data-driven `artPlan` object болон reusable scene engine ашиглан generative art application.

## Engine Flow

```
artPlan (өгөгдөл)
   ↓
buildScene(plan)        — plan.count ширхэг particle үүсгэнэ
   ↓
particles[] (array of objects)
   ↓
updateParticle(p)       — x += vx, y += vy, boundary bounce
   ↓
drawParticle(p, shape)  — circle / square / triangle зурна
   ↓
Canvas
```

**Гол зарчим:** Кодыг байнга өөрчлөхгүй, зөвхөн өгөгдлийг (artPlan) өөрчилж өөр scene үүсгэнэ.

## Features

### artPlan (data-driven configuration)
```js
const artPlan = {
  title: "Neon Dreams",
  background: "#0a0a1a",
  palette: ["#00ff88", "#00ccff", "#ff00ff"],
  shape: "circle",
  count: 15,
  speed: 1.5,
  minSize: 20,
  maxSize: 55
};
```

### Engine functions
- `buildScene(plan)` — plan-аас particles array үүсгэнэ
- `updateParticle(particle)` — хөдөлгөөн + boundary logic
- `drawParticle(particle, shape)` — shape-аар render хийнэ

### HTML Controls
- **Particle Count** slider (5–50) — `artPlan.count` өөрчилнө
- **Speed** slider (0.5–3) — `artPlan.speed` өөрчилнө
- **Shape** select — circle / square / triangle
- **Background** color picker — `artPlan.background` өөрчилнө
- **Palette** 3 color picker — `artPlan.palette` өөрчилнө
- **Rebuild Scene** button — scene дахин build хийнэ
- **Save Screenshot** button — canvas-ийг PNG хадгална
- **Mouse click** — canvas дээр дарахад scene rebuild

## Required Concepts (ашигласан)

- ✅ Data-driven design
- ✅ Object configuration (artPlan)
- ✅ Array of objects (particles[])
- ✅ Loops (for loop in buildScene, draw)
- ✅ Functions (buildScene, updateParticle, drawParticle)
- ✅ Parameters (plan, particle, shape)
- ✅ Conditionals (if/else shape check, boundary check)
- ✅ DOM events (addEventListener: input, change, click)
- ✅ p5.js animation (setup, draw, mousePressed)

## Bonus features

- ✅ Triangle shape дэмжсэн
- ✅ minSize / maxSize plan-д оруулсан
- ✅ Save screenshot button

## Юу хийсэн

Data-driven scene engine бүтээж, HTML controls-оор artPlan-ийн бүх property-г удирдаж чаддаг generative art studio хийсэн. Engine кодыг огт өөрчлөхгүйгээр зөвхөн өгөгдөл өөрчилж янз бүрийн scene үүсгэдэг болгосон.

## Юу сурсан

- Object болон array of objects ашиглан өгөгдөл төвтэй програм бичих
- Function-уудыг responsibility-гаар нь салгах (build / update / render)
- DOM events ашиглан HTML элементүүдээс canvas-г удирдах
- Data өөрчлөх ба engine code өөрчлөхийн ялгаа

## Ямар асуудал шийдсэн

- **Асуудал:** Controls өөрчлөх бүрд particle-ууд хуучин утгатайгаа үлдэж байсан.
  **Шийдэл:** `buildScene()` эхэнд `particles = []` гэж хуучин массивыг цэвэрлэж, шинээр үүсгэдэг болгосон.

- **Асуудал:** mousePressed() нь controls дээр дарахад ч ажиллаж байсан.
  **Шийдэл:** Canvas-ийн координат дотор байгаа эсэхийг шалгах нөхцөл нэмсэн.

## Project Structure

```
project04/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── p5.js
│   └── script.js
├── README.md
└── screenshots/
    └── result.png
```

## Submission

- **Student Name:** [Нэр]
- **GitHub Repository:** https://github.com/ZERO1zx1/summer_course_2026
- **Firebase Live Demo:** https://project04-art.web.app
- **Final Commit:** [hash]
