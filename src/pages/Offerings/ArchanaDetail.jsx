import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import marakathaImg from '../../assets/detail-marakatha-lingam.jpeg';
import archanasImg from '../../assets/detail-archanas.jpeg';
import part3Img from '../../assets/detail-part3.jpeg';
import './OfferingDetail.css';

export default function ArchanaDetail() {
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
          <span className="od-hero__eyebrow">🌸 Sacred Worship</span>
          <h1 className="od-hero__title">ARCHANA vs ARĀDHANA vs PUJA</h1>
          <p className="od-hero__subtitle">
            Difference, Importance, Benefits, Sādhana, Tantra, Śāstra &amp; Purāṇic References
          </p>
          <div className="od-hero__highlight">
            All three are forms of worship, but their depth, method and ritual structure are different.
          </div>
          <div className="od-hero__image-wrap">
            <img src={marakathaImg} alt="Marakatha Lingam — Sacred worship" className="od-hero__image" />
          </div>
        </div>
      </section>

      {/* ═══ UNDERSTANDING THE THREE FORMS — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Knowledge</span>
          <h2 className="od-section__heading">Understanding the Three Forms of Worship</h2>
          <p className="od-section__desc">
            Archana, Arādhana and Puja represent three interconnected yet distinct approaches
            to deity worship within Sanātana Dharma, each with its own method, depth and
            traditional context.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>ARCHANA</th>
                  <th>ARĀDHANA</th>
                  <th>PUJA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Meaning</strong></td>
                  <td>Worship through names and praise</td>
                  <td>Deep devotional service intended to please the Deity</td>
                  <td>Structured ritual worship</td>
                </tr>
                <tr>
                  <td><strong>Typical Time</strong></td>
                  <td>Short</td>
                  <td>Medium to extended</td>
                  <td>Often more elaborate</td>
                </tr>
                <tr>
                  <td><strong>Method</strong></td>
                  <td>Nāma and Nāma-Archana</td>
                  <td>Upacāra, Bhāva and Seva</td>
                  <td>Structured ritual with prescribed upacāras</td>
                </tr>
                <tr>
                  <td><strong>Main Focus</strong></td>
                  <td>Chanting and remembrance</td>
                  <td>Love, devotion and service</td>
                  <td>Ritual, mantra and worship</td>
                </tr>
                <tr>
                  <td><strong>Who Can Practice</strong></td>
                  <td>Devotees according to tradition</td>
                  <td>Devotees</td>
                  <td>Depending on the ritual, simple worship by devotees or formal worship by trained priests</td>
                </tr>
                <tr>
                  <td><strong>Example</strong></td>
                  <td>Sahasranāma Archana</td>
                  <td>Daily Deity Seva</td>
                  <td>Satyanārāyaṇa Puja</td>
                </tr>
                <tr>
                  <td><strong>Traditional Result</strong></td>
                  <td>Mental focus and devotion</td>
                  <td>Devatā-prīti and grace</td>
                  <td>Śānti and ritual intentions</td>
                </tr>
                <tr>
                  <td><strong>Textual Traditions</strong></td>
                  <td>Purāṇas and Stotras</td>
                  <td>Āgamas and Bhakti traditions</td>
                  <td>Āgamas and Gṛhya traditions</td>
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
              <div className="od-summary-card__title">ARCHANA</div>
              <div className="od-summary-card__text">Calling and praising through sacred names</div>
            </div>
            <div className="od-summary-card od-summary-card--cream">
              <div className="od-summary-card__title">ARĀDHANA</div>
              <div className="od-summary-card__text">Serving with devotion and love</div>
            </div>
            <div className="od-summary-card od-summary-card--maroon">
              <div className="od-summary-card__title">PUJA</div>
              <div className="od-summary-card__text">Welcoming and worshipping through ritual</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ARCHANAS IMAGE + CONTENT — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <div className="od-split">
            <div className="od-split__img-wrap">
              <img src={archanasImg} alt="Archana worship with flowers and sacred names" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Devotional Worship</span>
              <h2 className="od-section__heading">The Heart of Deity Worship</h2>
              <p className="od-section__desc">
                In the devotional traditions of Sanātana Dharma, worship of the deity
                is not merely a ritual act but a relationship — a dialogue between the
                devotee's heart and the divine form. Whether through the simple chanting
                of names, the tender offering of flowers, or the elaborate performance
                of sixteen upacāras, each form of worship carries the potential for
                deep spiritual connection.
              </p>
              <p className="od-section__desc">
                The Purāṇas describe the deity's form as <em>sakāma</em> — responded
                to with grace when approached with genuine devotion, humility and
                sincerity of heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPORTANCE AND BENEFITS — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Significance</span>
          <h2 className="od-section__heading">Importance and Benefits</h2>
          <p className="od-section__desc">
            Each form of worship carries its own traditional significance, purpose
            and benefits as described across Śāstra, Purāṇas and Āgamic literature.
          </p>

          {/* Archana */}
          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🪷</span> Archana
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Nāma and devotional remembrance</strong> — The chanting of the deity's
                  sacred names is considered one of the most accessible and powerful forms
                  of devotion, described extensively in the Purāṇas and Nāma literature.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Ekāgratā and concentration</strong> — The focused recitation of
                  names cultivates one-pointed concentration and mental stillness.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Accessibility for regular practice</strong> — Archana requires minimal
                  materials and can be performed daily, making it ideal for sustained devotional practice.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Short daily worship</strong> — Even a brief Archana with sincere
                  devotion is traditionally considered highly meritorious and spiritually beneficial.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">5</span>
                <span className="od-benefit__text">
                  <strong>Traditional devotional protection</strong> — The regular recitation
                  of deity names is traditionally associated with divine protection and grace.
                </span>
              </div>
            </div>
          </div>

          <div className="od-divider">
            <span className="od-divider__line" />
            <span className="od-divider__symbol">◆</span>
            <span className="od-divider__line" />
          </div>

          {/* Arādhana */}
          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🙏</span> Arādhana
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Bhāva and Seva</strong> — Arādhana emphasises the inner attitude
                  of love, devotion and selfless service toward the deity.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Devatā-prīti</strong> — The sincere offering of service with devotion
                  is traditionally understood as pleasing to the deity and inviting divine grace.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Humility and purification of ego</strong> — The act of serving the
                  deity with humility is traditionally considered a practice that purifies
                  the ego and cultivates surrender.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Daily devotional relationship</strong> — Arādhana fosters a continuous,
                  living relationship between the devotee and the deity through daily acts of care.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">5</span>
                <span className="od-benefit__text">
                  <strong>Gṛha worship and spiritual discipline</strong> — Regular Arādhana
                  at home is considered a foundational practice in bhakti traditions.
                </span>
              </div>
            </div>
          </div>

          <div className="od-divider">
            <span className="od-divider__line" />
            <span className="od-divider__symbol">◆</span>
            <span className="od-divider__line" />
          </div>

          {/* Puja */}
          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🪔</span> Puja
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Structured worship</strong> — Puja follows a prescribed order of
                  upacāras (offerings) as described in Āgamic and Gṛhya traditions, creating
                  a complete ritual experience.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Upacāras and ritual order</strong> — The systematic offering of
                  water, flowers, incense, light and food follows traditional sequences
                  that honour the deity as an honoured guest.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Festival and collective worship</strong> — Elaborate Pujas are
                  central to temple festivals, community celebrations and significant
                  spiritual occasions.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Specific devotional intentions</strong> — Different forms of Puja
                  are traditionally performed for specific purposes such as Śānti, health,
                  prosperity and spiritual growth.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">5</span>
                <span className="od-benefit__text">
                  <strong>Traditional family and community worship</strong> — Puja has been
                  a cornerstone of family and community spiritual life across generations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PART 3 IMAGE — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <div className="od-split od-split--reverse">
            <div className="od-split__img-wrap">
              <img src={part3Img} alt="Traditional worship practices" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Scriptural Context</span>
              <h2 className="od-section__heading">Traditional References</h2>
              <p className="od-section__desc">
                The Purāṇas, Āgamas and Stotra literature provide extensive guidance on
                the performance and significance of Archana, Arādhana and Puja. The
                Padma Purāṇa describes the glory of Nāma chanting, while the Viṣṇu
                Purāṇa details the significance of proper deity worship.
              </p>
              <p className="od-section__desc">
                The Āgamic traditions provide detailed manuals for temple and home worship,
                including the proper selection of materials, timing and mantras for
                each form of worship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SĀDHANA AND REGULAR PRACTICE — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Sādhana</span>
          <h2 className="od-section__heading">Sādhana and Regular Practice</h2>
          <p className="od-section__desc">
            Sādhana refers to regular, disciplined spiritual practice. Different traditions
            prescribe different durations, methods and approaches according to the practitioner's
            capacity and spiritual goals.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Practice</th>
                  <th>Method</th>
                  <th>Traditional Focus</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nāma Sādhana</strong></td>
                  <td>Chanting of deity names with devotion</td>
                  <td>Bhakti and mental purification</td>
                  <td>Purāṇas, Nāma Stotras</td>
                </tr>
                <tr>
                  <td><strong>Mantra Sādhana</strong></td>
                  <td>Regular recitation of specific mantras</td>
                  <td>Focused spiritual discipline</td>
                  <td>Tantra and Āgamic texts</td>
                </tr>
                <tr>
                  <td><strong>Puja Sādhana</strong></td>
                  <td>Structured ritual worship with upacāras</td>
                  <td>Devotional worship and Śānti</td>
                  <td>Āgamas and Gṛhya Sūtras</td>
                </tr>
                <tr>
                  <td><strong>Yantra Sādhana</strong></td>
                  <td>Worship of sacred geometry with mantras</td>
                  <td>Contemplation and ritual focus</td>
                  <td>Yantra and Tantric texts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ WHY DEITY WORSHIP MATTERS — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Upāsana</span>
          <h2 className="od-section__heading">Why Deity Worship Matters</h2>
          <p className="od-section__desc">
            Deity worship, or Saguna Upāsana, is a central practice in many traditions
            of Sanātana Dharma. The deity form serves as a sacred focal point for devotion,
            meditation and spiritual connection.
          </p>

          <div className="od-two-col">
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">🕉️</span> Saguna Upāsana
                </h3>
                <ul className="od-subsection__list">
                  <li>The deity is understood as a sacred form through which the infinite can be approached with love and devotion</li>
                  <li>Traditional associations include Saraswati with learning, Dhanvantari with healing traditions, and Narasimha with protection</li>
                  <li>The deity form provides a tangible focus for meditation, prayer and devotional practice</li>
                  <li>Saguna Upāsana is described in the Purāṇas and Āgamas as a legitimate and powerful path of spiritual progress</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon"> lineage</span> Guru Paramparā
                </h3>
                <ul className="od-subsection__list">
                  <li>Traditional worship practices are passed down through unbroken lineages of Guru and Śiṣya</li>
                  <li>The Guru provides initiation, guidance and the necessary mantras for deity worship</li>
                  <li>Authentic worship follows the traditions established by the Guru Paramparā</li>
                  <li>Each sampradāya may have specific forms and methods of deity worship</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="od-notice od-notice--warning" style={{ background: 'rgba(184,146,74,0.08)', borderColor: 'rgba(184,146,74,0.25)' }}>
            <span className="od-notice__icon">⚠</span>
            <span className="od-notice__text">
              Traditional associations between deities and specific outcomes are understood
              as spiritual beliefs within the tradition, not as guaranteed medical or
              supernatural outcomes.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ TANTRA AND RESPONSIBLE PRACTICE — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Tantra</span>
          <h2 className="od-section__heading">Tantra and Responsible Practice</h2>
          <p className="od-section__desc">
            Tantra represents a vast and diverse family of traditions within Sanātana Dharma
            that integrate mantra, yantra, ritual and meditation into comprehensive spiritual
            practices.
          </p>

          <div className="od-two-col">
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">📜</span> Traditional Paths
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Dakṣiṇa Mārga</strong> — The right-hand path emphasising traditional ritual, purity and Vedic-Āgamic methods</li>
                  <li><strong>Vāma Mārga</strong> — The left-hand path incorporating unconventional methods for spiritual transformation</li>
                  <li><strong>Kaula traditions</strong> — A synthesis that integrates elements of both paths within a framework of divine consciousness</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">🔑</span> Key Elements
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Mantra</strong> — Sacred sound as the foundation of Tantric practice</li>
                  <li><strong>Yantra</strong> — Sacred geometry as a focal point for meditation and ritual</li>
                  <li><strong>Ritual discipline</strong> — Systematic practice with specific requirements and stages</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="od-notice od-notice--info">
            <span className="od-notice__icon">🙏</span>
            <span className="od-notice__text">
              Advanced Tantric practices should not be presented as casual self-practice.
              Follow authentic tradition and qualified Guru guidance where required.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ WHICH PRACTICE FITS YOUR TIME — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Guidance</span>
          <h2 className="od-section__heading">Which Practice Fits Your Time and Intention?</h2>

          <div className="od-table-wrap">
            <table className="od-table od-table--maroon">
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Suitable Practice</th>
                  <th>Suggested Rhythm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Short daily devotional time</td>
                  <td><strong>ARCHANA</strong></td>
                  <td>Daily</td>
                </tr>
                <tr>
                  <td>Longer devotional worship at home</td>
                  <td><strong>ARĀDHANA</strong></td>
                  <td>Daily or regular</td>
                </tr>
                <tr>
                  <td>Full ritual or festival worship</td>
                  <td><strong>PUJA</strong></td>
                  <td>According to tradition</td>
                </tr>
                <tr>
                  <td>Dedicated spiritual discipline</td>
                  <td><strong>SĀDHANA</strong></td>
                  <td>Guided regular practice</td>
                </tr>
                <tr>
                  <td>Advanced Tantric practice</td>
                  <td><strong>TANTRA</strong></td>
                  <td>Only with proper tradition and guidance</td>
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
            The Paths of Sacred Worship
          </h2>

          <div className="od-closing__equation">
            <div className="od-closing__eq-item od-closing__eq-item--maroon">ARCHANA = Sacred Remembrance</div>
            <div className="od-closing__eq-item od-closing__eq-item--gold">ARĀDHANA = Devotional Service</div>
          </div>
          <div className="od-closing__equation" style={{ marginTop: 12 }}>
            <div className="od-closing__eq-item od-closing__eq-item--maroon">PUJA = Ritual Worship</div>
            <div className="od-closing__eq-item od-closing__eq-item--gold">SĀDHANA = Disciplined Spiritual Practice</div>
          </div>

          <div className="od-closing__quote">
            Whether through the simple chanting of names, the tender offering of service,
            or the elaborate performance of ritual worship, each path leads the sincere
            devotee toward the divine presence. In the words of the Purāṇas: "Wherever
            the mind is filled with devotion, there the Lord manifests with grace."
          </div>

          <div className="od-closing__references">
            <div className="od-closing__ref-title">Traditional References</div>
            <ul className="od-closing__ref-list">
              <li className="od-closing__ref-item">Viṣṇu Purāṇa</li>
              <li className="od-closing__ref-item">Padma Purāṇa</li>
              <li className="od-closing__ref-item">Brahmāṇḍa Purāṇa</li>
              <li className="od-closing__ref-item">Āgama Śāstra</li>
              <li className="od-closing__ref-item">Nārada Bhakti Sūtras</li>
              <li className="od-closing__ref-item">Śrīmad Bhāgavatam</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
