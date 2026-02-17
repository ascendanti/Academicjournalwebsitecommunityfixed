import React from 'react';
import { Target, Eye, Heart, Globe, Users, BookOpen } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Curiosity First',
      description: 'Every question matters. Every experiment counts. We celebrate the spirit of inquiry.'
    },
    {
      icon: Users,
      title: 'Student-Centered',
      description: 'Built by students, for students. Supported by faculty, accessible to all.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connecting young scientists across continents, cultures, and disciplines.'
    },
    {
      icon: BookOpen,
      title: 'Open Access',
      description: 'Knowledge should be free. All our publications are openly accessible to everyone.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EJS</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Explorer's Journal of Science (EJS) is an independent, student-led research journal built for curious minds.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p className="leading-relaxed">
                The Explorer's Journal of Science (EJS) is an independent, student-led research journal built for curious minds. We exist to make scientific exploration accessible, exciting, and meaningful for students worldwide.
              </p>
              <p className="leading-relaxed">
                Founded on the belief that research isn't just for professionals, EJS provides a platform for students, educators, and early researchers to share ideas, experiments, and discoveries across STEM.
              </p>
              <p className="leading-relaxed font-medium text-foreground">
                At EJS, science begins with curiosity. Every question matters. Every experiment counts.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8">
              <Target className="w-12 h-12 mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-4">Mission</h2>
              <p className="leading-relaxed text-white/90">
                To ignite scientific curiosity, promote research-driven learning, and provide an open platform for students to publish, collaborate, and engage with real scientific inquiry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent to-accent/80 text-white rounded-2xl p-8">
              <Eye className="w-12 h-12 mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p className="leading-relaxed text-white/90">
                To build a global community of young scientists who believe in questioning, exploring, and sharing knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">What drives us forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why EJS Matters</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Breaking Down Barriers</h3>
                  <p>Traditional academic publishing can be intimidating and exclusive. We're changing that by creating a welcoming, supportive environment for emerging researchers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real-World Experience</h3>
                  <p>Students gain hands-on experience with peer review, scientific writing, and academic publishing—skills that are invaluable for future careers in STEM.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Building Confidence</h3>
                  <p>By publishing their work, young researchers gain confidence in their abilities and learn that their contributions to science are valuable and worthy of recognition.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Global Collaboration</h3>
                  <p>We connect students from different countries, backgrounds, and perspectives, fostering a diverse and inclusive scientific community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
