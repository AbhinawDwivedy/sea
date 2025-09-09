import StaggeredMenu from './components/StaggeredMenu';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Events } from './components/Events';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import RollingGallery from './components/RollingGallery';
import ClickSpark from './components/ClickSpark';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 z-50">
        <StaggeredMenu
          position="right"
          items={[
            { label: 'Home', ariaLabel: 'Go to home', link: '#hero' },
            { label: 'About', ariaLabel: 'About section', link: '#about' },
            { label: 'Activities', ariaLabel: 'Activities section', link: '#activities' },
            { label: 'Events', ariaLabel: 'Events section', link: '#events' },
            { label: 'Team', ariaLabel: 'Team section', link: '#team' },
            { label: 'Contact', ariaLabel: 'Contact section', link: '#contact' }
          ]}
          socialItems={[
            { label: 'Twitter', link: 'https://twitter.com' },
            { label: 'GitHub', link: 'https://github.com' },
            { label: 'LinkedIn', link: 'https://linkedin.com' }
          ]}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={true}
          colors={["#0b0f14", "#08141f", "#001b2a", "#111827"]}
          logoUrl="/favicon.svg"
          accentColor="#00F6FF"
          autoToggleColorOnScroll={true}
          lightMenuButtonColor="#ffffff"
          darkMenuButtonColor="#e5e7eb"
          scrollThreshold={320}
          observeSelector="#hero"
        />
      </div>
      <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
        <Hero />
      </ClickSpark>
      <About />
      <Activities />
      <Events />
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}