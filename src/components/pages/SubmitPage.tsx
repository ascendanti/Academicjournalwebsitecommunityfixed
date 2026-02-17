import React from 'react';
import { FileText, CheckCircle, AlertCircle, HelpCircle, Send, FileCheck, Clock, Award } from 'lucide-react';

export function SubmitPage() {
  const requirements = [
    'Original research in any STEM field',
    'Clear methodology and results',
    'Proper citations and references',
    'Abstract (150-250 words)',
    'Manuscript length: 2,000-8,000 words'
  ];

  const acceptedFormats = [
    { name: 'PDF', recommended: true },
    { name: 'Microsoft Word (.docx)', recommended: true },
    { name: 'LaTeX (with source files)', recommended: false }
  ];

  const timeline = [
    { step: 'Submission', duration: 'Day 1', icon: Send },
    { step: 'Initial Review', duration: '1-2 weeks', icon: FileCheck },
    { step: 'Peer Review', duration: '4-6 weeks', icon: Clock },
    { step: 'Decision', duration: '1 week', icon: Award }
  ];

  const faqs = [
    {
      question: 'Is my research good enough?',
      answer: 'If you\'re curious and have conducted original research with proper methodology, your work deserves consideration. We value scientific rigor and clear communication over credentials.'
    },
    {
      question: 'Do I need to be affiliated with a university?',
      answer: 'No! We accept submissions from high school students, independent researchers, and anyone passionate about scientific inquiry.'
    },
    {
      question: 'What if my research doesn\'t produce "positive" results?',
      answer: 'Negative results are valuable! Science is about honest inquiry. Well-conducted research that yields unexpected or null results is absolutely publishable.'
    },
    {
      question: 'Can I submit work done as part of a class project?',
      answer: 'Yes, as long as it represents original research and meets our submission guidelines. Make sure to acknowledge any faculty mentors or advisors.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Share Your Discovery
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Submit Your Paper</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to share your research with the world? We make the submission process straightforward and supportive.
          </p>
          <a
            href="https://forms.gle/jN5hwF7EQjNkr4mM7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Send className="w-5 h-5" />
            Submit Your Research
          </a>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Submission Guidelines</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know before submitting</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Requirements</h3>
              </div>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accepted Formats */}
            <div
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Accepted Formats</h3>
              </div>
              <ul className="space-y-4">
                {acceptedFormats.map((format, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{format.name}</span>
                    {format.recommended && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Recommended
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💡 Tip: Submit a PDF for fastest processing. Include all figures and tables embedded in the document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Review Timeline</h2>
            <p className="text-lg text-muted-foreground">What to expect after submission</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{item.step}</h3>
                  <p className="text-sm text-primary font-medium">{item.duration}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center"
          >
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Total timeline:</strong> Typically 6-10 weeks from submission to decision. We'll keep you updated throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Ethics & Plagiarism */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-card border-2 border-destructive/20 rounded-xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ethics & Plagiarism Policy</h3>
                <p className="text-muted-foreground">We take academic integrity seriously</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                All submissions must be original work. We use plagiarism detection software to ensure the integrity of published research.
              </p>
              <ul className="space-y-2 ml-6">
                <li className="list-disc">Properly cite all sources and prior work</li>
                <li className="list-disc">Acknowledge collaborators and mentors</li>
                <li className="list-disc">Disclose any conflicts of interest</li>
                <li className="list-disc">Ensure all co-authors have approved the submission</li>
                <li className="list-disc">Do not submit work under review elsewhere</li>
              </ul>
              <p className="text-sm pt-4 border-t border-border">
                Violations of our ethics policy may result in rejection and notification to relevant institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold mb-3 text-lg">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 text-white/90">
              Join hundreds of student researchers who have published with EJS
            </p>
            <a
              href="https://forms.gle/jN5hwF7EQjNkr4mM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Submit Your Research Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}