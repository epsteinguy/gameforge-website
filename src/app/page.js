"use client";

import { useState, useEffect } from "react";

function GoldParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 6}s`,
        size: `${2 + Math.random() * 4}px`,
      }))
    );
  }, []);

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="ornament-divider my-16 md:my-24 px-6">
      <span className="text-rpg-gold text-2xl font-[Cinzel]">&#9830;</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rpg-darker via-rpg-dark to-rpg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.08)_0%,transparent_70%)]" />

      <GoldParticles />

      <a
        href="https://hackclub.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-0 left-4 z-50"
      >
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club"
          className="w-28 md:w-36"
        />
      </a>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-rpg-gold-dark font-[Inter] text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Amrit presents
        </p>

        <h1 className="font-[Cinzel] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide leading-none mb-6">
          <span className="gold-text">GameForge</span>
        </h1>

        <p className="font-[Cinzel] text-xl sm:text-2xl md:text-3xl text-rpg-text mb-4 leading-relaxed">
          Ship a game. Earn Gold. Get epic loot.
        </p>

        <p className="text-rpg-text-dim text-base md:text-lg mb-10">
          Ages 13&ndash;18 &bull; by Hack Club &bull; Worldwide & Free for all!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://amrit.fillout.com/gameforge-rsvp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-block px-10 py-4 rounded-sm font-[Cinzel] font-bold text-rpg-dark text-lg tracking-wider"
          >
            RSVP Now!
          </a>
          <a
            href="https://hackclub.slack.com/channels/gameforge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-sm border border-rpg-gold/30 text-rpg-gold font-[Inter] font-medium hover:border-rpg-gold/60 hover:bg-rpg-gold/5 transition-all text-base"
          >
            Join the channel!
          </a>
        </div>
      </div>

      <a
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce z-10"
      >
        <svg
          className="w-8 h-8 text-rpg-gold/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

const questSteps = [
  {
    number: "I",
    title: "Forge Your Game",
    desc: "Build a game using any engine or framework -- Godot, Unity, Pygame, JavaScript, you name it.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "II",
    title: "Chronicle Your Journey",
    desc: "Track your coding hours on Hackatime or Lapse. Every hour earns you Gold.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    number: "III",
    title: "Face the Guild",
    desc: "Ship your game, get 10 peer votes on it, and vote on 10 other games yourself.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    number: "IV",
    title: "Claim Your Loot",
    desc: "Spend your Gold in the shop on prizes like a Nintendo Switch, ROG Ally, headphones, and more.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gold-text">The Quest Begins</span>
        </h2>
        <p className="text-rpg-text-dim text-center text-lg mb-16 max-w-2xl mx-auto">
          Your path from idea to epic loot in four steps
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {questSteps.map((step, i) => (
            <div
              key={i}
              className="gold-border rounded-sm bg-rpg-panel/60 p-6 flex flex-col items-center text-center hover:bg-rpg-panel transition-colors relative group"
            >
              <div className="font-[Cinzel] text-rpg-gold/40 text-5xl font-bold absolute top-3 right-4 group-hover:text-rpg-gold/60 transition-colors">
                {step.number}
              </div>

              <div className="text-rpg-gold mb-4 mt-2">{step.icon}</div>

              <h3 className="font-[Cinzel] text-lg font-semibold text-rpg-gold-light mb-3">
                {step.title}
              </h3>

              <p className="text-rpg-text-dim text-sm leading-relaxed">
                {step.desc}
              </p>

              {i < questSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-rpg-gold/30 z-10">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradingCards() {
  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.05)_0%,transparent_60%)]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gold-text">Earn Trading Cards</span>
        </h2>
        <p className="text-rpg-text-dim text-center text-lg mb-16 max-w-2xl mx-auto">
          Every game you ship earns you a custom trading card based on your creation
        </p>

          <div className="flex-1 text-center md:text-center">
            <h3 className="font-[Cinzel] text-2xl font-semibold text-rpg-gold-light mb-6">
              A card for every game you ship
            </h3>
            <ul className="space-y-4 text-rpg-text text-base leading-relaxed ">
              <li className="flex items-start gap-3">
                <span className="text-rpg-gold mt-1 shrink-0">&#9830;</span>
                <span>Ship your game and reviewers will create a unique trading card based on your project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rpg-gold mt-1 shrink-0">&#9830;</span>
                <span>The reviewers decide what type of card you get -- so make something impressive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rpg-gold mt-1 shrink-0">&#9830;</span>
                <span>Collect cards as you ship more games throughout GameForge</span>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
}

function EarningGold() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gold-text">Earn Gold</span>
        </h2>
        <p className="text-rpg-text-dim text-center text-lg mb-16 max-w-2xl mx-auto">
          Code more, earn more. It&apos;s that simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gold-border rounded-sm bg-rpg-panel/60 p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rpg-gold-light to-rpg-gold-dark mx-auto mb-6 flex items-center justify-center coin-pulse">
              <span className="font-[Cinzel] text-rpg-dark text-2xl font-bold">G</span>
            </div>
            <h3 className="font-[Cinzel] text-xl font-semibold text-rpg-gold-light mb-3">
              15 Gold / hour
            </h3>
            <p className="text-rpg-text-dim text-sm leading-relaxed">
              Track your coding time on Hackatime or Lapse and earn 15 Gold for every hour you spend building your game.
            </p>
          </div>

          <div className="gold-border-strong rounded-sm bg-rpg-panel/60 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-rpg-gold/5 to-transparent" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rpg-gold-light to-rpg-gold mx-auto mb-6 flex items-center justify-center coin-pulse">
                <span className="font-[Cinzel] text-rpg-dark text-xl font-bold">2x</span>
              </div>
              <h3 className="font-[Cinzel] text-xl font-semibold text-rpg-gold-light mb-3">
                Up to 30 Gold / hour
              </h3>
              <p className="text-rpg-text-dim text-sm leading-relaxed">
                Earn a multiplier up to 2x your base rate. The more you build, the more you&apos;re rewarded.
              </p>
            </div>
          </div>

          <div className="gold-border rounded-sm bg-rpg-panel/60 p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-rpg-panel border-2 border-rpg-gold/40 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-rpg-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 className="font-[Cinzel] text-xl font-semibold text-rpg-gold-light mb-3">
              Peer Voting
            </h3>
            <p className="text-rpg-text-dim text-sm leading-relaxed">
              Your project needs 10 votes to be approved. You also need to vote on 10 other games to unlock your Gold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const shopItems = [
  { name: "Steam Grant", price: "50", category: "Digital" },
  { name: "Steam License", price: "00", category: "Digital" },
  { name: "Headphones", price: "275", category: "Audio" },
  { name: "Nintendo Switch", price: "2,000", category: "Console" },
  { name: "ROG Ally", price: "3,000", category: "Windows Handheld" },
  { name: "And more...", price: "---", category: "Explore the shop" },
];

function Shop() {
  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,160,23,0.06)_0%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gold-text">The Shop</span>
        </h2>
        <p className="text-rpg-text-dim text-center text-lg mb-16 max-w-2xl mx-auto">
          Spend your hard-earned Gold on real prizes
        </p>

        <div className="shop-scroll flex gap-6 pb-4">
          {shopItems.map((item, i) => (
            <div
              key={i}
              className="gold-border rounded-sm bg-rpg-panel/80 min-w-[220px] md:min-w-[260px] flex-shrink-0 overflow-hidden hover:border-rpg-gold/50 transition-all group"
            >
              <div className="h-40 bg-gradient-to-br from-rpg-dark to-rpg-panel flex items-center justify-center border-b border-rpg-gold/10 group-hover:from-rpg-panel group-hover:to-rpg-dark transition-all">
                <div className="text-center">
                  <svg className="w-12 h-12 text-rpg-gold/30 mx-auto group-hover:text-rpg-gold/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <p className="text-rpg-text-dim/40 text-xs mt-1 font-[Inter]">{item.category}</p>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-[Cinzel] text-base font-semibold text-rpg-text mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rpg-gold-light to-rpg-gold-dark flex items-center justify-center">
                    <span className="text-rpg-dark text-[10px] font-bold font-[Cinzel]">G</span>
                  </div>
                  <span className="text-rpg-gold font-[Cinzel] font-semibold text-lg">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-rpg-text-dim text-sm mt-8">
          Prices are approximate and subject to change. More items added regularly.
        </p>
      </div>
    </section>
  );
}

const faqData = [
  {
    q: "Who can participate?",
    a: "GameForge is open to all teenagers ages 13 to 18, anywhere in the world. You just need to be part of Hack Club community.",
  },
  {
    q: "Can I use AI to help build my game?",
    a: "AI can assist with small tasks, but the majority of your game must be your own original work. Projects that are primarily AI-generated will not be approved.",
  },
  {
    q: "What game engines or frameworks can I use?",
    a: "Anything goes - Godot, Unity, Unreal, Pygame, Phaser, LÖVE, plain JavaScript, or any other tool you prefer. As long as you build a playable game, it counts.",
  },
  {
    q: "How does peer voting work?",
    a: "After you ship your game, other GameForge participants vote on it. You need 10 votes to get approved. You also need to vote on 10 other people's games - it's a community effort.",
  },
  {
    q: "How does the Gold multiplier work?",
    a: "You start earning at 15 Gold per hour. The multiplier can increase up to 2x (30 Gold per hour) as you build more.",
  },
  {
    q: "Is there a deadline?",
    a: "GameForge is open-ended - there's no hard deadline. Build at your own pace and ship when you're ready.",
  },
  {
    q: "Where can I ask for help?",
    a: "Join #gameforge on the Hack Club Slack! The community and mentors are there to help you with any questions.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gold-text">Frequently Asked Questions</span>
        </h2>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="gold-border rounded-sm bg-rpg-panel/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-rpg-panel/60 transition-colors cursor-pointer"
              >
                <span className="font-[Cinzel] text-base font-semibold text-rpg-text">
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 text-rpg-gold shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
                style={{
                  paddingLeft: openIndex === i ? "1.5rem" : "1.5rem",
                  paddingRight: openIndex === i ? "1.5rem" : "1.5rem",
                  paddingBottom: openIndex === i ? "1.25rem" : "0",
                }}
              >
                <p className="text-rpg-text-dim text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-rpg-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-[Cinzel] text-rpg-gold/60 text-lg mb-4">GameForge</p>
        <p className="text-rpg-text-dim text-sm mb-6">
          A{" "}
          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rpg-gold hover:text-rpg-gold-light transition-colors"
          >
            Hack Club
          </a>{" "}
          You Ship, We Ship program. Made by Amrit with :3.
        </p>
        <a
          href="https://hackclub.slack.com/channels/gameforge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-rpg-gold/80 hover:text-rpg-gold transition-colors text-sm font-[Inter]"
        >
          Join #gameforge on Slack &rarr;
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-rpg-dark min-h-screen">
      <Hero />
      <Divider />
      <HowItWorks />
      <Divider />
      <TradingCards />
      <Divider />
      <EarningGold />
      <Divider />
      <Shop />
      <Divider />
      <FAQ />
      <Footer />
    </main>
  );
}
