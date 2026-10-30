export type ReferenceKind = "quran" | "hadith";

export type IslamicReference = {
  id: string;
  kind: ReferenceKind;
  title: string;
  citation: string;
  excerpt: string;
  translation: string;
  sourceUrl: string;
  context: string;
  applicationNote: string;
};

/**
 * Curated starter source register.
 * Qur'an excerpts use the Saheeh International English translation.
 * Hadith excerpts link to the cited Sunnah.com record.
 * The application notes intentionally distinguish the source text from our reflection.
 */
export const references: IslamicReference[] = [
  {
    id: "quran-13-28",
    kind: "quran",
    title: "Remembrance and reassurance",
    citation: "Surah Ar-Ra'd 13:28",
    excerpt: "Unquestionably, by the remembrance of Allah hearts are assured.",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=13&verse=28",
    context: "The verse describes believers whose hearts are assured by the remembrance of Allah.",
    applicationNote: "This is a spiritual reminder, not a promise that anxiety or a mental-health condition will disappear immediately."
  },
  {
    id: "quran-39-53",
    kind: "quran",
    title: "Do not despair of Allah's mercy",
    citation: "Surah Az-Zumar 39:53",
    excerpt: "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins...",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=39&verse=53",
    context: "The address is to people who have transgressed against themselves and calls them back from despair to Allah's mercy.",
    applicationNote: "This verse is about Allah's mercy and forgiveness; it must not be used to suggest that depression or sadness is caused by a person's sin."
  },
  {
    id: "quran-94-5-6",
    kind: "quran",
    title: "With hardship comes ease",
    citation: "Surah Ash-Sharh 94:5–6",
    excerpt: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
    translation: "Saheeh International",
    sourceUrl: "https://legacy.quran.com/94/5-6",
    context: "These two consecutive verses repeat the assurance that ease accompanies hardship.",
    applicationNote: "The verses offer hope; they do not specify when a particular difficulty will end or remove the need to seek help."
  },
  {
    id: "quran-2-286",
    kind: "quran",
    title: "Allah does not charge a soul beyond its capacity",
    citation: "Surah Al-Baqarah 2:286",
    excerpt: "Allah does not charge a soul except [with that within] its capacity.",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=2&verse=286",
    context: "The verse is within the closing passage of Al-Baqarah and includes a supplication asking Allah not to impose a burden beyond what people can bear.",
    applicationNote: "Never use this verse to tell someone that their pain is small, that they should cope alone, or that asking for help shows weak faith."
  },
  {
    id: "quran-4-32",
    kind: "quran",
    title: "Do not covet what others have been given",
    citation: "Surah An-Nisa 4:32",
    excerpt: "And do not wish for that by which Allah has made some of you exceed others... And ask Allah of His bounty.",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=4&verse=32",
    context: "The verse addresses wishing for what Allah has given others and goes on to speak about what men and women earn and asking Allah for His bounty.",
    applicationNote: "It can prompt reflection on envy and comparison, but it is not a command to abandon healthy goals or efforts."
  },
  {
    id: "quran-9-71",
    kind: "quran",
    title: "Believers support one another",
    citation: "Surah At-Tawbah 9:71",
    excerpt: "The believing men and believing women are allies of one another...",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=9&verse=71",
    context: "The verse describes the mutual responsibilities of believing men and women, including enjoining what is right and establishing prayer and zakah.",
    applicationNote: "This is a broad teaching about community and mutual responsibility, not a direct promise that a person will never experience loneliness."
  },
  {
    id: "quran-17-70",
    kind: "quran",
    title: "The children of Adam are honoured",
    citation: "Surah Al-Isra 17:70",
    excerpt: "And We have certainly honored the children of Adam...",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=17&verse=70",
    context: "The verse speaks about the honour Allah has granted the children of Adam and other favours given to humanity.",
    applicationNote: "This can ground a reflection on human dignity; it is not a ranking of people's worth by achievement, appearance or social status."
  },
  {
    id: "quran-78-9",
    kind: "quran",
    title: "Sleep as rest",
    citation: "Surah An-Naba 78:9",
    excerpt: "And made your sleep [a means for] rest.",
    translation: "Saheeh International",
    sourceUrl: "https://corpus.quran.com/translation.jsp?chapter=78&verse=9",
    context: "The verse lists sleep among the signs and provisions Allah has made for human beings.",
    applicationNote: "This is a reminder of sleep's place in human life, not a treatment for insomnia or another sleep disorder."
  },
  {
    id: "bukhari-6369",
    kind: "hadith",
    title: "Seeking refuge from worry and grief",
    citation: "Sahih al-Bukhari 6369 · Book 80, Hadith 66",
    excerpt: "O Allah, I seek refuge with You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from being heavily in debt and from being overpowered by men.",
    translation: "English translation displayed by Sunnah.com",
    sourceUrl: "https://sunnah.com/bukhari/80/66",
    context: "Anas ibn Malik reported that the Prophet ﷺ used this supplication.",
    applicationNote: "This is a Prophetic supplication to recite; it is not described as a guaranteed cure or replacement for practical or clinical support."
  },
  {
    id: "bukhari-5641-5642",
    kind: "hadith",
    title: "Hardship and expiation",
    citation: "Sahih al-Bukhari 5641–5642 · Book 75, Hadith 2",
    excerpt: "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim... but that Allah expiates some of their sins for that.",
    translation: "English translation displayed by Sunnah.com",
    sourceUrl: "https://sunnah.com/bukhari/75/2",
    context: "Abu Sa'id al-Khudri and Abu Hurairah reported this narration from the Prophet ﷺ.",
    applicationNote: "The hadith offers spiritual meaning in hardship. It must never be used to dismiss someone's pain, discourage treatment, or claim that distress is always easy to bear."
  },
  {
    id: "muslim-2664",
    kind: "hadith",
    title: "Seek what benefits you and ask Allah for help",
    citation: "Sahih Muslim 2664 · Book 46, Hadith 52",
    excerpt: "Cherish that which gives you benefit, seek help from Allah and do not lose heart.",
    translation: "English translation displayed by Sunnah.com",
    sourceUrl: "https://sunnah.com/muslim/46/52",
    context: "Abu Hurairah reported the Prophet ﷺ's teaching about strength, pursuing benefit, seeking Allah's help and not giving up.",
    applicationNote: "The broader hadith includes belief in divine decree and avoiding counterfactual regret. The excerpt is not a demand to be productive at all times."
  },
  {
    id: "bukhari-5199",
    kind: "hadith",
    title: "Your body and eyes have rights over you",
    citation: "Sahih al-Bukhari 5199 · Book 67, Hadith 133",
    excerpt: "Your body has a right over you, your eyes have a right over you...",
    translation: "English translation displayed by Sunnah.com",
    sourceUrl: "https://sunnah.com/bukhari/67/133",
    context: "The Prophet ﷺ said this while advising Abdullah ibn Amr not to overburden himself with fasting and night prayer at the expense of rest and other rights.",
    applicationNote: "This is a broad Prophetic principle about balance and bodily rights; it is not a medical instruction about screens, posture or specific exercise routines."
  },
  {
    id: "muslim-2963a",
    kind: "hadith",
    title: "A perspective on worldly comparison",
    citation: "Sahih Muslim 2963a · Book 55, Hadith 12",
    excerpt: "When one of you looks at one who stands at a higher level than you in regard to wealth and physical structure, he should also see one who stands at a lower level than you...",
    translation: "English translation displayed by Sunnah.com",
    sourceUrl: "https://sunnah.com/muslim:2963a",
    context: "Abu Hurairah reported this Prophetic instruction about perspective regarding worldly wealth and physical form.",
    applicationNote: "The hadith encourages perspective and gratitude; it does not forbid self-improvement, ambition or acknowledging injustice."
  }
];

export function getReference(id: string): IslamicReference | undefined {
  return references.find((reference) => reference.id === id);
}
