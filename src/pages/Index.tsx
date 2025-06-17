
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, Video, Shield, Zap, Globe } from 'lucide-react';

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Lightning-fast messaging with organized channels and threads"
    },
    {
      icon: Video,
      title: "Voice & Video",
      description: "Crystal-clear voice channels and HD video calls with screen sharing"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Create servers, manage roles, and build thriving communities"
    },
    {
      icon: Shield,
      title: "Advanced Moderation",
      description: "Powerful moderation tools to keep your community safe"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with real-time updates and low latency"
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Access from anywhere - web, mobile, and desktop apps"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 vortex-gradient rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold vortex-gradient-text">Vortex</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="vortex-gradient hover:opacity-90 transition-opacity">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connect, Communicate,
              <span className="vortex-gradient-text block">Create Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The next-generation communication platform that brings teams, communities, and friends together in one seamless experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/register">
                <Button size="lg" className="vortex-gradient hover:opacity-90 transition-opacity pulse-glow">
                  Start Chatting Now
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Open Vortex App
                </Button>
              </Link>
            </div>
            
            {/* Hero Visual */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-border float-animation">
                <div className="bg-background/50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      <span className="font-semibold"># general</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">1,234 online</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Welcome to Vortex! 🚀</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary/20 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">This looks amazing! Can't wait to try it out.</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and manage thriving communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    hoveredFeature === index ? 'vortex-gradient' : 'bg-muted'
                  }`}>
                    <feature.icon className={`w-8 h-8 transition-colors duration-300 ${
                      hoveredFeature === index ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto vortex-gradient rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Future of Communication?
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Join thousands of communities already using Vortex to connect and collaborate.
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-6 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 vortex-gradient rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold vortex-gradient-text">Vortex</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 Vortex. Built for the future of communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
