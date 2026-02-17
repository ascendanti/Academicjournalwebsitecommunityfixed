import React, { useState } from 'react';
import { BookOpen, Download, Share2, ChevronDown, ChevronUp, FileText, Calendar } from 'lucide-react';

export function PublicationsPage() {
  const [expandedAbstract, setExpandedAbstract] = useState<number | null>(null);

  const publications = [
    {
      volume: 1,
      issue: 1,
      title: 'Novel Approaches to Enzyme Catalysis in Aqueous Solutions',
      authors: ['Sarah Johnson', 'Michael Chen', 'Dr. Emily Rodriguez (Advisor)'],
      institution: 'Lincoln High School',
      date: 'January 2026',
      field: 'Biochemistry',
      doi: 'EJS.2026.1.1.001',
      abstract: 'This study investigates the catalytic efficiency of various enzymes in aqueous solutions under different pH and temperature conditions. Our findings suggest that enzyme activity can be optimized through careful control of environmental factors, with implications for industrial applications.',
      keywords: ['enzyme catalysis', 'biochemistry', 'pH optimization']
    },
    {
      volume: 1,
      issue: 1,
      title: 'Machine Learning Applications in Climate Data Analysis',
      authors: ['Alex Rivera', 'Priya Patel'],
      institution: 'International School of Singapore',
      date: 'January 2026',
      field: 'Computer Science',
      doi: 'EJS.2026.1.1.002',
      abstract: 'We present a novel machine learning framework for analyzing historical climate data to predict future temperature trends. Using a combination of neural networks and traditional statistical methods, our model achieves 94% accuracy in short-term predictions.',
      keywords: ['machine learning', 'climate science', 'neural networks']
    },
    {
      volume: 1,
      issue: 2,
      title: 'Quantum Entanglement in Two-Photon Systems: An Experimental Study',
      authors: ['David Kim', 'Sofia Gonzalez', 'Prof. James Chen (Advisor)'],
      institution: 'Boston Latin School',
      date: 'December 2025',
      field: 'Physics',
      doi: 'EJS.2025.1.2.001',
      abstract: 'This experimental investigation explores quantum entanglement phenomena in two-photon systems. We constructed a modified Mach-Zehnder interferometer to measure correlation coefficients, demonstrating clear violation of Bell inequalities.',
      keywords: ['quantum mechanics', 'entanglement', 'experimental physics']
    },
    {
      volume: 1,
      issue: 2,
      title: 'Sustainable Synthesis of Biodegradable Polymers from Agricultural Waste',
      authors: ['Emma Watson', 'Carlos Rodriguez'],
      institution: 'Green Valley Academy',
      date: 'December 2025',
      field: 'Chemistry',
      doi: 'EJS.2025.1.2.002',
      abstract: 'We developed a cost-effective method for synthesizing biodegradable polymers from agricultural waste materials. This approach reduces environmental impact while creating valuable materials for packaging applications.',
      keywords: ['green chemistry', 'polymers', 'sustainability']
    },
    {
      volume: 1,
      issue: 3,
      title: 'Neural Pathways in Memory Formation: A Computational Model',
      authors: ['Marcus Lee', 'Dr. Sarah Martinez (Advisor)'],
      institution: 'Cambridge International School',
      date: 'November 2025',
      field: 'Neuroscience',
      doi: 'EJS.2025.1.3.001',
      abstract: 'Using computational modeling, we simulate neural pathway formation during memory consolidation. Our model successfully replicates key features of long-term potentiation observed in biological systems.',
      keywords: ['neuroscience', 'computational modeling', 'memory']
    }
  ];

  const volumes = Array.from(new Set(publications.map(p => p.volume))).sort((a, b) => b - a);

  const getPublicationsByVolume = (volume: number) => {
    return publications.filter(p => p.volume === volume);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Open Access Research
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Explore cutting-edge research from student scientists around the world. All papers are freely accessible.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Papers', value: publications.length },
              { label: 'Volumes', value: volumes.length },
              { label: 'Countries', value: '12+' },
              { label: 'Downloads', value: '2.5K+' }
            ].map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications by Volume */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          {volumes.map((volume, volumeIndex) => {
            const volumePubs = getPublicationsByVolume(volume);
            const issues = Array.from(new Set(volumePubs.map(p => p.issue))).sort((a, b) => b - a);

            return (
              <div key={volume} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Volume {volume}</h2>
                </div>

                {issues.map((issue, issueIndex) => {
                  const issuePubs = volumePubs.filter(p => p.issue === issue);

                  return (
                    <div key={issue} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                        Issue {issue}
                      </h3>

                      <div className="space-y-4">
                        {issuePubs.map((pub, pubIndex) => (
                          <div
                            key={pubIndex}
                            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                          >
                            <div className="p-6">
                              {/* Header */}
                              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                      {pub.field}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      DOI: {pub.doi}
                                    </span>
                                  </div>
                                  <h4 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                                    {pub.title}
                                  </h4>
                                  <div className="text-sm text-muted-foreground mb-2">
                                    {pub.authors.join(', ')}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <FileText className="w-4 h-4" />
                                      {pub.institution}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-4 h-4" />
                                      {pub.date}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Download PDF">
                                    <Download className="w-5 h-5 text-primary" />
                                  </button>
                                  <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Share">
                                    <Share2 className="w-5 h-5 text-muted-foreground" />
                                  </button>
                                </div>
                              </div>

                              {/* Abstract Toggle */}
                              <div>
                                <button
                                  onClick={() => setExpandedAbstract(expandedAbstract === pubIndex ? null : pubIndex)}
                                  className="flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-2"
                                >
                                  {expandedAbstract === pubIndex ? (
                                    <>
                                      <ChevronUp className="w-4 h-4" />
                                      Hide Abstract
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="w-4 h-4" />
                                      Show Abstract
                                    </>
                                  )}
                                </button>

                                {expandedAbstract === pubIndex && (
                                  <div className="pt-4 border-t border-border animate-fadeIn">
                                    <h5 className="font-semibold mb-2">Abstract</h5>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                      {pub.abstract}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {pub.keywords.map((keyword, i) => (
                                        <span
                                          key={i}
                                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                                        >
                                          {keyword}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-muted/30 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
                              <div className="text-sm text-muted-foreground">
                                Open Access • CC BY 4.0
                              </div>
                              <button className="text-sm font-medium text-primary hover:underline">
                                Read Full Paper →
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Publish Your Research</h2>
            <p className="text-lg mb-6 text-white/90">
              Join our community of published student researchers
            </p>
            <a
              href="https://forms.gle/jN5hwF7EQjNkr4mM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105"
            >
              Submit Your Paper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
