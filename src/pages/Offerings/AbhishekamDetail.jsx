import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import { FooterSection } from '../Home/HomeSections.jsx';
import sivaAbhishekamImg from '../../assets/detail-siva-abhishekam.jpeg';
import pandavuluImg from '../../assets/detail-pandavulu.jpeg';
import murthuluImg from '../../assets/detail-3-murthulu.jpeg';
import './OfferingDetail.css';

export default function AbhishekamDetail() {
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
          <span className="od-hero__eyebrow">💧 Sacred Anointing</span>
          <h1 className="od-hero__title">ABHIṢHEKAM</h1>
          <p className="od-hero__subtitle">
            Meaning, Importance, Sacred Dravyas, Benefits, Purāṇic &amp; Śāstra References
          </p>
          <div className="od-hero__highlight">
            Abhiṣheka traditionally refers to bathing or anointing the Deity with sacred
            substances and devotion.
          </div>
          <div className="od-hero__image-wrap">
            <img src={sivaAbhishekamImg} alt="Śiva Abhiṣhekam — Sacred anointing ritual" className="od-hero__image" />
          </div>
        </div>
      </section>

      {/* ═══ WHY ABHIṢHEKAM IS IMPORTANT — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Significance</span>
          <h2 className="od-section__heading">Why Abhiṣhekam Is Important</h2>

          <div className="od-two-col">
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">🪷</span> Spiritual Significance
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Śuddhi</strong> — The ritual is traditionally associated with purification of the devotee's mind, body and spirit</li>
                  <li><strong>Devatā-prīti</strong> — Abhiṣhekam is performed with the intention of pleasing the deity and inviting divine grace</li>
                  <li><strong>Symbolic role of Dravya and Mantra</strong> — Each sacred substance carries traditional symbolism and is accompanied by specific mantras</li>
                  <li><strong>Ritual intention</strong> — The performance is guided by a specific saṅkalpa (resolution) for spiritual purposes</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="od-subsection">
                <h3 className="od-subsection__title">
                  <span className="od-subsection__icon">📖</span> Traditional Understanding
                </h3>
                <ul className="od-subsection__list">
                  <li><strong>Puṇya and purification</strong> — Traditional texts describe Abhiṣhekam as an act of great merit</li>
                  <li><strong>Devotional offering</strong> — The bathing of the deity is understood as an act of love, care and reverence</li>
                  <li><strong>Community worship</strong> — Abhiṣhekam is often performed as a collective worship experience</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="od-callout od-callout--gold">
            <div className="od-callout__label">Śiva Purāṇa — Traditional Reference</div>
            <div className="od-callout__text">
              The Śiva Purāṇa describes the greatness of Abhiṣhekam to the Śiva Liṅga
              with various sacred substances, stating that such worship with devotion
              and proper mantras is regarded as highly meritorious and spiritually beneficial.
            </div>
          </div>

          <div className="od-notice od-notice--warning" style={{ background: 'rgba(184,146,74,0.08)', borderColor: 'rgba(184,146,74,0.25)' }}>
            <span className="od-notice__icon">⚠</span>
            <span className="od-notice__text">
              The spiritual significance described above reflects traditional beliefs
              within Sanātana Dharma. These should be understood as matters of faith
              and traditional understanding, not as scientifically proven claims.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ PANDAVULU IMAGE — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <div className="od-split od-split--reverse">
            <div className="od-split__img-wrap">
              <img src={pandavuluImg} alt="Traditional Abhiṣhekam ceremony" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Sacred Tradition</span>
              <h2 className="od-section__heading">The Art of Sacred Anointing</h2>
              <p className="od-section__desc">
                Abhiṣhekam is one of the most visually magnificent and devotionally
                charged rituals in temple worship. The systematic bathing of the deity
                with water, milk, honey, ghee and other sacred substances, accompanied
                by the chanting of Vedic and Tantric mantras, creates a deeply
                immersive spiritual experience.
              </p>
              <p className="od-section__desc">
                The tradition is described across multiple Śaiva, Vaiṣṇava and Śākta
                texts, each offering its own perspective on the significance and
                methodology of this sacred practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SACRED DRAVYAS — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Sacred Substances</span>
          <h2 className="od-section__heading">Sacred Dravyas Used in Abhiṣhekam</h2>
          <p className="od-section__desc">
            Each substance used in Abhiṣhekam carries traditional symbolism and is
            associated with specific deities and purposes according to Śāstric tradition.
          </p>

          <div className="od-table-wrap">
            <table className="od-table od-table--cream">
              <thead>
                <tr>
                  <th>Dravya</th>
                  <th>Sanskrit / Traditional Name</th>
                  <th>Traditional Symbolism</th>
                  <th>Common Deity Association</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Water</strong></td>
                  <td>Jala</td>
                  <td>Purity and cleansing</td>
                  <td>All deities</td>
                  <td>Universal</td>
                </tr>
                <tr>
                  <td><strong>Milk</strong></td>
                  <td>Kṣīra</td>
                  <td>Nourishment and prosperity</td>
                  <td>Śiva, Viṣṇu, Devī</td>
                  <td>Āgamic traditions</td>
                </tr>
                <tr>
                  <td><strong>Curd</strong></td>
                  <td>Dadhi</td>
                  <td>Prosperity and well-being</td>
                  <td>Viṣṇu, Devī</td>
                  <td>Āgamic traditions</td>
                </tr>
                <tr>
                  <td><strong>Ghee</strong></td>
                  <td>Ghṛta</td>
                  <td>Victory and spiritual strength</td>
                  <td>Śiva, Agni</td>
                  <td>Vedic and Āgamic</td>
                </tr>
                <tr>
                  <td><strong>Honey</strong></td>
                  <td>Madhu</td>
                  <td>Sweetness in speech and harmony</td>
                  <td>All deities</td>
                  <td>Āgamic traditions</td>
                </tr>
                <tr>
                  <td><strong>Sugar</strong></td>
                  <td>Śarkarā</td>
                  <td>Sweetness and joy</td>
                  <td>Devī, Viṣṇu</td>
                  <td>Āgamic traditions</td>
                </tr>
                <tr>
                  <td><strong>Panchāmṛta</strong></td>
                  <td>Panchāmṛta</td>
                  <td>Five nectars combined — completeness</td>
                  <td>All deities</td>
                  <td>Purāṇic traditions</td>
                </tr>
                <tr>
                  <td><strong>Coconut Water</strong></td>
                  <td>Nārikelāmbu</td>
                  <td>Purity and divine grace</td>
                  <td>Śiva, Gaṇapati</td>
                  <td>Regional traditions</td>
                </tr>
                <tr>
                  <td><strong>Bilva Water</strong></td>
                  <td>Bilvāmbu</td>
                  <td>Especially sacred to Śiva</td>
                  <td>Śiva</td>
                  <td>Śaiva traditions</td>
                </tr>
                <tr>
                  <td><strong>Tulsi Water</strong></td>
                  <td>Tulasīmbu</td>
                  <td>Sacred devotion and protection</td>
                  <td>Viṣṇu, Kṛṣṇa</td>
                  <td>Vaiṣṇava traditions</td>
                </tr>
                <tr>
                  <td><strong>Chandan Water</strong></td>
                  <td>Candana</td>
                  <td>Cooling and spiritual calm</td>
                  <td>Viṣṇu, Devī</td>
                  <td>Āgamic traditions</td>
                </tr>
                <tr>
                  <td><strong>Rose Water</strong></td>
                  <td>Pāṇīna</td>
                  <td>Love and divine beauty</td>
                  <td>Devī, Lakṣmī</td>
                  <td>Śākta traditions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="od-callout od-callout--gold">
            <div className="od-callout__label">Panchāmṛta</div>
            <div className="od-callout__text">
              <strong>Milk + Curd + Ghee + Honey + Sugar</strong> — These five sacred
              substances are combined to form Panchāmṛta, used extensively in Abhiṣhekam
              across temple traditions as an offering of completeness and devotion.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DEITY-WISE ABHIṢHEKAM — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Deity Traditions</span>
          <h2 className="od-section__heading">Deity-Wise Abhiṣhekam</h2>
          <p className="od-section__desc">
            Different deities have their own traditional Abhiṣhekam methods, substances
            and occasions as described across Śaiva, Vaiṣṇava and Śākta traditions.
          </p>

          <div className="od-deity-grid">
            {/* ŚIVA */}
            <div className="od-deity-card">
              <h3 className="od-deity-card__title">ŚIVA</h3>
              <ul className="od-deity-card__list">
                <li><strong>Best occasions:</strong> Mondays, Mahaśivarātri, Pradosham</li>
                <li><strong>Water:</strong> Regular and essential</li>
                <li><strong>Milk:</strong> For prosperity and devotion</li>
                <li><strong>Curd:</strong> For well-being</li>
                <li><strong>Ghee:</strong> For spiritual strength and victory</li>
                <li><strong>Honey:</strong> For harmony</li>
                <li><strong>Bilva water:</strong> Especially sacred and auspicious</li>
                <li><strong>Rudrābhiṣhekam:</strong> The comprehensive Vedic Abhiṣhekam tradition for Śiva</li>
                <li><strong>Benefits (traditional):</strong> Śānti, spiritual growth, removal of obstacles</li>
              </ul>
            </div>

            {/* VIṢṆU / KṚṢṆA / BALAJI */}
            <div className="od-deity-card">
              <h3 className="od-deity-card__title">VIṢṆU / KṚṢṆA / BALAJI</h3>
              <ul className="od-deity-card__list">
                <li><strong>Best occasions:</strong> Thursdays, Ekādaśī, Vaikuṇṭha Ekādaśī</li>
                <li><strong>Tulsi water:</strong> Especially sacred and traditional</li>
                <li><strong>Panchāmṛta:</strong> A primary offering</li>
                <li><strong>Chandan:</strong> For cooling and devotion</li>
                <li><strong>Yellow offerings:</strong> Where appropriate in tradition</li>
                <li><strong>Protection:</strong> Traditional association with divine protection</li>
                <li><strong>Devotion:</strong> Central to Vaiṣṇava worship</li>
                <li><strong>Mokṣa:</strong> Liberation-oriented traditional symbolism</li>
                <li><strong>Mantras:</strong> Viṣṇu Sahasranāma, Puruṣa Sūkta traditions</li>
              </ul>
            </div>

            {/* GAURI / DURGA / LAKSHMI */}
            <div className="od-deity-card">
              <h3 className="od-deity-card__title">GAURI / DURGA / LAKṢMĪ</h3>
              <ul className="od-deity-card__list">
                <li><strong>Best occasions:</strong> Fridays, Navarātri, Pūrṇimā</li>
                <li><strong>Rose water:</strong> Especially associated with Devī worship</li>
                <li><strong>Milk:</strong> For nourishment and grace</li>
                <li><strong>Honey:</strong> For sweetness and harmony</li>
                <li><strong>Sugar:</strong> For joy and auspiciousness</li>
                <li><strong>Kumkum water:</strong> Where appropriate in tradition</li>
                <li><strong>Protection:</strong> Traditional association with Devī's protective grace</li>
                <li><strong>Prosperity:</strong> Auspiciousness-oriented traditional symbolism</li>
                <li><strong>Mantras:</strong> Devī Māhātmyam, Lalitā Sahasranāma traditions</li>
              </ul>
            </div>
          </div>

          {/* Secondary Deity Sections */}
          <div className="od-deity-secondary">
            <div className="od-deity-sm">
              <h4 className="od-deity-sm__title">GAṆAPATI</h4>
              <ul className="od-deity-sm__list">
                <li>Red flowers, durvā grass, modaka</li>
                <li>Milk, ghee, honey</li>
                <li>Performed for removal of obstacles and new beginnings</li>
                <li>Associated with Gaṇapati Atharvaśīrṣa and related texts</li>
              </ul>
            </div>
            <div className="od-deity-sm">
              <h4 className="od-deity-sm__title">HANUMAN</h4>
              <ul className="od-deity-sm__list">
                <li>Oil, sindoor, jaggery</li>
                <li>Performed on Tuesdays and Saturdays</li>
                <li>Traditional association with courage and protection</li>
                <li>Connected to Hanuman Chālīsā and Vālmīki Rāmāyaṇa traditions</li>
              </ul>
            </div>
            <div className="od-deity-sm">
              <h4 className="od-deity-sm__title">NAVAGRAHA</h4>
              <ul className="od-deity-sm__list">
                <li>Specific substances for each graha according to tradition</li>
                <li>Performed for planetary harmonisation</li>
                <li>Connected to Jyotiṣa and Vedic ritual traditions</li>
                <li>Follow proper astrological guidance for timing</li>
              </ul>
            </div>
            <div className="od-deity-sm">
              <h4 className="od-deity-sm__title">NĀGA &amp; SŪRYA</h4>
              <ul className="od-deity-sm__list">
                <li><strong>Nāga:</strong> Milk, turmeric, saffron — for Nāga dosha and serpentine traditions</li>
                <li><strong>Sūrya:</strong> Water, red flowers — for health and vitality in Vedic tradition</li>
                <li>Follow regional and sampradāya-specific methods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3 MURTHULU IMAGE — Cream ═══ */}
      <section className="od-section od-section--cream">
        <div className="od-section__inner">
          <div className="od-split">
            <div className="od-split__img-wrap">
              <img src={murthuluImg} alt="Three sacred deity forms" className="od-split__img" />
            </div>
            <div className="od-split__content">
              <span className="od-section__eyebrow">Temple Traditions</span>
              <h2 className="od-section__heading">Abhiṣhekam in Temple Practice</h2>
              <p className="od-section__desc">
                In major temples, Abhiṣhekam is performed as a daily ritual or on
                specific occasions according to the temple's Āgamic tradition. The
                ritual typically involves the systematic application of each sacred
                substance while chanting the appropriate mantras.
              </p>
              <p className="od-section__desc">
                The process is both a visual spectacle and a deeply devotional
                experience, with each step carrying traditional significance and
                creating an atmosphere of profound reverence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FIVE TRADITIONAL PRINCIPLES — Maroon ═══ */}
      <section className="od-section od-section--maroon">
        <div className="od-section__inner">
          <span className="od-section__eyebrow">Principles</span>
          <h2 className="od-section__heading">Five Traditional Principles of Abhiṣhekam</h2>
          <p className="od-section__desc">
            Traditional texts describe several key principles that guide the proper
            performance of Abhiṣhekam. While practices may differ by temple, sampradāya
            and Guru tradition, these principles offer a general framework.
          </p>

          <div className="od-steps">
            <div className="od-step od-step--maroon">
              <div className="od-step__number">1</div>
              <div className="od-step__body">
                <h4 className="od-step__title">Śuddha Bhāva</h4>
                <p className="od-step__text">
                  The devotee approaches the ritual with a pure heart, sincere devotion
                  and clear intention. The inner attitude is considered as important as
                  the external ritual.
                </p>
              </div>
            </div>
            <div className="od-step od-step--maroon">
              <div className="od-step__number">2</div>
              <div className="od-step__body">
                <h4 className="od-step__title">Mantra</h4>
                <p className="od-step__text">
                  The appropriate Vedic, Āgamic or Tantric mantras are chanted during
                  the application of each substance, infusing the ritual with sacred
                  sound and intention.
                </p>
              </div>
            </div>
            <div className="od-step od-step--maroon">
              <div className="od-step__number">3</div>
              <div className="od-step__body">
                <h4 className="od-step__title">Tīrtha / Prasāda Traditions</h4>
                <p className="od-step__text">
                  The substances used in Abhiṣhekam become Tīrtha (sacred water) and
                  Prasāda (blessed offering) that are distributed to devotees as a
                  token of divine grace.
                </p>
              </div>
            </div>
            <div className="od-step od-step--maroon">
              <div className="od-step__number">4</div>
              <div className="od-step__body">
                <h4 className="od-step__title">Appropriate Time</h4>
                <p className="od-step__text">
                  Traditional texts prescribe specific times, days and occasions for
                  Abhiṣhekam to different deities, aligning the ritual with
                  auspicious cosmic timing.
                </p>
              </div>
            </div>
            <div className="od-step od-step--maroon">
              <div className="od-step__number">5</div>
              <div className="od-step__body">
                <h4 className="od-step__title">Dāna and Completion</h4>
                <p className="od-step__text">
                  The ritual is traditionally completed with offerings (Dāna) to
                  priests and the distribution of Prasāda, completing the cycle
                  of devotion and grace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="od-closing">
        <div className="od-closing__inner">
          <span className="od-hero__eyebrow">Summary</span>
          <h2 className="od-hero__title" style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}>
            ABHIṢHEKAM = A Sacred Offering of Devotion
          </h2>

          <div className="od-closing__equation">
            <div className="od-closing__eq-item od-closing__eq-item--maroon">Bathing / Anointing the Deity</div>
            <div className="od-closing__eq-item od-closing__eq-item--gold">Mantra</div>
            <div className="od-closing__eq-item od-closing__eq-item--maroon">Devotion</div>
          </div>

          <div className="od-closing__quote">
            "Whoever performs Abhiṣhekam to the Liṅga with water, milk, curd, ghee,
            honey and other sacred substances with devotion and proper mantras,
            obtains great merit and the grace of the Lord."
            <br /><br />
            <em>— Śiva Purāṇa (Traditional Reference)</em>
          </div>

          <div className="od-closing__references">
            <div className="od-closing__ref-title">Traditional References</div>
            <ul className="od-closing__ref-list">
              <li className="od-closing__ref-item">Śiva Purāṇa</li>
              <li className="od-closing__ref-item">Liṅga Purāṇa</li>
              <li className="od-closing__ref-item">Viṣṇu Purāṇa</li>
              <li className="od-closing__ref-item">Padma Purāṇa</li>
              <li className="od-closing__ref-item">Āgama Śāstra</li>
              <li className="od-closing__ref-item">Nārada Purāṇa</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
