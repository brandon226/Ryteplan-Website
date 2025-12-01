import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-md">
          <div className="text-9xl font-display font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We couldn't find the page you're looking for. This page might have been moved or no longer exists.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
