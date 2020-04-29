import zhaoshiLenDict from './zhaoshi_len_dict';
import zhaoshiVowelDict from './zhaoshi_vowel_dict';

import { wordParser } from './parser';

export const generateLyrics = (
    word1, cw1, pattern1,
    word2, cw2, pattern2,
    word3, cw3, pattern3,
    word4, cw4, pattern4,
  ) => {
  const line1 = `${word1}, ${cw1}${genWordsWithPattern(word1, pattern1).join('')}`;
  const line2 = `${word2}, ${cw2}${genWordsWithPattern(word2, pattern2).join('')}`;
  const line3 = `${word3}, ${cw3}${genWordsWithPattern(word3, pattern3).join('')}`;
  const line4 = `${word4}, ${cw4}${genWordsWithPattern(word4, pattern4).join('')}`;
  return `${line1}\n${line2}\n${line3}\n${line4}`;
}

const genWordsWithPattern = (word, pattern) => {
  const z = getZhaoshiByVowel(word);
  return pattern.filter(p => p > 0).map(breakdown =>
    z[breakdown][Math.floor(Math.random() * z[breakdown].length)]);
}

const getZhaoshiByVowel = (targetWord) => {
    const pinyins = wordParser(targetWord);

    const zhaoshi = {};

    const targetPinyin = pinyins[pinyins.length - 1]
    const vowels = targetPinyin[targetPinyin.length - 1];
    const targetVowel = vowels[vowels.length - 1];

    zhaoshiVowelDict.forEach(([currentVowels, words]) => {
      if (currentVowels[currentVowels.length - 1] === targetVowel) {
        words.forEach(word => {
          if (word[word.length - 1] !== targetWord[targetWord.length - 1]
            && !(zhaoshi[word.length] && zhaoshi[word.length].includes(word))) {
              if (zhaoshi[word.length]) {
                zhaoshi[word.length].push(word);
              } else {
                zhaoshi[word.length] = [word]
              }
            }
        })

      }
    })

    return zhaoshi;
}

export const getZhaoshiByLen = (len) => {
  return zhaoshiLenDict[len][Math.floor(Math.random() * zhaoshiLenDict[len].length)];
}
