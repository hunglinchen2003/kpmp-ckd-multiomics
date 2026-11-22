const STR = {
  zh: {
    eyebrow: "KPMP 開放資料",
    title: "多體學 CKD 檢驗練習",
    navDash: "總覽",
    navData: "訓練資料",
    lead: "這是用 KPMP 開放的多體學資料做的練習：用 Healthy Reference 和 CKD 兩組，分別訓練血漿蛋白、血漿代謝、PAS 切片、空間脂質、空間代謝、空間 N-醣和空間轉錄組。正類是 CKD。這不是 IgAN 診斷。",
    disclaimer: "Healthy Reference 來自活體捐腎、結石捐腎者和試點腎切除，不是一般健康對照。CKD 入組是糖尿病或高血壓，不是 IgAN。五個標記是用全部樣本挑的，交叉驗證會略為樂觀。類別平衡後的機率用來比較型態，不是這個世代的盛行率。空間實驗的年份、基質和正負離子沒有合併。",
    showTitle: "H&E 與細胞標記：reference 與 CKD 並排",
    showNote: "左邊是 164-12，Healthy Reference。右邊是 31-10177，CKD，入組判定為高血壓腎病。兩邊用同一套腎臟標記和同一套顏色。圓點是 Visium spot。游標顯示該 spot 的細胞型態。血漿和影像質譜屬於同一人，但不是這張 H&E 的同一刀。這不是 IgAN。",
    cardsTitle: "各體學的預測卡",
    footer: "資料來源是 KPMP Atlas 的開放檔。機率由網頁裡的係數計算，沒有主機。",
    auc: "交叉驗證 AUC",
    bal: "balanced accuracy",
    samples: "人數",
    params: "參數",
    markers: "前五名標記",
    higherCkd: "較高偏向 CKD",
    higherRef: "較高偏向 reference",
    refBtn: "reference 中位數",
    ckdBtn: "CKD 中位數",
    dataBtn: "看訓練資料",
    search: "搜尋編號",
    all: "全部",
    reference: "Healthy Reference",
    ckd: "CKD",
    fitted: "全資料模型 P(CKD)",
    fittedNote: "表格裡的機率是把這列代進全資料模型，不是這個人的 out-of-fold 分數。上方 AUC 才是交叉驗證。",
    histologyNote: "PAS 是 128×128 的卷積網路，用低倍組織組成，不是高倍診斷。這裡放全部訓練影像；卷積權重留在本機，這張卡不重新跑影像。",
    visiumNote: "滑桿是七個預先指定的標記平均值。影像卷積網路的 out-of-fold AUC 另外標在卡上。一個 spot 混有多種細胞。",
    lipidNote: "reference 只有 7 人，AUC 不穩定。極性是正離子，SwissLipids。",
    noRow: "沒有列",
    cell: "細胞型態",
    other: "同一人的其他體學",
    otherBody: "",
    spot: "下面是各標記平均值。指定的型態是各自標準化之後最高的那個，再讓鄰近 spot 平滑，所以不一定是原始值最大的標記。",
    hover: "把游標移到組織上的圓點",
    pageOf: "列",
    ionTitle: "空間脂質、空間代謝、空間 N-醣的組織分布",
    ionNote: "下面三組都是 164-12 的影像質譜，每一張是一種分子在組織上的分布。合成圖用不同顏色區分分子。單張圖的黃白色只代表這張圖裡較強的訊號，不能拿來比較不同分子的絕對量。這些切片沒有對到 Visium H&E，也不是 CKD 31-10177。N-醣是未衍生的 [M+Na]+，相同 m/z 的異構物沒有分開。",
  },
  en: {
    eyebrow: "KPMP open data",
    title: "Multi-omics CKD practice",
    navDash: "Dashboard",
    navData: "Training data",
    lead: "This is a practice classifier on open KPMP data. Healthy Reference and CKD are modeled separately for plasma protein, plasma metabolites, PAS histology, spatial lipidomics, spatial metabolomics, spatial N-glycomics, and spatial transcriptomics. The positive class is CKD. This is not an IgAN diagnosis.",
    disclaimer: "Healthy Reference comes from living kidney donors, stone donors, and a pilot nephrectomy, not a general healthy control. CKD enrollment is diabetes or hypertension, not IgAN. The five markers were chosen on all rows, so cross-validation is slightly optimistic. Class-balanced probabilities compare patterns; they are not the cohort prevalence. Years, matrices, and ion polarities are not pooled.",
    showTitle: "H&E and cell markers, reference beside CKD",
    showNote: "Left is 164-12, Healthy Reference. Right is 31-10177, CKD, adjudicated as hypertensive kidney disease. Both use the same kidney markers and the same colors. Dots are Visium spots. The cursor shows that spot’s cell type. Plasma and imaging mass spectrometry belong to the same person, on neighboring material rather than this H&E. This is not IgAN.",
    cardsTitle: "Prediction cards",
    footer: "Source: open files from the KPMP Atlas. The page computes probabilities from the stored coefficients. There is no server.",
    auc: "Cross-validated AUC",
    bal: "Balanced accuracy",
    samples: "People",
    params: "Parameters",
    markers: "Top 5 markers",
    higherCkd: "higher toward CKD",
    higherRef: "higher toward reference",
    refBtn: "Reference median",
    ckdBtn: "CKD median",
    dataBtn: "Training rows",
    search: "Search ID",
    all: "All",
    reference: "Healthy Reference",
    ckd: "CKD",
    fitted: "Full-data P(CKD)",
    fittedNote: "The probability in the table plugs that row into the full-data model. It is not that person’s out-of-fold score. The AUC above is the cross-validation.",
    histologyNote: "PAS uses a 128×128 convolutional net on low-power tissue composition, not a high-power diagnosis. All training images are here. The weights stay local, so this card does not rescore images.",
    visiumNote: "Sliders are seven prespecified marker means. The image network’s out-of-fold AUC is listed separately. Each spot mixes cells.",
    lipidNote: "The reference group has 7 people, so the AUC is unstable. Polarity is positive, SwissLipids.",
    noRow: "No rows",
    cell: "Cell type",
    other: "Other omics for this person",
    otherBody: "",
    spot: "Values below are marker means. The assigned type is the highest after each marker is standardized, then lightly smoothed, so it is not always the largest raw value.",
    hover: "Move over a dot on the tissue",
    pageOf: "rows",
    ionTitle: "Tissue maps: spatial lipidomics, metabolomics, and N-glycomics",
    ionNote: "The three blocks below are imaging mass spectrometry from participant 164-12. Each picture is one molecule across the tissue. The composite gives each molecule its own color. Yellow-white means a stronger signal inside that one image, not a concentration that can be compared across molecules. These sections are not registered to the Visium H&E, and they are not CKD 31-10177. N-glycans are underivatized [M+Na]+, so isomers that share an m/z are not separated.",
  },
};

const ORDER = ["protein", "plasma_metabolite", "histology", "lipid", "spatial_metabolite", "nglycan", "visium"];
const META = {
  protein: { zh: "血漿蛋白 SomaScan", en: "Plasma protein, SomaScan" },
  plasma_metabolite: { zh: "血漿代謝 Metabolon", en: "Plasma metabolites, Metabolon" },
  histology: { zh: "PAS 切片", en: "PAS histology" },
  lipid: { zh: "空間脂質", en: "Spatial lipidomics" },
  spatial_metabolite: { zh: "空間代謝", en: "Spatial metabolomics" },
  nglycan: { zh: "空間 N-醣", en: "Spatial N-glycomics" },
  visium: { zh: "空間轉錄 Visium", en: "Spatial transcriptomics" },
};
const VISIUM_LABEL = {
  LGALS3: { zh: "LGALS3", en: "LGALS3" },
  inflammation: { zh: "發炎", en: "Inflammation" },
  injury: { zh: "損傷", en: "Injury" },
  proximal: { zh: "近端腎小管", en: "Proximal tubule" },
  podocyte: { zh: "足細胞", en: "Podocyte" },
  mesangial: { zh: "系膜", en: "Mesangial" },
  macrophage: { zh: "巨噬細胞", en: "Macrophage" },
};
const INFERNO = [[0, 0, 4], [40, 11, 84], [101, 21, 110], [159, 42, 99], [212, 72, 66], [245, 125, 21], [250, 193, 39], [252, 255, 164]];

let lang = localStorage.getItem("kpmp-lang") || "zh";
let page = null;
let dataKey = "protein";
let sortKey = "id";
let sortDir = 1;
let mode = "cell";
let spotScale = 1;

function t(key) { return STR[lang][key]; }

function applyText() {
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (STR[lang][key]) node.textContent = STR[lang][key];
  });
  document.getElementById("lang").textContent = lang === "zh" ? "English" : "中文";
  document.title = t("title");
}

function transformed(model, value) {
  if (model.transform === "log2floor1") return Math.log2(Math.max(value, 1));
  if (model.transform === "log2") return Math.log2(Math.max(value, 1e-8));
  if (model.transform === "log1p") return Math.log1p(Math.max(value, 0));
  return value;
}

function probability(model, values) {
  let logit = model.intercept;
  model.features.forEach((feature, index) => {
    logit += feature.coefficient * ((transformed(model, values[index]) - feature.mean) / feature.sd);
  });
  return 1 / (1 + Math.exp(-Math.max(-30, Math.min(30, logit))));
}

function formatValue(value) {
  if (value == null || Number.isNaN(value)) return "";
  const abs = Math.abs(value);
  if (abs >= 1000 || (abs > 0 && abs < 0.01)) return Number(value).toExponential(2);
  if (abs >= 10) return Number(value).toFixed(1);
  return Number(value).toFixed(3);
}

function featureLabel(model, feature) {
  if (model.key === "visium" && VISIUM_LABEL[feature.label]) return VISIUM_LABEL[feature.label][lang];
  return feature.gene || feature.label;
}

function sliderEnds(model, feature) {
  if (model.transform === "log1p") {
    return [Math.log1p(Math.max(feature.min, 0)), Math.log1p(Math.max(feature.max, feature.min + 1)), true];
  }
  const span = Math.max(feature.max - feature.min, 1e-6);
  return [feature.min, feature.max, false, span / 200];
}

function readSliders(model, root) {
  return model.features.map((feature, index) => {
    const raw = Number(root.querySelector(`[data-slider="${index}"]`).value);
    return model.transform === "log1p" ? Math.expm1(raw) : raw;
  });
}

function paintCard(model, root) {
  const values = readSliders(model, root);
  model.features.forEach((feature, index) => {
    root.querySelector(`[data-out="${index}"]`).textContent = formatValue(values[index]);
  });
  const p = probability(model, values);
  root.querySelector("[data-p]").textContent = `P(CKD) ${(100 * p).toFixed(1)}%`;
  root.querySelector("[data-bar]").style.width = `${(100 * p).toFixed(1)}%`;
}

function rocSvg(points) {
  if (!points || !points.length) return "";
  const line = points.map((pair) => `${(8 + pair[0] * 56).toFixed(1)},${(64 - pair[1] * 56).toFixed(1)}`).join(" ");
  return `<svg class="roc" viewBox="0 0 72 72" aria-hidden="true"><line x1="8" y1="64" x2="64" y2="8" stroke="#d9e0e8"/><polyline fill="none" stroke="#0f6e6b" stroke-width="2" points="${line}"/></svg>`;
}

function renderCard(model) {
  const card = document.createElement("article");
  card.className = "card";
  const ionStrip = cardIons(model.key);
  const title = META[model.key][lang];
  const sampleLine = model.n ? `${model.n} · ${model.n_reference} reference · ${model.n_ckd} CKD` : "";
  let extra = "";
  if (model.key === "histology") extra = `<p class="muted">${t("histologyNote")}</p>`;
  if (model.key === "visium") extra = `<p class="muted">${t("visiumNote")} AUC ${model.image_auc.toFixed(3)}.</p>`;
  if (model.key === "lipid") extra = `<p class="muted">${t("lipidNote")}</p>`;
  const markers = (model.features || []).map((feature) => {
    const direction = feature.coefficient >= 0 ? t("higherCkd") : t("higherRef");
    const klass = feature.coefficient >= 0 ? "up" : "down";
    return `<div class="marker"><span>${featureLabel(model, feature)}</span><span class="${klass}">${feature.coefficient.toFixed(2)} · ${direction}</span></div>`;
  }).join("");
  card.innerHTML = `<div class="card-top"><div><h3>${title}</h3><p class="muted">${sampleLine}</p></div>${rocSvg(model.roc)}</div>
    <div class="metrics"><div><b>${model.auc == null ? "—" : Number(model.auc).toFixed(3)}</b><span>${t("auc")}</span></div>
    <div><b>${model.balanced_accuracy == null ? "—" : Number(model.balanced_accuracy).toFixed(3)}</b><span>${t("bal")}</span></div>
    <div><b>${model.parameters ?? "—"}</b><span>${t("params")}</span></div></div>
    ${ionStrip}
    ${markers ? `<p class="muted">${model.features.length === 5 ? t("markers") : (lang === "zh" ? "標記" : "Markers")}</p>${markers}` : ""}
    ${extra}<div class="fields"></div><div class="prob" data-p></div><div class="bar"><div data-bar></div></div>`;
  const fields = card.querySelector(".fields");
  if (model.features && model.features.length && model.transform !== "none") {
    const actions = document.createElement("div");
    actions.className = "row";
    actions.innerHTML = `<button type="button" data-preset="reference">${t("refBtn")}</button><button type="button" data-preset="ckd">${t("ckdBtn")}</button><button type="button" data-open="${model.key}">${t("dataBtn")}</button>`;
    model.features.forEach((feature, index) => {
      const ends = sliderEnds(model, feature);
      const step = model.transform === "log1p" ? (ends[1] - ends[0]) / 200 : Math.max((feature.max - feature.min) / 200, 0.001);
      const start = model.transform === "log1p" ? Math.log1p(feature.reference) : feature.reference;
      const row = document.createElement("label");
      row.className = "slider";
      row.innerHTML = `<span>${featureLabel(model, feature)}</span><output data-out="${index}"></output><input data-slider="${index}" type="range" min="${ends[0]}" max="${ends[1]}" step="${step}" value="${start}">`;
      fields.appendChild(row);
    });
    card.appendChild(actions);
    actions.addEventListener("click", (event) => {
      const preset = event.target.getAttribute("data-preset");
      const open = event.target.getAttribute("data-open");
      if (preset) {
        model.features.forEach((feature, index) => {
          const value = preset === "ckd" ? feature.ckd : feature.reference;
          card.querySelector(`[data-slider="${index}"]`).value = model.transform === "log1p" ? Math.log1p(value) : value;
        });
        paintCard(model, card);
      }
      if (open) openData(open);
    });
    card.addEventListener("input", () => paintCard(model, card));
    card._paint = () => paintCard(model, card);
  } else {
    const jump = document.createElement("div");
    jump.className = "row";
    jump.innerHTML = `<button type="button">${t("dataBtn")}</button>`;
    jump.querySelector("button").addEventListener("click", () => openData(model.key));
    card.appendChild(jump);
  }
  return card;
}

function inferno(fraction) {
  const x = Math.max(0, Math.min(1, fraction)) * (INFERNO.length - 1);
  const left = Math.floor(x);
  const right = Math.min(INFERNO.length - 1, left + 1);
  const mix = x - left;
  const rgb = [0, 1, 2].map((channel) => Math.round(INFERNO[left][channel] * (1 - mix) + INFERNO[right][channel] * mix));
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

function markerRange(valueIndex) {
  let min = Infinity;
  let max = -Infinity;
  page.showcase.sections.forEach((section) => {
    section.spots.forEach((spot) => {
      const value = spot[3 + valueIndex];
      min = Math.min(min, value);
      max = Math.max(max, value);
    });
  });
  return [min, max];
}

function drawSpots() {
  const show = page.showcase;
  const valueIndex = show.valueKeys.indexOf(mode);
  const range = valueIndex >= 0 ? markerRange(valueIndex) : null;
  document.querySelectorAll("#compare .frame").forEach((frame) => {
    const image = frame.querySelector("img");
    const canvas = frame.querySelector("canvas");
    const section = show.sections[Number(frame.dataset.index)];
    if (!image.naturalWidth || !section) return;
    canvas.width = image.clientWidth;
    canvas.height = image.clientHeight;
    const scale = image.clientWidth / section.width;
    frame._scale = scale;
    const context = canvas.getContext("2d");
    const radius = Math.max(2.5, image.clientWidth / 130);
    section.spots.forEach((spot) => {
      let color = show.types[spot[2]].color;
      if (range) {
        const fraction = range[1] === range[0] ? 0 : (spot[3 + valueIndex] - range[0]) / (range[1] - range[0]);
        color = inferno(fraction);
      }
      context.beginPath();
      context.fillStyle = color;
      context.globalAlpha = 0.9;
      context.arc(spot[0] * scale, spot[1] * scale, radius, 0, Math.PI * 2);
      context.fill();
    });
  });
  const legend = document.getElementById("legend");
  if (mode === "cell") {
    legend.innerHTML = `<p><b>${t("cell")}</b></p>` + show.types.map((type) => `<div><i class="swatch" style="background:${type.color}"></i>${type[lang]}</div>`).join("");
  } else {
    const current = show.modes.find((item) => item.id === mode);
    const shared = lang === "zh" ? "兩張圖用同一段顏色" : "both images share one color scale";
    legend.innerHTML = `<p><b>${current[lang]}</b> · low → high · ${shared}</p><div style="height:12px;width:180px;border-radius:99px;background:linear-gradient(90deg,#000004,#65156e,#d44842,#f5c027,#fcffa4)"></div>`;
  }
}

function otherLines(section) {
  const samples = section.samples || {};
  if (lang === "zh") {
    return `血漿是入組血液。空間脂質 ${samples.lipid || "—"}，空間代謝 ${samples.metabolite || "—"}，空間 N-醣 ${samples.nglycan || "—"}。這些是鄰近材料，不是這張 H&E。`;
  }
  return `Plasma is enrollment blood. Spatial lipidomics ${samples.lipid || "—"}, metabolomics ${samples.metabolite || "—"}, N-glycomics ${samples.nglycan || "—"}. Those are neighboring samples, not this H&E.`;
}

function showTip(event) {
  const frame = event.currentTarget;
  const tip = frame.querySelector(".tip");
  const section = page.showcase.sections[Number(frame.dataset.index)];
  const rect = frame.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const scale = frame._scale || 1;
  let best = null;
  let bestDistance = 16 * Math.max(scale, 0.5);
  section.spots.forEach((spot) => {
    const distance = Math.hypot(spot[0] * scale - x, spot[1] * scale - y);
    if (distance < bestDistance) {
      best = spot;
      bestDistance = distance;
    }
  });
  if (!best) {
    tip.hidden = true;
    return;
  }
  const type = page.showcase.types[best[2]];
  const lines = page.showcase.valueKeys.map((key, index) => {
    const item = page.showcase.modes.find((modeItem) => modeItem.id === key);
    return `<div>${item[lang]} ${Number(best[3 + index]).toFixed(2)}</div>`;
  }).join("");
  tip.hidden = false;
  tip.innerHTML = `<b>${type[lang]}</b><div>${t("spot")}</div>${lines}<div style="margin-top:6px"><b>${t("other")}</b><div>${otherLines(section)}</div></div>`;
  const maxX = frame.clientWidth - tip.offsetWidth - 8;
  tip.style.left = `${Math.max(8, Math.min(x + 12, maxX))}px`;
  tip.style.top = `${Math.max(8, y + 12)}px`;
}

function renderShowcase() {
  const show = page.showcase;
  const modes = document.getElementById("modes");
  modes.innerHTML = "";
  show.modes.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item[lang];
    button.className = item.id === mode ? "active" : "";
    button.addEventListener("click", () => {
      mode = item.id;
      drawSpots();
      modes.querySelectorAll("button").forEach((node) => node.classList.toggle("active", node.textContent === item[lang]));
    });
    modes.appendChild(button);
  });
  const compare = document.getElementById("compare");
  compare.innerHTML = "";
  let pending = show.sections.length;
  show.sections.forEach((section, index) => {
    const block = document.createElement("article");
    block.innerHTML = `<p class="cap">${section.caption[lang]}</p><div class="frame" data-index="${index}"><img alt="${section.participant} H&E"><canvas></canvas><div class="tip" hidden></div></div>`;
    const frame = block.querySelector(".frame");
    const image = frame.querySelector("img");
    image.onerror = () => { pending -= 1; };
    image.onload = () => {
      pending -= 1;
      if (pending <= 0) drawSpots();
    };
    image.src = section.image;
    frame.addEventListener("mousemove", showTip);
    frame.addEventListener("mouseleave", () => { frame.querySelector(".tip").hidden = true; });
    compare.appendChild(block);
  });
}

const ION_CARD = { lipid: "lipid", spatial_metabolite: "metabolite", nglycan: "nglycan" };

function ionAssay(key) {
  if (!page.ionMaps) return null;
  return page.ionMaps.assays.find((assay) => assay.key === key) || null;
}

function cardIons(modelKey) {
  const assay = ionAssay(ION_CARD[modelKey]);
  if (!assay) return "";
  const thumbs = [assay.composite, ...assay.items.map((item) => item.src)]
    .map((src, index) => `<img class="${index === 0 ? "wide" : ""}" alt="" src="${src}">`)
    .join("");
  return `<div class="card-ions">${thumbs}</div>`;
}

function renderIons() {
  const panel = document.getElementById("ion-panel");
  const maps = page.ionMaps;
  if (!maps) {
    panel.innerHTML = "";
    return;
  }
  panel.innerHTML = maps.assays.map((assay) => {
    const polarity = assay.polarity === "positive" ? (lang === "zh" ? "正離子" : "positive") : (lang === "zh" ? "負離子" : "negative");
    const compositeCaption = lang === "zh"
      ? `合成圖 · ${polarity} · 一種顏色一個分子`
      : `Composite · ${polarity} · one color per molecule`;
    const figures = assay.items.map((item) => {
      const structure = item.structure ? `<img class="structure" alt="${item.label}" src="${item.structure}">` : "";
      const picture = structure
        ? `<div class="pair"><img class="map" alt="${item.label}" src="${item.src}">${structure}</div>`
        : `<img class="map" alt="${item.label}" src="${item.src}">`;
      return `<figure>${picture}<figcaption><i class="dot" style="background:${item.color}"></i>${item.label}<br>m/z ${item.mz} · ${Number(item.intensity).toExponential(2)}</figcaption></figure>`;
    }).join("");
    return `<section class="assay" id="ion-${assay.key}"><h3>${assay[lang]} · ${polarity}</h3><figure class="composite"><img class="map" alt="${assay[lang]}" src="${assay.composite}"><figcaption>${compositeCaption}</figcaption></figure><div class="ion-grid">${figures}</div></section>`;
  }).join("");
}

function renderCards() {
  const root = document.getElementById("cards");
  root.innerHTML = "";
  ORDER.forEach((key) => {
    const card = renderCard(page.models[key]);
    root.appendChild(card);
    if (card._paint) card._paint();
  });
}

function rowClass(label) {
  return label === "CKD" ? "ckd" : "ref";
}

function renderData() {
  const tabs = document.getElementById("data-tabs");
  tabs.innerHTML = "";
  ORDER.forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = META[key][lang];
    button.className = key === dataKey ? "active" : "";
    button.addEventListener("click", () => {
      dataKey = key;
      sortKey = "id";
      renderData();
    });
    tabs.appendChild(button);
  });
  const panel = document.getElementById("data-panel");
  const model = page.models[dataKey];
  if (dataKey === "histology" || dataKey === "visium") {
    const images = dataKey === "histology" ? page.histologyGallery : model.rows.filter((row) => row.src);
    panel.innerHTML = `<div class="tools"><input id="q" placeholder="${t("search")}"><select id="klass"><option value="all">${t("all")}</option><option value="Healthy Reference">${t("reference")}</option><option value="CKD">${t("ckd")}</option></select></div><p class="muted">${images.length} ${t("pageOf")}</p><div class="gallery" id="gallery"></div>`;
    const draw = () => {
      const query = document.getElementById("q").value.trim().toLowerCase();
      const klass = document.getElementById("klass").value;
      const gallery = document.getElementById("gallery");
      gallery.innerHTML = "";
      images.filter((row) => (klass === "all" || row.enrollment === klass) && row.id.toLowerCase().includes(query)).forEach((row) => {
        const figure = document.createElement("figure");
        figure.innerHTML = `<img loading="lazy" alt="${row.id}" src="${row.src}"><figcaption><span class="badge ${rowClass(row.enrollment)}">${row.enrollment === "CKD" ? "CKD" : "Reference"}</span> ${row.id}</figcaption>`;
        gallery.appendChild(figure);
      });
    };
    panel.querySelector("#q").addEventListener("input", draw);
    panel.querySelector("#klass").addEventListener("change", draw);
    draw();
    if (dataKey === "visium") panel.appendChild(tableBlock(model));
    return;
  }
  panel.innerHTML = "";
  panel.appendChild(tableBlock(model));
}

function tableBlock(model) {
  const wrap = document.createElement("div");
  const headers = [`<th><button type="button" data-sort="id">ID</button></th>`, `<th><button type="button" data-sort="enrollment">${lang === "zh" ? "組別" : "Group"}</button></th>`];
  (model.features || []).forEach((feature, index) => {
    headers.push(`<th><button type="button" data-sort="v${index}">${featureLabel(model, feature)}</button></th>`);
  });
  if (model.features && model.features.length) headers.push(`<th><button type="button" data-sort="p">${t("fitted")}</button></th>`);
  wrap.innerHTML = `<div class="tools"><input id="q2" placeholder="${t("search")}"><select id="klass2"><option value="all">${t("all")}</option><option value="Healthy Reference">${t("reference")}</option><option value="CKD">${t("ckd")}</option></select></div><p class="muted">${t("fittedNote")}</p><div class="table-wrap"><table><thead><tr>${headers.join("")}</tr></thead><tbody></tbody></table></div><p class="muted" id="count"></p>`;
  const draw = () => {
    const query = wrap.querySelector("#q2").value.trim().toLowerCase();
    const klass = wrap.querySelector("#klass2").value;
    let rows = model.rows.filter((row) => (klass === "all" || row.enrollment === klass) && row.id.toLowerCase().includes(query));
    rows.forEach((row) => {
      row._p = model.features && model.features.length ? probability(model, row.v) : null;
    });
    rows.sort((a, b) => {
      const left = sortKey === "id" ? a.id : sortKey === "enrollment" ? a.enrollment : sortKey === "p" ? a._p : a.v[Number(sortKey.slice(1))];
      const right = sortKey === "id" ? b.id : sortKey === "enrollment" ? b.enrollment : sortKey === "p" ? b._p : b.v[Number(sortKey.slice(1))];
      if (left < right) return -sortDir;
      if (left > right) return sortDir;
      return 0;
    });
    const body = wrap.querySelector("tbody");
    body.innerHTML = rows.slice(0, 400).map((row) => {
      const cells = (row.v || []).map((value) => `<td>${formatValue(value)}</td>`).join("");
      const p = row._p == null ? "" : `<td>${(100 * row._p).toFixed(1)}%</td>`;
      return `<tr><td>${row.id}</td><td>${row.enrollment === "CKD" ? "CKD" : "Reference"}</td>${cells}${p}</tr>`;
    }).join("") || `<tr><td>${t("noRow")}</td></tr>`;
    wrap.querySelector("#count").textContent = `${rows.length} ${t("pageOf")}`;
  };
  wrap.addEventListener("click", (event) => {
    const key = event.target.getAttribute("data-sort");
    if (!key) return;
    sortDir = sortKey === key ? -sortDir : 1;
    sortKey = key;
    draw();
  });
  wrap.querySelector("#q2").addEventListener("input", draw);
  wrap.querySelector("#klass2").addEventListener("change", draw);
  draw();
  return wrap;
}

function openData(key) {
  dataKey = key;
  document.querySelectorAll("nav button").forEach((button) => button.classList.toggle("active", button.getAttribute("data-page") === "data"));
  document.getElementById("dashboard").hidden = true;
  document.getElementById("data").hidden = false;
  renderData();
}

function showPage(name) {
  document.querySelectorAll("nav button").forEach((button) => button.classList.toggle("active", button.getAttribute("data-page") === name));
  document.getElementById("dashboard").hidden = name !== "dashboard";
  document.getElementById("data").hidden = name !== "data";
  if (name === "dashboard") {
    renderShowcase();
    renderIons();
    renderCards();
  } else {
    renderData();
  }
}

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem("kpmp-lang", lang);
  applyText();
  showPage(document.getElementById("data").hidden ? "dashboard" : "data");
});
document.querySelector("nav").addEventListener("click", (event) => {
  const name = event.target.getAttribute("data-page");
  if (name) showPage(name);
});
window.addEventListener("resize", () => { if (page && page.showcase) drawSpots(); });

applyText();
fetch("data/site.json")
  .then((response) => response.json())
  .then((payload) => {
    page = payload;
    showPage("dashboard");
  })
  .catch((error) => {
    document.querySelector(".lead").textContent = String(error);
  });
