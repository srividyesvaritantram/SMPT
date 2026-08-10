import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import LockedSadhanaContent from '../components/common/LockedSadhanaContent.jsx';
import { FooterSection } from './Home/HomeSections.jsx';
import mangalaGauriImg from '../assets/mangala-gauri-main.jpeg';
import mangalaGauriContentImg1 from '../assets/mangala-gauri-content-1.jpeg';
import mangalaGauriContentImg2 from '../assets/mangala-gauri-content-2.jpeg';
import {
  SMG_DATES,
  SMG_TAGLINE,
  SMG_INTRO,
  SMG_PURANIC_REASONS,
  SMG_TANTRA_REASON,
  SMG_VRATAM_LEAD,
  SMG_VRATAM_PRAYERS,
  SMG_SLOKA,
  SMG_ABHISEKA_INTRO,
  SMG_ABHISEKA_TYPES,
  SMG_ARCHANA_BENEFITS,
  SMG_ARCHANA_NOTE,
  SMG_TANTRA_PRACTICE,
  SMG_PUJA_STEPS,
  SMG_RULES,
  SMG_CONCLUSION,
  SMG_FINAL_MESSAGE,
  SMG_FINAL_NOTE,
  SMG_SOURCES,
} from './shravanaMangalaGauriData.js';
import './ShravanaMangalaGauriDetail.css';

const WA_URL = 'https://wa.me/919390886029';

function SectionRule() {
  return (
    <div className="smgd-rule">
      <span className="smgd-rule__line" />
      <span className="smgd-rule__diamond">✦</span>
      <span className="smgd-rule__line" />
    </div>
  );
}

function DetailSection({ eyebrow, title, locked, children }) {
  return (
    <section className="smgd-part">
      <ScrollReveal direction="up" duration={0.8}>
        <span className="smgd-part__eyebrow">{eyebrow}</span>
        <h2 className="smgd-part__title font-cinzel">{title}</h2>
        <SectionRule />
      </ScrollReveal>
      {locked ? <LockedSadhanaContent>{children}</LockedSadhanaContent> : children}
    </section>
  );
}

export default function ShravanaMangalaGauriDetail() {
  const navigate = useNavigate();

  return (
    <div className="smgd">
      <Navbar />

      {/* ══ HERO — Mangala Gaurī image at the top (deep maroon) ══ */}
      <section className="smgd-hero">
        <div className="smgd-hero__inner">
          {/* LEFT — Content */}
          <div className="smgd-hero__content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="smgd-hero__badge">ŚRĀVAṆA MANGALAVĀRA</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="smgd-hero__title font-cinzel">MANGALA GAURĪ<br />VRATAM</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <p className="smgd-hero__subtitle font-cormorant">
                Benefits of Ārādhana • Abhiṣeka • Archana
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="smgd-hero__rule">
                <span className="smgd-hero__rule-line" />
                <span className="smgd-hero__rule-dot" />
                <span className="smgd-hero__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="smgd-hero__desc font-cormorant">{SMG_TAGLINE}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <div className="smgd-hero__date-badge">
                <span className="smgd-hero__date-label">2026 DATES</span>
                <span className="smgd-hero__date-value">{SMG_DATES}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.44} duration={0.85}>
              <p className="smgd-hero__intro font-cormorant">{SMG_INTRO}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} duration={0.85}>
              <div className="smgd-hero__btns">
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
          <ScrollReveal direction="left" duration={0.9} className="smgd-hero__image-col">
            <div className="smgd-hero__img-wrap">
              <div className="smgd-hero__img-glow" />
              <motion.img
                src={mangalaGauriImg}
                alt="Mangala Gaurī — Goddess Pārvatī as the Giver of Saubhāgya"
                className="smgd-hero__img"
                loading="eager"
                draggable="false"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="smgd-hero__img-frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ SECTION 1 · DEEP MAROON — Why Is Śrāvaṇa Mangalavāra Important? ══ */}
      <section className="smgd-band smgd-band--maroon">
        <div className="smgd-article__inner">
          <DetailSection eyebrow="PART 1 — WHY IS ŚRĀVAṆA MANGALAVĀRA IMPORTANT?" title="Purāṇic Reasons">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="smgd-list">
                {SMG_PURANIC_REASONS.map((reason) => (
                  <li key={reason.num}>
                    <span className="smgd-list__num">{reason.num}</span>
                    <div className="smgd-list__body">
                      <strong className="smgd-list__title">{reason.title}</strong>
                      <span className="smgd-list__source">Traditional reference: {reason.source}</span>
                      <p className="smgd-p smgd-p--tight">{reason.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="TANTRA ŚĀSTRA REASON" title="Mangala, Turmeric & Kumkum">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="smgd-sub">
                <h3 className="smgd-sub__heading font-cinzel">{SMG_TANTRA_REASON.heading}</h3>
                <p className="smgd-p">{SMG_TANTRA_REASON.body}</p>
              </div>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>
      {/* ══ PART 2+ · LOCKED CONTENT — veiled behind Guru Dīkṣā ══ */}

      {/* ══ SECTION 2 · CREAM / IVORY — Importance of Mangala Gaurī Vratam ══ */}
      <section className="smgd-band smgd-band--cream">
        <div className="smgd-article__inner">
          <DetailSection eyebrow="PART 2 — IMPORTANCE OF MANGALA GAURĪ VRATAM" title="The Prayers of the Vratam" locked>
            <ScrollReveal direction="up" delay={0.06} duration={0.8}>
              <p className="smgd-p">{SMG_VRATAM_LEAD}</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
              <ul className="smgd-compact">
                {SMG_VRATAM_PRAYERS.map((item) => (
                  <li key={item.num} className="smgd-compact__item">
                    <strong className="smgd-compact__name">{item.num} · {item.title}</strong>
                    <span className="smgd-compact__text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="KEY ŚLOKA" title="The Promise of Śrāvaṇa Tuesday" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="smgd-verse">
                <span className="smgd-verse__label">Mangala Gaurī Vratam Śloka</span>
                <p className="smgd-verse__sanskrit font-cinzel" lang="sa">{SMG_SLOKA.transliteration}</p>
                <p className="smgd-verse__body font-cormorant"><strong>Meaning:</strong> {SMG_SLOKA.meaning}</p>
              </div>
            </ScrollReveal>
          </DetailSection>

          <ScrollReveal direction="up" duration={0.85}>
            <div className="smgd-article-img">
              <div className="smgd-article-img__glow" />
              <motion.img
                src={mangalaGauriContentImg1}
                alt="Goddess Pārvatī — Mangala Gaurī Vratam Prayers"
                className="smgd-article-img__img"
                loading="lazy"
                draggable="false"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="smgd-article-img__frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ SECTION 3 · DEEP MAROON — Abhiṣeka + Archana ══ */}
      <section className="smgd-band smgd-band--maroon">
        <div className="smgd-article__inner">
          <DetailSection eyebrow="PART 3 — MANGALA GAURĪ ABHIṢEKA + ARCHANA" title="Benefits According to Purāṇas + Tantra" locked>
            <ScrollReveal direction="up" delay={0.06} duration={0.8}>
              <p className="smgd-p">{SMG_ABHISEKA_INTRO}</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08} duration={0.85}>
              <div className="smgd-article-img">
                <div className="smgd-article-img__glow" />
                <motion.img
                  src={mangalaGauriContentImg2}
                  alt="Mangala Gaurī Abhiṣeka & Archana — Devotional Worship"
                  className="smgd-article-img__img"
                  loading="lazy"
                  draggable="false"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="smgd-article-img__frame" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
              <div className="smgd-sub">
                <h3 className="smgd-sub__heading font-cinzel">9 Types of Abhiṣeka</h3>
                <ul className="smgd-grid">
                  {SMG_ABHISEKA_TYPES.map((type) => (
                    <li key={type.num} className="smgd-grid__item">
                      <span className="smgd-grid__num">{type.num}</span>
                      <div className="smgd-grid__body">
                        <strong className="smgd-grid__name">{type.name}</strong>
                        <span className="smgd-grid__detail">{type.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="8 MAIN BENEFITS OF ARCHANA" title="Traditional Prayers & Aspirations" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="smgd-compact smgd-compact--benefits">
                {SMG_ARCHANA_BENEFITS.map((b) => (
                  <li key={b.num} className="smgd-compact__item">
                    <strong className="smgd-compact__name">{b.num} · {b.name}</strong>
                    <span className="smgd-compact__text">{b.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.14} duration={0.8}>
              <p className="smgd-note font-cormorant">{SMG_ARCHANA_NOTE}</p>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="TANTRA PRACTICE" title="The 108 Names & the Red Thread" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="smgd-verse">
                <span className="smgd-verse__label">Gaurī Aṣṭottara · Lalitā Sahasranāma</span>
                <p className="smgd-verse__sanskrit font-cinzel" lang="sa">Om Śrīm Gaurīyai Namaḥ</p>
                <p className="smgd-verse__body font-cormorant">{SMG_TANTRA_PRACTICE.body}</p>
              </div>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 4 · CREAM / IVORY — Simple Vrat Vidhi ══ */}
      <section className="smgd-band smgd-band--cream">
        <div className="smgd-article__inner">
          <DetailSection eyebrow="PART 4 — SIMPLE MANGALA GAURĪ VRAT VIDHI" title="45-Minute Practice" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="smgd-list smgd-list--steps">
                {SMG_PUJA_STEPS.map((step) => (
                  <li key={step.step}>
                    <span className="smgd-list__num">STEP {step.step}</span>
                    <div className="smgd-list__body">
                      <strong className="smgd-list__title">{step.title}</strong>
                      <ul className="smgd-steps-list">
                        {step.points.map((point) => (
                          <li key={point} className="smgd-steps-list__item">
                            <span className="smgd-steps-list__tick">✦</span>
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
      <section className="smgd-band smgd-band--maroon">
        <div className="smgd-article__inner">
          <DetailSection eyebrow="PART 5 — 5 SPECIAL RULES FOR ŚRĀVAṆA MANGALAVĀRA" title="Discipline of the Sacred Tuesday" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="smgd-list">
                {SMG_RULES.map((rule) => (
                  <li key={rule.num}>
                    <span className="smgd-list__num">{rule.num}</span>
                    <div className="smgd-list__body">
                      <strong className="smgd-list__title">{rule.name}</strong>
                      <p className="smgd-p smgd-p--tight">{rule.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 6 · CREAM / IVORY — Conclusion + Final Message ══ */}
      <section className="smgd-band smgd-band--cream">
        <div className="smgd-article__inner">
          <DetailSection eyebrow="3-POINT CONCLUSION" title="Purāṇa · Tantra · Result" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="smgd-conclusion">
                {SMG_CONCLUSION.map((item) => (
                  <div key={item.label} className="smgd-conclusion__item">
                    <span className="smgd-conclusion__label font-cinzel">{item.label}</span>
                    <p className="smgd-conclusion__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="FINAL DEVOTIONAL MESSAGE" title="The Heart of the Vratam" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <blockquote className="smgd-final font-cormorant">{SMG_FINAL_MESSAGE}</blockquote>
              <p className="smgd-note font-cormorant">{SMG_FINAL_NOTE}</p>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="REFERENCES" title="Traditional Sources & References" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="smgd-sources">
                {SMG_SOURCES.map((src) => (
                  <li key={src} className="smgd-sources__item">{src}</li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="GURU DĪKṢĀ" title="Deeper Mangala Gaurī Sādhana & Guru Guidance" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="smgd-verse">
                <span className="smgd-verse__label">Take Guru Dīkṣā</span>
                <p className="smgd-verse__body font-cormorant">
                  If you wish to learn more about the deeper Mangala Gaurī Sādhana and receive
                  traditional guidance, join us through Guru Dīkṣā.
                </p>
                <GoldenButton
                  label="JOIN"
                  size="lg"
                  outlined
                  onClick={() => window.open(WA_URL, '_blank')}
                />
              </div>
            </ScrollReveal>
          </DetailSection>

          <ScrollReveal direction="up" duration={0.85}>
            <div className="smgd-cta">
              <p className="smgd-cta__text font-cormorant">
                May Mangala Gaurī bless you with saubhāgya, harmony and auspiciousness throughout Śrāvaṇa Mangalavāra.
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
