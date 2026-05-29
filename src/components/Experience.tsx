import { useState } from 'react';
import { experiences } from '../data';
import { ExperienceItem } from '../types';
import { Briefcase, Heart, Award, Calendar, MapPin, Tag } from 'lucide-react';

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'professional' | 'volunteer' | 'extracurricular'>('all');

  const filteredExperiences = experiences.filter(item => {
    if (activeCategory === 'all') return true;
    return item.type === activeCategory;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'professional':
        return <Briefcase className="h-4 w-4 text-emerald-400" />;
      case 'volunteer':
        return <Heart className="h-4 w-4 text-rose-400" />;
      case 'extracurricular':
        return <Award className="h-4 w-4 text-amber-400" />;
      default:
        return <Briefcase className="h-4 w-4 text-emerald-400" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'professional':
        return 'Professional';
      case 'volunteer':
        return 'Volunteer';
      case 'extracurricular':
        return 'Extracurricular';
      default:
        return '';
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case 'professional':
        return 'bg-emerald-950/30 text-emerald-400 border-emerald-900/30';
      case 'volunteer':
        return 'bg-rose-950/30 text-rose-400 border border-rose-900/30';
      case 'extracurricular':
        return 'bg-amber-950/30 text-amber-400 border border-amber-900/20';
      default:
        return 'bg-neutral-900 text-neutral-450 border border-neutral-800';
    }
  };

  return (
    <section className="py-12" id="resume-experience">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight" id="experience-heading">
            Background &amp; Professional History
          </h2>
          <p className="text-sm text-neutral-405 mt-1">
            Browse professional postings, advisory initiatives, and academic programs.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-1 p-1.5 bg-neutral-905 border border-neutral-800 rounded-lg max-w-max text-xs" id="experience-tabs-matrix">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-md font-medium tracking-wide transition-all ${
              activeCategory === 'all'
                ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Work ({experiences.length})
          </button>
          <button
            onClick={() => setActiveCategory('professional')}
            className={`px-3 py-1.5 rounded-md font-medium tracking-wide transition-all ${
              activeCategory === 'professional'
                ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setActiveCategory('volunteer')}
            className={`px-3 py-1.5 rounded-md font-medium tracking-wide transition-all ${
              activeCategory === 'volunteer'
                ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Volunteer
          </button>
          <button
            onClick={() => setActiveCategory('extracurricular')}
            className={`px-3 py-1.5 rounded-md font-medium tracking-wide transition-all ${
              activeCategory === 'extracurricular'
                ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Extracurricular
          </button>
        </div>
      </div>

      {/* Grid of items or simple clean vertical list */}
      <div className="space-y-6 relative border-l border-neutral-850 pl-4 md:pl-6 ml-3 md:ml-4" id="experience-timeline">
        {filteredExperiences.map((exp: ExperienceItem, idx: number) => (
          <div 
            key={exp.id} 
            className="relative group transition-all duration-300"
            id={`experience-item-${exp.id}`}
          >
            {/* Timeline Bullet Anchor */}
            <span className="absolute -left-[28px] md:-left-[36px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0D0D10] border border-neutral-800 shadow-sm font-semibold hover:border-emerald-500 transition-colors z-10" id={`bullet-${exp.id}`}>
              {getIcon(exp.type)}
            </span>

            <div className="p-5 md:p-6 rounded-xl border border-neutral-850 bg-[#0D0D10]/40 hover:border-neutral-800 hover:shadow-xs transition-all duration-300 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase font-semibold rounded-md border ${getColorClass(exp.type)}`}>
                      {getLabel(exp.type)}
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium text-neutral-350">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:sm:items-end text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Calendar className="h-3.5 w-3.5 text-neutral-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 sm:justify-end">
                    <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description List */}
              <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-5">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tag Badges */}
              {exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-850">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-500 uppercase font-semibold py-1 pr-1.5">
                    <Tag className="h-3 w-3 text-emerald-500" /> Skills:
                  </span>
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-mono rounded bg-neutral-905 text-neutral-300 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredExperiences.length === 0 && (
          <div className="text-center py-10 border border-dashed border-neutral-800 rounded-xl bg-neutral-950" id="experience-empty-state">
            <p className="text-sm font-mono text-neutral-550 font-medium">
              No elements found in this category. Select another option above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
