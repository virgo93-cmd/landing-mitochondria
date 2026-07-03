import Image from "next/image";
import Script from "next/script";

export default function Home() {
  // Link afiliasi Digistore24
  const affiliateLink = "https://www.advancedbionutritionals.com/DS24/Advanced-Mitochondrial/Too-Tired-To-Enjoy-It/HD.htm#aff=bangrentv";

  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-900 antialiased selection:bg-emerald-100">
      {/* Script Iklan Social Bar Adsterra */}
      <Script 
        src="https://pl30192912.effectivecpmnetwork.com/3b/3a/9d/3b3a9d6cc7a58faadb0a25ceedb35e89.js"
        strategy="afterInteractive"
      />

      {/* Top Notification Bar - Membangun Otoritas */}
      <div className="bg-neutral-900 text-white text-center py-2 px-4 text-xs font-semibold tracking-wider uppercase">
        Official Senior Health Bulletin &bull; Verified Educational Resource
      </div>

      {/* Main Header */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between sm:px-6">
          <div className="flex items-center space-x-2">
            <span className="p-2 bg-emerald-600 rounded text-white font-serif text-xl font-bold leading-none shadow-sm">VI</span>
            <span className="text-lg font-extrabold tracking-tight text-neutral-900 font-serif sm:text-xl">
              Vitality<span className="text-emerald-600 font-sans font-light">Insights</span>
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Update: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <article className="bg-white border border-neutral-200 shadow-xl rounded-2xl p-6 sm:p-12 space-y-8">
          
          {/* Header Section */}
          <div className="space-y-3">
            <span className="inline-block px-2.5 py-1 text-xs font-bold bg-emerald-50 text-emerald-700 rounded uppercase tracking-wide">
              Cellular Longevity & Independent Aging Report
            </span>
            <h1 className="text-3xl font-serif font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-tight">
              Maintaining Everyday Energy & Vitality After Age 50
            </h1>
            <div className="flex items-center space-x-3 text-sm text-neutral-500 pt-2 pb-2">
              <span className="font-semibold text-neutral-700">Health Editorial Board</span>
              <span>&bull;</span>
              <span>Independent Research Review</span>
            </div>
          </div>

          {/* Sub-headline / Callout Box */}
          <div className="border-l-4 border-emerald-600 bg-neutral-50 px-5 py-4 italic text-neutral-700 text-lg rounded-r-lg shadow-inner">
            "Understanding the vital biological connection between microscopic mitochondrial performance, physical stamina, and sharp cognitive focus in our mature years."
          </div>

          {/* --- HIGH-CONVERTING HIGHLIGHTED CTA (ABOVE THE FOLD) --- */}
          <div className="my-6 p-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-xl">
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              
              {/* Kalimat Sugesti Psikologis */}
              <p className="text-base font-semibold text-neutral-800 leading-relaxed max-w-xl mx-auto">
                Before reading the comprehensive report below, we highly recommend independent seniors watch this clinical-grade video presentation outlining a breakthrough approach to sustainable physical stamina.
              </p>

              {/* Tombol dengan Efek Highlight & Ring Animation */}
              <div className="max-w-md mx-auto pt-1">
                <a
                  href={affiliateLink}
                  className="group relative inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-5 text-xl font-black text-white shadow-lg transition-all duration-200 hover:bg-emerald-700 hover:scale-[1.01] active:scale-[0.99] focus:outline-none ring-4 ring-emerald-600/30 animate-none w-full"
                  style={{ boxSizing: "border-box" }}
                >
                  {/* Efek Denyut/Glow Ring di Sekeliling Tombol */}
                  <span className="absolute -inset-0.5 rounded-xl bg-emerald-500 opacity-30 blur-sm group-hover:opacity-50 transition duration-200 animate-ping pointer-events-none"></span>
                  
                  <span className="relative flex items-center justify-center">
                    <span>Access Clinical Video Presentation</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </a>
                
                {/* Kalimat Penenang / Keamanan agar Lansia Percaya */}
                <span className="block text-xs text-neutral-500 mt-3 font-medium tracking-wide">
                  🔒 Secure link verified. No credit card required to view this presentation.
                </span>
              </div>

            </div>
          </div>
          {/* --- END OF ABOVE THE FOLD CTA --- */}

          {/* Body Paragraph 1 */}
          <p className="text-xl leading-relaxed text-neutral-800 font-normal pt-4">
            Many independent older adults notice a distinct shift in their baseline energy levels as the years progress. 
            Daily routines that used to feel entirely natural can gradually begin to feel noticeably more demanding. 
            While most individuals attribute this shift exclusively to the normal calendar aging process, recent peer-reviewed research suggests it originates much deeper within our physiology—specifically, within how our cells generate vital daily fuel.
          </p>

          {/* Body Paragraph 2 */}
          <p className="text-xl leading-relaxed text-neutral-800 font-normal">
            At the foundation of this daily energetic process are microscopic cellular powerhouses known as <strong className="text-neutral-900 font-bold">mitochondria</strong>. 
            These structures are directly responsible for processing nutrients and converting them into pure, clean fuel that our muscles, heart, and brain require to execute essential functions every single day. 
            Proactively supporting mitochondrial health is now recognized as a critical, fundamental strategy for maintaining daily physical stamina, clear mental processing, and prolonged focus.
          </p>

          {/* Trust Feature List Section */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-4 shadow-inner">
            <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide text-center sm:text-left">
              Key Focus Areas for Cellular Longevity:
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-base text-neutral-700 sm:grid-cols-2">
              <li className="flex items-start space-x-2.5">
                <span className="text-emerald-600 font-bold text-lg leading-none">✓</span>
                <span>Optimizing Natural Mitochondrial Efficiency</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="text-emerald-600 font-bold text-lg leading-none">✓</span>
                <span>Sustaining Morning-to-Night Physical Stamina</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="text-emerald-600 font-bold text-lg leading-none">✓</span>
                <span>Supporting Daily Cognitive & Mental Clarity</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="text-emerald-600 font-bold text-lg leading-none">✓</span>
                <span>Clean, Non-Stimulant Cellular Nutrition</span>
              </li>
            </ul>
          </div>

          {/* Footer/Secondary Call to Action (Tetap ditaruh buat yang beres membaca) */}
          <div className="pt-6 border-t border-neutral-100 text-center space-y-4">
            <p className="text-base text-neutral-600">
              Want to see the formula based on this cellular science?
            </p>
            <a 
              href={affiliateLink} 
              className="inline-block text-emerald-600 font-bold text-lg underline hover:text-emerald-700 transition"
            >
              Continue to the Advanced Bionutritionals Official Presentation &rarr;
            </a>
          </div>

        </article>
      </main>

      {/* Formal Footer */}
      <footer className="mx-auto max-w-3xl px-4 pb-16 text-center text-xs text-neutral-500 space-y-4">
        <div className="border-t border-neutral-300 pt-8">
          <p className="font-semibold">
            &copy; {new Date().getFullYear()} Vitality Insights. All rights reserved.
          </p>
        </div>
        <p className="max-w-2xl mx-auto leading-normal px-2">
          <strong>Disclaimer:</strong> The educational content provided on this page is for general informational and reference purposes only. It should not replace professional medical advice, diagnosis, or treatment. This platform contains affiliate links; the domain owner may receive compensation or commissions if you opt to acquire products through the links provided. Always consult with a qualified physician before integrating any new dietary practices.
        </p>
      </footer>
    </div>
  );
}