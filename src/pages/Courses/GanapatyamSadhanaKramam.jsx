import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiCopy } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import heroImg from '../../assets/ganapatyam/hero-maha-ganapati.jpeg';
import formsImg from '../../assets/ganapatyam/thirty-two-forms.jpeg';
import mouseImg from '../../assets/ganapatyam/ganapati-on-mouse.jpeg';
import herambaImg from '../../assets/ganapatyam/heramba-ganapati.jpeg';
import tantricImg from '../../assets/ganapatyam/sixty-four-tantric.jpeg';
import conclusionImg from '../../assets/ganapatyam/maha-ganapati-enthroned.jpeg';
import {
  WA_NUMBER,
  WA_MESSAGE,
  CHAPTERS,
  CLASSIFICATIONS,
  CLASSIFICATION_TOTAL,
  EIGHT_AVATARS,
  THIRTY_TWO_FORMS,
  FORM_GROUPS,
  SAMPRADAYAS,
  TWELVE_FORMS,
  FOUR_AVATARS,
  WORSHIP_ROWS,
  SIXTY_FOUR_GROUPS,
  TANTRA_SOURCES,
  RUDRA_YAMALA_POINTS,
  SHATKARMAS,
  YANTRA_ELEMENTS,
  BEEJAS,
  KUNDALINI_POINTS,
  PROTECTION_FORMS,
  PRACTITIONER_PATHS,
  DAILY_STEPS,
  GRIHASTHA_GUIDANCE,
  SADHAKA_GUIDANCE,
} from './ganapatyamSadhanaData.js';
import './GanapatyamSadhanaKramam.css';

const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
const REGISTER = () => window.open(WA_HREF, '_blank', 'noopener,noreferrer');

function Ornament({ tone = 'dark' }) {
  return (
    <div className={`gk-orn gk-orn--${tone}`} aria-hidden="true">
      <span className="gk-orn__line" />
      <span className="gk-orn__mark">✦</span>
      <span className="gk-orn__line" />
    </div>
  );
}

function SectionHead({ no, kicker, title, subtitle, tone = 'dark' }) {
  return (
    <ScrollReveal className={`gk-head gk-head--${tone}`}>
      <span className="gk-head__kicker">
        <span className="gk-head__no">Part {no}</span>
        {kicker}
      </span>
      <h2 className="gk-head__title font-cinzel">{title}</h2>
      {subtitle && <p className="gk-head__sub font-serif">{subtitle}</p>}
      <Ornament tone={tone} />
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

function CopyButton({ text, id, copied, onCopy, tone = 'dark' }) {
  const isCopied = copied === id;
  return (
    <button
      type="button"
      className={`gk-copy gk-copy--${tone}`}
      onClick={() => onCopy(text, id)}
      aria-label={isCopied ? 'Mantra copied' : `Copy mantra: ${text}`}
    >
      {isCopied ? <FiCheck size={14} /> : <FiCopy size={14} />}
      <span>{isCopied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

function TableWrap({ label, children, minWidth = 720 }) {
  return (
    <div
      className="gk-table-wrap"
      role="region"
      aria-label={label}
      tabIndex={0}
      style={{ '--gk-table-min': `${minWidth}px` }}
    >
      <table className="gk-table">{children}</table>
    </div>
  );
}

export default function GanapatyamSadhanaKramam({ context = 'courses' }) {
  const isWorkshop = context === 'workshops';
  const backTarget = isWorkshop ? '/workshops' : '/courses';
  const backLabel = isWorkshop ? 'Back to Workshops' : 'Back to Courses';
  const navigate = useNavigate();
  const [active, setActive] = useState(CHAPTERS[0].id);
  const [copied, setCopied] = useState(null);
  const copyTimer = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    document.title = 'Ganapatyam — Sadhana Kramam | Sri Mahavidyesvari Tantra Peetham';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'The Ganapatyam Sadhana Kramam: the five scriptural classifications, eight Yuga avatars, thirty-two forms of Ganapati, the Tantric sciences and the complete traditional guidance of the Ganapatya path.'
    );
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

  /* Keep the active chapter visible in the horizontally scrolling bar. The
     page must not move, so the bar is scrolled directly rather than with
     scrollIntoView. */
  useEffect(() => {
    const wrap = navRef.current?.querySelector('.gk-chapters__inner');
    const btn = wrap?.querySelector('.gk-chapters__item.is-active');
    if (!wrap || !btn) return;
    const left = btn.offsetLeft;
    const right = left + btn.offsetWidth;
    if (left < wrap.scrollLeft + 6 || right > wrap.scrollLeft + wrap.clientWidth - 6) {
      wrap.scrollTo({
        left: left - wrap.clientWidth / 2 + btn.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [active]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.querySelector('nav.navbar');
    const navHeight = navRef.current?.offsetHeight || 58;
    const offset = (navbar?.offsetHeight || 72) + navHeight + 6;
    window.scrollTo({
      top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset),
      behavior: 'smooth',
    });
    setActive(id);
  };

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    setCopied(id);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="gk-page">
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <header className="gk-hero">
        <div className="gk-hero__pattern" aria-hidden="true" />
        <div className="gk-hero__inner">
          <motion.div
            className="gk-hero__content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="gk-hero__eyebrow">Ganapatyam · Sadhana Kramam</span>
            <h1 className="gk-hero__title font-cinzel">
              Ganapatyam
              <span className="gk-hero__title-line">The Sacred Tradition of Ganapati Worship</span>
            </h1>
            <p className="gk-hero__sub font-serif">
              Explore the Divine Forms, Vedic Foundations, Puranic Traditions and Tantric
              Classifications of Lord Ganapati.
            </p>
            <p className="gk-hero__intro font-serif">
              A structured study of the Ganapatya path as it is preserved in the Peetham’s
              teaching: the five scriptural classifications, the eight and the four Yuga
              avatars, the thirty-two forms, the twelve principal forms, and the Tantric
              sciences of yantra, beeja, kundalini and protection. The material is presented
              for study and devotion; practices that require initiation remain Guru-guided.
            </p>

            <div className="gk-hero__meta">
              <span><strong>18</strong> chapters</span>
              <span><strong>32</strong> forms</span>
              <span><strong>64</strong> Tantric classification</span>
            </div>

            <div className="gk-hero__actions">
              <RegisterButton />
              <button type="button" className="gk-hero__back" onClick={() => navigate(backTarget)}>
                <FiArrowLeft size={15} aria-hidden="true" />
                {backLabel}
              </button>
            </div>
          </motion.div>

          <motion.figure
            className="gk-hero__figure"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="gk-hero__halo" aria-hidden="true" />
            <img
              src={heroImg}
              alt="Maha Ganapati seated in a temple sanctum"
              loading="eager"
              draggable="false"
            />
            <figcaption>Maha Ganapati · the great form invoked for wisdom and liberation</figcaption>
          </motion.figure>
        </div>
      </header>

      {/* ── CHAPTER NAVIGATION ─────────────────────────────────────── */}
      <nav className="gk-chapters" aria-label="Sadhana Kramam chapters" ref={navRef}>
        <div className="gk-chapters__inner">
          {CHAPTERS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`gk-chapters__item${active === c.id ? ' is-active' : ''}`}
              onClick={() => scrollToId(c.id)}
              aria-current={active === c.id ? 'true' : undefined}
            >
              <span className="gk-chapters__no">{c.no}</span>
              <span className="gk-chapters__label">{c.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="gk-main">
        {/* ── 01 · FIVE CLASSIFICATIONS ─────────────────────────────── */}
        <section id="five-classifications" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="01"
              kicker="Overview"
              title="Five Classifications in the Scriptures"
              subtitle="The forms of Ganapati are counted differently by different scriptural layers."
            />

            <ScrollReveal>
              <TableWrap label="Five scriptural classifications of Ganapati forms" minWidth={760}>
                <thead>
                  <tr>
                    <th className="is-num">No.</th>
                    <th>Scripture / Tradition</th>
                    <th className="is-num">Forms</th>
                    <th>Classification</th>
                  </tr>
                </thead>
                <tbody>
                  {CLASSIFICATIONS.map((row) => (
                    <tr key={row.no}>
                      <td className="is-num"><span className="gk-badge">{row.no}</span></td>
                      <td><strong>{row.scripture}</strong></td>
                      <td className="is-num"><strong className="gk-count">{row.forms}</strong></td>
                      <td>
                        <span className="gk-cell-title">{row.name}</span>
                        <span className="gk-cell-note">{row.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="gk-total">
                <span className="gk-total__label font-cinzel">Across the five lists</span>
                <p className="gk-total__number font-cinzel">{CLASSIFICATION_TOTAL.total}</p>
                <p className="gk-total__line">{CLASSIFICATION_TOTAL.line}</p>
                <p className="gk-total__note font-serif">{CLASSIFICATION_TOTAL.note}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="gk-note">
                <strong>On the counts.</strong> The lists are preserved as they are transmitted.
                Their exact textual attribution — particularly for the sixty-four and the
                hundred-and-eight recensions — is presented as a traditional classification and
                is best confirmed with the Peetham’s Guru before being cited as a critical reading.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 02 · EIGHT YUGA AVATARS ───────────────────────────────── */}
        <section id="eight-yuga-avatars" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="02"
              kicker="Mudgala Purana"
              title="Eight Yuga Avatars"
              subtitle="The eight avatars who overcome the eight inner enemies."
              tone="light"
            />

            <ScrollReveal>
              <TableWrap label="Eight Yuga avatars of Ganapati in the Mudgala Purana" minWidth={860}>
                <thead>
                  <tr>
                    <th className="is-num">No.</th>
                    <th>Avatar</th>
                    <th>Vahana</th>
                    <th>Demon defeated</th>
                    <th>Vice represented</th>
                    <th>Yuga</th>
                    <th>Ashtavinayak reference</th>
                  </tr>
                </thead>
                <tbody>
                  {EIGHT_AVATARS.map((a) => (
                    <tr key={a.name}>
                      <td className="is-num"><span className="gk-badge gk-badge--gold">{a.no}</span></td>
                      <td><strong>{a.name}</strong></td>
                      <td>{a.vahana}</td>
                      <td>{a.demon}</td>
                      <td>{a.vice}</td>
                      <td>{a.yuga}</td>
                      <td className="is-muted">{a.ashtavinayak}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>

            <ScrollReveal>
              <p className="gk-table-legend">
                The dash in the final column is intentional: the Mudgala avatars are not the eight
                Ashtavinayaka temples, and the traditions do not agree on a fixed one-to-one pairing.
              </p>
            </ScrollReveal>

            <div className="gk-cards-2">
              <ScrollReveal>
                <div className="gk-panel gk-panel--dark">
                  <span className="gk-panel__label font-cinzel">The inner battle</span>
                  <p className="font-serif">
                    In the Mudgala Purana the avatars are not conquests of distant kingdoms. Each
                    demon is a state of mind — jealousy, pride, delusion, greed, anger, craving,
                    possessiveness and arrogance. The narrative is a map of the seeker’s own
                    interior, and the avatars are the powers that dissolve each state.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="gk-panel gk-panel--dark">
                  <span className="gk-panel__label font-cinzel">On the Ashtavinayaka link</span>
                  <p className="font-serif">
                    The eight Mudgala avatars and the eight Ashtavinayaka temples are two distinct
                    traditional sets. Popular lists sometimes pair them, but the pairings vary
                    between regions and teachers. This page therefore does not impose a fixed
                    one-to-one correspondence; the eight temples are presented in their own right
                    in Part 07.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── 03 · THIRTY-TWO FORMS ─────────────────────────────────── */}
        <section id="thirty-two-forms" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="03"
              kicker="Chaturtrimsha Ganapati"
              title="The Thirty-Two Forms"
              subtitle="Iconography, colour, hands and purpose — the forms used in dhyana and upasana."
            />

            <ScrollReveal>
              <figure className="gk-banner gk-banner--grid">
                <img
                  src={formsImg}
                  alt="A traditional gallery of sixteen Ganapati forms"
                  loading="lazy"
                />
                <figcaption>
                  A traditional gallery of Ganapati forms — each distinguished by colour,
                  attributes and the hand-held symbols of its upasana.
                </figcaption>
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <div className="gk-form-groups">
                {FORM_GROUPS.map((g) => (
                  <div className="gk-form-group" key={g.title}>
                    <span className="gk-form-group__range font-cinzel">{g.range}</span>
                    <h3 className="gk-form-group__title font-cinzel">{g.title}</h3>
                    <p className="font-serif">{g.text}</p>
                  </div>
                ))}
              </div>
              <p className="gk-fineprint font-serif">
                This three-part grouping is a working arrangement for study on this page. It is
                not presented as a quotation from any single scripture.
              </p>
            </ScrollReveal>

            <div className="gk-forms-grid">
              {THIRTY_TWO_FORMS.map((f, i) => (
                <ScrollReveal key={f.name} delay={(i % 4) * 0.04}>
                  <article className={`gk-form${f.highlight ? ' gk-form--hi' : ''}`}>
                    <div className="gk-form__top">
                      <span className="gk-form__no font-cinzel">{f.no}</span>
                      {f.highlight && <span className="gk-form__star">Highlighted form</span>}
                    </div>
                    <h3 className="gk-form__name font-cinzel">{f.name}</h3>
                    <p className="gk-form__colour">{f.colour}</p>
                    <p className="gk-form__detail font-serif">{f.form}</p>
                    <p className="gk-form__purpose font-serif">{f.purpose}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gk-note">
                <strong>Reading the forms.</strong> Colour, number of arms and attributes are
                iconographic conventions, not separate gods. The same Ganapati is contemplated
                through each form; the differences guide the worshipper’s attention to a
                particular quality or need.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 04 · SIX GANAPATYA SAMPRADAYAS ────────────────────────── */}
        <section id="six-sampradayas" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="04"
              kicker="Six Sampradayas"
              title="The Six Ganapatya Sampradayas"
              subtitle="The six traditional paths of Ganapati worship."
              tone="light"
            />

            <ScrollReveal>
              <TableWrap label="The six Ganapatya Sampradayas" minWidth={820}>
                <thead>
                  <tr>
                    <th className="is-num">No.</th>
                    <th>Sampradaya</th>
                    <th>Main deity</th>
                    <th>Colour</th>
                    <th>Mantra</th>
                    <th>Nature</th>
                    <th>Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPRADAYAS.map((s) => (
                    <tr key={s.name}>
                      <td className="is-num"><span className="gk-badge gk-badge--gold">{s.no}</span></td>
                      <td><strong>{s.name}</strong></td>
                      <td>{s.deity}</td>
                      <td className="is-muted">{s.colour}</td>
                      <td className="is-muted">{s.mantra}</td>
                      <td>{s.nature}</td>
                      <td>{s.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>

            <ScrollReveal>
              <p className="gk-fineprint gk-fineprint--light font-serif">
                The lineage names and their associated forms are given as they are transmitted in
                the Ganapatya tradition. Colour, mantra, nature and goal are filled only where the
                tradition is consistent; the entries marked “—” await the Peetham’s verified
                Tantra text and are not invented. Mantras for the Sampradaya practice are
                Guru-given.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 05 · TWELVE PRINCIPAL FORMS ───────────────────────────── */}
        <section id="twelve-forms" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="05"
              kicker="Dwadasha Ganapati"
              title="The Twelve Principal Forms"
              subtitle="From Bala to Lakshmi — the twelve forms remembered in daily smarana."
              tone="light"
            />

            <div className="gk-split">
              <ScrollReveal className="gk-split__media">
                <figure className="gk-figure">
                  <img
                    src={mouseImg}
                    alt="Ganapati riding the mouse, holding the axe, lotus and sugarcane bow"
                    loading="lazy"
                  />
                  <figcaption>
                    The mouse-borne form — readiness, speed and the humility of the small creature
                    that carries the great Lord.
                  </figcaption>
                </figure>
              </ScrollReveal>

              <div className="gk-split__body">
                <div className="gk-months">
                  {TWELVE_FORMS.map((f) => (
                    <ScrollReveal key={f.name}>
                      <div className="gk-month">
                        <span className="gk-month__no font-cinzel">{f.no}</span>
                        <div>
                          <h3 className="gk-month__name font-cinzel">{f.name}</h3>
                          <p className="gk-month__benefit font-serif">{f.benefit}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            <ScrollReveal>
              <div className="gk-note gk-note--light">
                <strong>How the twelve are used.</strong> The Dwadasha set is traditionally recited
                as a sequence of names in morning smarana and in the worship of the household
                shrine. The forms are also the first twelve of the thirty-two, so a worshipper who
                keeps one form daily is not excluding the others; the sequence is a way of
                remembering the whole.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 05 · FOUR YUGA AVATARS ────────────────────────────────── */}
        <section id="four-yuga-avatars" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="06"
              kicker="Ganesha Purana"
              title="Four Yuga Avatars"
              subtitle="The four avatars of the Ganesha Purana, one for each age."
            />

            <div className="gk-avatars">
              {FOUR_AVATARS.map((a, i) => (
                <ScrollReveal key={a.name} delay={i * 0.06}>
                  <article className="gk-avatar">
                    <span className="gk-avatar__yuga font-cinzel">{a.yuga}</span>
                    <span className="gk-avatar__index font-cinzel">0{i + 1}</span>
                    <h3 className="gk-avatar__name font-cinzel">{a.name}</h3>
                    <p className="gk-avatar__vahana">Vahana · {a.vahana}</p>
                    <p className="gk-avatar__text font-serif">{a.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gk-note">
                <strong>Two avatar lists, two purposes.</strong> The Ganesha Purana gives four
                avatars, one for each Yuga. The Mudgala Purana gives eight, with the last four
                placed in the Kali Yuga. The lists are related but not identical, and this page
                keeps them separate rather than forcing them into a single sequence.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 06 · WHICH GANAPATI ───────────────────────────────────── */}
        <section id="which-ganapati" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="07"
              kicker="Upasana guidance"
              title="Which Ganapati to Worship?"
              subtitle="A traditional reference for matching a need to a form."
              tone="light"
            />

            <div className="gk-feature-cards">
              <ScrollReveal>
                <article className="gk-feature">
                  <span className="gk-feature__tag">Daily worship</span>
                  <h3 className="gk-feature__name font-cinzel">Maha Ganapati</h3>
                  <p className="gk-feature__purpose font-serif">
                    The great form for steady daily practice, protection, wisdom and liberation.
                    It is the safest and most widely established form for a householder.
                  </p>
                  <div className="gk-mantra">
                    <code>Om Gam Ganapataye Namah</code>
                    <CopyButton text="Om Gam Ganapataye Namah" id="maha" copied={copied} onCopy={handleCopy} tone="light" />
                  </div>
                  <p className="gk-feature__guide">Traditional colour · red · ten arms</p>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={0.06}>
                <article className="gk-feature">
                  <span className="gk-feature__tag">Auspiciousness</span>
                  <h3 className="gk-feature__name font-cinzel">Haridra Ganapati</h3>
                  <p className="gk-feature__purpose font-serif">
                    The turmeric form, invoked for marriage, auspicious beginnings, prosperity
                    and protection. Turmeric is offered as the form’s own substance.
                  </p>
                  <div className="gk-mantra">
                    <code>Om Hrim Gam Haridra Ganapataye Namah</code>
                    <CopyButton text="Om Hrim Gam Haridra Ganapataye Namah" id="haridra" copied={copied} onCopy={handleCopy} tone="light" />
                  </div>
                  <p className="gk-feature__guide">Traditional colour · turmeric yellow · four arms</p>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <article className="gk-feature">
                  <span className="gk-feature__tag">Release from debt</span>
                  <h3 className="gk-feature__name font-cinzel">Rinamochana Ganapati</h3>
                  <p className="gk-feature__purpose font-serif">
                    The debt-releasing form. The traditional prayer is offered alongside honest
                    effort and practical responsibility; it is not a promise of sudden wealth.
                  </p>
                  <div className="gk-mantra">
                    <code>Om Gam Rinamochana Ganapataye Namah</code>
                    <CopyButton text="Om Gam Rinamochana Ganapataye Namah" id="rina" copied={copied} onCopy={handleCopy} tone="light" />
                  </div>
                  <p className="gk-feature__guide">Traditional colour · rose red · four arms</p>
                </article>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="gk-guru-notice">
                <span className="gk-guru-notice__label font-cinzel">Guru guidance</span>
                <p className="font-serif">
                  <strong>Ucchishta Ganapati</strong> is a restricted Tantric form. Its worship,
                  kavacha and mantra are transmitted through initiation and are not published here
                  as self-practice instructions. A seeker drawn to this form should approach a
                  qualified Guru in an unbroken lineage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <TableWrap label="Traditional reference for choosing a form of Ganapati" minWidth={840}>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Ganapati</th>
                    <th>Classification</th>
                    <th>Mantra</th>
                  </tr>
                </thead>
                <tbody>
                  {WORSHIP_ROWS.map((row) => (
                    <tr key={row.purpose}>
                      <td>{row.purpose}</td>
                      <td><strong className="gk-gold">{row.form}</strong></td>
                      <td>{row.classification}</td>
                      <td><code className="gk-inline-mantra">{row.mantra}</code></td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
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

        {/* ── 07 · SIXTY-FOUR OVERVIEW ──────────────────────────────── */}
        <section id="sixty-four-overview" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="08"
              kicker="Meru Tantra tradition"
              title="64 Tantric Ganapati"
              subtitle="Explore the eight groups and their sixty-four forms."
            />

            <ScrollReveal>
              <figure className="gk-banner">
                <img
                  src={tantricImg}
                  alt="Maha Ganapati attended by consorts and devotees"
                  loading="lazy"
                />
                <figcaption>
                  The great Ganapati attended by the powers of prosperity and wisdom — the
                  Tantric vision of the central deity surrounded by his own manifestations.
                </figcaption>
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <div className="gk-sixty-intro">
                <p className="font-serif">
                  The sixty-fourfold classification is associated with the <em>Meru Tantra</em> and
                  with the sixty-four Yoginis. It arranges the forms in eight groups of eight. The
                  first group — the eight Ashtavinayaka — is fully preserved below. The remaining
                  groups are presented with their traditional focus; the individual names are held
                  in the Peetham’s Tantra source and are not published until the text is verified
                  against the received recension.
                </p>
              </div>
            </ScrollReveal>

            <div className="gk-groups">
              {SIXTY_FOUR_GROUPS.map((g) => (
                <ScrollReveal key={g.no}>
                  <article className="gk-group">
                    <header className="gk-group__head">
                      <span className="gk-group__no font-cinzel">Group {g.no}</span>
                      <h3 className="gk-group__title font-cinzel">{g.title}</h3>
                      <span className="gk-group__count">8 forms</span>
                    </header>
                    <p className="gk-group__focus font-serif">{g.focus}</p>
                    {/* forms are presented in Part 10 */}
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gk-note">
                <strong>Why the list is not completed here.</strong> Ganapati Tantra enumerations
                differ between recensions, and a name copied from an unverified secondary list can
                misattribute a mantra or a ritual. This page therefore publishes the structure and
                the verified Ashtavinayaka group, and leaves the remaining names to the Peetham’s
                source text rather than inventing them.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 08 · SOURCES ──────────────────────────────────────────── */}
        <section id="tantra-sources" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="09"
              kicker="Grantha references"
              title="Sources of the Sixty-Four Forms"
              subtitle="The texts traditionally cited for the Tantric classification."
              tone="light"
            />

            <ScrollReveal>
              <TableWrap label="Tantra granthas cited for the sixty-four forms" minWidth={720}>
                <thead>
                  <tr>
                    <th>Tantra Grantha</th>
                    <th>Chapter / Section</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {TANTRA_SOURCES.map((s) => (
                    <tr key={s.grantha}>
                      <td><strong>{s.grantha}</strong></td>
                      <td>{s.chapter}</td>
                      <td>{s.text}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>

            <ScrollReveal>
              <p className="gk-fineprint gk-fineprint--light font-serif">
                Chapter and section attributions marked “traditional attribution” are given as the
                tradition transmits them. They should be confirmed against a critical edition before
                being cited in academic work.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 10 · COMPLETE CLASSIFICATION OF SIXTY-FOUR ────────────── */}
        <section id="sixty-four-complete" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="10"
              kicker="Complete classification"
              title="Complete Classification of Sixty-Four Tantric Ganapati"
              subtitle="The eight groups, each with its eight forms."
            />
            <ScrollReveal>
              <div className="gk-sixty-intro">
                <p className="font-serif">
                  The complete enumeration is presented group by group. Group 1 — the eight
                  Ashtavinayaka — is fully preserved. The remaining groups are presented with
                  their traditional focus; the individual names are held in the Peetham’s Tantra
                  source and are published here only where they can be verified against the
                  received recension.
                </p>
              </div>
            </ScrollReveal>
            <div className="gk-groups">
              {SIXTY_FOUR_GROUPS.map((g) => (
                <ScrollReveal key={g.no}>
                  <article className={`gk-group${g.forms ? ' gk-group--full' : ''}`}>
                    <header className="gk-group__head">
                      <span className="gk-group__no font-cinzel">Group {g.no}</span>
                      <h3 className="gk-group__title font-cinzel">{g.title}</h3>
                      <span className="gk-group__count">8 forms</span>
                    </header>
                    <p className="gk-group__focus font-serif">{g.focus}</p>
                    {g.forms ? (
                      <div className="gk-group__table">
                        <TableWrap label={`${g.title} — eight forms`} minWidth={520}>
                          <thead>
                            <tr>
                              <th className="is-num">No.</th>
                              <th>Ganapati</th>
                              <th>Tantrika function / seat</th>
                            </tr>
                          </thead>
                          <tbody>
                            {g.forms.map((f) => (
                              <tr key={f.name}>
                                <td className="is-num">{f.no}</td>
                                <td><strong>{f.name}</strong></td>
                                <td>{f.fn}</td>
                              </tr>
                            ))}
                          </tbody>
                        </TableWrap>
                      </div>
                    ) : (
                      <p className="gk-group__pending font-serif">
                        The eight names of this group are preserved in the Peetham’s Tantra source
                        and are not reproduced here without textual verification.
                      </p>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="gk-note">
                <strong>Why the list is not completed here.</strong> Ganapati Tantra enumerations
                differ between recensions, and a name copied from an unverified secondary list can
                misattribute a mantra or a ritual. This page therefore publishes the structure and
                the verified Ashtavinayaka group, and leaves the remaining names to the Peetham’s
                source text rather than inventing them.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 11 · RUDRA YAMALA ─────────────────────────────────────── */}
        <section id="rudra-yamala" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="11"
              kicker="Tantric science"
              title="Rudra Yamala Tantra"
              subtitle="Ganapati as the deity of the root centre, and the order of Tantric worship."
            />

            <div className="gk-points">
              {RUDRA_YAMALA_POINTS.map((p) => (
                <ScrollReveal key={p.no}>
                  <article className="gk-point">
                    <span className="gk-point__no font-cinzel">{p.no}</span>
                    <h3 className="gk-point__title font-cinzel">{p.title}</h3>
                    <p className="font-serif">{p.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gk-verse">
                <span className="gk-verse__mark" aria-hidden="true">ॐ</span>
                <p className="gk-verse__sanskrit font-serif">Gam Ganapataye Namah</p>
                <p className="gk-verse__translation font-serif">
                  The seed syllable and the name, joined in the traditional invocation of the form.
                </p>
                <p className="gk-verse__note">
                  A traditional mantra, presented for study. The full Rudra Yamala sequence is
                  Guru-guided.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 10 · SHATKARMAS ───────────────────────────────────────── */}
        <section id="shatkarmas" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="12"
              kicker="Six karmas"
              title="Shatkarmas — the Six Ritual Actions"
              subtitle="The classical sixfold classification of Tantric karma."
              tone="light"
            />

            <ScrollReveal>
              <TableWrap label="The six karmas of the Tantric tradition" minWidth={760}>
                <thead>
                  <tr>
                    <th className="is-num">No.</th>
                    <th>Karma</th>
                    <th>Meaning</th>
                    <th>Traditional use</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {SHATKARMAS.map((k) => (
                    <tr key={k.karma}>
                      <td className="is-num"><span className="gk-badge gk-badge--gold">{k.no}</span></td>
                      <td><strong>{k.karma}</strong></td>
                      <td>{k.meaning}</td>
                      <td>{k.use}</td>
                      <td><span className={`gk-status${k.status === 'Not public' ? ' gk-status--closed' : ''}`}>{k.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>

            <ScrollReveal>
              <div className="gk-guru-notice gk-guru-notice--dark">
                <span className="gk-guru-notice__label font-cinzel">Guru-guided only</span>
                <p className="font-serif">
                  The shatkarmas are not general public practices. The higher karmas are restricted
                  in the Tantras themselves and are transmitted only within an initiated
                  relationship. Nothing on this page should be read as an instruction to perform
                  them.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 11 · YANTRA ───────────────────────────────────────────── */}
        <section id="yantra-science" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="13"
              kicker="Sacred geometry"
              title="Yantra Science"
              subtitle="The diagram as a body of the deity — bindu, triangle, enclosure and lotus."
            />

            <div className="gk-yantra-layout">
              <ScrollReveal>
                <div className="gk-yantra" aria-label="A traditional Ganapati yantra diagram" role="img">
                  <div className="gk-yantra__bhupura">
                    <span className="gk-yantra__gate gk-yantra__gate--n" aria-hidden="true" />
                    <span className="gk-yantra__gate gk-yantra__gate--s" aria-hidden="true" />
                    <span className="gk-yantra__gate gk-yantra__gate--e" aria-hidden="true" />
                    <span className="gk-yantra__gate gk-yantra__gate--w" aria-hidden="true" />
                    <div className="gk-yantra__ring">
                      <div className="gk-yantra__star" aria-hidden="true">
                        <span className="gk-yantra__sq gk-yantra__sq--a" />
                        <span className="gk-yantra__sq gk-yantra__sq--b" />
                      </div>
                      <div className="gk-yantra__triangle" aria-hidden="true">
                        <span className="gk-yantra__bindu" />
                      </div>
                    </div>
                  </div>
                  <span className="gk-yantra__caption font-cinzel">Maha Ganapati Yantra · structural form</span>
                </div>
              </ScrollReveal>

              <div className="gk-yantra-list">
                {YANTRA_ELEMENTS.map((y) => (
                  <ScrollReveal key={y.no}>
                    <div className="gk-yantra-row">
                      <span className="gk-yantra-row__no font-cinzel">{y.no}</span>
                      <div>
                        <h3 className="gk-yantra-row__name font-cinzel">{y.element}</h3>
                        <p className="font-serif">{y.meaning}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal>
              <div className="gk-note">
                <strong>Preparation and worship.</strong> A yantra is traditionally installed with
                purification, prana pratishtha and a fixed daily worship. The metal, the direction,
                the number of recitations and the offerings are prescribed by the Guru for the
                particular form. A diagram printed on a page is a study aid, not a consecrated
                yantra.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 12 · BEEJA ────────────────────────────────────────────── */}
        <section id="beeja-science" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="14"
              kicker="Mantra science"
              title="Beeja Mantra Science"
              subtitle="The seed syllables and the forms they invoke."
              tone="light"
            />

            <ScrollReveal>
              <TableWrap label="Ganapati beeja mantras and their traditional associations" minWidth={820}>
                <thead>
                  <tr>
                    <th>Beeja</th>
                    <th>Form</th>
                    <th>Traditional sense</th>
                    <th>Use</th>
                  </tr>
                </thead>
                <tbody>
                  {BEEJAS.map((b) => (
                    <tr key={b.bija}>
                      <td><code className="gk-bija">{b.bija}</code></td>
                      <td><strong>{b.deity}</strong></td>
                      <td>{b.sense}</td>
                      <td>{b.use}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </ScrollReveal>

            <div className="gk-cards-2">
              <ScrollReveal>
                <div className="gk-panel gk-panel--dark">
                  <span className="gk-panel__label font-cinzel">Pronunciation</span>
                  <p className="font-serif">
                    The seed is sounded slowly and evenly, with the nasal resonance carried to the
                    end of the breath. In the tradition, pronunciation is received from the Guru’s
                    voice rather than reconstructed from a transliteration. Where a recording is
                    available from the Peetham, it should take precedence over any written guide.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="gk-panel gk-panel--dark">
                  <span className="gk-panel__label font-cinzel">Restricted seeds</span>
                  <p className="font-serif">
                    Seeds such as Klim are associated with the Tantric and Ucchishta forms. They
                    are not beginner mantras. The widespread availability of a syllable in print
                    does not make it safe or appropriate to practise without initiation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── 13 · KUNDALINI ────────────────────────────────────────── */}
        <section id="kundalini-science" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="15"
              kicker="Inner ascent"
              title="Kundalini Science"
              subtitle="Ganapati at the root centre, and the discipline that precedes the ascent."
            />

            <div className="gk-split gk-split--reverse">
              <div className="gk-split__body">
                <div className="gk-points gk-points--single">
                  {KUNDALINI_POINTS.map((p) => (
                    <ScrollReveal key={p.no}>
                      <article className="gk-point">
                        <span className="gk-point__no font-cinzel">{p.no}</span>
                        <h3 className="gk-point__title font-cinzel">{p.title}</h3>
                        <p className="font-serif">{p.text}</p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              <ScrollReveal className="gk-split__media">
                <figure className="gk-figure gk-figure--portrait">
                  <img
                    src={herambaImg}
                    alt="Heramba Ganapati, the five-faced form riding a lion"
                    loading="lazy"
                  />
                  <figcaption>
                    Heramba Ganapati — five faces, ten arms, the lion’s steadiness. A form
                    associated with protection and the mastery of the five elements.
                  </figcaption>
                </figure>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="gk-note">
                <strong>A caution.</strong> Kundalini language is often borrowed for experiences
                that are emotional or physical rather than spiritual. Traditional teaching is
                conservative: a stable life, a qualified teacher and a prepared body come first.
                This page does not teach a method for raising Kundalini.
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 14 · PROTECTION ───────────────────────────────────────── */}
        <section id="protection-science" className="gk-section gk-section--maroon">
          <div className="gk-container">
            <SectionHead
              no="16"
              kicker="Raksha"
              title="Protection Science"
              subtitle="The protective forms and the limits of what may be published."
              tone="light"
            />

            <div className="gk-protection">
              {PROTECTION_FORMS.map((f, i) => (
                <ScrollReveal key={f.name} delay={i * 0.05}>
                  <article className="gk-protection__card">
                    <span className="gk-protection__mark" aria-hidden="true">✦</span>
                    <h3 className="gk-protection__name font-cinzel">{f.name}</h3>
                    <p className="font-serif">{f.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gk-guru-notice gk-guru-notice--dark">
                <span className="gk-guru-notice__label font-cinzel">Practical protection</span>
                <p className="font-serif">
                  The tradition also speaks of ordinary protection: a clean home, a regular lamp,
                  honesty in dealings, care for the vulnerable and the company of good people. No
                  kavacha replaces these. Where fear or harm is real, professional help and the
                  support of the community come first.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 15 · HOUSEHOLDERS ─────────────────────────────────────── */}
        <section id="normal-practitioners" className="gk-section gk-section--cream">
          <div className="gk-container">
            <SectionHead
              no="17"
              kicker="For normal practitioners"
              title="Which Ganapati to Worship at Home?"
              subtitle="A simple, safe path for the householder — and the forms that wait for a Guru."
            />

            <div className="gk-paths">
              {PRACTITIONER_PATHS.map((p, i) => (
                <ScrollReveal key={p.name} delay={(i % 3) * 0.05}>
                  <article className={`gk-path${i === 5 ? ' gk-path--restricted' : ''}`}>
                    <span className="gk-path__tag font-cinzel">{p.tag}</span>
                    <h3 className="gk-path__name font-cinzel">{p.name}</h3>
                    <p className="gk-path__text font-serif">{p.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="gk-daily">
                <div className="gk-daily__head">
                  <span className="gk-eyebrow">A traditional daily order</span>
                  <h3 className="font-cinzel">Seven simple steps</h3>
                </div>
                <ol className="gk-daily__list">
                  {DAILY_STEPS.map((s) => (
                    <li key={s} className="font-serif">{s}</li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="gk-cta">
                <div>
                  <span className="gk-cta__eyebrow font-cinzel">Study with the Peetham</span>
                  <h3 className="gk-cta__title font-cinzel">Begin the Ganapatyam course</h3>
                  <p className="gk-cta__text font-serif">
                    The Sadhana Kramam is the study map. The course adds the guided practice,
                    the pronunciation and the personal correction that a page cannot give.
                  </p>
                </div>
                <RegisterButton />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 16 · CONCLUSION ───────────────────────────────────────── */}
        <section id="conclusion" className="gk-section gk-section--maroon gk-section--final">
          <div className="gk-container">
            <SectionHead
              no="18"
              kicker="Shastra conclusion"
              title="One Truth, Many Forms"
              tone="light"
            />

            <ScrollReveal>
              <div className="gk-final-verse">
                <p className="gk-final-verse__sanskrit font-serif">Ekoham Bahudha Jatah</p>
                <p className="gk-final-verse__translation font-serif">
                  “I am One; I have become many.”
                </p>
                <p className="gk-final-verse__note">
                  A traditional declaration of unity in multiplicity. The many forms of Ganapati
                  are the one Tattva, contemplated through names, colours and attributes suited to
                  the capacity of the worshipper.
                </p>
              </div>
            </ScrollReveal>

            <div className="gk-truth">
              <ScrollReveal>
                <div className="gk-truth__card">
                  <span className="gk-truth__label font-cinzel">Tattva</span>
                  <p className="gk-truth__value font-cinzel">One</p>
                  <p className="font-serif">
                    The undivided reality is not multiplied by the forms. The forms are windows,
                    not fragments.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <div className="gk-truth__card">
                  <span className="gk-truth__label font-cinzel">Forms</span>
                  <p className="gk-truth__value font-cinzel">Many</p>
                  <p className="font-serif">
                    Eight, twelve, thirty-two, sixty-four, one hundred and eight — each list is a
                    way of remembering, not a division of the deity.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <div className="gk-truth__card">
                  <span className="gk-truth__label font-cinzel">Practice</span>
                  <p className="gk-truth__value font-cinzel">One</p>
                  <p className="font-serif">
                    One form, one mantra, one steady life. The tradition honours depth over
                    accumulation.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="gk-guidance">
              <ScrollReveal>
                <div className="gk-guidance__col">
                  <h3 className="gk-guidance__title font-cinzel">For the Grihastha</h3>
                  <ul>
                    {GRIHASTHA_GUIDANCE.map((g) => (
                      <li key={g} className="font-serif">{g}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="gk-guidance__col">
                  <h3 className="gk-guidance__title font-cinzel">For the Sadhaka</h3>
                  <ul>
                    {SADHAKA_GUIDANCE.map((s) => (
                      <li key={s} className="font-serif">{s}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="gk-closing">
                <div className="gk-closing__media">
                  <img
                    src={conclusionImg}
                    alt="Maha Ganapati enthroned in a golden temple setting"
                    loading="lazy"
                  />
                </div>
                <div className="gk-closing__body">
                  <span className="gk-closing__label font-cinzel">Ganapati Atharva Shirsha</span>
                  <p className="gk-closing__verse font-serif">
                    Om Namaste Ganapataye<br />
                    Tvam eva Pratyaksham Tattvam Asi
                  </p>
                  <p className="gk-closing__meaning font-serif">
                    “Om. Salutations to Ganapati. You are the Truth directly perceived.”
                  </p>
                  <p className="gk-closing__note font-serif">
                    The opening invocation of the Ganapati Atharva Shirsha, presented as the
                    traditional closing contemplation of this study. The full text is best received
                    from a teacher with its accent, nyasa and traditional commentary.
                  </p>
                  <p className="gk-closing__shanti font-cinzel">Om Shantih Shantih Shantih</p>
                  <RegisterButton />
                </div>
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


      {/* ── MOBILE REGISTER BAR ───────────────────────────────────── */}
      <div className="gk-mobile-cta">
        <span className="gk-mobile-cta__label font-cinzel">Ganapatyam</span>
        <a
          className="gk-mobile-cta__btn"
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={16} aria-hidden="true" />
          Register Now
        </a>
      </div>
    </div>
  );
}
