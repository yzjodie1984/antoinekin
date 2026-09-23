/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div id="site-root" className="min-h-screen bg-[#FBFBFA] text-[#111111] antialiased selection:bg-[#1B3A5C] selection:text-white">
      {/* Minimal corner home-anchor */}
      <header id="site-header" className="fixed top-6 left-6 sm:top-8 sm:left-10 z-50">
        <nav id="top-nav" aria-label="Main Navigation">
          <a
            id="home-anchor"
            href="#hero"
            className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium text-[#1B3A5C] no-underline hover:opacity-75 transition-opacity"
          >
            Antoine Kin
          </a>
        </nav>
      </header>

      {/* Main Single Column Container */}
      <main id="main-content" className="max-w-2xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-24 sm:pb-32">
        
        {/* 1. Hero Section */}
        <section id="hero" aria-labelledby="hero-name" className="space-y-8 sm:space-y-10">
          <div id="hero-media" className="pt-2">
            <img
              id="hero-headshot"
              src="/profileimage.jpg"
              alt="Antoine Kin, Founder and CEO of Hong Kong Shenzhen Trading Corporation."
              referrerPolicy="no-referrer"
              loading="eager"
              width="128"
              height="128"
              className="w-28 h-28 sm:w-32 sm:h-32 object-cover"
            />
          </div>

          <div id="hero-identity" className="space-y-4">
            <h1
              id="hero-name"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-[#111111] leading-[1.15]"
            >
              Antoine Kin
            </h1>
            <p
              id="hero-positioning"
              className="text-lg sm:text-xl font-normal leading-relaxed text-[#222222]"
            >
              International entrepreneur and investor building ventures in aviation, hospitality, and technology across Europe, Asia, and North America.
            </p>
          </div>

          {/* Crawlable summary paragraph: placed early in the DOM in smaller type for AI and search scrapers */}
          <div id="hero-summary-wrapper" className="pt-2">
            <p
              id="hero-summary"
              className="text-[14px] sm:text-[15px] leading-[1.75] text-[#444444]"
            >
              Antoine Kin is an international entrepreneur and investor with over 20 years of experience across Europe, Asia, and North America. He began his career in the global premium spirits industry before founding and leading ventures in aviation, hospitality, and technology. He is Founder and CEO of Hong Kong Shenzhen Trading Corporation, an aviation asset trading company specializing in commercial aircraft engines and related assets.
            </p>
          </div>
        </section>

        {/* The single accent color thin dividing rule in Marine Blue (#1B3A5C) */}
        <hr
          id="accent-rule"
          className="my-16 sm:my-20 border-0 border-t-2 border-[#1B3A5C]"
        />

        {/* 2. Focus Areas Section */}
        <section id="focus-areas" aria-labelledby="focus-heading" className="space-y-8 sm:space-y-10">
          <h2
            id="focus-heading"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#555555]"
          >
            Focus Areas
          </h2>

          <ul id="focus-list" className="space-y-6 sm:space-y-7 list-none p-0 m-0">
            <li id="focus-item-aviation" className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
              <span className="font-semibold text-[#111111]">Aviation &amp; Global Trade</span> — Building and operating trading platforms connecting global suppliers of aircraft engines and related assets with markets across Asia and beyond.
            </li>

            <li id="focus-item-ai" className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
              <span className="font-semibold text-[#111111]">Applied Artificial Intelligence</span> — Exploring how AI can bring greater transparency, efficiency, and accessibility to complex industrial applications.
            </li>

            <li id="focus-item-marine" className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
              <span className="font-semibold text-[#111111]">Sustainable Marine Technologies</span> — Supporting the transition toward cleaner, more efficient marine propulsion and transport.
            </li>

            <li id="focus-item-hospitality" className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
              <span className="font-semibold text-[#111111]">Hospitality</span> — Operating a boutique hospitality and yachting business in Bonifacio, Corsica.
            </li>
          </ul>

          <p
            id="focus-throughline"
            className="italic text-base sm:text-[17px] leading-relaxed text-[#222222] pt-2"
          >
            Across every area of focus, the throughline is the same — making complex technology more accessible, efficient, and scalable.
          </p>
        </section>

        {/* Section gap */}
        <div className="h-16 sm:h-20" aria-hidden="true" />

        {/* 3. About Section */}
        <section id="about" aria-labelledby="about-heading" className="space-y-8 sm:space-y-10">
          <h2
            id="about-heading"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#555555]"
          >
            About
          </h2>

          <div id="about-content" className="space-y-6 text-base sm:text-[17px] leading-[1.8] text-[#222222]">
            <p id="about-paragraph-1">
              Antoine Kin is an international entrepreneur and investor with over 20 years of experience across Europe, Asia, and North America. He began his career in the global premium spirits industry, where as Vice President of Strategy and Marketing at Russian Standard Vodka he helped build the company&apos;s international business into the world&apos;s second-largest vodka producer, before founding and leading ventures in aviation, hospitality, and technology. He is the Founder and CEO of{' '}
              <a
                href="https://www.hstc.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A5C] hover:opacity-80 underline underline-offset-4 transition-opacity"
              >
                Hong Kong Shenzhen Trading Corporation (HSTC)
              </a>
              , an aviation asset trading company specializing in commercial aircraft engines and related assets. He also founded{' '}
              <a
                href="https://www.entrecieletmerhotel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A5C] hover:opacity-80 underline underline-offset-4 transition-opacity"
              >
                Entre Ciel et Mer
              </a>
              , a boutique hospitality and yachting business in Bonifacio, Corsica.
            </p>

            <p id="about-paragraph-2">
              Antoine holds an MBA from INSEAD, with a concentration in Entrepreneurship, Private Equity, and Advanced Brand Management, and an Engineering Diploma in Telecommunications from Télécom SudParis. He is passionate about innovation and technology, with particular interest in artificial intelligence for industrial applications, sustainable marine technologies, and the commercialization of emerging technologies. He is currently attending MIT&apos;s Technology Leadership Program in Boston. As an active member of the INSEAD alumni community, he welcomes opportunities to collaborate on entrepreneurship, aviation, artificial intelligence, sustainability, venture capital, and international business development, and more broadly enjoys connecting entrepreneurs, investors, researchers, and business leaders across industries and geographies to accelerate innovation and create long-term value.
            </p>

            <p id="about-paragraph-3">
              As part of MIT&apos;s Technology Leadership Program, Antoine has been working in MIT&apos;s quantum computing lab, exploring how frontier technologies like quantum computing are reshaping what is possible in engineering and industry. For Antoine, time spent at the frontier of research is not separate from his business ventures — it is what keeps them there. Staying close to where science is advancing fastest is how he ensures the companies he builds remain at the leading edge, rather than following behind it.
            </p>

            <figure id="about-quantum-figure" className="pt-2 sm:pt-4 m-0 space-y-2">
              <img
                id="about-quantum-image"
                src="/quantum.jpg"
                alt="Antoine Kin at MIT's quantum computing lab during the Technology Leadership Program."
                loading="lazy"
                width="256"
                height="341"
                className="w-56 sm:w-64 aspect-[3/4] object-cover"
              />
              <figcaption
                id="about-quantum-caption"
                className="text-xs text-[#666666] tracking-wide"
              >
                Antoine Kin at MIT&apos;s quantum computing lab during the Technology Leadership Program.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section gap */}
        <div className="h-16 sm:h-20" aria-hidden="true" />

        {/* 4. Track Record Section */}
        <section id="track-record" aria-labelledby="track-record-heading" className="space-y-8 sm:space-y-10">
          <h2
            id="track-record-heading"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#555555]"
          >
            Track Record
          </h2>

          <div id="track-record-list" className="space-y-8 sm:space-y-10">
            <article id="track-record-item-mit" className="space-y-2 pt-6 first:pt-0 border-t first:border-t-0 border-[#1B3A5C]/20">
              <h3 className="font-semibold text-[#111111] text-base sm:text-[17px] leading-snug">
                MIT Technology Leadership Program
              </h3>
              <p className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
                Currently attending MIT&apos;s Technology Leadership Program in Boston, engaging with a global community of researchers, founders, and technology leaders.
              </p>
              <p className="text-xs sm:text-[13px] tracking-wide text-[#666666]">
                Sep 2026 – Apr 2027
              </p>
            </article>

            <article id="track-record-item-hstc" className="space-y-2 pt-6 border-t border-[#1B3A5C]/20">
              <h3 className="font-semibold text-[#111111] text-base sm:text-[17px] leading-snug">
                Founder &amp; CEO, Hong Kong Shenzhen Trading Corporation (HSTC)
              </h3>
              <p className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
                Aviation asset trading company specializing in commercial aircraft engines and related assets, serving clients across global markets.
              </p>
              <p className="text-xs sm:text-[13px] tracking-wide text-[#666666]">
                2022 – Present
              </p>
            </article>

            <article id="track-record-item-ecm" className="space-y-2 pt-6 border-t border-[#1B3A5C]/20">
              <h3 className="font-semibold text-[#111111] text-base sm:text-[17px] leading-snug">
                Founder, Entre Ciel et Mer
              </h3>
              <p className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
                Boutique hospitality and yachting business in the historic citadel of Bonifacio, Corsica.
              </p>
              <p className="text-xs sm:text-[13px] tracking-wide text-[#666666]">
                2020 – Present
              </p>
            </article>

            <article id="track-record-item-rsv" className="space-y-2 pt-6 border-t border-[#1B3A5C]/20">
              <h3 className="font-semibold text-[#111111] text-base sm:text-[17px] leading-snug">
                Vice President of Strategy and Marketing, Russian Standard Vodka
              </h3>
              <p className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
                Helped build the company&apos;s international business into the world&apos;s second-largest vodka producer.
              </p>
              <p className="text-xs sm:text-[13px] tracking-wide text-[#666666]">
                2012 – 2017
              </p>
            </article>

            <article id="track-record-item-besse" className="space-y-2 pt-6 border-t border-[#1B3A5C]/20">
              <h3 className="font-semibold text-[#111111] text-base sm:text-[17px] leading-snug">
                Georges Besse Foundation Award for Entrepreneurial Leadership
              </h3>
              <p className="text-base sm:text-[17px] leading-[1.75] text-[#222222]">
                Selected as one of twenty award recipients nationally from France&apos;s leading engineering schools, chosen by scholars and business leaders.
              </p>
              <p className="text-xs sm:text-[13px] tracking-wide text-[#666666]">
                1997
              </p>
            </article>
          </div>
        </section>

        {/* Section gap */}
        <div className="h-16 sm:h-20" aria-hidden="true" />

        {/* 5. Contact Section */}
        <section id="contact" aria-labelledby="contact-heading" className="space-y-8 sm:space-y-10">
          <h2
            id="contact-heading"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#555555]"
          >
            Contact
          </h2>

          <div id="contact-links" className="space-y-3 text-base sm:text-[17px]">
            <p>
              <a
                id="contact-email"
                href="mailto:ak@hstc.uk"
                className="text-[#1B3A5C] hover:opacity-80 underline underline-offset-4 transition-opacity"
              >
                ak@hstc.uk
              </a>
            </p>
            <p>
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/antoine-kin-3b19081/details/experience/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A5C] hover:opacity-80 underline underline-offset-4 transition-opacity"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                id="contact-hstc"
                href="https://www.hstc.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A5C] hover:opacity-80 underline underline-offset-4 transition-opacity"
              >
                HSTC
              </a>
            </p>
            <p>
              <a
                id="contact-ecm"
                href="https://www.entrecieletmerhotel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A5C] hover:opacity-80 underline underline-offset-4 transition-opacity"
              >
                Entre Ciel et Mer
              </a>
            </p>
          </div>
        </section>

        {/* Minimal semantic footer */}
        <footer id="site-footer" className="mt-24 sm:mt-32 pt-8 text-xs text-[#777777]">
          <p id="footer-copyright">
            © {new Date().getFullYear()} Antoine Kin. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
