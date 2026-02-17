import React from 'react';
import { Rocket, Brain, Users, FileText, Microscope, Award, ArrowRight, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const processSteps = [
    {
      icon: FileText,
      title: 'Submit',
      description: 'Share your research with our community of student scientists',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Microscope,
      title: 'Review',
      description: 'Double-blind peer review by experienced researchers',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Publish',
      description: 'Get published and share your discoveries with the world',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    { value: '500+', label: 'Student Researchers' },
    { value: '50+', label: 'Published Papers' },
    { value: '20+', label: 'Countries' },
    { value: '95%', label: 'Quality Score' }
  ];

  const features = [
    { icon: CheckCircle, text: 'Rigorous peer review process' },
    { icon: CheckCircle, text: 'Faculty-mentored editorial board' },
    { icon: CheckCircle, text: 'Open access publication' },
    { icon: CheckCircle, text: 'Global student community' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Student-Led Research Journal
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Exploration Begins with Curiosity
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Research, made accessible
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              The Explorer's Journal of Science empowers student researchers worldwide to publish, collaborate, and contribute to scientific discovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => onNavigate('submit')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                <Rocket className="w-5 h-5" />
                Submit Your Research
              </button>
              <button
                onClick={() => onNavigate('review')}
                className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-lg font-medium hover:border-primary transition-all flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                How Peer Review Works
              </button>
              <button
                onClick={() => onNavigate('join')}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join the Team
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-left">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-muted-foreground">From submission to publication</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-8 right-8 text-4xl font-bold text-muted/20">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Research</h2>
            <p className="text-lg text-muted-foreground">Latest discoveries from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate('publications')}
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Microscope className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-medium mb-2">Vol. 1 • Issue {item}</div>
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    Sample Research Title in {item === 1 ? 'Biology' : item === 2 ? 'Chemistry' : 'Physics'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    Abstract preview: This research explores innovative approaches to understanding complex scientific phenomena...
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Student Researcher</span>
                    <button className="text-primary hover:underline flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('publications')}
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View All Publications
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Share Your Discovery?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join hundreds of student researchers making an impact
              </p>
              <button
                onClick={() => onNavigate('submit')}
                className="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Submit Your Research
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
