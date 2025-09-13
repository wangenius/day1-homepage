"use client";

import { useState } from "react";
import { imgFrame, imgFrame1, imgSocialIcons, imgSocialIcons1 } from "@/components/svg-btt42";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

// 多语言内容配置
const translations = {
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

function Frame1000003225({ t }) {
  return (
    <div className="[grid-area:1_/_1] h-[79.746px] ml-0 mt-0 relative w-[768px]">
      <div
        className={`absolute font-['Geist:SemiBold',_sans-serif] font-semibold h-[79.746px] leading-[0] left-96 text-[0px] text-center text-white top-[-0.02px] tracking-[1.8px] translate-x-[-50%] w-[768px]`}
      >
        <p className={`${t.titleFontClass} leading-[80px] not-italic ${t.mainTitleSize} whitespace-pre-wrap`}>
          <span className="font-[Instrument_Serif]">{t.mainTitle}</span>{" "}
        </p>
      </div>
    </div>
  );
}

function Frame1000003226() {
  return (
    <div className="absolute h-[57.666px] left-[62.22px] top-[45.93px] w-[116.03px]">
      <div
        className="absolute aspect-[1024/1024] bg-center bg-cover bg-no-repeat left-[29.36%] right-[15.99%] top-[-1.91px]"
        data-name="image (2) 1"
        style={{ backgroundImage: `url('${""}')` }}
      />
      <div
        className="absolute aspect-[1024/1024] bg-center bg-cover bg-no-repeat left-[-13.07%] right-[63.07%] top-[3.54px]"
        data-name="image (4) 1"
        style={{ backgroundImage: `url('${""}')` }}
      />
      <div className="absolute aspect-[60.9351/60.9888] flex items-center justify-center left-[70.87%] right-[-23.39%] top-[2.85px]">
        <div className="flex-none h-[58.072px] rotate-[357.041deg] w-[58.015px]">
          <div
            className="bg-center bg-cover bg-no-repeat size-full"
            data-name="image (1) 1"
            style={{ backgroundImage: `url('${"imgImage11"}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="bg-[#101010] h-[103.934px] relative rounded-[16px] w-[201.98px]">
      <div className="h-[103.934px] overflow-clip relative w-[201.98px]">
        <div className="absolute flex h-[65.647px] items-center justify-center left-[99.29px] top-[17.85px] translate-x-[-50%] w-[159.594px]">
          <div className="flex-none rotate-[359.405deg]">
            <div className="font-['IdeaFonts_YouQiTi:Regular',_sans-serif] leading-[0] not-italic relative text-[60px] text-center text-nowrap text-white tracking-[-1.32px]">
              <p className="leading-[64px] whitespace-pre">DAY 1</p>
            </div>
          </div>
        </div>
        <Frame1000003226 />
        <div className="absolute flex h-[61.699px] items-center justify-center left-[-0.96px] top-[46.28px] w-[61.699px]">
          <div className="flex-none rotate-[352.596deg]">
            <div
              className="bg-center bg-cover bg-no-repeat size-[55.072px]"
              data-name="image (1)"
              style={{ backgroundImage: `url('${"imgImage1"}')` }}
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Group236({ t }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Instrument_Serif:Regular',_sans-serif] leading-[0] ml-[268.5px] mt-[88.518px] not-italic relative text-[90px] text-center text-nowrap text-white translate-x-[-50%]">
        <p className="leading-[70px] whitespace-pre">{t.onlineText}</p>
      </div>
      <Frame1000003225 t={t} />
      <div className="[grid-area:1_/_1] flex h-[131.019px] items-center justify-center ml-[369.525px] mt-[48.004px] relative w-[214.466px]">
        <div className="flex-none rotate-[352deg]">
          <Frame235 />
        </div>
      </div>
    </div>
  );
}

function Div({ t }) {
  return (
    <div
      className="content-stretch flex flex-col gap-6 items-center justify-center leading-[0] relative shrink-0 w-full"
      data-name="div"
    >
      <Group236 t={t} />
      <div
        className={`${t.descriptionFontClass} not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-center w-[648px]`}
      >
        <p className="leading-[22px]">{t.description}</p>
      </div>
    </div>
  );
}

function Frame1000003219() {
  return (
    <div
      className="bg-center bg-no-repeat bg-contain h-[232px] shrink-0 w-[425px] cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        backgroundImage: `url('${"imgGameStartDefault"}')`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundImage = `url('${"imgGameStartHover"}')`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = `url('${"imgGameStartDefault"}')`;
      }}
    />
  );
}

function Frame240() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[2000px] shrink-0 size-3.5">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-2.5 relative size-3.5">
          <div className="bg-white rounded-[2000px] shrink-0 size-2" />
        </div>
      </div>
    </div>
  );
}

function Badge({ t }) {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="badge">
      <Frame240 />
      <div
        className={`${t.badgeFontClass} font-normal leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.208px]`}
      >
        <p className="leading-[22px] whitespace-pre">{t.playersJoined}</p>
      </div>
    </div>
  );
}

function Div1({ t }) {
  return (
    <div
      className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full"
      data-name="div"
    >
      <Badge t={t} />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="relative shrink-0 size-6" data-name="Social Icons">
      <img className="block max-w-none size-full" src={imgSocialIcons} />
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Social Icons">
      <img className="block max-w-none size-full" src={imgSocialIcons1} />
    </div>
  );
}

function Frame38() {
  return (
    <div
      className="absolute content-stretch flex gap-[24.75px] items-center justify-center top-[-0.5px] translate-x-[-50%]"
      style={{ left: "calc(50% + 0.375px)" }}
    >
      <Frame />
      <SocialIcons />
      <SocialIcons1 />
    </div>
  );
}

function Frame1000003227() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Div2({ selectedLanguage, t }) {
  return (
    <div
      className="content-stretch flex flex-col gap-10 h-[631px] items-center justify-center relative shrink-0 w-[768px]"
      data-name="div"
    >
      <Div t={t} />
      <Frame1000003219 />
      <Div1 t={t} />
      <Frame1000003227 />
    </div>
  );
}

function Frame1000003221() {
  return (
    <div className="h-[39.655px] relative shrink-0 w-10">
      <div className="absolute bg-white inset-0 rounded-[6.897px]" />
      <div className="absolute font-['IdeaFonts_YouQiTi:Regular',_sans-serif] leading-[0] left-[20.33px] not-italic text-[15.172px] text-black text-center text-nowrap top-[14.14px] translate-x-[-50%]">
        <p className="leading-[11.034px] whitespace-pre">Day1</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="logo">
      <Frame1000003221 />
      <div className="font-['IdeaFonts_YouQiTi:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[21px] whitespace-pre font-[Instrument_Serif]">Day1.zone</p>
      </div>
    </div>
  );
}

function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  const languages = [
    { value: "eng", label: "Eng" },
    { value: "zh", label: "中文" },
    { value: "ja", label: "日文" },
    { value: "ko", label: "韩文" },
  ];

  return (
    <Select value={selectedLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="bg-[#1d1d1d] border-[#484848] h-[34px] w-[80px] rounded-[6px] text-white hover:bg-[#2a2a2a] focus:ring-0 focus:ring-offset-0">
        <SelectValue className="font-['Instrument_Serif:Regular',_sans-serif] text-[14px] tracking-[-0.182px]" />
      </SelectTrigger>
      <SelectContent className="bg-[#1d1d1d] border-[#484848] rounded-[6px]">
        {languages.map((language) => (
          <SelectItem
            key={language.value}
            value={language.value}
            className="text-white hover:bg-[#2a2a2a] focus:bg-[#2a2a2a] font-['Instrument_Serif:Regular',_sans-serif] text-[14px] tracking-[-0.182px]"
          >
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function Button({ selectedLanguage, onLanguageChange }) {
  return (
    <div
      className="content-stretch flex gap-1.5 h-9 items-center justify-end relative rounded-[10px] shrink-0 w-[80px]"
      data-name="Button"
    >
      <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
    </div>
  );
}

function Button1({ t }) {
  return (
    <div
      className="bg-white box-border content-stretch flex gap-1.5 h-9 items-center justify-end px-3.5 py-0 relative rounded-[10px] shrink-0"
      data-name="Button"
    >
      <div
        className={`${t.buttonFontClass} leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[0.32px]`}
      >
        <p className="leading-[22px] whitespace-pre">{t.howToPlay}</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Actions({ selectedLanguage, t, onLanguageChange }) {
  return (
    <div className="content-stretch flex gap-4 items-center justify-end relative shrink-0" data-name="Actions">
      <Button selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
      <Button1 t={t} />
    </div>
  );
}

function Header({ selectedLanguage, t, onLanguageChange }) {
  return (
    <div
      className="absolute bg-[#1d1d1d] h-16 rounded-[16px] top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl mx-4"
      data-name="header"
    >
      <div className="container mx-auto max-w-4xl box-border content-stretch flex h-16 items-center justify-between overflow-clip px-4 md:px-6 py-0 relative">
        <Logo />
        <Actions selectedLanguage={selectedLanguage} t={t} onLanguageChange={onLanguageChange} />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame1} />
    </div>
  );
}

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("eng");
  const t = translations[selectedLanguage];

  return (
    <div className="min-h-screen">
      <div className="bg-[#101010] min-h-screen min-w-full overflow-hidden" data-name="day1.zone">
        <div className="content-stretch flex flex-col items-center justify-center min-h-screen min-w-full relative">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30 min-h-screen min-w-full"
            data-name="image 38"
            style={{ backgroundImage: `url('${"imgImage38"}')` }}
          />
          <Div2 selectedLanguage={selectedLanguage} t={t} />
          <Header selectedLanguage={selectedLanguage} t={t} onLanguageChange={setSelectedLanguage} />
          <div
            className="absolute bottom-[45px] font-['Geist:Regular',_sans-serif] font-normal leading-[0] text-[12px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.156px] translate-y-[100%]"
            style={{ left: "calc(50% - 100px)" }}
          >
            <p className="leading-[22px] whitespace-pre">{`© 2025 Day1zone. All rights reserved. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
