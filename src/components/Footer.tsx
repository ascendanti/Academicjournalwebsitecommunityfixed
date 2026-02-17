import React from 'react';
import { Mail, Globe, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EJS</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Explorer's Journal of Science</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              An independent, student-led research journal built for curious minds. Making scientific exploration accessible, exciting, and meaningful for students worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('submit')} className="text-muted-foreground hover:text-primary transition-colors">
                  Submit Paper
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('review')} className="text-muted-foreground hover:text-primary transition-colors">
                  Review Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('publications')} className="text-muted-foreground hover:text-primary transition-colors">
                  Publications
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('join')} className="text-muted-foreground hover:text-primary transition-colors">
                  Join the Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('board')} className="text-muted-foreground hover:text-primary transition-colors">
                  Editorial Board
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Explorer's Journal of Science. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:ejs.sciencejournalteam@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
