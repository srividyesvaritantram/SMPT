import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import logoImg from '../../assets/logo.opt.webp';
import './ChandiVidyaPage.css';

export default function SriVidyaSadhanaKramam() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sri Vidya Sadhana Kramam | Sri Mahavidyesvari Tantra Peetham';
  }, []);

  return (
    <div className="ch-page">
      <Navbar />

      <section className="ch-hero">
        <div className="ch-hero__bg" aria-hidden="true" />
        <div className="ch-hero__inner">
          <div className="ch-hero__content">
            <motion.span className="ch-hero__eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              SRI VIDYA SADHANA
            </motion.span>
            <motion.h1 className="ch-hero__title font-cinzel" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              Sri Vidya Sadhana
            </motion.h1>
            <motion.p className="ch-hero__kicker font-cinzel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              How to Do? – Safe Sadhana for All – Lalitha Sahasranamam Sadhana
            </motion.p>
            <motion.div className="ch-hero__divider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}>
              <span className="ch-hero__divider-line" />
              <img src={logoImg} alt="" className="ch-hero__divider-om" />
              <span className="ch-hero__divider-line" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="ch-top-back">
        <button type="button" className="ch-top-back__btn" onClick={() => navigate('/courses')}>← Back to Courses</button>
      </div>

      <main className="ch-container" style={{ padding: '40px 20px' }}>

        {/* Two types */}
        <section className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SRI VIDYA SADHANA – TWO TYPES</span>
            <h2 className="ch-section__title font-cinzel">Two Types of Sri Vidya Sadhana</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <div className="ch-grid ch-grid--2">
              <div className="ch-card ch-card--deep">
                <span className="ch-card__label font-cinzel">Safe Sadhana – Lalitha Sahasranamam Sadhana</span>
                <p className="ch-card__text font-serif">For all. No Diksha needed.</p>
              </div>
              <div className="ch-card ch-card--deep">
                <span className="ch-card__label font-cinzel">Secret Sadhana – Panchadashi Sadhana</span>
                <p className="ch-card__text font-serif">With Diksha only.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal style={{ marginTop: '24px' }}>
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr><th>Sadhana Type</th><th>Safe Sadhana</th><th>Secret Sadhana</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Practice</strong></td><td>Lalitha Sahasranamam Sadhana</td><td>Panchadashi Sadhana</td></tr>
                  <tr><td><strong>Diksha</strong></td><td>No Diksha needed</td><td>With Diksha only</td></tr>
                  <tr><td><strong>Who</strong></td><td>Anyone, householder, beginner</td><td>With Guru, advanced Sadhaka</td></tr>
                  <tr><td><strong>Guidance</strong></td><td>Safe Sadhana for all</td><td>Guru guidance required</td></tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        {/* What to do */}
        <section className="ch-section ch-section--maroon">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">WHAT TO DO?</span>
            <h2 className="ch-section__title font-cinzel">What To Do?</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <div className="ch-grid ch-grid--2">
              <div className="ch-card ch-card--deep">
                <span className="ch-card__label font-cinzel">Safe Sadhana – Lalitha Sahasranamam</span>
                <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                  <li>Daily morning.</li>
                  <li>Take a bath.</li>
                  <li>Wear clean clothes.</li>
                  <li>Keep a Tripura Sundari photo or Sri Yantra.</li>
                  <li>Offer red flowers and Kumkum.</li>
                  <li>Chant Lalitha Sahasranamam one time.</li>
                  <li>Offer Kheer.</li>
                  <li>Light Deepa.</li>
                  <li>Pray.</li>
                  <li>Continue for 41 days.</li>
                  <li>Wish will be fulfilled.</li>
                </ul>
              </div>
              <div className="ch-card ch-card--deep">
                <span className="ch-card__label font-cinzel">Secret Sadhana – Panchadashi</span>
                <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                  <li>With Guru.</li>
                  <li>Guru gives Diksha.</li>
                  <li>Guru gives Mantra.</li>
                  <li>Guru gives Yantra.</li>
                  <li>Do Sadhana as Guru says.</li>
                  <li>Chant Panchadashi 108 times daily.</li>
                  <li>Worship Sri Yantra.</li>
                  <li>Do Navavarana Puja.</li>
                  <li>Do for one year.</li>
                  <li>Guru will guide.</li>
                  <li>Don't do without Guru.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Who can do */}
        <section className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">WHO CAN DO THIS?</span>
            <h2 className="ch-section__title font-cinzel">Who Can Do This?</h2>
            <Ornament />
          </ScrollReveal>
          <ScrollReveal>
            <div className="ch-grid ch-grid--2">
              <div className="ch-card ch-card--deep">
                <span className="ch-card__label font-cinzel">Safe Sadhana</span>
                <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                  <li>Anyone.</li>
                  <li>Householder.</li>
                  <li>Beginner.</li>
                  <li>Safe.</li>
                  <li>No danger.</li>
                  <li>Do this.</li>
                  <li>This is Sri Vidya for all.</li>
                </ul>
              </div>
              <div className="ch-card ch-card--deep">
                <span className="ch-card__label font-cinzel">Secret Sadhana</span>
                <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                  <li>With Guru.</li>
                  <li>Advanced.</li>
                  <li>Sadhaka.</li>
                  <li>Secret.</li>
                  <li>Don't do without Guru.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 11 steps */}
        <section className="ch-section ch-section--maroon">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SAFE SADHANA – STEP BY STEP</span>
            <h2 className="ch-section__title font-cinzel">Safe Sadhana – Step by Step – Lalitha Sahasranamam Sadhana – 41 Days</h2>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 1 – Sankalpa</span>
              <p className="ch-mantra-box__meaning font-serif">What To Do?</p>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Hold water.</li>
                <li>Say name, Gotra, Wish.</li>
                <li>"I will chant Lalitha Sahasranamam for 41 days for [Wish]."</li>
                <li>Mother, bless me.</li>
                <li>Leave water.</li>
              </ul>
              <p className="ch-mantra-box__sanskrit font-serif">"I will chant Lalitha Sahasranamam for 41 days for [Wish]."</p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 2 – Time</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Morning 6–7 AM.</li>
                <li>Same time daily.</li>
                <li>41 days.</li>
                <li>Don't break.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 3 – Place</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Puja room.</li>
                <li>Keep Tripura Sundari photo / Sri Yantra.</li>
                <li>Face East.</li>
                <li>Sit on red cloth.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 4 – Snana</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Bath.</li>
                <li>Wear red/yellow clothes.</li>
                <li>Apply Kumkum on forehead.</li>
                <li>Kumkum is Sri Vidya's prasadam.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 5 – Dhyana</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Close eyes.</li>
                <li>Visualize Tripura Sundari.</li>
                <li>16 years old.</li>
                <li>Red colour.</li>
                <li>Four hands.</li>
                <li>Holding Pasha, Ankusa, Bow, Arrow.</li>
                <li>Sitting on Shiva.</li>
                <li>Smile.</li>
                <li>Meditate for two minutes.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 6 – Archana</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Offer Kumkum 108 times.</li>
                <li>Each time chant Om Lalithayai Namah.</li>
                <li>Or offer red flowers – 11 flowers.</li>
                <li>Offer Kumkum is best for Lalitha.</li>
                <li>Lalitha loves Kumkum.</li>
                <li>Kumkum Archana is Lalitha's favourite.</li>
              </ul>
              <p className="ch-mantra-box__sanskrit font-serif">Om Lalithayai Namah</p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 7 – Japa</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Chant Lalitha Sahasranamam.</li>
                <li>One time.</li>
                <li>30 minutes.</li>
                <li>Slowly, with love.</li>
                <li>Don't rush.</li>
                <li>Lalitha Sahasranamam is 1000 names.</li>
                <li>Each name is Mother's name.</li>
                <li>Chant with Bhakti.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 8 – Naivedya</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Offer Kheer, Payasam.</li>
                <li>Lalitha loves Kheer.</li>
                <li>Offer Banana, Coconut.</li>
                <li>Offer red sweets – Laddu.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 9 – Deepa</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Light Ghee Deepa.</li>
                <li>One Deepa.</li>
                <li>Show Agarbatti.</li>
                <li>Pray your wish.</li>
                <li>Mother, bless me.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box">
              <span className="ch-mantra-box__label font-cinzel">Step 10 – Pradakshina</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>Go around photo three times.</li>
                <li>Prostrate.</li>
                <li>Pray.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-mantra-box" style={{ border: '1.5px solid rgba(212,175,55,0.65)' }}>
              <span className="ch-mantra-box__label font-cinzel">Step 11 – Day 41 – Final</span>
              <ul className="ch-mantra-box__meaning font-serif" style={{ textAlign: 'left' }}>
                <li>On Day 41, offer 108 red flowers.</li>
                <li>Offer 108 Kumkum.</li>
                <li>Offer Kheer to Brahmin.</li>
                <li>Donate saree to woman.</li>
                <li>Anna Dana.</li>
                <li>Mother is pleased by Dana.</li>
                <li>Donate red saree to poor woman.</li>
                <li>That's Mother's Puja.</li>
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* Sadhana rules */}
        <section className="ch-section ch-section--warm">
          <ScrollReveal className="ch-section__head">
            <span className="ch-eyebrow">SADHANA RULES – SAFE SADHANA</span>
            <h2 className="ch-section__title font-cinzel">Sadhana Rules – Safe Sadhana</h2>
            <Ornament />
          </ScrollReveal>

          <ScrollReveal>
            <div className="ch-card ch-card--deep">
              <span className="ch-card__label font-cinzel">Food and Lifestyle</span>
              <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                <li>No non-veg.</li>
                <li>No onion, garlic.</li>
                <li>No alcohol.</li>
                <li>No tobacco for 41 days.</li>
                <li>Satvik only.</li>
                <li>Mother is Satvik.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-card ch-card--deep">
              <span className="ch-card__label font-cinzel">Behaviour</span>
              <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                <li>No anger.</li>
                <li>No lies.</li>
                <li>No fights for 41 days.</li>
                <li>Mother is peace.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-card ch-card--deep">
              <span className="ch-card__label font-cinzel">Brahmacharya</span>
              <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                <li>Brahmacharya for 41 days.</li>
                <li>Celibacy for Sadhana.</li>
                <li>Be pure.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: '16px' }}>
            <div className="ch-card ch-card--deep">
              <span className="ch-card__label font-cinzel">Continuity and Privacy</span>
              <ul className="ch-card__text font-serif" style={{ textAlign: 'left' }}>
                <li>Don't break Sadhana.</li>
                <li>If break, start again.</li>
                <li>Don't tell others your wish.</li>
                <li>Keep secret.</li>
              </ul>
            </div>
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
            <span className="ch-cta__badge">🪷 Sri Vidya Sadhana</span>
            <h2 className="ch-cta__heading font-cinzel">Begin Your Journey Into<br /><span className="ch-cta__heading-gold">Sri Vidya Sadhana</span></h2>
            <div className="ch-cta__divider">
              <span className="ch-cta__divider-line" />
              <span className="ch-cta__divider-lotus">✿</span>
              <span className="ch-cta__divider-line" />
            </div>
            <p className="ch-cta__body font-serif">Walk the safe path of Lalitha Sahasranamam Sadhana with discipline and devotion.</p>
            <div className="ch-cta__btns">
              <GoldenButton label="Back to Courses" size="lg" onClick={() => navigate('/courses')} />
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