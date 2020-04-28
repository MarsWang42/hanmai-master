import py from 'tiny-pinyin';

export const wordParser = (word) => {
  if (py.isSupported()) {
    const pinyins = py.convertToPinyin(word, '-', true).split('-');
    return pinyinParser(pinyins);
  }
}

const pinyinParser = (pinyins) => {
  return pinyins.map(pinyin => {
    const correctedPinyin = pinyinCorrection(pinyin);
    const [consonant, vowel]= splitCv(correctedPinyin).slice(1);
    return [consonant, vowelParser(vowel)]
  })
}

const pinyinCorrection = (pinyin) => {
  // z/c/s + i -> z/c/s + I
  if (pinyin.match(/[zcs]i$/)) {
    return pinyin.replace('i', 'I');
  }

  // j/q/x/y + u/ue/un/uan -> j/q/x + v/ve/vn/van | v/ve/vn/van
  else if (pinyin.match(/[jqxy]u/, pinyin)) {
    return pinyin.replace('u', 'v').replace(/y*(.+)/, '$1')
  }


  // y + a/e/ao/ou/an/ in/iang/ing/iong -> ia/ie/iao/iou/ian/ in/iang/ing/iong
  else if (pinyin.startsWith("y")) {
    return pinyin.replace(/yi*(.*)/, 'i$1');
  }

  // w + u/a/o/ai/ei/an/en/ang/eng        -> u/ua/uo/uai/uei/uan/uen/uang/ueng
  else if (pinyin.startsWith("w")) {
    return pinyin.replace(/wu*(.*)/, 'u$1')
  }

  // qiu -> qiou
  else if (pinyin.endsWith('iu')) {
    return pinyin.replace('iu', 'iou')
  }

  // cui -> cuei
  else if (pinyin.endsWith('ui')) {
    return pinyin.replace('ui', 'uei')
  }

  // lun -> luen
  else if (pinyin.endsWith('un')) {
    return pinyin.replace('un', 'uen')
  }

  return pinyin;
}

const splitCv = (pinyin) => {
  return pinyin.match(/(ch|zh|sh|[^aeiIouv])*(.+)/);
}

const vowelParser = (vowel) => {
  if (vowel === 'van') {
    return ['v', 'an']
  }
  
  else if (vowel.length > 1 && vowel[0] === 'u') {
    return ['u', vowel.slice(1)];
  }

  // for 'i', except 'in' and 'ing' (one vowel), 'ie' and 'ian'
  // (sound different from 'e' and 'an')
  else if (vowel.length > 1 && vowel[0] === 'i' && vowel[1] !== 'n'
    && vowel[1] !== 'e' && vowel.slice(1) !== 'an') {
    return ['i', vowel.slice(1)];
  }

  return [vowel]
}
