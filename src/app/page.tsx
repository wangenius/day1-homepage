"use client";

import Link from "next/link";
import { useState } from "react";

import { imgFrame, imgFrame1, imgSocialIcons, imgSocialIcons1 } from "@/components/svg-btt42";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

type Locale = "eng" | "zh" | "ja" | "ko";

type TranslationContent = {
  mainTitle: string;
  onlineText: string;
  description: string;
  gameStart: string;
  playersJoined: string;
  howToPlay: string;
  dayText: string;
  titleFontClass: string;
  descriptionFontClass: string;
  badgeFontClass: string;
  buttonFontClass: string;
  mainTitleSize: string;
};

const HERO_BACKGROUND = "/img/background.png";
const CALL_TO_ACTION_DEFAULT = "/img/unpress.png";
const CALL_TO_ACTION_HOVER = "/img/press.png";
const DAY_BADGE_TEXTURE = "/img/card.png";

// 多语言内容配置
const translations: Record<Locale, TranslationContent> = {
  eng: {
    mainTitle: "1st  Founders' Game",
    onlineText: "online",
    description:
      "An open-world, story-driven sandbox game where aspiring entrepreneurs can learn business skills and test their instincts in a risk-free environment.",
    gameStart: "Game Start",
    playersJoined: "192 people already joined",
    howToPlay: "How to play",
    dayText: "DAY 1",
    titleFontClass: "font-['Instrument_Serif:Regular',_sans-serif]",
    descriptionFontClass: "font-['Sk-Modernist:Regular',_sans-serif]",
    badgeFontClass: "font-['Geist:Regular',_sans-serif]",
    buttonFontClass: "font-['Instrument_Serif:Regular',_sans-serif]",
    mainTitleSize: "text-[90px]",
  },
  zh: {
    mainTitle: "第一个创业模拟器游戏",
    onlineText: "online",
    description: "帮助对科技和商业模式充满热情的创业者在无风险环境中学习创业知识、测试商业直觉的开放剧情沙盒游戏",
    gameStart: "开始游戏",
    playersJoined: "192 玩家已经参与过",
    howToPlay: "游戏玩法",
    dayText: "DAY 1",
    titleFontClass: "font-['CLFN_16x_CN:Regular',_sans-serif]",
    descriptionFontClass:
      "font-['Geist:Regular',_'Noto_Sans_JP:Regular',_'Noto_Sans_SC:Regular',_'Noto_Sans_KR:Regular',_sans-serif]",
    badgeFontClass: "font-['KH_Dot_Kodenmachou_12_Ko:Regular',_'Noto_Sans_SC:Regular',_sans-serif]",
    buttonFontClass: "font-['DotGothic16:Regular',_'Noto_Sans_SC:Regular',_sans-serif]",
    mainTitleSize: "text-[72px]",
  },
  ja: {
    mainTitle: "1st  Founders' Game",
    onlineText: "online",
    description:
      "An open-world, story-driven sandbox game where aspiring entrepreneurs can learn business skills and test their instincts in a risk-free environment.",
    gameStart: "Game Start",
    playersJoined: "192 people already joined",
    howToPlay: "How to play",
    dayText: "DAY 1",
    titleFontClass: "font-['Instrument_Serif:Regular',_sans-serif]",
    descriptionFontClass: "font-['Sk-Modernist:Regular',_sans-serif]",
    badgeFontClass: "font-['Geist:Regular',_sans-serif]",
    buttonFontClass: "font-['Instrument_Serif:Regular',_sans-serif]",
    mainTitleSize: "text-[90px]",
  },
  ko: {
    mainTitle: "1st  Founders' Game",
    onlineText: "online",
    description:
      "An open-world, story-driven sandbox game where aspiring entrepreneurs can learn business skills and test their instincts in a risk-free environment.",
    gameStart: "Game Start",
    playersJoined: "192 people already joined",
    howToPlay: "How to play",
    dayText: "DAY 1",
    titleFontClass: "font-['Instrument_Serif:Regular',_sans-serif]",
    descriptionFontClass: "font-['Sk-Modernist:Regular',_sans-serif]",
    badgeFontClass: "font-['Geist:Regular',_sans-serif]",
    buttonFontClass: "font-['Instrument_Serif:Regular',_sans-serif]",
    mainTitleSize: "text-[90px]",
  },
};

function HeroTitleOverlay({ t }: TranslationProps) {
  return (
    <div className="[grid-area:1_/_1] h-[79.746px] w-[768px] max-w-full">
      <div
        className={`absolute left-1/2 top-[-0.02px] h-[79.746px] w-[768px] -translate-x-1/2 text-center text-white ${t.titleFontClass}`}
      >
        <p className={`${t.mainTitleSize} leading-[80px] whitespace-pre-wrap not-italic`}>
          <span className="font-[Instrument_Serif]">{t.mainTitle}</span>{" "}
        </p>
      </div>
    </div>
  );
}

function HeroBadgeLayers() {
  return (
    <div className="absolute h-[57.666px] w-[116.03px] left-[62.22px] top-[45.93px]">
      <div
        className="absolute left-[29.36%] right-[15.99%] top-[-1.91px] aspect-[1024/1024] bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('${DAY_BADGE_TEXTURE}')` }}
        aria-hidden
      />
      <div
        className="absolute left-[-13.07%] right-[63.07%] top-[3.54px] aspect-[1024/1024] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('${DAY_BADGE_TEXTURE}')` }}
        aria-hidden
      />
      <div className="absolute left-[70.87%] right-[-23.39%] top-[2.85px] flex aspect-[60.9351/60.9888] items-center justify-center">
        <div
          className="size-[58.072px] -rotate-[2.959deg] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${DAY_BADGE_TEXTURE}')` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function DayBadge({ label }: { label: string }) {
  return (
    <div className="bg-[#101010] h-[103.934px] w-[201.98px] rounded-[16px]">
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 flex h-[65.647px] w-[159.594px] left-1/2 top-[17.85px] -translate-x-1/2 items-center justify-center">
          <div className="font-['IdeaFonts_YouQiTi:Regular',_sans-serif] text-[60px] leading-[64px] text-white">{label}</div>
        </div>
        <HeroBadgeLayers />
        <div className="absolute left-[-0.96px] top-[46.28px] flex h-[61.699px] w-[61.699px] items-center justify-center">
          <div
            className="size-[55.072px] -rotate-[7.404deg] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${DAY_BADGE_TEXTURE}')` }}
            aria-hidden
          />
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[16px] border border-solid border-white/40" />
    </div>
  );
}

function HeroHeadingGroup({ t }: TranslationProps) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="[grid-area:1_/_1] ml-[268.5px] mt-[88.518px] -translate-x-1/2 text-center text-white">
        <p className="font-['Instrument_Serif:Regular',_sans-serif] text-[90px] leading-[70px] whitespace-pre">{t.onlineText}</p>
      </div>
      <HeroTitleOverlay t={t} />
      <div className="[grid-area:1_/_1] ml-[369.525px] mt-[48.004px] flex h-[131.019px] w-[214.466px] -translate-x-1/2 items-center justify-center">
        <div className="-rotate-[8deg]">
          <DayBadge label={t.dayText} />
        </div>
      </div>
    </div>
  );
}

function HeroDescription({ t }: TranslationProps) {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-center leading-[0] relative shrink-0 w-full">
      <HeroHeadingGroup t={t} />
      <div className={`${t.descriptionFontClass} relative shrink-0 text-center text-[16px] text-[rgba(255,255,255,0.5)] w-[648px] max-w-full`}>
        <p className="leading-[22px] whitespace-pre-wrap">{t.description}</p>
      </div>
    </div>
  );
}

function GameStartPoster({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[232px] w-[425px] max-w-full cursor-pointer bg-contain bg-center bg-no-repeat transition-all duration-300 hover:scale-105"
      style={{ backgroundImage: `url('${hovered ? CALL_TO_ACTION_HOVER : CALL_TO_ACTION_DEFAULT}')` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}

function PlayerStatsBadge({ t }: TranslationProps) {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex size-3.5 items-center justify-center rounded-full bg-[rgba(255,255,255,0.3)]">
        <div className="size-2 rounded-full bg-white" aria-hidden />
      </div>
      <div className={`${t.badgeFontClass} text-[16px] text-white`}>{t.playersJoined}</div>
    </div>
  );
}

function SocialIconStrip() {
  return (
    <div className="relative h-6 w-full">
      <div
        className="absolute flex items-center gap-[24.75px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.375px)", top: "-0.5px" }}
      >
        <div className="size-6">
          <img alt="Frame" className="block size-full" src={imgFrame} />
        </div>
        <div className="size-6">
          <img alt="Discord" className="block size-full" src={imgSocialIcons} />
        </div>
        <div className="size-6">
          <img alt="Twitter" className="block size-full" src={imgSocialIcons1} />
        </div>
      </div>
    </div>
  );
}

function HeroContent({ t }: TranslationProps) {
  return (
    <div className="content-stretch flex h-[631px] w-full max-w-[768px] flex-col items-center justify-center gap-10 px-4 py-10 sm:px-0">
      <HeroDescription t={t} />
      <GameStartPoster label={t.gameStart} />
      <PlayerStatsBadge t={t} />
      <SocialIconStrip />
    </div>
  );
}

function LogoGlyph() {
  return (
    <div className="relative h-[39.655px] w-10">
      <div className="absolute inset-0 rounded-[6.897px] bg-white" />
      <div className="absolute left-1/2 top-[14.14px] -translate-x-1/2 font-['IdeaFonts_YouQiTi:Regular',_sans-serif] text-[15.172px] leading-[11.034px] text-black">
        Day1
      </div>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <LogoGlyph />
      <div className="font-['IdeaFonts_YouQiTi:Regular',_sans-serif] text-[20px] text-white">
        <span className="font-[Instrument_Serif]">Day1.zone</span>
      </div>
    </div>
  );
}

function LanguageSwitcher({ locale, onLocaleChange }: LanguageSwitcherProps) {
  const languages = [
    { value: "eng", label: "Eng" },
    { value: "zh", label: "中文" },
    { value: "ja", label: "日文" },
    { value: "ko", label: "韩文" },
  ];

  return (
    <Select value={locale} onValueChange={onLocaleChange}>
      <SelectTrigger className="h-[34px] w-[80px] rounded-[6px] border border-[#484848] bg-[#1d1d1d] text-white hover:bg-[#2a2a2a] focus:ring-0 focus:ring-offset-0">
        <SelectValue className="font-['Instrument_Serif:Regular',_sans-serif] text-[14px] tracking-[-0.182px]" />
      </SelectTrigger>
      <SelectContent className="rounded-[6px] border border-[#484848] bg-[#1d1d1d]">
        {languages.map((language) => (
          <SelectItem
            key={language.value}
            value={language.value}
            className="font-['Instrument_Serif:Regular',_sans-serif] text-[14px] tracking-[-0.182px] text-white hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]"
          >
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function LanguagePicker({ locale, onLocaleChange }: LanguageSwitcherProps) {
  return (
    <div className="flex h-9 w-[80px] items-center justify-end rounded-[10px]">
      <LanguageSwitcher locale={locale} onLocaleChange={onLocaleChange} />
    </div>
  );
}

function DocsLink({ label }: { label: string }) {
  return (
    <Link
      href="/docs"
      className="flex h-9 items-center gap-1.5 rounded-[10px] bg-white px-3.5 text-[16px] font-medium text-black"
    >
      <span className="leading-[22px] whitespace-pre">{label}</span>
      <div className="size-5">
        <img alt="Arrow" className="block size-full" src={imgFrame1} />
      </div>
    </Link>
  );
}

function HeaderActions({ locale, onLocaleChange, t }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <LanguagePicker locale={locale} onLocaleChange={onLocaleChange} />
      <DocsLink label={t.howToPlay} />
    </div>
  );
}

function HeroHeader({ locale, onLocaleChange, t }: HeaderActionsProps) {
  return (
    <div className="absolute left-1/2 top-4 w-full max-w-4xl -translate-x-1/2 px-4 sm:px-6">
      <div className="flex h-16 items-center justify-between rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#1d1d1d]/90 px-4 md:px-6">
        <BrandLogo />
        <HeaderActions locale={locale} onLocaleChange={onLocaleChange} t={t} />
      </div>
    </div>
  );
}

function FooterNote() {
  return (
    <div className="absolute bottom-[45px] left-1/2 -translate-x-1/2 translate-y-full text-[12px] tracking-[-0.156px] text-[rgba(255,255,255,0.5)]">
      © 2025 Day1zone. All rights reserved.
    </div>
  );
}

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>("eng");
  const t = translations[selectedLanguage];

  return (
    <div className="min-h-screen">
      <div className="min-h-screen w-full overflow-hidden bg-[#101010]" data-name="day1.zone">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url('${HERO_BACKGROUND}')` }}
            aria-hidden
          />
          <HeroHeader locale={selectedLanguage} onLocaleChange={setSelectedLanguage} t={t} />
          <HeroContent t={t} />
          <FooterNote />
        </div>
      </div>
    </div>
  );
}

type TranslationProps = { t: TranslationContent };

type LanguageSwitcherProps = {
  locale: Locale;
  onLocaleChange: (value: Locale) => void;
};

type HeaderActionsProps = LanguageSwitcherProps & TranslationProps;
