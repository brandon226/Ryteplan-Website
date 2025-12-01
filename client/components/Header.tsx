import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-muted sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">R</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">RytePlan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              How It Works
            </a>
            <a href="#schools" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              1,400+ Schools
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-foreground hover:text-primary transition">
              Sign In
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-muted">
            <a href="#features" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#schools" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              1,400+ Schools
            </a>
            <div className="pt-4 border-t border-muted mt-4 flex flex-col gap-3">
              <button className="text-sm font-medium text-foreground hover:text-primary transition w-full text-left">
                Sign In
              </button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition w-full">
                Get Started Free
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
