import type { LucideIcon } from "lucide-react";
import {
  Activity, BatteryLow, Brain, CloudSun, Eye, Footprints, GraduationCap, Heart,
  MoonStar, Scale, Smartphone, Target, Users, Wallet, Wind
} from "lucide-react";

export type ProblemCategory = "emotional" | "physical";

export type Problem = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProblemCategory;
  icon: LucideIcon;
  summary: string;
  introduction: string;
  feelings: string[];
  referenceIds: string[];
  sourceContext: string;
  practicalSteps: string[];
  supportNote?: string;
  related: string[];
};

export const problems: Problem[] = [
  {
    slug: "depression-and-sadness", title: "Depression & deep sadness", shortTitle: "Depression & sadness", category: "emotional", icon: CloudSun,
    summary: "When everything feels heavy and hope feels far away.",
    introduction: "You do not have to pretend that pain is not real. Sorrow is part of human life, and experiencing depression does not mean that you have failed spiritually. The Qur'an points us toward Allah's mercy and hope; the Sunnah recognises that sorrow and distress are real experiences.",
    feelings: ["Low mood or emptiness", "Loss of interest or energy", "Feeling hopeless or disconnected", "Finding ordinary tasks unusually difficult"],
    referenceIds: ["quran-39-53", "quran-94-5-6", "bukhari-5641-5642"],
    sourceContext: "Surah 39:53 addresses people who have transgressed against themselves and tells them not to despair of Allah's mercy. The hardship narration in Sahih al-Bukhari speaks about expiation; neither source says depression is caused by sin or that treatment is unnecessary.",
    practicalSteps: ["Tell one trustworthy person what has been happening; you do not need to carry it alone.", "Choose one small, doable action for the next hour: drink water, eat something, step outside, or send a message.", "Keep worship gentle and sustainable. A difficult day is not a reason to judge your entire relationship with Allah."],
    supportNote: "Depression can be a serious health condition. Consider speaking with a qualified mental-health professional, especially if low mood persists, affects daily life, or feels overwhelming. If you may harm yourself or cannot stay safe, contact someone you trust and local emergency or crisis services now.",
    related: ["anxiety-and-overthinking", "burnout-and-exhaustion", "loneliness"]
  },
  {
    slug: "anxiety-and-overthinking", title: "Anxiety & overthinking", shortTitle: "Anxiety & stress", category: "emotional", icon: Brain,
    summary: "When your thoughts keep running even when you want to rest.",
    introduction: "Anxiety can make uncertain possibilities feel like certain disasters. Tawakkul does not mean denying uncertainty: it means taking the responsible steps available to you, asking Allah for help, and recognising what is beyond your control.",
    feelings: ["Repeated what-if thoughts", "Restlessness or tension", "Difficulty concentrating", "Feeling unable to switch off"],
    referenceIds: ["quran-13-28", "bukhari-6369", "muslim-2664"],
    sourceContext: "Qur'an 13:28 speaks of hearts being assured through Allah's remembrance. Sahih al-Bukhari 6369 records a Prophetic supplication seeking refuge from worry and grief. These are spiritual resources, not a guarantee that clinical anxiety will disappear immediately.",
    practicalSteps: ["Write down the concern, then separate what is in your control from what is not.", "Take one slow breath and one practical next step; avoid trying to solve your whole future at once.", "Make the reported supplication for worry and grief, and consider speaking with someone you trust."],
    supportNote: "If anxiety is frequent, intense, causing panic, or disrupting sleep, studies, work or relationships, a qualified clinician can help. Seeking care is compatible with making du'a and relying upon Allah.",
    related: ["fear-of-the-future", "academic-and-career-pressure", "sleep-difficulties"]
  },
  {
    slug: "academic-and-career-pressure", title: "Academic & career pressure", shortTitle: "Academic & career pressure", category: "emotional", icon: GraduationCap,
    summary: "When grades, internships or career plans feel like your entire identity.",
    introduction: "Your effort matters, but your whole worth is not a mark sheet, job title, internship or salary. The Prophetic guidance in Sahih Muslim encourages purposeful effort, seeking Allah's help and not giving up—without demanding that you control every outcome.",
    feelings: ["Fear of falling behind", "Pressure to be constantly improving", "Worry about exams or placements", "Feeling guilty when resting"],
    referenceIds: ["muslim-2664", "quran-94-5-6"],
    sourceContext: "Sahih Muslim 2664 combines striving for what benefits a person with seeking Allah's help and not losing heart. Surah Ash-Sharh repeats the assurance that with hardship comes ease; neither is a promise of a specific academic or career result.",
    practicalSteps: ["Define the next useful task, not an unrealistic plan for your entire life.", "Make a schedule that includes food, sleep, prayer, movement and breaks.", "Ask a mentor, teacher or friend for practical help instead of interpreting every setback as personal failure."],
    related: ["fear-of-the-future", "comparison-and-envy", "burnout-and-exhaustion"]
  },
  {
    slug: "financial-uncertainty", title: "Financial uncertainty", shortTitle: "Financial uncertainty", category: "emotional", icon: Wallet,
    summary: "When money, debt or independence make the future feel unstable.",
    introduction: "Financial stress is real and often practical, not just emotional. Islam gives us supplications to seek Allah's protection and encourages responsible action. Asking for help with budgeting, debt or employment is not a lack of tawakkul.",
    feelings: ["Worry about fees, bills or debt", "Fear of depending on others", "Uncertainty about earning", "Feeling ashamed to discuss money"],
    referenceIds: ["bukhari-6369", "muslim-2664"],
    sourceContext: "The supplication recorded in Sahih al-Bukhari 6369 explicitly seeks refuge from worry and grief and from being heavily in debt. Sahih Muslim 2664 encourages seeking what benefits you and asking Allah for help.",
    practicalSteps: ["Write down the actual numbers: income, essential expenses, deadlines and debts.", "Talk to a trusted person or qualified financial adviser about realistic options.", "Make the Prophetic supplication and take one responsible step today."],
    related: ["fear-of-the-future", "anxiety-and-overthinking", "academic-and-career-pressure"]
  },
  {
    slug: "comparison-and-envy", title: "Comparison & envy", shortTitle: "Comparison & envy", category: "emotional", icon: Scale,
    summary: "When someone else's highlight reel makes your own life feel small.",
    introduction: "Online feeds show selected moments, not the whole of another person's life. Revelation and Prophetic guidance offer perspective on worldly comparison while leaving room for healthy goals, ambition and gratitude.",
    feelings: ["Feeling behind after scrolling", "Envy of appearance, money or achievements", "Measuring your worth against peers", "Difficulty appreciating your own progress"],
    referenceIds: ["quran-4-32", "muslim-2963a"],
    sourceContext: "Surah An-Nisa 4:32 discourages wishing for what Allah has given others and tells people to ask Allah for His bounty. Sahih Muslim 2963a gives a perspective on looking at worldly wealth and physical form. Read them in their full context; they are not a command to stop improving yourself.",
    practicalSteps: ["Mute or unfollow accounts that consistently trigger shame or envy.", "Write down one personal goal that matters to you, independent of another person's timeline.", "Make du'a for Allah's bounty and practise noticing blessings without denying what you still hope to change."],
    related: ["self-worth-and-confidence", "academic-and-career-pressure", "fear-of-the-future"]
  },
  {
    slug: "loneliness", title: "Loneliness & isolation", shortTitle: "Loneliness", category: "emotional", icon: Users,
    summary: "Being surrounded by people but still feeling unseen.",
    introduction: "Loneliness is painful, and having online connections does not always mean having close support. The Qur'an describes believers as allies of one another. That is a reminder of mutual responsibility—not a reason to blame yourself for feeling alone.",
    feelings: ["Feeling misunderstood", "Having few people to speak honestly with", "Feeling disconnected in a crowd", "Finding it difficult to build friendships"],
    referenceIds: ["quran-9-71", "quran-13-28"],
    sourceContext: "Surah At-Tawbah 9:71 describes mutual support and responsibility among believing men and women. Surah Ar-Ra'd 13:28 speaks of reassurance through remembrance of Allah. Neither verse says believers will never feel lonely.",
    practicalSteps: ["Reach out to one person with a specific invitation or honest message.", "Try a recurring in-person setting: a study circle, masjid activity, volunteering group or club.", "Build closeness gradually through consistency, listening and shared activities."],
    supportNote: "If loneliness is persistent or accompanied by depression, anxiety or hopelessness, consider speaking with a mental-health professional.",
    related: ["depression-and-sadness", "self-worth-and-confidence", "emotional-overload"]
  },
  {
    slug: "fear-of-the-future", title: "Fear of the future", shortTitle: "Fear of the future", category: "emotional", icon: CloudSun,
    summary: "Uncertainty about jobs, technology, relationships and what comes next.",
    introduction: "You are allowed to plan for the future without knowing exactly how it will unfold. The Prophetic guidance to seek what benefits you, ask Allah for help and not lose heart gives a balanced way to meet uncertainty.",
    feelings: ["Fear about the job market or AI", "Worry about financial independence", "Uncertainty in relationships or housing", "Feeling paralysed by possible outcomes"],
    referenceIds: ["muslim-2664", "quran-94-5-6"],
    sourceContext: "Sahih Muslim 2664 teaches purposeful effort alongside asking Allah for help and not losing heart. Surah Ash-Sharh 94:5–6 gives an assurance of ease with hardship; neither text reveals the details of an individual's future.",
    practicalSteps: ["Plan for the next week rather than trying to predict your whole life.", "Identify one skill, conversation or practical action that improves your options.", "When a worry repeats, write it down and decide whether it needs action now or can be revisited later."],
    related: ["anxiety-and-overthinking", "academic-and-career-pressure", "financial-uncertainty"]
  },
  {
    slug: "burnout-and-exhaustion", title: "Burnout & exhaustion", shortTitle: "Burnout & exhaustion", category: "emotional", icon: BatteryLow,
    summary: "When you are tired of being tired, even after taking a break.",
    introduction: "The Prophetic Sunnah recognises that the body and eyes have rights. Worship and responsibility should not be turned into a cycle of constant overexertion. Rest is part of caring for the body Allah has entrusted to you.",
    feelings: ["Feeling drained or detached", "Losing interest in work you once cared about", "Feeling guilty when resting", "Difficulty recovering after busy periods"],
    referenceIds: ["bukhari-5199", "quran-94-5-6"],
    sourceContext: "In Sahih al-Bukhari 5199, the Prophet ﷺ advised Abdullah ibn Amr to balance fasting and night prayer with sleep, noting that the body and eyes have rights. This is a direct teaching about balance, not a modern clinical definition of burnout.",
    practicalSteps: ["Protect sleep and meals before adding another productivity system.", "Reduce or renegotiate one non-essential commitment where possible.", "Choose a realistic daily minimum and allow recovery time without treating it as failure."],
    supportNote: "Persistent exhaustion can have physical or mental-health causes. A healthcare professional can help assess symptoms that do not improve with rest.",
    related: ["sleep-difficulties", "loss-of-motivation", "academic-and-career-pressure"]
  },
  {
    slug: "loss-of-motivation", title: "Loss of motivation", shortTitle: "Loss of motivation", category: "emotional", icon: Target,
    summary: "When even simple tasks feel difficult to begin.",
    introduction: "You do not need to wait for a perfect feeling before taking a small step. Sahih Muslim teaches a combination of seeking what benefits you, asking Allah for help and not giving up. That is encouragement, not a demand to be productive every minute.",
    feelings: ["Procrastination followed by guilt", "Difficulty starting tasks", "Feeling disconnected from goals", "Repeatedly abandoning routines"],
    referenceIds: ["muslim-2664", "bukhari-6369"],
    sourceContext: "Sahih Muslim 2664 encourages beneficial effort and seeking Allah's help. Sahih al-Bukhari 6369 includes a supplication seeking refuge from incapacity and laziness. Neither text is a diagnosis of low motivation.",
    practicalSteps: ["Make the first action very small: open the document, read one page or work for five minutes.", "Remove one distraction and prepare what you need before starting.", "Notice whether low motivation is tied to exhaustion, fear, low mood or an unclear task; each may need a different response."],
    supportNote: "If loss of motivation lasts for weeks or comes with low mood, hopelessness, or significant changes in sleep or appetite, consider a professional assessment.",
    related: ["burnout-and-exhaustion", "depression-and-sadness", "attention-and-procrastination"]
  },
  {
    slug: "self-worth-and-confidence", title: "Self-worth & confidence", shortTitle: "Self-worth & confidence", category: "emotional", icon: Heart,
    summary: "When you judge yourself by appearance, approval or achievements.",
    introduction: "Your value as a human being is not measured by social status, appearance, grades or online attention. Qur'an 17:70 speaks about the honour granted to the children of Adam. This is a reminder of human dignity, not a claim that life will always feel confident.",
    feelings: ["Harsh self-criticism", "Feeling not good enough", "Seeking constant validation", "Feeling defined by mistakes"],
    referenceIds: ["quran-17-70", "quran-4-32"],
    sourceContext: "Surah Al-Isra 17:70 describes Allah honouring the children of Adam. Surah An-Nisa 4:32 discourages coveting what others have been given. These verses should be read in their full context, not converted into simplistic self-help slogans.",
    practicalSteps: ["Notice when your inner voice speaks more harshly to you than you would speak to a friend.", "Set goals based on values and growth, not only approval or comparison.", "Spend time with people who treat you with respect and encourage healthy development."],
    supportNote: "If low self-worth is persistent or affecting your relationships and daily functioning, talking with a qualified counsellor or therapist may help.",
    related: ["comparison-and-envy", "loneliness", "depression-and-sadness"]
  },
  {
    slug: "emotional-overload", title: "Emotional overload", shortTitle: "Emotional overload", category: "emotional", icon: Wind,
    summary: "When constant news, arguments and online pressure leave you overwhelmed.",
    introduction: "Being constantly exposed to distressing news and online conflict can be exhausting. You can care about the world while setting boundaries around how much information you consume and when you consume it.",
    feelings: ["Feeling flooded by news or conflict", "Irritability after scrolling", "Difficulty being present", "Feeling emotionally drained"],
    referenceIds: ["quran-2-286", "bukhari-5199"],
    sourceContext: "Qur'an 2:286 includes a supplication asking Allah not to place on people a burden they cannot bear. Sahih al-Bukhari 5199 reminds that the body and eyes have rights. These are broad spiritual principles, not specific instructions about news or social media.",
    practicalSteps: ["Choose one or two intentional times to check news instead of continuous refreshing.", "Turn off non-essential notifications and take a screen-free break.", "Return to one meaningful action close to you: help someone, pray, rest or connect with a person."],
    related: ["attention-and-procrastination", "burnout-and-exhaustion", "anxiety-and-overthinking"]
  },
  {
    slug: "attention-and-procrastination", title: "Attention & procrastination", shortTitle: "Attention & procrastination", category: "emotional", icon: Smartphone,
    summary: "The scroll–avoid–feel guilty cycle that makes focus harder.",
    introduction: "Digital distraction is a habit and environment problem for many people; it is not automatically a medical condition or a moral failure. The Prophetic instruction to seek what benefits you can inspire deliberate choices about attention, while practical changes make those choices easier.",
    feelings: ["Repeatedly checking notifications", "Difficulty staying with one task", "Short-form content replacing planned work", "Guilt after procrastinating"],
    referenceIds: ["muslim-2664", "bukhari-5199"],
    sourceContext: "Sahih Muslim 2664 encourages pursuing what benefits and seeking Allah's help. Sahih al-Bukhari 5199 mentions the rights of the body and eyes. Neither text directly discusses smartphones or attention disorders.",
    practicalSteps: ["Keep your phone outside arm's reach during one 25-minute focus block.", "Turn off non-essential notifications and remove one high-distraction app from the home screen.", "Use a visible next action rather than a vague task such as 'study more'."],
    supportNote: "Long-standing attention difficulties across different settings may deserve assessment by a qualified professional. This page does not diagnose ADHD or another condition.",
    related: ["emotional-overload", "loss-of-motivation", "sleep-difficulties"]
  },
  {
    slug: "sleep-difficulties", title: "Sleep difficulties", shortTitle: "Sleep difficulties", category: "physical", icon: MoonStar,
    summary: "Late nights, irregular routines and a mind that will not switch off.",
    introduction: "Sleep is a gift and a basic part of caring for your body. The Qur'an describes sleep as a means of rest, and the Sunnah recognises that your body and eyes have rights. These reminders can sit alongside evidence-based sleep habits and medical care when needed.",
    feelings: ["Sleeping very late or at irregular times", "Waking unrefreshed", "Night-time phone use", "Difficulty falling or staying asleep"],
    referenceIds: ["quran-78-9", "bukhari-5199"],
    sourceContext: "Qur'an 78:9 describes sleep as rest. Sahih al-Bukhari 5199 includes the Prophet's instruction that the body and eyes have rights, in a context about balancing worship with sleep.",
    practicalSteps: ["Keep wake-up time reasonably consistent, including on weekends where possible.", "Make the last part of the evening calmer: dim screens, reduce caffeine late in the day and prepare for sleep.", "If sleep difficulty persists, affects safety or daily functioning, consult a healthcare professional."],
    related: ["burnout-and-exhaustion", "anxiety-and-overthinking", "attention-and-procrastination"]
  },
  {
    slug: "eye-strain", title: "Eye strain & screen fatigue", shortTitle: "Eye strain", category: "physical", icon: Eye,
    summary: "Dry, tired eyes and headaches after long hours on screens.",
    introduction: "Digital eye strain is a physical issue, not a sign of weak discipline or weak faith. The Prophetic reminder that the eyes have rights offers a broad principle of care; specific symptoms need practical and, where appropriate, clinical attention.",
    feelings: ["Dry or tired eyes", "Temporary blurred vision", "Headaches after screen use", "Difficulty focusing after long sessions"],
    referenceIds: ["bukhari-5199"],
    sourceContext: "Sahih al-Bukhari 5199 explicitly mentions that the eyes have a right over a person. The hadith is about balance in worship and rest; it does not describe modern screen-related eye strain.",
    practicalSteps: ["Take regular screen breaks and look at a distant object for a short time.", "Adjust screen brightness, text size, glare and viewing distance.", "Seek an eye-care assessment for persistent pain, recurring headaches or vision changes."],
    related: ["sleep-difficulties", "neck-and-back-pain", "attention-and-procrastination"]
  },
  {
    slug: "neck-and-back-pain", title: "Neck, shoulder & back pain", shortTitle: "Neck & back pain", category: "physical", icon: Activity,
    summary: "The physical cost of long hours sitting, studying or looking down at a phone.",
    introduction: "The body has rights over you. That broad Prophetic principle supports taking physical discomfort seriously, but posture advice and pain treatment should come from appropriate healthcare guidance.",
    feelings: ["Neck or shoulder tightness", "Lower-back discomfort", "Stiffness after sitting", "Pain after long study sessions"],
    referenceIds: ["bukhari-5199"],
    sourceContext: "Sahih al-Bukhari 5199 states that the body has a right over a person, in a discussion of balance and rest. It is not a diagnosis or a specific treatment recommendation for back pain.",
    practicalSteps: ["Change position and stand or walk regularly rather than remaining still for long periods.", "Set up your desk so your screen is near eye level and your feet are supported.", "Get medical advice for severe, persistent, worsening or radiating pain, or pain with concerning symptoms."],
    supportNote: "A physiotherapist or clinician can assess persistent pain and recommend exercises or treatment suited to your condition.",
    related: ["eye-strain", "lack-of-physical-activity", "sleep-difficulties"]
  },
  {
    slug: "lack-of-physical-activity", title: "Lack of physical activity", shortTitle: "Physical inactivity", category: "physical", icon: Footprints,
    summary: "Too much sitting and studying without enough movement in the day.",
    introduction: "Movement can support physical and mental wellbeing. Sahih Muslim 2664 praises strength while also saying there is good in both the strong and the weak believer; it is not a judgement of a person's worth or a specific exercise prescription.",
    feelings: ["Sitting for most of the day", "Feeling stiff or low-energy", "Finding it difficult to begin exercising", "Spending most free time on screens"],
    referenceIds: ["muslim-2664", "bukhari-5199"],
    sourceContext: "Sahih Muslim 2664 includes the wording that a strong believer is better and more beloved to Allah while there is good in both, then encourages pursuing benefit and seeking Allah's help. Sahih al-Bukhari 5199 reminds that the body has rights.",
    practicalSteps: ["Start with a short walk or a few minutes of gentle movement that suits your abilities.", "Break up long sitting periods with brief standing or walking breaks.", "Choose a form of movement that is safe, accessible and sustainable for you."],
    supportNote: "If you have pain, a health condition, disability or concerns about exercise safety, ask a qualified healthcare professional for appropriate guidance.",
    related: ["neck-and-back-pain", "burnout-and-exhaustion", "sleep-difficulties"]
  }
];

export const emotionalProblems = problems.filter((problem) => problem.category === "emotional");
export const physicalProblems = problems.filter((problem) => problem.category === "physical");
export function getProblem(slug: string): Problem | undefined {
  return problems.find((problem) => problem.slug === slug);
}
