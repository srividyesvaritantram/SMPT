import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import { FooterSection } from './Home/HomeSections.jsx';
import sivaAradhanaImg from '../assets/siva-aradhana.jpeg';
import sivaLingaImg from '../assets/siva-linga.jpeg';
import {
  SSD_DATES,
  SSD_TAGLINE,
  SSD_INTRO,
  SSD_PURANIC_REASONS,
  SSD_TANTRA_REASON,
  SSD_CORE_IMPORTANCE,
  SSD_SLOKA,
  SSD_ABHISEKA_INTRO,
  SSD_ABHISEKA_TYPES,
  SSD_ABHISEKA_BENEFITS,
  SSD_ABHISEKA_NOTE,
  SSD_MANTRA_PRACTICE,
  SSD_PUJA_STEPS,
  SSD_RULES,
  SSD_CONCLUSION,
  SSD_FINAL_MESSAGE,
  SSD_FINAL_NOTE,
  SSD_SOURCES,
} from './shravanaSomavaraData.js';
import './ShravanaSomavaraDetail.css';

function SectionRule() {
  return (
    <div className="ssd-rule">
      <span className="ssd-rule__line" />
      <span className="ssd-rule__diamond">✦</span>
      <span className="ssd-rule__line" />
    </div>
  );
}

function DetailSection({ eyebrow, title, children }) {
  return (
    <section className="ssd-part">
      <ScrollReveal direction="up" duration={0.8}>
        <span className="ssd-part__eyebrow">{eyebrow}</span>
        <h2 className="ssd-part__title font-cinzel">{title}</h2>
        <SectionRule />
      </ScrollReveal>
      {children}
    </section>
  );
}

export default function ShravanaSomavaraDetail() {
  const navigate = useNavigate();

  return (
    <div className="ssd">
      <Navbar />

      {/* ══ HERO — Śiva image at the top (deep maroon) ══ */}
      <section className="ssd-hero">
        <div className="ssd-hero__inner">
          {/* LEFT — Content */}
          <div className="ssd-hero__content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="ssd-hero__badge">ŚRĀVAṆA SOMAVĀRA</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="ssd-hero__title font-cinzel">ŚIVA ĀRĀDHANA<br />ŚIVA ABHIṢEKA</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <p className="ssd-hero__subtitle font-cormorant">{SSD_TAGLINE}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="ssd-hero__rule">
                <span className="ssd-hero__rule-line" />
                <span className="ssd-hero__rule-dot" />
                <span className="ssd-hero__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="ssd-hero__desc font-cormorant">{SSD_INTRO}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <div className="ssd-hero__date-badge">
                <span className="ssd-hero__date-label">2026 DATES</span>
                <span className="ssd-hero__date-value">{SSD_DATES}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.44} duration={0.85}>
              <div className="ssd-hero__btns">
                <GoldenButton
                  label="Back to Events"
                  size="lg"
                  outlined
                  noArrow
                  onClick={() => navigate('/events')}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — Image */}
          <ScrollReveal direction="left" duration={0.9} className="ssd-hero__image-col">
            <div className="ssd-hero__img-wrap">
              <div className="ssd-hero__img-glow" />
              <motion.img
                src={sivaAradhanaImg}
                alt="Bhagavān Śiva — Śiva Ārādhana & Abhiṣeka"
                className="ssd-hero__img"
                loading="eager"
                draggable="false"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="ssd-hero__img-frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ SECTION 1 · DEEP MAROON — Why Is Śrāvaṇa Somavāra Important? ══ */}
      <section className="ssd-band ssd-band--maroon">
        <div className="ssd-article__inner">
          <DetailSection eyebrow="PART 1 — WHY IS ŚRĀVAṆA SOMAVĀRA IMPORTANT?" title="Purāṇic Reasons">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="ssd-list">
                {SSD_PURANIC_REASONS.map((reason) => (
                  <li key={reason.num}>
                    <span className="ssd-list__num">{reason.num}</span>
                    <div className="ssd-list__body">
                      <strong className="ssd-list__title">{reason.title}</strong>
                      <span className="ssd-list__source">Traditional reference: {reason.source}</span>
                      <p className="ssd-p ssd-p--tight">{reason.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="TANTRA ŚĀSTRA REASON" title="The Water Element, Chandra & Monday">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="ssd-sub">
                <h3 className="ssd-sub__heading font-cinzel">{SSD_TANTRA_REASON.heading}</h3>
                <p className="ssd-p">{SSD_TANTRA_REASON.body}</p>
              </div>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 2 · CREAM / IVORY — Importance of Śiva Ārādhana ══ */}
      <section className="ssd-band ssd-band--cream">
        <div className="ssd-article__inner">
          <DetailSection eyebrow="PART 2 — IMPORTANCE OF ŚIVA ĀRĀDHANA IN ŚRĀVAṆA SOMAVĀRA" title="3 Core Importance">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="ssd-compact">
                {SSD_CORE_IMPORTANCE.map((item) => (
                  <li key={item.num} className="ssd-compact__item">
                    <strong className="ssd-compact__name">{item.num} · {item.title}</strong>
                    <span className="ssd-compact__text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="KEY ŚLOKA" title="The Promise of Śrāvaṇa Monday">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="ssd-verse">
                <span className="ssd-verse__label">Śrāvaṇa Somavāra Śloka</span>
                <p className="ssd-verse__sanskrit font-cinzel" lang="sa">{SSD_SLOKA.transliteration}</p>
                <p className="ssd-verse__body font-cormorant"><strong>Meaning:</strong> {SSD_SLOKA.meaning}</p>
              </div>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 3 · DEEP MAROON — Śiva Abhiṣeka ══ */}
      <section className="ssd-band ssd-band--maroon">
        <div className="ssd-article__inner">
          <DetailSection eyebrow="PART 3 — ŚIVA ABHIṢEKA" title="Benefits According to Purāṇas + Tantra">
            <ScrollReveal direction="up" delay={0.06} duration={0.8}>
              <p className="ssd-p">{SSD_ABHISEKA_INTRO}</p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.08} duration={0.85}>
              <div className="ssd-article-img">
                <div className="ssd-article-img__glow" />
                <motion.img
                  src={sivaLingaImg}
                  alt="Śiva Liṅga — Śiva Abhiṣeka"
                  className="ssd-article-img__img"
                  loading="lazy"
                  draggable="false"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="ssd-article-img__frame" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
              <div className="ssd-sub">
                <h3 className="ssd-sub__heading font-cinzel">11 Types of Abhiṣeka</h3>
                <ul className="ssd-grid">
                  {SSD_ABHISEKA_TYPES.map((type) => (
                    <li key={type.num} className="ssd-grid__item">
                      <span className="ssd-grid__num">{type.num}</span>
                      <div className="ssd-grid__body">
                        <strong className="ssd-grid__name">{type.name}</strong>
                        <span className="ssd-grid__detail">{type.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="8 MAIN BENEFITS OF ŚIVA ABHIṢEKA IN ŚRĀVAṆA" title="Traditional Prayers & Aspirations">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="ssd-compact ssd-compact--benefits">
                {SSD_ABHISEKA_BENEFITS.map((b) => (
                  <li key={b.num} className="ssd-compact__item">
                    <strong className="ssd-compact__name">{b.num} · {b.name}</strong>
                    <span className="ssd-compact__text">{b.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.14} duration={0.8}>
              <p className="ssd-note font-cormorant">{SSD_ABHISEKA_NOTE}</p>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="TANTRA SECRET / MANTRA PRACTICE" title="The Mantra of the Abhiṣeka">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="ssd-verse">
                <span className="ssd-verse__label">Mahāmṛtyuñjaya Mantra · Rudra Mantras</span>
                <p className="ssd-verse__sanskrit font-cinzel" lang="sa">Om Tryambakaṁ Yajāmahe</p>
                <p className="ssd-verse__body font-cormorant">{SSD_MANTRA_PRACTICE.body}</p>
              </div>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 4 · CREAM / IVORY — Simple Pūjā Vidhi ══ */}
      <section className="ssd-band ssd-band--cream">
        <div className="ssd-article__inner">
          <DetailSection eyebrow="PART 4 — SIMPLE ŚRĀVAṆA SOMAVĀRA PŪJĀ VIDHI" title="30-Minute Practice">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="ssd-list ssd-list--steps">
                {SSD_PUJA_STEPS.map((step) => (
                  <li key={step.step}>
                    <span className="ssd-list__num">STEP {step.step}</span>
                    <div className="ssd-list__body">
                      <strong className="ssd-list__title">{step.title}</strong>
                      <ul className="ssd-steps-list">
                        {step.points.map((point) => (
                          <li key={point} className="ssd-steps-list__item">
                            <span className="ssd-steps-list__tick">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 5 · DEEP MAROON — 5 Special Rules ══ */}
      <section className="ssd-band ssd-band--maroon">
        <div className="ssd-article__inner">
          <DetailSection eyebrow="PART 5 — 5 SPECIAL RULES FOR ŚRĀVAṆA SOMAVĀRA" title="Discipline of the Sacred Monday">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="ssd-list">
                {SSD_RULES.map((rule) => (
                  <li key={rule.num}>
                    <span className="ssd-list__num">{rule.num}</span>
                    <div className="ssd-list__body">
                      <strong className="ssd-list__title">{rule.name}</strong>
                      <p className="ssd-p ssd-p--tight">{rule.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 6 · CREAM / IVORY — Conclusion + Final Message ══ */}
      <section className="ssd-band ssd-band--cream">
        <div className="ssd-article__inner">
          <DetailSection eyebrow="3-POINT CONCLUSION" title="Purāṇa · Tantra · Result">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="ssd-conclusion">
                {SSD_CONCLUSION.map((item) => (
                  <div key={item.label} className="ssd-conclusion__item">
                    <span className="ssd-conclusion__label font-cinzel">{item.label}</span>
                    <p className="ssd-conclusion__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="FINAL DEVOTIONAL MESSAGE" title="The Heart of the Practice">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <blockquote className="ssd-final font-cormorant">{SSD_FINAL_MESSAGE}</blockquote>
              <p className="ssd-note font-cormorant">{SSD_FINAL_NOTE}</p>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="REFERENCES" title="Traditional Sources & References">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="ssd-sources">
                {SSD_SOURCES.map((src) => (
                  <li key={src} className="ssd-sources__item">{src}</li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>

          <ScrollReveal direction="up" duration={0.85}>
            <div className="ssd-cta">
              <p className="ssd-cta__text font-cormorant">
                May Bhagavān Śiva grant you peace, steadiness and devotion throughout Śrāvaṇa Somavāra.
              </p>
              <GoldenButton
                label="Back to Events"
                size="lg"
                onClick={() => navigate('/events')}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
