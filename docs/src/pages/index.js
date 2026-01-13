import { ShoppingCart, Package, Users, ShoppingBag, Calculator, UserCog, FolderKanban, BarChart3, BookOpen, Zap } from 'lucide-react';
import useBaseUrl from '@docusaurus/useBaseUrl'; 

function HomepageHeader() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)',
      padding: '4rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              background: 'linear-gradient(to right, #ffffff, #bfdbfe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}>
              SOFTA
            </span>
          </div>
          <h1 style={{ 
            color: 'white', 
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Cloud-Based POS & ERP System
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2.5rem',
            lineHeight: '1.6'
          }}>
            Complete business management solution built on UltimatePOS. Streamline your sales, inventory, and operations with powerful, intuitive tools.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={useBaseUrl('docs/intro')}
            style={{
              background: 'white',
              color: '#1e40af',
              border: 'none',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.1rem',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <BookOpen size={20} />
            Get Started
          </a>

          <a
            href={useBaseUrl('docs/api/overview')}
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '2px solid white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.1rem',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Zap size={20} />
            API Reference
          </a>
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '-50%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
    </header>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      border: '1px solid rgba(0,0,0,0.05)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
    }}>
      <div style={{ 
        display: 'inline-flex',
        padding: '0.75rem',
        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        borderRadius: '10px',
        marginBottom: '1rem'
      }}>
        <Icon size={32} color="white" />
      </div>
      <h3 style={{ 
        fontSize: '1.25rem', 
        marginBottom: '0.75rem',
        color: '#1a202c',
        fontWeight: '600'
      }}>{title}</h3>
      <p style={{ 
        color: '#4a5568', 
        lineHeight: '1.6',
        margin: 0
      }}>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      icon: ShoppingCart,
      title: "POS System",
      description: "Fast, intuitive point of sale interface for seamless transactions. Support for multiple payment methods, receipts, and real-time inventory updates."
    },
    {
      icon: Package,
      title: "Stock Management",
      description: "Track stock levels, manage suppliers, set reorder points, and never run out of products. Complete visibility across all locations."
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build relationships with integrated CRM. Track customer history, loyalty programs, and personalized marketing campaigns."
    },
    {
      icon: ShoppingBag,
      title: "WooCommerce Integration",
      description: "Seamlessly sync your online and offline sales. Manage inventory, orders, and customers across all channels in one place."
    },
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete financial management with invoicing, expense tracking, tax calculations, and comprehensive financial reporting."
    },
    {
      icon: UserCog,
      title: "HRM",
      description: "Manage your workforce efficiently with employee records, attendance tracking, payroll, and performance management tools."
    },
    {
      icon: FolderKanban,
      title: "Project Planner",
      description: "Plan, track, and manage projects with task assignment, timeline visualization, and team collaboration features."
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Gain insights with comprehensive reports on sales, profits, inventory, and more. Make data-driven decisions with ease."
    }
  ];

  return (
    <section style={{ padding: '4rem 0', background: '#f7fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: '#1a202c',
            fontWeight: '700'
          }}>
            Everything You Need to Run Your Business
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Built on UltimatePOS, SOFTA provides enterprise-grade features for businesses of all sizes.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section style={{ padding: '4rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1.5rem',
            color: '#1a202c',
            fontWeight: '700'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4a5568',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Explore our comprehensive documentation to set up SOFTA, integrate with your systems, and unlock the full potential of your business operations.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/docs/intro"
              style={{
                padding: '1rem 2rem',
                background: '#3b82f6',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'background 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}>
              <BookOpen size={20} />
              Read the Docs
            </a>
            <a
              href="/docs/installation"
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#3b82f6',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3b82f6';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#3b82f6';
              }}>
              <Zap size={20} />
              Quick Install
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ 
      background: '#1a202c', 
      color: 'white', 
      padding: '2rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ margin: '0 0 0.5rem 0', opacity: 0.8 }}>
          Built with ❤️ by Tinotenda Gozho & Mckale
        </p>
        <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>
          Powered by UltimatePOS | © {new Date().getFullYear()} SOFTA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStartSection />
      </main>
      <Footer />
    </div>
  );
}