import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import sriChakrasImg from '../../assets/detail-sri-chakras.jpeg';
import tantraKulaImg from '../../assets/detail-tantra-kula.jpeg';
import brahmanaVedamImg from '../../assets/detail-brahmana-vedam.jpeg';
import './OfferingDetail.css';

export default function YantraDetail() {
  const navigate = useNavigate();

  return (
    <div className="od-page">
      <Navbar />

      <button className="od-back" onClick={() => navigate('/offerings')}>
        <span className="od-back__arrow">←</span> Back to Offerings
      </button>

      {/* ═══ HERO ═══ */}
      <section className="od-hero">
        <div className="od-hero__content">
          <span className="od-hero__eyebrow">🔱 Sacred Geometry &amp; Sound</span>
          <h1 className="od-hero__title">YANTRA vs MANTRA vs TANTRA</h1>
          <p className="od-hero__subtitle">
            Meaning, Rituals, Uses, Sādhana, Deity Connections, Śāstra &amp; Traditional References
          </p>
          <div className="od-hero__highlight">
            Three interconnected streams of spiritual practice in many traditions
            of Sanātana Dharma.
          </div>
          <div className="od-hero__image-wrap">
            <img src={sriChakrasImg} alt="Śrī Chakra — Sacred Yantra" className="od-hero__image" />
          </div>
        </div>
      </section>

      {/* ═══ UNDERSTANDING THE DIFFERENCE — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Knowledge</span>
          <h2 className="od-section__heading">Understanding the Difference</h2>
          <p className="od-section__desc">
            Mantra, Yantra and Tantra represent three interconnected dimensions of
            spiritual practice. While each has its own distinct identity, they often
            work together in traditional worship and Sādhana.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>MANTRA</th>
                  <th>YANTRA</th>
                  <th>TANTRA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Meaning</strong></td>
                  <td>Sacred sound formula</td>
                  <td>Sacred geometric representation</td>
                  <td>A broader system of practice</td>
                </tr>
                <tr>
                  <td><strong>Form</strong></td>
                  <td>Sound / vibration</td>
                  <td>Shape / geometry</td>
                  <td>Method / ritual system</td>
                </tr>
                <tr>
                  <td><strong>Traditional Element Association</strong></td>
                  <td>Ākāśa</td>
                  <td>Pṛthvī</td>
                  <td>Multiple elements and practices</td>
                </tr>
                <tr>
                  <td><strong>How Used</strong></td>
                  <td>Japa and recitation</td>
                  <td>Worship, contemplation and ritual placement</td>
                  <td>Ritual integrating multiple practices</td>
                </tr>
                <tr>
                  <td><strong>Duration</strong></td>
                  <td>From brief practice to long-term discipline</td>
                  <td>Can be kept and worshipped according to tradition</td>
                  <td>Often requires sustained disciplined practice</td>
                </tr>
                <tr>
                  <td><strong>Example</strong></td>
                  <td>Om Gaṁ Gaṇapataye Namaḥ</td>
                  <td>Śrī Yantra</td>
                  <td>Śrī Vidyā traditions</td>
                </tr>
                <tr>
                  <td><strong>Traditional Focus</strong></td>
                  <td>Mental and devotional discipline</td>
                  <td>Sacred form and concentration</td>
                  <td>Integrated spiritual practice</td>
                </tr>
                <tr>
                  <td><strong>Textual Traditions</strong></td>
                  <td>Vedas, Upaniṣads and later traditions</td>
                  <td>Yantra and Tantric texts</td>
                  <td>Tantra texts and Guru traditions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-divider">
            <span className="od-divider__line" />
            <span className="od-divider__symbol">✦</span>
            <span className="od-divider__line" />
          </div>

          <div className="od-summary-row">
            <div className="od-summary-card od-summary-card--maroon">
              <div className="od-summary-card__title">MANTRA</div>
              <div className="od-summary-card__text">Sacred Sound</div>
            </div>
            <div className="od-summary-card od-summary-card--cream">
              <div className="od-summary-card__title">YANTRA</div>
              <div className="od-summary-card__text">Sacred Form</div>
            </div>
            <div className="od-summary-card od-summary-card--maroon">
              <div className="od-summary-card__title">TANTRA</div>
              <div className="od-summary-card__text">Integrated Method</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TANTRA KULA IMAGE — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <div className="od-split od-split--reverse">
            <div className="od-split__img-wrap">
              <img src={tantraKulaImg} alt="Tantra Kula traditions" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Interconnected Traditions</span>
              <h2 className="od-section__heading">The Three Pillars of Sādhana</h2>
              <p className="od-section__desc">
                In many traditions of Sanātana Dharma, Mantra, Yantra and Tantra
                are not separate practices but interconnected dimensions of a single
                spiritual path. The sound of the Mantra gives life to the Yantra,
                while Tantra provides the framework within which both are practiced.
              </p>
              <p className="od-section__desc">
                The Tantric texts describe these three as inseparable — like the
                fire, the fuel and the offering in a sacred fire ritual, each
                essential and each supporting the others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MANTRA ŚĀSTRA — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Sound</span>
          <h2 className="od-section__heading">Mantra Śāstra</h2>
          <p className="od-section__desc">
            The science of sacred sound is one of the oldest and most fundamental
            branches of spiritual knowledge in Sanātana Dharma.
          </p>

          <div className="od-two-col">
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">📿</span> Three Broad Categories
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Vaidika Mantra</strong> — Mantras derived from the Vedas, characterised by specific metrical structures and Vedic chanting traditions</li>
                  <li><strong>Tāntrika Mantra</strong> — Mantras from Tantric texts, often involving specific deity invocations with Bīja syllables</li>
                  <li><strong>Paurāṇika Mantra</strong> — Mantras found in the Purāṇas, often simpler and accessible for household devotion</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">🎯</span> Practice Methods
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Japa</strong> — Repetitive recitation of the mantra, either aloud, whispered or mental</li>
                  <li><strong>Puraścaraṇa</strong> — An intensive programme of mantra repetition with specific ritual requirements</li>
                  <li><strong>Dīkṣā</strong> — Formal initiation where required, especially for Tantric mantras</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="od-subsection" style={{ marginTop: 32 }}>
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🙏</span> Traditional Purposes
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Chitta Śuddhi</strong> — Purification of the mind through regular recitation
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Devotional connection</strong> — Mantra serves as a sacred medium of invocation and remembrance, connecting the devotee to the deity
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Courage and spiritual discipline</strong> — Regular Mantra practice is traditionally associated with inner strength and dharmic resolve
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Focused practice</strong> — Mantra provides a concrete, accessible method for daily spiritual discipline
                </span>
              </div>
            </div>
          </div>

          <div className="od-callout od-callout--gold">
            <div className="od-callout__label">Traditional Account — Ajāmila</div>
            <div className="od-callout__text">
              The Bhāgavatam narrates the story of Ajāmila, who inadvertently
              chanted the name of Nārāyaṇa at the time of death, demonstrating
              the traditional understanding of the power of sacred Names. This
              is presented as a traditional account illustrating the significance
              of Nāma, not as a guaranteed outcome.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ YANTRA ŚĀSTRA — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Form</span>
          <h2 className="od-section__heading">Yantra Śāstra</h2>
          <p className="od-section__desc">
            The science of sacred geometry represents one of the most sophisticated
            and visually stunning traditions within Sanātana Dharma.
          </p>

          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🔮</span> Understanding Yantra
            </h3>
            <ul className="od-subsection__list">
              <li><strong>Sacred geometry</strong> — Yantras are precise geometric configurations representing cosmic principles and divine energies</li>
              <li><strong>Ritual and contemplative support</strong> — The Yantra serves as a focal point for meditation, worship and ritual practice</li>
              <li><strong>Deity's symbolic residence</strong> — In traditional understanding, the Yantra is regarded as the symbolic seat or abode of the deity</li>
              <li><strong>Consecration</strong> — According to tradition, a Yantra undergoes Prāṇa Pratiṣṭhā (consecration) to awaken it as a living seat of divine presence</li>
            </ul>
          </div>

          <div className="od-table-wrap">
            <table className="od-table od-table--maroon">
              <thead>
                <tr>
                  <th>Yantra</th>
                  <th>Associated Deity</th>
                  <th>Traditional Purpose</th>
                  <th>Textual / Traditional Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Śrī Yantra</strong></td>
                  <td>Śrī Lalitā Tripurasundarī</td>
                  <td>Spiritual evolution, prosperity, liberation</td>
                  <td>Śrī Vidyā traditions, Saundarya Laharī</td>
                </tr>
                <tr>
                  <td><strong>Gaṇeśa Yantra</strong></td>
                  <td>Gaṇapati</td>
                  <td>Removal of obstacles, new beginnings</td>
                  <td>Gaṇeśa Purāṇa, Tantric texts</td>
                </tr>
                <tr>
                  <td><strong>Kubera Yantra</strong></td>
                  <td>Kubera</td>
                  <td>Wealth and prosperity in traditional understanding</td>
                  <td>Purāṇic and Tantric traditions</td>
                </tr>
                <tr>
                  <td><strong>Nava-Graha Yantra</strong></td>
                  <td>Nine planets</td>
                  <td>Planetary harmonisation</td>
                  <td>Jyotiṣa and Tantric traditions</td>
                </tr>
                <tr>
                  <td><strong>Bagalāmukhī Yantra</strong></td>
                  <td>Bagalāmukhī</td>
                  <td>Stambhana and protection</td>
                  <td>Dasamahāvidyā traditions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-subsection" style={{ marginTop: 32 }}>
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🪷</span> Yantra Practice
            </h3>
            <ul className="od-subsection__list">
              <li><strong>Prāṇa Pratiṣṭhā</strong> — The formal consecration ceremony that traditionally awakens the Yantra</li>
              <li><strong>Daily Puja</strong> — Regular worship of the Yantra with mantras, flowers and offerings</li>
              <li><strong>Dhyāna</strong> — Meditation on the Yantra's form as a contemplative practice</li>
            </ul>
          </div>

          <div className="od-notice od-notice--warning" style={{ background: 'rgba(184,146,74,0.08)', borderColor: 'rgba(184,146,74,0.25)' }}>
            <span className="od-notice__icon">⚠</span>
            <span className="od-notice__text">
              Traditional texts describe various benefits of Yantra worship. These should
              be understood as traditional spiritual beliefs rather than guaranteed outcomes.
              A Yantra's effectiveness is traditionally understood to depend on proper
              consecration, regular worship and the devotee's sincerity.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ TANTRA ŚĀSTRA — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Method</span>
          <h2 className="od-section__heading">Tantra Śāstra</h2>
          <p className="od-section__desc">
            Tantra represents a diverse and sophisticated family of traditions and
            practices that integrate Mantra, Yantra, Mudrā, Nyāsa, Puja and Homa
            into comprehensive spiritual systems.
          </p>

          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">📜</span> Integrative Nature
            </h3>
            <ul className="od-subsection__list">
              <li>Tantra may integrate <strong>Mantra</strong> (sacred sound), <strong>Yantra</strong> (sacred geometry), <strong>Mudrā</strong> (ritual gestures), <strong>Nyāsa</strong> (ritual placement), <strong>Puja</strong> (worship) and <strong>Homa</strong> (fire offering)</li>
              <li>It provides a systematic framework for spiritual practice that engages multiple dimensions of consciousness</li>
              <li>Different Tantric traditions emphasise different elements according to their lineage and purpose</li>
            </ul>
          </div>

          <div className="od-two-col" style={{ marginTop: 24 }}>
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">👉</span> Dakṣiṇa Mārga
                </h3>
                <ul className="od-subsection__list">
                  <li>The right-hand path of Tantra</li>
                  <li>Emphasises traditional ritual purity and Vedic-Āgamic methods</li>
                  <li>Characterised by systematic, disciplined practice within established frameworks</li>
                  <li>Widely practised in mainstream temple traditions</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">👈</span> Vāma Mārga &amp; Kaula
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Vāma Mārga</strong> — The left-hand path incorporating unconventional methods for spiritual transformation</li>
                  <li><strong>Kaula traditions</strong> — A synthesis integrating elements of both paths within a framework of divine consciousness</li>
                  <li>Both require deeper understanding and are traditionally studied under qualified guidance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="od-notice od-notice--info">
            <span className="od-notice__icon">🙏</span>
            <span className="od-notice__text">
              Advanced Tantric disciplines should be undertaken only according to authentic
              tradition and appropriate qualified guidance. The information above is
              presented for educational purposes, not as instructions for practice.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ BRAHMANA VEDAM IMAGE — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <div className="od-split">
            <div className="od-split__img-wrap">
              <img src={brahmanaVedamImg} alt="Vedic and Tantric knowledge traditions" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Scriptural Heritage</span>
              <h2 className="od-section__heading">The Textual Foundation</h2>
              <p className="od-section__desc">
                The knowledge of Mantra, Yantra and Tantra is preserved across a vast
                corpus of texts — from the earliest Vedas to the later Tantric compositions.
                Each text contributes its own perspective, methodology and insights into
                these interconnected traditions.
              </p>
              <p className="od-section__desc">
                The Guru Paramparā plays an essential role in transmitting this knowledge,
                ensuring that the texts are understood and practiced within their proper
                traditional context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW SĀDHANA CONNECTS THEM — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Connection</span>
          <h2 className="od-section__heading">How Sādhana Connects Them</h2>
          <p className="od-section__desc">
            Different forms of Sādhana integrate Mantra, Yantra and Tantra in varying
            degrees, creating a spectrum of practice from simple to comprehensive.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Sādhana Type</th>
                  <th>Mantra</th>
                  <th>Yantra</th>
                  <th>Tantra</th>
                  <th>Traditional Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nāma Sādhana</strong></td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>No</td>
                  <td>Bhakti</td>
                </tr>
                <tr>
                  <td><strong>Mantra Sādhana</strong></td>
                  <td>Yes</td>
                  <td>Sometimes</td>
                  <td>Basic / Varies</td>
                  <td>Focused spiritual discipline</td>
                </tr>
                <tr>
                  <td><strong>Yantra Sādhana</strong></td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>May vary</td>
                  <td>Contemplation and ritual focus</td>
                </tr>
                <tr>
                  <td><strong>Tāntrika Sādhana</strong></td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Integrated</td>
                  <td>Advanced spiritual practice</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-callout od-callout--gold">
            <div className="od-callout__label">Illustrative Example — Gaṇapati</div>
            <div className="od-callout__text">
              In the worship of Gaṇapati, the Mantra "Om Gaṁ Gaṇapataye Namaḥ" is
              the sacred sound, the Gaṇeśa Yantra is the sacred form, and the Tantric
              ritual framework integrates both into a complete practice. This is presented
              as a traditional illustrative example, not as mandatory ritual instruction.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPORTANT REFERENCES — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">References</span>
          <h2 className="od-section__heading">Important Śāstra and Traditional References</h2>

          <div className="od-ref-groups">
            <div className="od-ref-group od-ref-group--maroon">
              <h3 className="od-ref-group__title">Vedic Traditions</h3>
              <ul className="od-ref-group__list">
                <li>Ṛg Veda — Hymns to Agni and cosmic principles</li>
                <li>Yajurveda — Ritual mantras and sacrificial formulas</li>
                <li>Atharvaveda — Mantras for protection and healing</li>
                <li>Brāhmaṇa texts — Ritual methodology</li>
                <li>Upaniṣads — Philosophical foundations</li>
              </ul>
            </div>
            <div className="od-ref-group od-ref-group--maroon">
              <h3 className="od-ref-group__title">Purāṇic Traditions</h3>
              <ul className="od-ref-group__list">
                <li>Śiva Purāṇa — Śaiva worship and philosophy</li>
                <li>Devī Bhāgavata — Śākta traditions and goddess worship</li>
                <li>Viṣṇu Purāṇa — Vaiṣṇava traditions</li>
                <li>Padma Purāṇa — Ritual and devotional practices</li>
                <li>Gaṇeśa Purāṇa — Gaṇapati worship traditions</li>
              </ul>
            </div>
            <div className="od-ref-group od-ref-group--maroon">
              <h3 className="od-ref-group__title">Tantra Texts</h3>
              <ul className="od-ref-group__list">
                <li>Kulārṇava Tantra — Comprehensive Tantric teachings</li>
                <li>Śāradā Tilaka — Tantric ritual manual</li>
                <li>Tantrasāra — Essential Tantric knowledge</li>
                <li>Rudra Yāmala — Śaiva Tantric traditions</li>
                <li>Saundarya Laharī — Śrī Vidyā devotional poetry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHICH PRACTICE SHOULD YOU CHOOSE — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Guidance</span>
          <h2 className="od-section__heading">Which Practice Should You Choose?</h2>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Your Goal</th>
                  <th>Traditional Practice</th>
                  <th>Commitment</th>
                  <th>Guidance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Peace and Bhakti</td>
                  <td><strong>Mantra / Nāma Japa</strong></td>
                  <td>Short daily practice</td>
                  <td>Generally accessible according to tradition</td>
                </tr>
                <tr>
                  <td>Yantra worship</td>
                  <td><strong>Yantra + regular Puja</strong></td>
                  <td>Regular</td>
                  <td>Follow proper consecration and tradition</td>
                </tr>
                <tr>
                  <td>Serious advanced Sādhana</td>
                  <td><strong>Tantric practice</strong></td>
                  <td>Extended</td>
                  <td>Authentic Guru guidance essential</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="od-closing">
        <div className="od-closing__inner">
          <span className="od-hero__eyebrow">Summary</span>
          <h2 className="od-hero__title" style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}>
            The Three Streams of Sādhana
          </h2>

          <div className="od-closing__equation">
            <div className="od-closing__eq-item od-closing__eq-item--maroon">MANTRA — Sacred Sound</div>
            <div className="od-closing__eq-item od-closing__eq-item--gold">YANTRA — Sacred Form</div>
            <div className="od-closing__eq-item od-closing__eq-item--maroon">TANTRA — Integrated Practice</div>
          </div>

          <div className="od-closing__quote">
            Together, these traditions can form different dimensions of Sādhana: sound,
            symbol, ritual, discipline and devotion. Each path offers its own unique
            approach to the timeless quest for divine connection, and together they
            create a rich tapestry of spiritual practice.
          </div>

          <div className="od-closing__references">
            <div className="od-closing__ref-title">Traditional References</div>
            <ul className="od-closing__ref-list">
              <li className="od-closing__ref-item">Saundarya Laharī</li>
              <li className="od-closing__ref-item">Kulārṇava Tantra</li>
              <li className="od-closing__ref-item">Śāradā Tilaka</li>
              <li className="od-closing__ref-item">Ṛg Veda</li>
              <li className="od-closing__ref-item">Bhagavad Gītā</li>
              <li className="od-closing__ref-item">Śrīmad Bhāgavatam</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
