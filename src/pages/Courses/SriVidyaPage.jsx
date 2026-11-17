import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import logoImg from '../../assets/logo.opt.webp';
import './ChandiVidyaPage.css';

export default function SriVidyaPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sri Vidya | Sri Mahavidyesvari Tantra Peetham';
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.querySelector('nav.navbar');
    const offset = navbar ? navbar.offsetHeight : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 18;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <div className="ch-page">
      <Navbar />

      <section className="ch-hero">
        <div className="ch-hero__bg" aria-hidden="true" />
        <div className="ch-hero__inner">
          <div className="ch-hero__content">
            <motion.span className="ch-hero__eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              SRI VIDYA · SRI CHAKRA · LALITA TRIPURASUNDARI
            </motion.span>
            <motion.h1 className="ch-hero__title font-cinzel" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              Sri Vidya
            </motion.h1>
            <motion.p className="ch-hero__kicker font-cinzel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Principal Deities of Sri Vidya
            </motion.p>
            <motion.div className="ch-hero__divider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}>
              <span className="ch-hero__divider-line" />
              <img src={logoImg} alt="" className="ch-hero__divider-om" />
              <span className="ch-hero__divider-line" />
            </motion.div>
            <motion.p className="ch-hero__intro font-serif" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }}>
              In Sri Vidya, the Supreme Mother is approached through a defined spiritual order rather than unstructured devotion. At Sri MahaVidyesvari Tantra Peetham, we follow the Parashurama Kalpasutras, which establish the traditional sequence, discipline, and ritual framework of this sacred path.
            </motion.p>
            <motion.div className="ch-hero__btn" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.78 }}>
              <GoldenButton label="Explore Sri Vidya" size="lg" onClick={() => scrollToId('about')} />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="ch-top-back">
        <button type="button" className="ch-top-back__btn" onClick={() => navigate('/courses')}>← Back to Courses</button>
      </div>

      <main className="ch-container" style={{ padding: '40px 20px' }}>
        <section id="about" className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">ABOUT SRI VIDYA</span>
            <h2 className="ch-section__title font-cinzel">Sri Vidya</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">
              Sri Vidya is the highest form of Devi worship, leading to liberation through grace. It is the supreme science of the Divine Mother, approached through the Sri Chakra and the sacred mantras of the tradition.
            </p>
          </ScrollReveal>
        </section>

        <section id="what-is" className="ch-section ch-section--maroon">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">WHAT IS SRI VIDYA?</span>
            <h2 className="ch-section__title font-cinzel">What Is Sri Vidya?</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">Sri = Shakti · Vidya = Knowledge · Sri Vidya = Knowledge of the Supreme Mother.</p>
          </ScrollReveal>
        </section>

        <section id="importance" className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">IMPORTANCE</span>
            <h2 className="ch-section__title font-cinzel">Importance of Sri Vidya – Why Sri Vidya Is Highest?</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">Sri Vidya is regarded as the highest path because it unites knowledge, devotion, and disciplined practice under Guru Parampara.</p>
          </ScrollReveal>
        </section>

        <section id="origin" className="ch-section ch-section--maroon">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">ORIGIN</span>
            <h2 className="ch-section__title font-cinzel">Origin of Sri Vidya – Five Origins</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <ul className="ch-lead font-serif" style={{ textAlign: 'left', maxWidth: 720, margin: '0 auto' }}>
              <li>From Shiva – Adiguru.</li>
              <li>From Dattatreya – Dattatreya Sampradaya.</li>
              <li>From Hayagriva – Hayagriva Sampradaya.</li>
              <li>From Manmatha – Kama.</li>
              <li>From Lopamudra – Agastya's Wife.</li>
            </ul>
          </ScrollReveal>
        </section>

        <section id="types" className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">TYPES OF UPASANA</span>
            <h2 className="ch-section__title font-cinzel">How Many Types of Upasana in Sri Vidya?</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">Three main Sampradayas: Kadi Sampradaya, Hadi Sampradaya, Sadi Sampradaya. Nine types of Upasana are practised within the tradition.</p>
          </ScrollReveal>
        </section>

        <section id="tradition" className="ch-section ch-section--maroon">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">TRADITION</span>
            <h2 className="ch-section__title font-cinzel">Sri Vidya Tradition – Shastra, Tantra and Purana</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">Organized across Veda, Kalpa Sutra, Tantra, Purana, and Smriti sources.</p>
          </ScrollReveal>
        </section>

        <section id="yantra" className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SRI YANTRA</span>
            <h2 className="ch-section__title font-cinzel">Sri Yantra – Sri Chakra – Nine Chakras</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">The Sri Chakra's nine chakras represent the progressive unfoldment of the Supreme Mother.</p>
          </ScrollReveal>
        </section>

        <section id="mantra" className="ch-section ch-section--maroon">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">MANTRA</span>
            <h2 className="ch-section__title font-cinzel">Sri Vidya Mantra – Panchadashi and Shodashi</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <p className="ch-lead font-serif">The Panchadashi and Shodashi mantras are the heart of Sri Vidya practice, received through Guru Diksha.</p>
          </ScrollReveal>
        </section>
      </main>

      <section className="ch-cta">
        <div className="ch-cta__geo" aria-hidden="true" />
        <ScrollReveal direction="up" duration={0.85}>
          <div className="ch-cta__box">
            <span className="ch-cta__corner ch-cta__corner--tl" aria-hidden="true">✦</span>
            <span className="ch-cta__corner ch-cta__corner--tr" aria-hidden="true">✦</span>
            <span className="ch-cta__corner ch-cta__corner--bl" aria-hidden="true">✦</span>
            <span className="ch-cta__corner ch-cta__corner--br" aria-hidden="true">✦</span>
            <span className="ch-cta__badge">🪷 Walk the Path of Sri Vidya</span>
            <h2 className="ch-cta__heading font-cinzel">Begin Your Journey Into<br /><span className="ch-cta__heading-gold">Sri Vidya</span></h2>
            <div className="ch-cta__divider">
              <span className="ch-cta__divider-line" />
              <span className="ch-cta__divider-lotus">✿</span>
              <span className="ch-cta__divider-line" />
            </div>
            <p className="ch-cta__body font-serif">Explore the sacred path of the Supreme Mother through Guru Parampara.</p>
            <div className="ch-cta__btns">
              <GoldenButton label="Back to Courses" size="lg" onClick={() => navigate('/courses')} />
              <GoldenButton label="Sadhana Kramam" size="lg" outlined onClick={() => navigate('/courses/sri-vidya/sadhana-kramam')} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <FooterSection />
    </div>
  );
}

function Ornament() {
  return (
    <div className="ch-orn" aria-hidden="true">
      <span className="ch-orn__line" />
      <span className="ch-orn__diamond">✦</span>
      <span className="ch-orn__line" />
    </div>
  );
}