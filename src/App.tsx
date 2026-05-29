/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import ProjectTabs from './components/ProjectTabs';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] px-4 sm:px-6 py-6 md:py-12" id="portfolio-app-root">
      {/* Maximum content boundaries for excellent desktop-first responsive structure */}
      <div className="max-w-5xl mx-auto space-y-12 bg-[#0A0A0B] border border-neutral-900 shadow-2xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
        
        {/* Absolute header visual accent line representing professional server modules */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-neutral-900 to-emerald-600" />
        
        {/* Section 1: Hero header biography */}
        <Header />

        {/* Section 2: Projects Matrix tabs containing case-study & live demos */}
        <ProjectTabs />

        {/* Section 3: Professional Experience history tree */}
        <Experience />

        {/* Section 4: Outbound direct contact links and indices */}
        <Footer />
        
      </div>
    </div>
  );
}
