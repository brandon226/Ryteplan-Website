import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">R</span>
              </div>
              <span className="font-display font-bold text-lg text-white">RytePlan</span>
            </div>
            <p className="text-sm text-slate-300">
              The free college planning platform trusted by thousands of students.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  School Database
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} RytePlan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
