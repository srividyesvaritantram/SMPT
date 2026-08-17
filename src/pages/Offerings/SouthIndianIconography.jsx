import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldenButton from '../../components/common/GoldenButton.jsx';

import silpaImg      from '../../assets/silpa_sastra.jpeg';
import mudhraImg     from '../../assets/mudhra.jpeg';
import asanaImg      from '../../assets/asana.jpeg';
import part2Img      from '../../assets/part2.jpeg';
import ganaImg       from '../../assets/gana.jpeg';
import part4Img      from '../../assets/part_4.jpeg';
import pamchalohaImg from '../../assets/pamchaloha.jpeg';
import vax1Img       from '../../assets/vax1.jpeg';
import southIndImg   from '../../assets/south_indian.jpeg';

import './SouthIndianIconography.css';

const WA_URL =
  'https://wa.me/919390886029?text=Namaste%20%F0%9F%99%8F%20I%20would%20like%20to%20book%20a%20Consultation.';

/* ── Reusable reveal wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Alternating full-width block ── */
function SectionBlock({ tone = 'maroon', children, id }) {
  return (
    <section id={id} className={`si-block si-block--${tone}`}>
      <div className="si-block__inner">{children}</div>
    </section>
  );
}

/* ── Media row: image + text side by side ── */
function MediaRow({ image, imageAlt, imageCaption, reverse = false, children, className = '' }) {
  return (
    <div className={`si-media ${reverse ? 'si-media--rev' : ''} ${className}`}>
      <div className="si-media__img">
        <figure className="si-img">
          <div className="si-img__wrap">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
          {imageCaption && <figcaption className="si-img__cap">{imageCaption}</figcaption>}
        </figure>
      </div>
      <div className="si-media__text">{children}</div>
    </div>
  );
}

/* ── Image frame ── */
function SiImage({ src, alt, caption, className = '' }) {
  return (
    <figure className={`si-img ${className}`}>
      <div className="si-img__wrap">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      {caption && <figcaption className="si-img__cap">{caption}</figcaption>}
    </figure>
  );
}

/* ── Gold divider ── */
function GoldDivider() {
  return (
    <div className="si-divider" aria-hidden="true">
      <span className="si-divider__line" />
      <span className="si-divider__diamond">✦</span>
      <span className="si-divider__line" />
    </div>
  );
}

/* ── Quote card ── */
function SanskritQuote({ sanskrit, english }) {
  return (
    <blockquote className="si-quote">
      <p className="si-quote__sa font-cinzel">{sanskrit}</p>
      {english && <p className="si-quote__en font-serif">{english}</p>}
    </blockquote>
  );
}

/* ── Table wrapper ── */
function SiTable({ headers, rows }) {
  return (
    <div className="si-table-wrap">
      <table className="si-table">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function SouthIndianIconography() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="si-section">

      {/* ═══ PREVIEW / INTRO CARD ═══ */}
      <div className="si-preview">
        <div className="si-preview__inner">
          <Reveal>
            <div className="si-preview__grid">
              <div className="si-preview__img">
                <figure className="si-img">
                  <div className="si-img__wrap">
                    <img src={silpaImg} alt="South Indian Iconography — Śilpa Śāstra" />
                  </div>
                </figure>
              </div>
              <div className="si-preview__content">
                <span className="si-preview__eyebrow">
                  <span className="si-preview__eyebrow-line" />
                  Śilpa Śāstra
                </span>
                <h2 className="si-preview__title font-cinzel">SOUTH INDIAN ICONOGRAPHY</h2>
                <p className="si-preview__subtitle font-cinzel">PĀÑCALOHA &bull; STONE SCULPTURE</p>
                <p className="si-preview__body font-serif">
                  Clear Subject from ŚILPA ŚĀSTRA — the ancient science of sacred image-making
                  that governs every proportion, material, and gesture in temple sculpture.
                </p>
                <div className="si-preview__sources">
                  <span className="si-preview__sources-label">Main Sources:</span>
                  <span className="si-preview__sources-list font-serif">
                    Mānasāra, Mayamata, Śilparatna, Kāśyapa Śilpa, Śaiva Āgama, Pāñcarātra Āgama
                  </span>
                </div>
                <div className="si-preview__btns">
                  <GoldenButton
                    label={expanded ? 'Show Less ↑' : 'Read More →'}
                    size="md"
                    noOrnaments
                    onClick={() => setExpanded(!expanded)}
                  />
                  <GoldenButton
                    label="Book Consultation →"
                    size="md"
                    outlined
                    noOrnaments
                    onClick={() => window.open(WA_URL, '_blank')}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ═══ EXPANDED CONTENT ═══ */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="si-expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* ── 1. South Indian Iconography — Rules from Śāstra ── */}
            <SectionBlock tone="maroon" id="si-rules">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION I</span>
                <h3 className="si-h3 font-cinzel">South Indian Iconography — Rules from Śāstra</h3>
                <p className="si-body font-serif">
                  In South Indian temple tradition, every murti — from the tallest Vimana granite deity to
                  the smallest festival processional idol — must follow precise iconographic rules described
                  in Śilpa Śāstra texts. These rules define the body proportions, postures, ornaments,
                  attributes, and even the emotional tone of the deity.
                </p>
                <p className="si-body font-serif">
                  The goal is not merely aesthetic beauty. A correctly made murti becomes a vessel for divine
                  presence — a living embodiment of the deity that responds to worship, blesses devotees,
                  and sanctifies the temple space.
                </p>
              </Reveal>
            </SectionBlock>

            {/* ── 2. Four Foundation Books ── */}
            <SectionBlock tone="cream" id="si-books">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION II</span>
                <h3 className="si-h3 font-cinzel">Four Foundation Books for South India</h3>
              </Reveal>
              <div className="si-book-grid">
                {[
                  { name: 'Mayamata', use: 'Temple architecture & sculpture rules', pramana: 'Primary architectural manual for Dravidian temples' },
                  { name: 'Mānasāra', use: 'Icon proportions & measurement systems', pramana: 'Definitive text on murti proportion (māna = measure)' },
                  { name: 'Kāśyapa Śilpa', use: 'Iconography, consecration methods', pramana: 'Śaiva iconographic authority, widely followed in Tamil Nadu' },
                  { name: 'Śaiva & Pāñcarātra Āgama', use: 'Temple ritual, worship structure, deity specifications', pramana: 'Revealed scripture — the theological foundation behind the śāstra' },
                ].map((book, i) => (
                  <Reveal key={i} delay={i * 0.07}>
                    <div className="si-book-card">
                      <h4 className="si-book-card__name font-cinzel">{book.name}</h4>
                      <div className="si-book-card__row">
                        <span className="si-book-card__label">Use</span>
                        <span className="si-book-card__val font-serif">{book.use}</span>
                      </div>
                      <div className="si-book-card__row">
                        <span className="si-book-card__label">Pramāṇa</span>
                        <span className="si-book-card__val font-serif">{book.pramana}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </SectionBlock>

            {/* ── 3. Five Key Rules ── */}
            <SectionBlock tone="maroon" id="si-five-rules">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION III</span>
                <h3 className="si-h3 font-cinzel">Five Key Rules of South Indian Iconography</h3>
              </Reveal>

              {/* TĀLA-MĀNA */}
              <Reveal delay={0.05}>
                <div className="si-rule-card">
                  <h4 className="si-rule-card__title font-cinzel">1 — TĀLA-MĀNA (Proportion System)</h4>
                  <p className="si-body font-serif">
                    Every deity has a precise body proportion measured in <em>tālas</em> (hand-spans) and
                    <em> aṅgulas</em> (finger-widths). A standard 5-tāla figure (pañcatāla) is most common for
                    major temple deities. The head is typically 1/10th of the total height. Each limb, joint, and
                    facial feature follows exact mathematical ratios.
                  </p>
                </div>
              </Reveal>

              {/* MUDRA + ĀYUDHA — with image */}
              <Reveal delay={0.1}>
                <MediaRow image={mudhraImg} imageAlt="Mudra and Āyudha in South Indian Iconography">
                  <h4 className="si-rule-card__title font-cinzel">2 — MUDRA + ĀYUDHA (Gesture + Attribute)</h4>
                  <p className="si-body font-serif">
                    Each hand gesture (<em>mudrā</em>) and held object (<em>āyudha</em>) carries specific
                    meaning. Viṣṇu holds the Śaṅkha, Chakra, Gadā, and Padmā. Śiva holds the Triśūla,
                    Damaru, and performs Abhaya mudrā. The combination of mudrā + āyudha defines the
                    deity's identity, aspect, and blessing.
                  </p>
                </MediaRow>
              </Reveal>

              {/* ĀSANA — with image (reversed) */}
              <Reveal delay={0.15}>
                <MediaRow image={asanaImg} imageAlt="Āsana — Posture in South Indian Iconography" reverse>
                  <h4 className="si-rule-card__title font-cinzel">3 — ĀSANA (Posture)</h4>
                  <p className="si-body font-serif">
                    The seated or standing posture defines the deity's state: <em>sthānaka</em> (standing),
                    <em> āsīna</em> (seated), <em>sayujya</em> (reclining), or <em>nṛtya</em> (dancing).
                    Each posture follows strict rules — the angle of the torso, the position of the feet,
                    the tilt of the head — all prescribed by Śāstra.
                  </p>
                </MediaRow>
              </Reveal>

              {/* LAKṢAṆA */}
              <Reveal delay={0.2}>
                <div className="si-rule-card">
                  <h4 className="si-rule-card__title font-cinzel">4 — LAKṢAṆA (Characteristic Marks)</h4>
                  <p className="si-body font-serif">
                    Each deity has specific bodily marks that identify them: Viṣṇu's Śrīvatsa on the chest,
                    Śiva's third eye, Devī's third eye and crescent moon, Gaṇeśa's elephant head and broken
                    tusk. These <em>lakṣaṇas</em> are non-negotiable — without them, the murti is incomplete
                    and cannot be consecrated.
                  </p>
                </div>
              </Reveal>

              {/* PRABHĀVALI */}
              <Reveal delay={0.25}>
                <div className="si-rule-card">
                  <h4 className="si-rule-card__title font-cinzel">5 — PRABHĀVALI (Aura / Halo)</h4>
                  <p className="si-body font-serif">
                    The <em>prabhāvali</em> (aureole or halo) behind the deity represents divine radiance.
                    In South Indian style, it is typically ornate with flame motifs (<em>jvālā</em>), scrollwork,
                    and mythical makara heads. It frames the deity, creating a visual threshold between the
                    mundane and the sacred.
                  </p>
                </div>
              </Reveal>

              <GoldDivider />

              <SanskritQuote
                sanskrit="Yathā śāstre lakṣaṇam tathā pratimā kāryā"
                english='"As described in Śāstra, so the murti must be made."'
              />
            </SectionBlock>

            {/* ── 4. Pañcaloha Idols from Tamil Nadu — image + text ── */}
            <SectionBlock tone="cream" id="si-pancaloha-intro">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION IV</span>
                <h3 className="si-h3 font-cinzel">Pañcaloha Idols from Tamil Nadu</h3>
                <p className="si-sub font-serif">5 Metals = Alloy of Gods</p>
              </Reveal>
              <Reveal delay={0.1}>
                <SiImage src={part2Img} alt="Pañcaloha Idols from Tamil Nadu" />
              </Reveal>
            </SectionBlock>

            {/* ── 5. What is Pañcaloha? ── */}
            <SectionBlock tone="maroon" id="si-what-pancaloha">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION V</span>
                <h3 className="si-h3 font-cinzel">What is Pañcaloha?</h3>
                <p className="si-body font-serif">
                  Pañcaloha (literally "five metals") is a sacred alloy prescribed by Śilpa Śāstra for
                  casting temple deities. It is not merely a material choice — it is a theological statement.
                  Each metal carries divine associations and energy qualities that make the alloy suitable
                  for housing the living presence of a deity.
                </p>
                <p className="si-body font-serif">
                  <strong>Standard Composition:</strong> Gold (Suvarṇa), Silver (Rajata), Copper (Tāmra),
                  Zinc (Yashada), and Lead (Nāga). The traditional ratio is 1:1:4:1/8:1/8 by weight,
                  though regional variations exist.
                </p>
                <div className="si-highlight-box">
                  <p className="si-highlight-box__text font-cinzel">
                    Prāṇa-Pratiṣṭhā Rule: Only a properly made Pañcaloha murti that follows Śāstra proportions
                    can receive Prāṇa-Pratiṣṭhā (installation of divine breath/life).
                  </p>
                </div>
              </Reveal>
            </SectionBlock>

            {/* ── 6. Why Pañcaloha in Tamil Nadu? ── */}
            <SectionBlock tone="cream" id="si-why-pancaloha">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION VI</span>
                <h3 className="si-h3 font-cinzel">Why Pañcaloha in Tamil Nadu?</h3>
                <p className="si-body font-serif">
                  Tamil Nadu has the oldest continuous tradition of Pañcaloha casting in the world. The
                  Chola dynasty (9th–13th century CE) perfected the lost-wax (<em>cire perdue</em>) method
                  for creating Pañcaloha deities. The tradition continues unbroken through hereditary
                  <em> Śilpi</em> (sculptor) families in Swamimalai, Kumbakonam, and Thanjavur.
                </p>
                <p className="si-body font-serif">
                  Every major temple in Tamil Nadu — from Madurai Meenakshi to Rameswaram — houses
                  Pañcaloha processional deities (<em>utsava mūrti</em>) that are used in daily worship,
                  festivals, and temple processions.
                </p>
              </Reveal>
            </SectionBlock>

            {/* ── 7. Famous Pañcaloha Types ── */}
            <SectionBlock tone="maroon" id="si-types-pancaloha">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION VII</span>
                <h3 className="si-h3 font-cinzel">Famous Pañcaloha Types in Tamil Nadu</h3>
              </Reveal>
              <SiTable
                headers={['Type', 'Description', 'Use']}
                rows={[
                  ['Śuddha Pañcaloha', 'All five metals in exact Śāstra ratio', 'Major temple deities, Prāṇa-Pratiṣṭhā eligible'],
                  ['Rajata Pañcaloha', 'Higher silver content', 'Premium processional idols, special worship'],
                  ['Tāmra Pañcaloha', 'Higher copper content', 'Household deities, daily worship'],
                  ['Kāṃsya', 'Bronze alloy (copper + tin)', 'Natarāja, specific dancing forms'],
                ]}
              />
              <GoldDivider />
              <p className="si-body font-serif" style={{ marginTop: 12 }}>
                <strong>Prāṇa-Pratiṣṭhā Rule:</strong> Only Śuddha Pañcaloha or correctly proportioned
                alloys can receive full Prāṇa-Pratiṣṭhā. Impure or incorrectly composed alloys are considered
                unsuitable for temple installation.
              </p>
            </SectionBlock>

            {/* ── 8. Stone Sculpture — South India vs North India — image + text ── */}
            <SectionBlock tone="cream" id="si-stone-sculpture">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION VIII</span>
                <h3 className="si-h3 font-cinzel">Stone Sculpture — South India vs North India</h3>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaRow image={ganaImg} imageAlt="South Indian stone sculpture — Gana figures">
                  <p className="si-body font-serif">
                    The Indian subcontinent developed two distinct stone sculptural traditions, each governed
                    by its own branch of Śilpa Śāstra: the <strong>Drāviḍa</strong> (South Indian) and the
                    <strong> Nāgara</strong> (North Indian) styles.
                  </p>
                </MediaRow>
              </Reveal>
            </SectionBlock>

            {/* ── 9. South Indian Stone Style — Drāviḍa ── */}
            <SectionBlock tone="maroon" id="si-dravida">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION IX</span>
                <h3 className="si-h3 font-cinzel">South Indian Stone Style — Drāviḍa</h3>
                <p className="si-body font-serif">
                  The Drāviḍa style is characterized by rounded, full-bodied figures with smooth contours,
                  elaborate jewelry, and serene facial expressions. Deities appear more earthly and approachable,
                  reflecting the South Indian emphasis on devotion (<em>bhakti</em>) and grace. Temple sculptures
                  are deeply integrated into the architectural programme — every pillar, wall, and gateway
                  carries narrative and decorative sculpture.
                </p>
              </Reveal>
            </SectionBlock>

            {/* ── 10. North Indian Stone Style — Nāgara ── */}
            <SectionBlock tone="cream" id="si-nagara">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION X</span>
                <h3 className="si-h3 font-cinzel">North Indian Stone Style — Nāgara</h3>
                <p className="si-body font-serif">
                  The Nāgara style favors more angular, elongated figures with intricate surface ornamentation,
                  sensuous curves, and dynamic postures. Deities often appear more idealized and celestial.
                  The śikhara (tower) style, the bracket figures, and the elaborate toraṇa (gateway) carvings
                  are distinctive Nāgara features.
                </p>
              </Reveal>
            </SectionBlock>

            {/* ── 11. Quick Comparison ── */}
            <SectionBlock tone="maroon" id="si-comparison">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XI</span>
                <h3 className="si-h3 font-cinzel">Quick Comparison — Śāstra Wise</h3>
              </Reveal>
              <SiTable
                headers={['Feature', 'South India — Drāviḍa', 'North India — Nāgara']}
                rows={[
                  ['Main Śāstra', 'Mānasāra, Mayamata, Kāśyapa Śilpa', 'Mānasāra, Śilparatna, Nārada Śilpa'],
                  ['Primary Material', 'Granite, Śilpa Śāstra stone, Pañcaloha', 'Sandstone, Marble, Pañcaloha'],
                  ['Body Proportion', 'Pañcatāla (5-tāla), rounded forms', 'Aṣṭatāla (8-tāla), elongated forms'],
                  ['Pose', 'More static, serene, grounded', 'More dynamic, sensuous, celestial'],
                  ['Jewelry', 'Heavy, ornate, deeply carved', 'Intricate, surface-level ornament'],
                  ['Theme', 'Devotion (bhakti), grace, accessibility', 'Cosmic power, celestial beauty'],
                  ['Temple Architecture', 'Vimana, gopuram, mandapa', 'Śikhara, toraṇa, jaṅghā'],
                  ['Purāṇa Links', 'Śiva Purāṇa, Viṣṇu Purāṇa, Devī Bhāgavata', 'Viṣṇu Purāṇa, Śiva Purāṇa, Nāṭyaśāstra'],
                  ['Signature Style', 'Roundness, warmth, devotion', 'Elegance, dynamism, cosmic energy'],
                ]}
              />
            </SectionBlock>

            {/* ── 12. Five Must-Know Terms — image + table ── */}
            <SectionBlock tone="cream" id="si-terms">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XII</span>
                <h3 className="si-h3 font-cinzel">Five Must-Know Śilpa Śāstra Terms</h3>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaRow image={part4Img} imageAlt="Five Must-Know Śilpa Śāstra Terms" reverse>
                  <SiTable
                    headers={['Term', 'Meaning']}
                    rows={[
                      ['Pratimā', 'The complete murti / image'],
                      ['Tāla', 'Unit of proportion (hand-span)'],
                      ['Aṅgula', 'Finger-width unit'],
                      ['Bīja', 'Seed form / basic geometry'],
                      ['Prāṇa-Pratiṣṭhā', 'Installation of divine life'],
                    ]}
                  />
                </MediaRow>
              </Reveal>
            </SectionBlock>

            {/* ── 13. Śāstra Conclusion ── */}
            <SectionBlock tone="maroon" id="si-conclusion-1">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XIII</span>
                <h3 className="si-h3 font-cinzel">Śāstra Conclusion</h3>
                <p className="si-body font-serif">
                  South Indian iconography is not merely an art form — it is a sacred science where every
                  proportion, every gesture, every material choice is governed by divine revelation preserved
                  in Śilpa Śāstra. The sculptor (<em>śilpi</em>) is not an artist in the modern sense but a
                  ritual practitioner whose work is an act of worship. The murti that emerges from his hands
                  carries the weight of millennia of unbroken tradition.
                </p>
                <SanskritQuote
                  sanskrit="Śilpaṁ jñānaṁ tapaḥ śuddham"
                  english='"Śilpa (sacred craft) is pure knowledge, pure austerity."'
                />
              </Reveal>
            </SectionBlock>

            {/* ── 14. Pañcaloha — South vs North — image left + content right ── */}
            <section id="si-pancaloha-south-north" className="si-block si-block--cream si-block--wide">
              <div className="si-block__inner">
                <Reveal>
                  <div className="si-media si-media--featured">
                    <div className="si-media__img">
                      <figure className="si-img">
                        <div className="si-img__wrap">
                          <img src={pamchalohaImg} alt="Pañcaloha Idols — South vs North Indian Style" />
                        </div>
                      </figure>
                    </div>
                    <div className="si-media__text">
                      <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XIV</span>
                      <h3 className="si-h3 font-cinzel">Pañcaloha Idols — South vs North Indian Style</h3>
                      <p className="si-sub font-serif">How It's Made &bull; Models &bull; Benefits</p>
                      <p className="si-body font-serif">
                        While both South and North Indian traditions use Pañcaloha, the sculptural style,
                        proportion system, and finishing techniques differ significantly. South Indian Pañcaloha
                        idols follow the Drāviḍa proportion system with rounded forms and heavy ornamentation.
                        North Indian Pañcaloha idols follow the Nāgara system with more elongated proportions
                        and intricate surface work.
                      </p>
                      <p className="si-body font-serif">
                        The South Indian tradition emphasises <em>bhakti</em> (devotion) — the murti is crafted
                        to appear warm, accessible, and grounded, inviting the devotee into a personal relationship
                        with the divine. The North Indian tradition leans toward celestial grandeur — the murti
                        radiates cosmic power and idealised beauty.
                      </p>
                      <p className="si-body font-serif">
                        In both traditions, the alloy composition follows Śilpa Śāstra prescriptions. The casting
                        method — typically lost-wax (<em>madhūcchiṣṭa</em>) — is also shared, though regional
                        variations in finishing, patina, and ornament detail create distinct visual identities.
                      </p>
                      <div className="si-highlight-box si-highlight-box--cream">
                        <p className="si-highlight-box__text font-cinzel">
                          Both traditions require Prāṇa-Pratiṣṭhā for the murti to become a living deity.
                          The metal, the form, and the consecration work together as one sacred science.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ── 15. How It's Made — Seven Steps — image + timeline ── */}
            <SectionBlock tone="maroon" id="si-how-made">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XV</span>
                <h3 className="si-h3 font-cinzel">How It's Made — Seven Steps</h3>
                <p className="si-sub font-serif">The Sacred Lost-Wax Method (Madhūcchiṣṭa Vidhāna)</p>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaRow image={vax1Img} imageAlt="Lost-wax Pañcaloha casting process" reverse>
                  <div className="si-timeline si-timeline--compact">
                    {[
                      { step: 'MODEL / PRATIMA', desc: 'Clay model sculpted following exact Śāstra proportions.' },
                      { step: 'WAX MODEL', desc: 'Wax replica capturing every detail — ornaments, mudrās, expression.' },
                      { step: 'CLAY MOULD', desc: 'Fine clay layers applied over the wax model.' },
                      { step: 'MELTING', desc: 'Mould heated. Wax melts and drains out — "lost wax."' },
                      { step: 'METAL MELTING', desc: 'Pañcaloha alloy smelted at precise temperatures.' },
                      { step: 'POURING', desc: 'Molten Pañcaloha poured into the empty mould.' },
                      { step: 'FINISHING + PRĀṆA-PRATIṢṬHĀ', desc: 'Idol refined, polished, and consecrated.' },
                    ].map((item, i) => (
                      <Reveal key={i} delay={i * 0.04}>
                        <div className="si-timeline__item">
                          <div className="si-timeline__marker">
                            <span className="si-timeline__number">{i + 1}</span>
                            {i < 6 && <span className="si-timeline__arrow" aria-hidden="true">↓</span>}
                          </div>
                          <div className="si-timeline__content">
                            <h4 className="si-timeline__step font-cinzel">{item.step}</h4>
                            <p className="si-timeline__desc font-serif">{item.desc}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </MediaRow>
              </Reveal>
            </SectionBlock>

            {/* ── 16. Benefits of Worship — image + grid ── */}
            <SectionBlock tone="cream" id="si-benefits">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XVI</span>
                <h3 className="si-h3 font-cinzel">Benefits of Worship — Śāstra + Practical</h3>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaRow image={southIndImg} imageAlt="Benefits of Pañcaloha worship">
                  <div className="si-benefit-grid si-benefit-grid--inline">
                    {[
                      { title: 'Pañcaloha Idol Benefits', items: ['Believed to attract positive cosmic energy', 'Considered suitable for Prāṇa-Pratiṣṭhā', 'Traditional belief: supports spiritual growth', 'Durable for generations'] },
                      { title: 'Brass Idol Benefits', items: ['Affordable and widely available', 'Suitable for daily household worship', 'Traditional association with Viṣṇu and Devī', 'Easy to maintain and clean'] },
                      { title: 'Copper Idol Benefits', items: ['Association with energy and vitality', 'Purifying properties per traditional belief', 'Excellent for Śiva and Gaṇeśa worship', 'Electromagnetic balance — traditional claim'] },
                      { title: 'Bronze Idol Benefits', items: ['Ideal for dancing forms (Natarāja)', 'High durability and corrosion resistance', 'Preferred for processional deities', 'Suitable for temple installations'] },
                    ].map((card, i) => (
                      <div key={i} className="si-benefit-card">
                        <h4 className="si-benefit-card__title font-cinzel">{card.title}</h4>
                        <ul className="si-benefit-card__list">
                          {card.items.map((item, j) => (
                            <li key={j} className="font-serif">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </MediaRow>
              </Reveal>
            </SectionBlock>

            {/* ── 17. Which Metal for Which God ── */}
            <SectionBlock tone="maroon" id="si-metal-god">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XVII</span>
                <h3 className="si-h3 font-cinzel">Which Metal for Which God</h3>
              </Reveal>
              <SiTable
                headers={['Deity', 'Best Metal', 'Reason', 'Śāstra']}
                rows={[
                  ['Śiva', 'Pañcaloha / granite', 'Cosmic totality; five elements in harmony', 'Śaiva Āgama'],
                  ['Viṣṇu', 'Pañcaloha (gold-enriched)', 'Preservation energy; Vaikuṇṭha radiance', 'Pāñcarātra Āgama'],
                  ['Devī', 'Pañcaloha / silver-enriched', 'Śakti energy; lunar coolness', 'Devī Āgama'],
                  ['Gaṇeśa', 'Pañcaloha / copper', 'Obstacle removal; earthly energy grounding', 'Śilpa Ratna'],
                  ['Natarāja', 'Bronze (Kāṃsya)', 'Fluidity for cosmic dance form', 'Śaiva Āgama'],
                  ['Nava-Graha', 'Pañcaloha / specific metals', 'Each planet associated with specific metal', 'Jyotiṣa Śāstra'],
                ]}
              />
            </SectionBlock>

            {/* ── 18. Five Rules Before Buying/Worshipping ── */}
            <SectionBlock tone="cream" id="si-five-rules-buy">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />SECTION XVIII</span>
                <h3 className="si-h3 font-cinzel">Five Rules Before Buying / Worshipping</h3>
              </Reveal>
              <div className="si-rules-five">
                {[
                  { num: 'I', title: 'Verify Śāstra Proportions', desc: 'The murti must follow correct tāla-māna. Ask the maker about the proportion system used. A murti that ignores these proportions is decorative, not sacred.' },
                  { num: 'II', title: 'Check Pañcaloha Composition', desc: 'Ensure the alloy genuinely contains the five prescribed metals. Impure or substitute alloys may not be suitable for Prāṇa-Pratiṣṭhā.' },
                  { num: 'III', title: "Confirm the Maker's Lineage", desc: 'A sculptor from a traditional Śilpi lineage who has received guru-upadeśa is considered more reliable than a commercial manufacturer.' },
                  { num: 'IV', title: 'Verify Mudrā and Āyudha', desc: "Check that the hand gestures and held objects match the deity's identity and the specific aspect being depicted. Errors here change the deity's meaning." },
                  { num: 'V', title: 'Seek Guru Guidance', desc: "Before purchasing or installing a murti for worship, consult a qualified spiritual guide who can verify the murti's suitability and arrange proper consecration." },
                ].map((rule, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="si-rule-num">
                      <span className="si-rule-num__badge">{rule.num}</span>
                      <div className="si-rule-num__text">
                        <h4 className="si-rule-num__title font-cinzel">{rule.title}</h4>
                        <p className="si-rule-num__desc font-serif">{rule.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </SectionBlock>

            {/* ── 19. Final Conclusion ── */}
            <SectionBlock tone="maroon" id="si-final">
              <Reveal>
                <span className="si-eyebrow"><span className="si-eyebrow__rule" />FINAL WORD</span>
                <h3 className="si-h3 font-cinzel">Pañcaloha — Final Śilpa Śāstra Conclusion</h3>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="si-conclusion-grid">
                  <div className="si-conclusion-card si-conclusion-card--gold">
                    <span className="si-conclusion-card__label">Pañcaloha</span>
                    <span className="si-conclusion-card__val font-cinzel">Living God</span>
                  </div>
                  <div className="si-conclusion-card">
                    <span className="si-conclusion-card__label">Brass</span>
                    <span className="si-conclusion-card__val font-cinzel">Daily Pūjā</span>
                  </div>
                  <div className="si-conclusion-card">
                    <span className="si-conclusion-card__label">Copper</span>
                    <span className="si-conclusion-card__val font-cinzel">Energy + Health</span>
                  </div>
                  <div className="si-conclusion-card">
                    <span className="si-conclusion-card__label">Bronze</span>
                    <span className="si-conclusion-card__val font-cinzel">Art + Mokṣa</span>
                  </div>
                </div>
              </Reveal>

              <GoldDivider />

              <Reveal delay={0.2}>
                <SanskritQuote
                  sanskrit="Yasmin dhātau yā devatā tatra sā sannidhiṁ bhavet"
                  english="In whichever alloy the deity is made, there the divine presence manifests. The metal is not mere matter — it becomes the body of God through the Śāstra-given form and the consecration breath."
                />
              </Reveal>

              <Reveal delay={0.3}>
                <div className="si-final-cta">
                  <GoldenButton
                    label="Book Consultation on WhatsApp"
                    size="lg"
                    onClick={() => window.open(WA_URL, '_blank')}
                  />
                </div>
              </Reveal>
            </SectionBlock>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
