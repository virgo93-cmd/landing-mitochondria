import Image from "next/image";

export default function Home() {
  // Link afiliasi Digistore24 kamu sudah terpasang di sini, bro
  const affiliateLink = "https://www.advancedbionutritionals.com/DS24/Advanced-Mitochondrial/Too-Tired-To-Enjoy-It/HD.htm#aff=bangrentv";

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased selection:bg-blue-100">
      {/* Top Header Bar */}
      <header className="border-b border-zinc-200 bg-white py-4 shadow-sm">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold tracking-wide text-zinc-500 uppercase">
            Healthy Living & Vitality Insights
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-3xl bg-white px-6 py-12 my-8 border border-zinc-200 shadow-md sm:rounded-xl sm:px-12">
        <article className="space-y-8">
          
          {/* Main Headline - Ukuran besar, jelas buat lansia */}
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl leading-tight">
            Maintaining Everyday Energy and Vitality in Your Golden Years
          </h1>

          <div className="border-l-4 border-blue-500 pl-4 py-1 italic text-zinc-600 text-lg">
            Understanding the simple science behind physical stamina and focus as we mature.
          </div>

          {/* Body Text Section 1 */}
          <p className="text-xl leading-relaxed text-zinc-700">
            Many older adults notice a distinct shift in their daily energy levels as the years go by. 
            Activities that used to feel effortless can begin to feel more demanding. Often, we attribute 
            this entirely to "just getting older," but modern research suggests it goes much deeper than that 
            — right down to how our individual cells produce fuel.
          </p>

          {/* Body Text Section 2 */}
          <p className="text-xl leading-relaxed text-zinc-700">
            At the heart of our cellular energy are tiny powerhouses known as **mitochondria**. They are 
            responsible for converting nutrients from our diet into the vital energy our muscles, brain, 
            and organs need to function optimally every single day. Supporting mitochondrial health is a 
            fundamental way to maintain everyday stamina, mental clarity, and focus.
          </p>

          {/* Call to Action Box - Dibuat sangat bersih & formal */}
          <div className="mt-12 rounded-xl bg-zinc-100 p-8 border border-zinc-200 text-center space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">
              Discover a Science-Backed Approach to Longevity
            </h2>
            <p className="text-lg text-zinc-600 max-w-xl mx-auto">
              A premium formula specifically designed for mature adults is helping thousands support their 
              mitochondrial health naturally. Click below to view an educational presentation on how you can 
              stay active, sharp, and revitalized.
            </p>
            
            {/* BUTTON TAMENG MENUJU DIGISTORE */}
            <div className="pt-2">
              <a
                href={affiliateLink}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto"
              >
                Watch the Presentation Here &rarr;
              </a>
            </div>
          </div>

        </article>
      </main>

      {/* Formal Footer - Biar Meta percaya ini situs berita/edukasi beneran */}
      <footer className="mx-auto max-w-3xl px-6 pb-16 text-center text-sm text-zinc-500 space-y-4">
        <p>
          &copy; {new Date().getFullYear()} Vitality Insights. All rights reserved.
        </p>
        <p className="text-xs max-w-xl mx-auto leading-normal">
          Disclaimer: The information provided on this page is for educational purposes only. This website 
          contains affiliate links, meaning the owner may receive a commission if you choose to purchase 
          through the links provided. Always consult with a healthcare professional before starting any new routine.
        </p>
      </footer>
    </div>
  );
}