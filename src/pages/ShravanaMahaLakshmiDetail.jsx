import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import ScrollReveal from '../components/common/ScrollReveal.jsx';
import GoldenButton from '../components/common/GoldenButton.jsx';
import LockedSadhanaContent from '../components/common/LockedSadhanaContent.jsx';
import { FooterSection } from './Home/HomeSections.jsx';
import mahaLakshmiImg from '../assets/maha-lakshmi-detail.jpeg';
import {
  SML_DATES,
  SML_FACTS,
  SML_TANTRAM_LEAD,
  SML_SAKTIS,
  SML_BIJA,
  SML_SIDDHI,
  SML_SODASA,
  SML_SRAVANA,
  SML_SRAVANA_FESTIVALS,
  SML_IMPORTANCE,
  SML_SLOKA,
  SML_VRATAS,
  SML_SADHANA,
  SML_FRIDAY,
  SML_BENEFITS,
  SML_FINALE,
  SML_SOURCES,
} from './shravanaLakshmiData.js';
import './ShravanaMahaLakshmiDetail.css';

const WA_URL = 'https://wa.me/919390886029';

function SectionRule() {
  return (
    <div className="smld-rule">
      <span className="smld-rule__line" />
      <span className="smld-rule__diamond">✦</span>
      <span className="smld-rule__line" />
    </div>
  );
}

function DetailSection({ eyebrow, title, locked, children }) {
  return (
    <section className="smld-part">
      <ScrollReveal direction="up" duration={0.8}>
        <span className="smld-part__eyebrow">{eyebrow}</span>
        <h2 className="smld-part__title font-cinzel">{title}</h2>
        <SectionRule />
      </ScrollReveal>
      {locked ? <LockedSadhanaContent>{children}</LockedSadhanaContent> : children}
    </section>
  );
}

export default function ShravanaMahaLakshmiDetail() {
  const navigate = useNavigate();

  return (
    <div className="smld">
      <Navbar />

      {/* ══ HERO — Mahā Lakṣmī image at the top (deep maroon) ══ */}
      <section className="smld-hero">
        <div className="smld-hero__inner">
          {/* LEFT — Content */}
          <div className="smld-hero__content">
            <ScrollReveal direction="up" duration={0.85}>
              <span className="smld-hero__badge">ŚRĀVAṆA MĀSA</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.85}>
              <h1 className="smld-hero__title font-cinzel">AISHWARYA PRADHA SRAVANA<br />MAHA LAKSHMI SADHANA VIDHI</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.85}>
              <p className="smld-hero__subtitle font-cormorant">Śrāvaṇa = The Month Most Dear to Mahā Lakṣmī + Viṣṇu</p>
            </ScrollReveal>

            <ScrollReveal delay={0.26} duration={0.85}>
              <div className="smld-hero__rule">
                <span className="smld-hero__rule-line" />
                <span className="smld-hero__rule-dot" />
                <span className="smld-hero__rule-line" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} duration={0.85}>
              <p className="smld-hero__desc font-cormorant">
                The complete sacred guide to Mahā Lakṣmī and the month of Śrāvaṇa — Her five rare facts from
                the Purāṇas, the Lakṣmī Tantram, the Ṣoḍaśa forms, the daily sādhana, the Friday disciplines
                and the eight blessings of the Goddess of Prosperity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} duration={0.85}>
              <div className="smld-hero__date-badge">
                <span className="smld-hero__date-label">ŚRĀVAṆA MĀSA 2026</span>
                <span className="smld-hero__date-value">{SML_DATES}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.44} duration={0.85}>
              <div className="smld-hero__btns">
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
          <ScrollReveal direction="left" duration={0.9} className="smld-hero__image-col">
            <div className="smld-hero__img-wrap">
              <div className="smld-hero__img-glow" />
              <motion.img
                src={mahaLakshmiImg}
                alt="Mahā Lakṣmī — Goddess of Prosperity and Auspiciousness"
                className="smld-hero__img"
                loading="eager"
                draggable="false"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="smld-hero__img-frame" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ SECTION 1 · DEEP MAROON — Introduction + Five Rare Facts ══ */}
      <section className="smld-band smld-band--maroon">
        <div className="smld-article__inner">
          <DetailSection eyebrow="ŚRĀVAṆA MĀSA — MAHĀ LAKṢMĪ SĀDHANA VIDHI" title="Introduction">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <p className="smld-p">
                Śrāvaṇa Māsa is traditionally regarded as an auspicious period for Lakṣmī worship,
                devotion, vrata, dāna and spiritual discipline. In 2026 the sacred month spans
                {` ${SML_DATES} `}— thirty days most dear to Mahā Lakṣmī and Viṣṇu. This special
                Mahā Lakṣmī Sādhana invites devotees to cultivate prosperity, peace, dharma, gratitude
                and inner abundance, following the wisdom of the Purāṇas, the Tantras and the Śrī Sūktam.
              </p>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="1 · MORE ABOUT MAHĀ LAKṢMĪ" title="Five Rare Facts from the Purāṇas">
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="smld-list smld-list--facts">
                {SML_FACTS.map((fact) => (
                  <li key={fact.num}>
                    <span className="smld-list__num">{fact.num}</span>
                    <div className="smld-list__body">
                      <strong className="smld-list__title">{fact.title}</strong>
                      <span className="smld-list__source">{fact.source}</span>
                      <p className="smld-p smld-p--tight">{fact.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 2 · CREAM / IVORY — Śrīṁ Bīja Mantra + Guru Dīkṣā (final visible) ══ */}
      <section className="smld-band smld-band--cream">
        <div className="smld-article__inner">
          <DetailSection eyebrow="ŚRĀVAṆA MĀSA — MAHĀ LAKṢMĪ SĀDHANA" title="Śrīṁ Bīja Mantra" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <div className="smld-verse">
                <span className="smld-verse__label">Śrīṁ Bīja Mantra</span>
                <p className="smld-verse__mantra font-cinzel">Śrīṁ</p>
                <p className="smld-verse__body font-cormorant">
                  “If you want to know more about inviting good fortune and the blessings of abundance
                  and wealth, take Guru Dīkṣā.”
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
        </div>
      </section>
      {/* ══ PART 2+ · LOCKED CONTENT — veiled behind Guru Dīkṣā ══ */}

      {/* ══ SECTION 2 · CREAM / IVORY — The Lakṣmī Tantram ══ */}
      <section className="smld-band smld-band--cream">
        <div className="smld-article__inner">
          <DetailSection eyebrow="2 · WHY SHE IS WORSHIPPED" title="The Lakṣmī Tantram" locked>
            <ScrollReveal direction="up" delay={0.06} duration={0.8}>
              {SML_TANTRAM_LEAD.map((para) => (
                <div className="smld-sub" key={para.heading}>
                  <h3 className="smld-sub__heading font-cinzel">{para.heading}</h3>
                  <p className="smld-p">{para.body}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
              <div className="smld-sub">
                <h3 className="smld-sub__heading font-cinzel">The Four Śaktis of the Goddess</h3>
                <ul className="smld-compact">
                  {SML_SAKTIS.map((s) => (
                    <li key={s.name} className="smld-compact__item">
                      <strong className="smld-compact__name">{s.name}</strong>
                      <span className="smld-compact__text">{s.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18} duration={0.8}>
              <blockquote className="smld-quote font-cormorant">{SML_SIDDHI}</blockquote>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 3 · DEEP MAROON — Ṣoḍaśa Mahā Lakṣmī ══ */}
      <section className="smld-band smld-band--maroon">
        <div className="smld-article__inner">
          <DetailSection eyebrow="3 · ṢOḌAŚA MAHĀ LAKṢMĪ" title="The Sixteen Forms — Sixteen Types of Wealth" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <p className="smld-p">
                Each form of the Goddess bestows a specific blessing — together they cover every wealth
                of human life, from material treasure to the final liberation of the soul.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.12} duration={0.8}>
              <ul className="smld-sodasa">
                {SML_SODASA.map((form, i) => (
                  <li key={form.name} className="smld-sodasa__item">
                    <span className="smld-sodasa__num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong className="smld-sodasa__name">{form.name}</strong>
                      <span className="smld-sodasa__text">{form.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 4 · CREAM / IVORY — Śrāvaṇa Māsa + Importance ══ */}
      <section className="smld-band smld-band--cream">
        <div className="smld-article__inner">
          <DetailSection eyebrow="4 · PART 2 — ŚRĀVAṆA MĀSA" title="The Month of Mahā Lakṣmī" locked>
            <ScrollReveal direction="up" delay={0.06} duration={0.8}>
              {SML_SRAVANA.map((para) => (
                <div className="smld-sub" key={para.heading}>
                  <h3 className="smld-sub__heading font-cinzel">{para.heading}</h3>
                  <p className="smld-p">{para.body}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.8}>
              <div className="smld-sub">
                <h3 className="smld-sub__heading font-cinzel">Sacred Festivals of the Month</h3>
                <ul className="smld-festivals">
                  {SML_SRAVANA_FESTIVALS.map((f) => (
                    <li key={f} className="smld-festivals__item">🪷 {f}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="5 · IMPORTANCE FOR MAHĀ LAKṢMĪ" title="Why Śrāvaṇa Belongs to the Goddess" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="smld-compact">
                {SML_IMPORTANCE.map((item) => (
                  <li key={item.title} className="smld-compact__item">
                    <strong className="smld-compact__name">{item.title}</strong>
                    <span className="smld-compact__text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.14} duration={0.8}>
              <div className="smld-verse">
                <span className="smld-verse__label">{SML_SLOKA.source}</span>
                <p className="smld-verse__sanskrit" lang="sa">{SML_SLOKA.devanagari}</p>
                <p className="smld-verse__translit font-cormorant">{SML_SLOKA.transliteration}</p>
                <p className="smld-verse__body font-cormorant"><strong>Meaning:</strong> {SML_SLOKA.meaning}</p>
              </div>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 5 · DEEP MAROON — Vratas + Combined Sādhana ══ */}
      <section className="smld-band smld-band--maroon">
        <div className="smld-article__inner">
          <DetailSection eyebrow="6 · THE FIVE VRATAS" title="Five Main Vratas of Śrāvaṇa" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="smld-list smld-list--vratas">
                {SML_VRATAS.map((vrata, i) => (
                  <li key={vrata.name}>
                    <span className="smld-list__num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="smld-list__body">
                      <strong className="smld-list__title">{vrata.name}</strong>
                      <span className="smld-list__source">{vrata.source}</span>
                      <p className="smld-p smld-p--tight">{vrata.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="7 · PART 3 — COMBINED SĀDHANA" title="Mahā Lakṣmī in Śrāvaṇa" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <p className="smld-p">
                In Śrāvaṇa, worship is not a separate act — the whole month becomes a living sādhana.
                With Viṣṇu resting in Cāturmāsya, Lakṣmī graces the home; every lamp lit, every grain
                given, every mantra chanted is offered to the Goddess who arose from the ocean. The
                combined sādhana below is the complete daily practice — twenty-one sacred minutes that
                turn the month into an unbroken offering.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.8}>
              <ol className="smld-list smld-list--steps">
                {SML_SADHANA.map((step) => (
                  <li key={step.step}>
                    <span className="smld-list__num">STEP {step.step}</span>
                    <div className="smld-list__body">
                      <strong className="smld-list__title">{step.title}</strong>
                      <p className="smld-p smld-p--tight">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 6 · CREAM / IVORY — Friday Rules + Eight Benefits ══ */}
      <section className="smld-band smld-band--cream">
        <div className="smld-article__inner">
          <DetailSection eyebrow="8 · FRIDAY DISCIPLINE" title="Special Rules for Śrāvaṇa Fridays" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ol className="smld-list smld-list--rules">
                {SML_FRIDAY.map((rule, i) => (
                  <li key={rule.rule}>
                    <span className="smld-list__num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="smld-list__body">
                      <strong className="smld-list__title">{rule.rule}</strong>
                      <p className="smld-p smld-p--tight">{rule.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="9 · PART 4 — THE EIGHT BENEFITS" title="Eight Blessings of the Sādhana" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="smld-compact">
                {SML_BENEFITS.map((b, i) => (
                  <li key={b.name} className="smld-compact__item">
                    <strong className="smld-compact__name">
                      {String(i + 1).padStart(2, '0')} · {b.name}
                    </strong>
                    <span className="smld-compact__text">{b.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>
        </div>
      </section>

      {/* ══ SECTION 7 · DEEP MAROON — Final Message + Sources ══ */}
      <section className="smld-band smld-band--maroon">
        <div className="smld-article__inner">
          <DetailSection eyebrow="10 · THE PROMISE" title="Final Mahā Lakṣmī Message" locked>
            <ScrollReveal direction="up" delay={0.06} duration={0.8}>
              <div className="smld-finale">
                <div className="smld-finale__block">
                  <h3 className="smld-finale__heading font-cinzel">{SML_FINALE.lakshmi.heading}</h3>
                  <p className="smld-p smld-p--tight">{SML_FINALE.lakshmi.text}</p>
                </div>
                <div className="smld-finale__block">
                  <h3 className="smld-finale__heading font-cinzel">{SML_FINALE.sravana.heading}</h3>
                  <p className="smld-p smld-p--tight">{SML_FINALE.sravana.text}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.8}>
              <blockquote className="smld-quote font-cormorant">{SML_FINALE.skanda}</blockquote>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18} duration={0.8}>
              <p className="smld-closing font-cormorant">{SML_FINALE.closing}</p>
            </ScrollReveal>
          </DetailSection>

          <DetailSection eyebrow="REFERENCES" title="Traditional Sources & References" locked>
            <ScrollReveal direction="up" delay={0.08} duration={0.8}>
              <ul className="smld-sources">
                {SML_SOURCES.map((src) => (
                  <li key={src} className="smld-sources__item">{src}</li>
                ))}
              </ul>
            </ScrollReveal>
          </DetailSection>

          <ScrollReveal direction="up" duration={0.85}>
            <div className="smld-cta">
              <p className="smld-cta__text font-cormorant">
                May Mahā Lakṣmī abide in your home throughout Śrāvaṇa Māsa.
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
