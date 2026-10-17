// фото с unsplash, сразу с обрезкой и одинаковой цветокоррекцией
const GRADE = "sat=-45&con=8&exp=2&blend=E5231F&blend-mode=softlight&blend-alpha=22";

const FOCUS: Record<string, [number, number]> = {
  "1755549694163-2006a86567e4": [0.68, 0.74],
};

export const unsplash = (id: string, w = 1200, h = Math.round((w * 3) / 4)) => {
  const f = FOCUS[id];
  const crop = f ? `crop=focalpoint&fp-x=${f[0]}&fp-y=${f[1]}` : "crop=center";
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&${crop}&q=70&auto=format&${GRADE}`;
};

export function sized(url: string, w: number) {
  if (!url.startsWith("https://images.unsplash.com/")) return url;
  const h = Math.round((w * 3) / 4);
  return url.replace(/([?&])w=\d+/, `$1w=${w}`).replace(/([?&])h=\d+/, `$1h=${h}`);
}

export const PHOTOS = {
  heroCpr: "1622115585848-1d5b6e8af4e4",
  heroKit: "1624638760852-8ede1666ab07",
  heroStreet: "1649260257572-91bf6f94cff6",
  cprAdult: "1755549746563-a7c0a391af36",
  cprChild: "1755549694163-2006a86567e4",
  basics: "1649260257572-91bf6f94cff6",
  ambulance: "1619025873875-59dfdd2bbbd6",
  chestPain: "1654588836262-fb473e1a34ee",
  elderHands: "1761692980299-2a09a152e6a5",
  bandage: "1600531105235-7a82db92fc46",
  sling: "1762347920674-13d8bca6cbb4",
  powerLines: "1473341304170-971dccb5ac1e",
  heat: "1740560516658-5a94b0b715ed",
  frost: "1548097160-627fd636ee56",
  pills: "1584308666744-24d5c474f2ae",
  snake: "1568204960342-8612e15f9d1e",
  stretcher: "1772140994531-20ba4efd9df2",
  carCrash: "1713623311317-d3c43a4be4cf",
  rubble: "1650638727175-347f9f3a83c8",
  kit: "1624638760852-8ede1666ab07",
  aed: "1617257484989-9f8ab411c362",
} as const;
