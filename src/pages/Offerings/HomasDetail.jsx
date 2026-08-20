import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import havanImg from '../../assets/detail-havan.jpeg';
import gridImg from '../../assets/detail-grid.jpeg';
import './OfferingDetail.css';

export default function HomasDetail() {
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
          <span className="od-hero__eyebrow">🔥 Sacred Fire Rituals</span>
          <h1 className="od-hero__title">HAVAN vs HOMAM vs YAJÑA</h1>
          <p className="od-hero__subtitle">
            Difference, Importance, Benefits, Śāstra &amp; Purāṇic References
          </p>
          <div className="od-hero__highlight">
            All three are forms of Agni Kārya, but their level, purpose and scale are different.
          </div>
          <div className="od-hero__image-wrap">
            <img src={havanImg} alt="Sacred Havan ritual" className="od-hero__image" />
          </div>
        </div>
      </section>

      {/* ═══ UNDERSTANDING THE DIFFERENCE — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Knowledge</span>
          <h2 className="od-section__heading">Understanding the Difference</h2>
          <p className="od-section__desc">
            Although Havan, Homam and Yajña share the common thread of sacred fire offering,
            each tradition operates at a distinct scale and serves a different purpose within
            the broader framework of Sanātana Dharma.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>HAVAN</th>
                  <th>HOMAM</th>
                  <th>YAJÑA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Meaning</strong></td>
                  <td>Hu = To Offer. A smaller offering to sacred fire</td>
                  <td>Hom = To Sacrifice. Ritual offering into sacred fire</td>
                  <td>Yaj = To Worship / Sacrifice. A larger Vedic sacrifice</td>
                </tr>
                <tr>
                  <td><strong>Scale</strong></td>
                  <td>Smallest. Usually 1 Kuṇḍa, approximately 30 minutes – 2 hours</td>
                  <td>Medium. Usually 1–9 Kuṇḍas, approximately 2–5 hours</td>
                  <td>Largest. Multiple Kuṇḍas, traditionally extending from several days onward</td>
                </tr>
                <tr>
                  <td><strong>Who Can Do</strong></td>
                  <td>Gṛhastha in an appropriate home ritual context</td>
                  <td>Traditionally performed with Paṇḍit / Purohita and Yajamāna</td>
                  <td>Traditionally requires multiple Ṛtviks and a formal Yajamāna</td>
                </tr>
                <tr>
                  <td><strong>Mantras</strong></td>
                  <td>Paurāṇika and appropriate mantra traditions</td>
                  <td>Vedic, Āgamic or Tantric traditions according to the ritual</td>
                  <td>Primarily Vedic / Śrauta traditions</td>
                </tr>
                <tr>
                  <td><strong>Deity Focus</strong></td>
                  <td>Usually one principal deity</td>
                  <td>One main deity with associated deities</td>
                  <td>Multiple Devatās and cosmic forces</td>
                </tr>
                <tr>
                  <td><strong>Offerings</strong></td>
                  <td>Ghee, herbs, grains and samagri</td>
                  <td>Ghee, specific samidhas and prescribed āhutis</td>
                  <td>Larger-scale prescribed offerings according to the Yajña</td>
                </tr>
                <tr>
                  <td><strong>Main Textual Traditions</strong></td>
                  <td>Gṛhya, Purāṇic and ritual traditions</td>
                  <td>Āgama, Tantra and ritual manuals</td>
                  <td>Veda, Brāhmaṇa and Śrauta Sūtra traditions</td>
                </tr>
                <tr>
                  <td><strong>Examples</strong></td>
                  <td>Gāyatrī or Gṛhya Havan</td>
                  <td>Sudarśana Homam</td>
                  <td>Rājasūya, Soma Yajña and other Śrauta Yajñas</td>
                </tr>
                <tr>
                  <td><strong>Primary Purpose</strong></td>
                  <td>Personal worship and specific intentions</td>
                  <td>Śānti, protection and specific ritual purposes</td>
                  <td>Collective welfare, dharma and larger community purposes</td>
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
              <div className="od-summary-card__title">HAVAN</div>
              <div className="od-summary-card__text">Personal / Smaller-Scale Fire Offering</div>
            </div>
            <div className="od-summary-card od-summary-card--cream">
              <div className="od-summary-card__title">HOMAM</div>
              <div className="od-summary-card__text">Structured Ritual Fire Worship</div>
            </div>
            <div className="od-summary-card od-summary-card--maroon">
              <div className="od-summary-card__title">YAJÑA</div>
              <div className="od-summary-card__text">Larger Vedic or Collective Sacrificial Rite</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GRID IMAGE — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <div className="od-split">
            <div className="od-split__img-wrap">
              <img src={gridImg} alt="Sacred fire ritual traditions" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Agni Kārya</span>
              <h2 className="od-section__heading">The Sacred Role of Fire</h2>
              <p className="od-section__desc">
                In Sanātana Dharma, Agni — the sacred fire — is regarded as the divine messenger
                who carries offerings from the human realm to the celestial realm. Whether through
                the intimate simplicity of a Havan or the grandeur of a Vedic Yajña, fire remains
                the central medium through which mantras, devotion and sacred substances are offered.
              </p>
              <p className="od-section__desc">
                The Brāhmaṇa texts describe Agni as <em>heatogenerated first</em> among the gods,
                the mouth of the gods and the carrier of oblations. Every fire ritual, regardless
                of scale, draws upon this ancient understanding.
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
            Each form of fire worship carries its own traditional significance, purpose and
            benefits as described across Śāstra, Purāṇas and ritual manuals.
          </p>

          {/* HAVAN */}
          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🔥</span> HAVAN
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Traditional Śāstra and ritual references</strong> — Havan is widely described
                  in Gṛhya Sūtras and Purāṇic literature as an accessible form of domestic worship
                  suitable for householders.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Personal worship and cleansing</strong> — The ritual is traditionally performed
                  for personal purification, peace of mind and the cultivation of devotional discipline.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Devatā-focused offering through Agni</strong> — Sacred substances are offered
                  into the fire as a medium of invocation, carrying the devotee's prayers to the
                  chosen deity.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Mental concentration and devotional discipline</strong> — The process of
                  chanting mantras while tending the fire is traditionally considered a practice
                  of focused meditation and bhakti.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">5</span>
                <span className="od-benefit__text">
                  <strong>Home worship and regular practice</strong> — Due to its smaller scale,
                  Havan is well suited for regular observance in domestic settings according to
                  family traditions.
                </span>
              </div>
            </div>
          </div>

          <div className="od-divider">
            <span className="od-divider__line" />
            <span className="od-divider__symbol">◆</span>
            <span className="od-divider__line" />
          </div>

          {/* HOMAM */}
          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🪔</span> HOMAM
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Specific Śānti and ritual intention</strong> — Homam is traditionally
                  performed with a clearly defined saṅkalpa for peace, protection or resolution
                  of specific concerns.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Graha-related worship where traditionally prescribed</strong> — Certain
                  Homams are performed according to astrological considerations and traditional
                  prescriptions for planetary harmonisation.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Mrityuñjaya, Gaṇapati and other deity-specific Homams</strong> — Different
                  deities have their own Homam traditions, each with specific mantras, offerings
                  and intended outcomes as described in Āgamic and Tantric texts.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Protection and removal of obstacles</strong> — Many Homam traditions
                  are specifically oriented toward the removal of obstacles and the invocation
                  of protective divine grace.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">5</span>
                <span className="od-benefit__text">
                  <strong>Mantra-focused spiritual discipline</strong> — The intensive chanting
                  of specific deity mantras during the Homam constitutes a concentrated form
                  of spiritual practice.
                </span>
              </div>
            </div>
          </div>

          <div className="od-divider">
            <span className="od-divider__line" />
            <span className="od-divider__symbol">◆</span>
            <span className="od-divider__line" />
          </div>

          {/* YAJÑA */}
          <div className="od-subsection">
            <h3 className="od-subsection__title">
              <span className="od-subsection__icon">🏛️</span> YAJÑA
            </h3>
            <div className="od-benefits">
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">1</span>
                <span className="od-benefit__text">
                  <strong>Loka Kalyāṇa and collective welfare</strong> — Yajñas are traditionally
                  performed for the welfare of the broader community, society and all living beings.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">2</span>
                <span className="od-benefit__text">
                  <strong>Dharma and social responsibility</strong> — The performance of Yajñas
                  is regarded as an expression of dharmic duty and communal responsibility.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">3</span>
                <span className="od-benefit__text">
                  <strong>Rain and prosperity in traditional Vedic understanding</strong> — Several
                  Vedic and Purāṇic texts describe Yajñas as being associated with the invocation
                  of seasonal rains, agricultural prosperity and cosmic order.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">4</span>
                <span className="od-benefit__text">
                  <strong>Community participation</strong> — Large-scale Yajñas traditionally
                  involve the participation of multiple priests, families and community members,
                  fostering collective spiritual engagement.
                </span>
              </div>
              <div className="od-benefit od-benefit--cream">
                <span className="od-benefit__num">5</span>
                <span className="od-benefit__text">
                  <strong>Historical and Purāṇic examples</strong> — Texts describe great Yajñas
                  such as the Putrakāmeṣṭi Yajña, Rājasūya and Soma Yajña as defining events
                  in Purāṇic and Vedic narrative tradition.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SĀDHANA AND DEITY CONNECTION — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Sādhana</span>
          <h2 className="od-section__heading">Sādhana and Deity Connection</h2>
          <p className="od-section__desc">
            Each ritual tradition aligns with a different scope of spiritual practice and
            connects the practitioner to the divine through distinct modes of offering.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--maroon">
              <thead>
                <tr>
                  <th>Ritual</th>
                  <th>Best Suited For</th>
                  <th>Main Focus</th>
                  <th>Traditional Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>HAVAN</strong></td>
                  <td>Regular personal practice</td>
                  <td>Agni + Iṣṭa Devatā</td>
                  <td>Śuddhi and devotional protection</td>
                </tr>
                <tr>
                  <td><strong>HOMAM</strong></td>
                  <td>Focused or extended ritual practice</td>
                  <td>Specific Devatā</td>
                  <td>Śānti and deity-centred spiritual practice</td>
                </tr>
                <tr>
                  <td><strong>YAJÑA</strong></td>
                  <td>Larger collective or formal practice</td>
                  <td>Multiple Devatās / Yajña Puruṣa</td>
                  <td>Dharma and Loka Kalyāṇa</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-sanskrit-block">
            <div className="od-sanskrit-block__main">Yajño Vai Viṣṇuḥ</div>
            <div className="od-sanskrit-block__sub">
              "The Yajña is indeed Viṣṇu" — a traditional scriptural expression
              reflecting the inseparable connection between sacrifice and the divine.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THREE DIMENSIONS OF OFFERING — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Dimensions</span>
          <h2 className="od-section__heading">The Three Dimensions of Offering</h2>
          <p className="od-section__desc">
            Every fire ritual involves three essential dimensions that work together
            to create the complete offering.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Sanskrit</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Dravya</strong></td>
                  <td>द्रव्य</td>
                  <td>Physical offerings — ghee, herbs, grains, samidhas and other sacred substances offered into the fire</td>
                </tr>
                <tr>
                  <td><strong>Mantra</strong></td>
                  <td>मन्त्र</td>
                  <td>Sacred sound and invocation — the Vedic or Paurāṇika mantras chanted during the offering</td>
                </tr>
                <tr>
                  <td><strong>Bhāva</strong></td>
                  <td>भाव</td>
                  <td>Faith, intention and devotion — the inner attitude and spiritual sincerity of the offering</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-callout od-callout--gold">
            <div className="od-callout__label">Bhagavad Gītā 4.24</div>
            <div className="od-callout__text">
              "Brahmārpaṇam brahma havir brahmāgnau brahmaṇā hutam — Brahma is the offering,
              Brahma is the oblation, by Brahma is the fire created, Brahma is the performer
              who offers into Brahma."
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHOOSING THE RIGHT PRACTICE — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Guidance</span>
          <h2 className="od-section__heading">Choosing the Right Practice</h2>
          <p className="od-section__desc">
            The appropriate form of fire worship depends on one's intention, scale
            of practice and traditional context.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--maroon">
              <thead>
                <tr>
                  <th>Your Goal</th>
                  <th>Traditionally Suitable Practice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Daily peace and home worship</td>
                  <td><strong>HAVAN</strong></td>
                </tr>
                <tr>
                  <td>Specific ritual intention such as Śānti</td>
                  <td><strong>HOMAM</strong></td>
                </tr>
                <tr>
                  <td>Large collective welfare and formal Vedic purpose</td>
                  <td><strong>YAJÑA</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-notice od-notice--warning" style={{ background: 'rgba(184,146,74,0.08)', borderColor: 'rgba(184,146,74,0.25)' }}>
            <span className="od-notice__icon">⚠</span>
            <span className="od-notice__text">
              Traditional texts describe specific benefits for specific rituals. These should
              be understood as traditional spiritual beliefs rather than guaranteed outcomes.
              Always follow authentic tradition and qualified guidance.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="od-closing">
        <div className="od-closing__inner">
          <span className="od-hero__eyebrow">Summary</span>
          <h2 className="od-hero__title" style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}>
            The Three Paths of Sacred Fire
          </h2>

          <div className="od-closing__equation">
            <div className="od-closing__eq-item od-closing__eq-item--maroon">HAVAN = Personal</div>
            <div className="od-closing__eq-item od-closing__eq-item--gold">HOMAM = Focused</div>
            <div className="od-closing__eq-item od-closing__eq-item--maroon">YAJÑA = Collective</div>
          </div>

          <div className="od-closing__quote">
            Different in scale and ritual structure, all three centre around sacred offering,
            discipline, devotion and the traditional role of Agni as the divine messenger.
          </div>

          <div className="od-closing__references">
            <div className="od-closing__ref-title">Traditional References</div>
            <ul className="od-closing__ref-list">
              <li className="od-closing__ref-item">Aitareya Brāhmaṇa</li>
              <li className="od-closing__ref-item">Śatapatha Brāhmaṇa</li>
              <li className="od-closing__ref-item">Gṛhya Sūtras</li>
              <li className="od-closing__ref-item">Viṣṇu Purāṇa</li>
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
