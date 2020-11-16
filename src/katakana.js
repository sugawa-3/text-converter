const katakana = [
  { full: "ア", half: "ｱ" },
  { full: "イ", half: "ｲ" },
  { full: "ウ", half: "ｳ" },
  { full: "エ", half: "ｴ" },
  { full: "オ", half: "ｵ" },
  { full: "カ", half: "ｶ" },
  { full: "キ", half: "ｷ" },
  { full: "ク", half: "ｸ" },
  { full: "ケ", half: "ｹ" },
  { full: "コ", half: "ｺ" },
  { full: "サ", half: "ｻ" },
  { full: "シ", half: "ｼ" },
  { full: "ス", half: "ｽ" },
  { full: "セ", half: "ｾ" },
  { full: "ソ", half: "ｿ" },
  { full: "タ", half: "ﾀ" },
  { full: "チ", half: "ﾁ" },
  { full: "ツ", half: "ﾂ" },
  { full: "テ", half: "ﾃ" },
  { full: "ト", half: "ﾄ" },
  { full: "ナ", half: "ﾅ" },
  { full: "ニ", half: "ﾆ" },
  { full: "ヌ", half: "ﾇ" },
  { full: "ネ", half: "ﾈ" },
  { full: "ノ", half: "ﾉ" },
  { full: "ハ", half: "ﾊ" },
  { full: "ヒ", half: "ﾋ" },
  { full: "フ", half: "ﾌ" },
  { full: "ヘ", half: "ﾍ" },
  { full: "ホ", half: "ﾎ" },
  { full: "マ", half: "ﾏ" },
  { full: "ミ", half: "ﾐ" },
  { full: "ム", half: "ﾑ" },
  { full: "メ", half: "ﾒ" },
  { full: "モ", half: "ﾓ" },
  { full: "ヤ", half: "ﾔ" },
  { full: "ユ", half: "ﾕ" },
  { full: "ヨ", half: "ﾖ" },
  { full: "ラ", half: "ﾗ" },
  { full: "リ", half: "ﾘ" },
  { full: "ル", half: "ﾙ" },
  { full: "レ", half: "ﾚ" },
  { full: "ロ", half: "ﾛ" },
  { full: "ワ", half: "ﾜ" },
  { full: "ヲ", half: "ｦ" },
  { full: "ン", half: "ﾝ" },
  { full: "ァ", half: "ｧ" },
  { full: "ィ", half: "ｨ" },
  { full: "ゥ", half: "ｩ" },
  { full: "ェ", half: "ｪ" },
  { full: "ォ", half: "ｫ" },
  { full: "ッ", half: "ｯ" },
  { full: "ャ", half: "ｬ" },
  { full: "ュ", half: "ｭ" },
  { full: "ョ", half: "ｮ" },
  { full: "ガ", half: "ｶﾞ" },
  { full: "ギ", half: "ｷﾞ" },
  { full: "グ", half: "ｸﾞ" },
  { full: "ゲ", half: "ｹﾞ" },
  { full: "ゴ", half: "ｺﾞ" },
  { full: "ザ", half: "ｻﾞ" },
  { full: "ジ", half: "ｼﾞ" },
  { full: "ズ", half: "ｽﾞ" },
  { full: "ゼ", half: "ｾﾞ" },
  { full: "ゾ", half: "ｿﾞ" },
  { full: "ダ", half: "ﾀﾞ" },
  { full: "ヂ", half: "ﾁﾞ" },
  { full: "ヅ", half: "ﾂﾞ" },
  { full: "デ", half: "ﾃﾞ" },
  { full: "ド", half: "ﾄﾞ" },
  { full: "バ", half: "ﾊﾞ" },
  { full: "ビ", half: "ﾋﾞ" },
  { full: "ブ", half: "ﾌﾞ" },
  { full: "ベ", half: "ﾍﾞ" },
  { full: "ボ", half: "ﾎﾞ" },
  { full: "パ", half: "ﾊﾟ" },
  { full: "ピ", half: "ﾋﾟ" },
  { full: "プ", half: "ﾌﾟ" },
  { full: "ペ", half: "ﾍﾟ" },
  { full: "ポ", half: "ﾎﾟ" },
  { full: "ヴ", half: "ｳﾞ" },
  { full: "ヷ", half: "ﾜﾞ" },
  { full: "ヺ", half: "ｦﾞ" },
  { full: "。", half: "｡" },
  { full: "、", half: "､" },
  { full: "ー", half: "ｰ" },
  { full: "「", half: "｢" },
  { full: "」", half: "｣" },
  { full: "・", half: "･" },
  { full: "゛", half: "ﾞ" },
  { full: "゜", half: "ﾟ" },
];

export const findHalfKatakana = (full) => {
  const result = katakana.find((k) => {
    return k.full === full;
  });
  return result ? result.half : full;
};

export const findFullKatakana = (half) => {
  const result = katakana.find((k) => {
    return k.half === half;
  });
  return result ? result.full : half;
};

export const toKatakana = (text) => {
  return text
    .replace(/[ぁ-ゔ]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0x60))
    .replace(/ﾞ/g, "゛")
    .replace(/ﾟ/g, "゜")
    .replace(/()ウ゛/g, "ヴ")
    .replace(/(ワ゛)/g, "ヷ")
    .replace(/(ヰ゛)/g, "ヸ")
    .replace(/(ヱ゛)/g, "ヹ")
    .replace(/(ヲ゛)/g, "ヺ")
    .replace(/(ゝ゛)/g, "ヾ")
    .replace(/ゝ/g, "ヽ")
    .replace(/ゞ/g, "ヾ")
    .replace(/ゕ/g, "ヵ")
    .replace(/ゖ/g, "ヶ");
};

export const toHalfKatakana = (text) => {
  return toKatakana(text)
    .split("")
    .map((t) => findHalfKatakana(t) || t)
    .join("");
};

export const toFullKatakana = (text) => {
  return toKatakana(text)
    .split("")
    .map((t) => findFullKatakana(t) || t)
    .join("");
};
