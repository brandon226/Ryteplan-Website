import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles, BarChart3, MapPin, Clock, Award } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Trusted by 10,000+ students</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
                Hello world
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                Discover and explore the perfect college for your future with our comprehensive database of 1,400+ schools and intelligent planning tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight size={20} />
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition">
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold border border-white"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <span>Join thousands of students planning smarter</span>
              </div>
            </div>

            <div className="relative animate-slide-in hidden lg:block">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-96 flex items-center justify-center border border-primary/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="text-white" size={40} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Interactive college search and comparison tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Everything You Need to Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to make college planning easier, faster, and smarter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Smart Comparison',
                description: 'Compare colleges side-by-side with detailed metrics, rankings, and statistics'
              },
              {
                icon: MapPin,
                title: '1,400+ Schools',
                description: 'Access comprehensive profiles of every accredited college and university'
              },
              {
                icon: Award,
                title: 'Personalized Matches',
                description: 'Get AI-powered recommendations based on your goals and preferences'
              },
              {
                icon: Clock,
                title: 'Timeline Tracking',
                description: 'Never miss a deadline with our integrated planning timeline and reminders'
              },
              {
                icon: Sparkles,
                title: 'Downloadable Lists',
                description: 'Create and download custom spreadsheets of your college choices'
              },
              {
                icon: ArrowRight,
                title: '100% Free Forever',
                description: 'No hidden costs, no premium tiers—everything is completely free to use'
              }
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white border border-muted rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              How RytePlan Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: '1',
                title: 'Create Your Profile',
                description: 'Sign up and tell us about your academic goals, interests, and preferences'
              },
              {
                number: '2',
                title: 'Explore Schools',
                description: 'Browse our database of 1,400+ schools and get personalized recommendations'
              },
              {
                number: '3',
                title: 'Plan & Organize',
                description: 'Create lists, set reminders, and download your college choices as a spreadsheet'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-8 border border-muted h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-display font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary/30">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              1,400+ Schools to Choose From
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              From Ivy League universities to regional colleges, explore detailed information about schools across the country
            </p>
            <div className="grid grid-cols-3 gap-6 lg:gap-12 mb-8">
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold mb-2">1,400+</div>
                <div className="text-sm lg:text-base text-white/80">Schools</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold mb-2">50</div>
                <div className="text-sm lg:text-base text-white/80">States</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold mb-2">100%</div>
                <div className="text-sm lg:text-base text-white/80">Free</div>
              </div>
            </div>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-flex items-center gap-2">
              Explore Schools
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Find Your Perfect College?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students using RytePlan to make their college decision with confidence
          </p>
          <button className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition inline-flex items-center gap-2 text-lg">
            Get Started Free
            <ArrowRight size={24} />
          </button>
          <p className="mt-6 text-muted-foreground">
            No credit card required • Free forever • Join us today
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
