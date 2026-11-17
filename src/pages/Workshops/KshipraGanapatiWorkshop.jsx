import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiCopy } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/ganapatyam/ganapati-on-mouse.jpeg';
import kshipraImg from '../../assets/kshipra_ganapati.opt.jpg';
import {
  WA_NUMBER,
  WA_MESSAGE,
  CHAPTERS,
  PROFILE_ROWS,
  VEDIC_SECTIONS,
  PURANIC_REFS,
  BENEFIT_ROWS,
  PURNABHISIKTAS,
  SADHANA_SECTIONS,
  DATTA_RULES,
  SIGNS,
  BOTTOM_LINE,
  KSHIPRA_BEFORE,
  GRIHASTHA_GUIDANCE,
  SADHAKA_GUIDANCE,
  DAILY_STEPS,
} from './kshipraGanapatiData.js';
import '../../pages/Courses/GanapatyamSadhanaKramam.css';

const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
const REGISTER = () => window.open(WA_HREF, '_blank', 'noopener,noreferrer');

function SectionHead({ no, kicker, title, subtitle, tone = 'dark' }) {
  return (
    <ScrollReveal className={`gk-head gk-head--${tone}`}>
      <span className="gk-head__kicker">
        <span className="gk-head__no">Part {no}</span>
        {kicker}
      </span>
      <h2 className="gk-head__title font-cinzel">{title}</h2>
      {subtitle && <p className="gk-head__sub font-serif">{subtitle}</p>}
      <div className={`gk-orn gk-orn--${tone === 'light' ? 'light' : 'dark'}`} aria-hidden="true">
        <span className="gk-orn__line" />
        <span className="gk-orn__mark">✦</span>
        <span className="gk-orn__line" />
      </div>
    </ScrollReveal>
  );
}

function RegisterButton({ size = 'lg', label = 'Register Now' }) {
  return (
    <GoldenButton
      label={label}
      size={size}
      icon={FaWhatsapp}
      noOrnaments
      onClick={REGISTER}
      style={{ letterSpacing: '1.6px' }}
    />
  );
}

export default function KshipraGanapatiWorkshop() {
  const navigate = useNavigate();
  const [active, setActive] = useState(CHAPTERS[0].id);
  const [copied, setCopied] = useState(null);
  const copyTimer = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    document.title = 'Kshipra Ganapati — Workshop | Sri Mahavidyesvari Tantra Peetham';
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-32% 0px -58% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  useEffect(() => {
    const wrap = navRef.current?.querySelector('.gk-chapters__inner');
    const btn = wrap?.querySelector('.gk-chapters__item.is-active');
    if (!wrap || !btn) return;
    const left = btn.offsetLeft;
    const right = left + btn.offsetWidth;
    if (left < wrap.scrollLeft + 6 || right > wrap.scrollLeft + wrap.clientWidth - 6) {
      wrap.scrollTo({ left: left - wrap.clientWidth / 2 + btn.offsetWidth / 2, behavior: 'smooth' });
    }
  }, [active]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.querySelector('nav.navbar');
    const navHeight = navRef.current?.offsetHeight || 45;
    const offset = (navbar?.offsetHeight || 72) + navHeight + 6;
    window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset), behavior: 'smooth' });
    setActive(id);
  };

  const handleCopy = async (text, id) => {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const area = document.createElement('textarea');
      area.value = text; area.setAttribute('readonly', '');
      area.style.position = 'fixed'; area.style.opacity = '0';
      document.body.appendChild(area); area.select();
      document.execCommand('copy'); document.body.removeChild(area);
    }
    setCopied(id);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="gk-page">
      <Navbar />

      <header className="gk-hero">
        <div className="gk-hero__pattern" aria-hidden="true" />
        <div className="gk-hero__inner">
          <motion.div className="gk-hero__content" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="gk-hero__eyebrow">Kshipra Ganapati · Workshop</span>
            <h1 className="gk-hero__title font-cinzel">
              Kshipra Ganapati
              <span className="gk-hero__title-line">Vedic Roots, Puranic References &amp; Spiritual Significance</span>
            </h1>
            <p className="gk-hero__sub font-serif">
              The swift form of Lord Ganapati — invoked for pressing needs, with the
              Vedic foundations, Puranic references, benefits, sadhana vidhi, Datta Purna
              rules and the signs of progress preserved in the Peetham’s teaching.
            </p>
            <p className="gk-hero__intro font-serif">
              A structured study of Kshipra Ganapati as it is received in the Datta and
              Ganapatya traditions: the deity’s profile, the Vedic roots, the Puranic
              references, the eightfold benefit table, the sadhana vidhi, the five Datta
              Purna rules and the four signs of progress. The material is presented for
              study and devotion; practices that require initiation remain Guru-guided.
            </p>
            <div className="gk-hero__meta">
              <span><strong>8</strong> chapters</span>
              <span><strong>4</strong> hands</span>
              <span><strong>32</strong> forms · 10th</span>
            </div>
            <div className="gk-hero__actions">
              <RegisterButton />
              <button type="button" className="gk-hero__back" onClick={() => navigate('/workshops')}>
                <FiArrowLeft size={15} aria-hidden="true" />
                Back to Workshops
              </button>
            </div>
          </motion.div>
          <motion.figure className="gk-hero__figure" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}>
            <div className="gk-hero__halo" aria-hidden="true" />
            <img src={kshipraImg} alt="Kshipra Ganapati" loading="eager" draggable="false" />
            <figcaption>Kshipra Ganapati · the swift form that grants boons without delay</figcaption>
          </motion.figure>
        </div>
      </header>

      <nav className="gk-chapters" aria-label="Kshipra Ganapati chapters" ref={navRef}>
        <div className="gk-chapters__inner">
          {CHAPTERS.map((c) => (
            <button key={c.id} type="button" className={`gk-chapters__item${active === c.id ? ' is-active' : ''}`} onClick={() => scrollToId(c.id)} aria-current={active === c.id ? 'true' : undefined}>
              <span className="gk-chapters__no">{c.no}</span>
              <span className="gk-chapters__label">{c.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="gk-main">
        {/* 01 · WHO IS */}
        <section id="who-is" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead no="01" kicker="Deity profile" title="Who Is Kshipra Ganapati?" subtitle="The swift form among the thirty-two." />
            <ScrollReveal>
              <TableWrap label="Kshipra Ganapati — deity profile" minWidth={640}>
                <tbody>
                  {PROFILE_ROWS.map((r) => (
                    <tr key={r.label}>
                      <td style={{ width: '200px' }}><strong>{r.label}</strong></td>
                      <td>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gk-note">
                <strong>Reading the profile.</strong> Colour, trunk and attributes are iconographic
                conventions. The same Ganapati is contemplated through each form; the differences
                guide the worshipper’s attention to a particular quality — here, swiftness and
                the removal of pressing obstacles.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 02 · VEDIC ROOTS */}
        <section id="vedic-roots" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead no="02" kicker="Vedic foundations" title="Vedic Roots — Where He Comes From" subtitle="The three Vedic sources cited for Kshipra Ganapati." tone="light" />
            <div className="gk-points">
              {VEDIC_SECTIONS.map((v) => (
                <ScrollReveal key={v.letter}>
                  <article className="gk-point">
                    <span className="gk-point__no font-cinzel">{v.letter}</span>
                    <h3 className="gk-point__title font-cinzel">{v.title}</h3>
                    <p className="font-serif" style={{ fontStyle: 'italic', color: 'rgba(255,244,223,0.7)' }}>{v.subtitle}</p>
                    {v.verse && (
                      <div className="gk-verse" style={{ margin: '14px 0 0', padding: '18px 20px' }}>
                        <p className="gk-verse__sanskrit font-serif" style={{ fontSize: '17px' }}>{v.verse}</p>
                        <p className="gk-verse__translation font-serif">{v.meaning}</p>
                      </div>
                    )}
                    {!v.verse && <p className="font-serif" style={{ marginTop: '10px' }}>{v.meaning}</p>}
                    <p className="font-serif" style={{ marginTop: '10px', fontSize: '13.5px', color: 'rgba(255,244,223,0.6)' }}>{v.note}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 03 · PURANIC REFS */}
        <section id="puranic-refs" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead no="03" kicker="Puranic references" title="Puranic References" subtitle="The four texts traditionally cited for Kshipra Ganapati." />
            <div className="gk-protection">
              {PURANIC_REFS.map((p) => (
                <ScrollReveal key={p.no}>
                  <article className="gk-protection__card" style={{ background: 'rgba(255,251,242,0.94)', border: '1px solid var(--gk-line)' }}>
                    <span className="gk-protection__mark" style={{ color: 'var(--gk-gold-deep)' }} aria-hidden="true">✦</span>
                    <h3 className="gk-protection__name font-cinzel" style={{ color: 'var(--gk-maroon)' }}>{p.title}</h3>
                    <p className="font-serif" style={{ color: 'var(--gk-muted)' }}>{p.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 · BENEFITS */}
        <section id="benefits" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead no="04" kicker="Benefits of sadhana" title="Benefits of Kshipra Ganapati Sadhana" subtitle="A traditional reference for matching a need to the form." tone="light" />
            <ScrollReveal>
              <TableWrap label="Kshipra Ganapati — benefit reference" minWidth={860}>
                <thead>
                  <tr>
                    <th>Problem</th>
                    <th>Kshipra benefit</th>
                    <th>How he does it</th>
                    <th>Graha fixed</th>
                  </tr>
                </thead>
                <tbody>
                  {BENEFIT_ROWS.map((r) => (
                    <tr key={r.problem}>
                      <td><strong>{r.problem}</strong></td>
                      <td>{r.benefit}</td>
                      <td>{r.how}</td>
                      <td>{r.graha}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gk-verse" style={{ marginTop: '26px' }}>
                <span className="gk-verse__mark" aria-hidden="true">ॐ</span>
                <p className="gk-verse__sanskrit font-serif" style={{ fontSize: '20px' }}>{PURNABHISIKTAS.title}</p>
                <p className="gk-verse__translation font-serif">{PURNABHISIKTAS.text}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gk-note gk-note--light">
                <strong>On benefits.</strong> The associations above are traditional devotional
                interpretations, not guarantees. They do not replace medical care, legal advice or
                sound financial judgement, and no specific number of days or results is promised.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 05 · SADHANA VIDHI */}
        <section id="sadhana-vidhi" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead no="05" kicker="Practice" title="Sadhana Vidhi — Datta Purna Krama" subtitle="Three modes of practice, from the daily two minutes to the restricted combo." />
            <div className="gk-points">
              {SADHANA_SECTIONS.map((s) => (
                <ScrollReveal key={s.letter}>
                  <article className="gk-point">
                    <span className="gk-point__no font-cinzel">{s.letter}</span>
                    <h3 className="gk-point__title font-cinzel">{s.title}</h3>
                    <ol style={{ margin: '10px 0 0', paddingLeft: '20px', color: 'var(--gk-muted)' }}>
                      {s.steps.map((st) => (<li key={st} className="font-serif" style={{ marginBottom: '6px', lineHeight: 1.7 }}>{st}</li>))}
                    </ol>
                    <p className="font-serif" style={{ marginTop: '10px', fontSize: '13.5px', color: 'var(--gk-gold-deep)', fontStyle: 'italic' }}>{s.note}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 06 · DATTA RULES */}
        <section id="datta-rules" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead no="06" kicker="Discipline" title="Sri Parampara Rules" subtitle="The five rules that frame the practice." tone="light" />
            <div className="gk-paths">
              {DATTA_RULES.map((r) => (
                <ScrollReveal key={r.no}>
                  <article className="gk-path">
                    <span className="gk-path__tag font-cinzel">Rule {r.no}</span>
                    <h3 className="gk-path__name font-cinzel">{r.title}</h3>
                    <p className="gk-path__text font-serif">{r.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 07 · SIGNS */}
        <section id="signs" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead no="07" kicker="Progress" title="Signs the Sadhana Is Working" subtitle="Traditional interpretations, not scientifically established predictions." />
            <div className="gk-protection">
              {SIGNS.map((s) => (
                <ScrollReveal key={s.name}>
                  <article className="gk-protection__card" style={{ background: 'rgba(255,251,242,0.94)', border: '1px solid var(--gk-line)' }}>
                    <span className="gk-protection__mark" style={{ color: 'var(--gk-gold-deep)' }} aria-hidden="true">✦</span>
                    <h3 className="gk-protection__name font-cinzel" style={{ color: 'var(--gk-maroon)' }}>{s.name}</h3>
                    <p className="font-serif" style={{ color: 'var(--gk-muted)' }}>{s.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 08 · CONCLUSION */}
        <section id="conclusion" className="gk-section gk-section--maroon gk-section--final">
          <div className="gk-container">
            <SectionHead no="08" kicker="Shastra conclusion" title="Kṣipra Gaṇapati — Spiritual Significance" tone="light" />
            <ScrollReveal>
              <div className="gk-final-verse">
                <p className="gk-final-verse__sanskrit font-serif" style={{ fontSize: '20px' }}>{BOTTOM_LINE}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gk-guru-notice gk-guru-notice--dark" style={{ marginTop: '24px' }}>
                <span className="gk-guru-notice__label font-cinzel">Order of practice</span>
                <p className="font-serif">{KSHIPRA_BEFORE}</p>
              </div>
            </ScrollReveal>
            <div className="gk-guidance">
              <ScrollReveal>
                <div className="gk-guidance__col">
                  <h3 className="gk-guidance__title font-cinzel">For the Grihastha</h3>
                  <ul>{GRIHASTHA_GUIDANCE.map((g) => (<li key={g} className="font-serif">{g}</li>))}</ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="gk-guidance__col">
                  <h3 className="gk-guidance__title font-cinzel">For the Sadhaka</h3>
                  <ul>{SADHAKA_GUIDANCE.map((s) => (<li key={s} className="font-serif">{s}</li>))}</ul>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <div className="gk-daily" style={{ marginTop: '30px' }}>
                <div className="gk-daily__head">
                  <span className="gk-eyebrow">A traditional daily order</span>
                  <h3 className="font-cinzel">Seven simple steps</h3>
                </div>
                <ol className="gk-daily__list">
                  {DAILY_STEPS.map((s) => (<li key={s} className="font-serif">{s}</li>))}
                </ol>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="gk-cta" style={{ marginTop: '30px' }}>
                <div>
                  <span className="gk-cta__eyebrow font-cinzel">Study with the Peetham</span>
                  <h3 className="gk-cta__title font-cinzel">Begin the Kshipra Ganapati workshop</h3>
                  <p className="gk-cta__text font-serif">
                    The Sadhana Kramam is the study map. The workshop adds the guided practice,
                    the pronunciation and the personal correction that a page cannot give.
                  </p>
                </div>
                <RegisterButton />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <p className="gk-disclaimer font-serif">
                Scriptural references and traditional interpretations are presented for educational
                and devotional purposes. Practices requiring initiation should be undertaken under
                the guidance of a qualified Guru.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <FooterSection />

      <button type="button" className="gk-floating-back" onClick={() => navigate('/workshops')} aria-label="Back to Workshops">
        <FiArrowLeft size={16} aria-hidden="true" />
        <span>Back to Workshops</span>
      </button>

      <div className="gk-mobile-cta">
        <span className="gk-mobile-cta__label font-cinzel">Kshipra Ganapati</span>
        <a className="gk-mobile-cta__btn" href={WA_HREF} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={16} aria-hidden="true" />
          Register Now
        </a>
      </div>
    </div>
  );
}

// TableWrap must be defined before use — hoist via function declaration
function TableWrap({ label, children, minWidth = 720 }) {
  return (
    <div className="gk-table-wrap" role="region" aria-label={label} tabIndex={0} style={{ '--gk-table-min': `${minWidth}px` }}>
      <table className="gk-table">{children}</table>
    </div>
  );
}