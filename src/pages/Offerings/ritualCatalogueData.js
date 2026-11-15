/**
 * Traditional fire-ritual catalogue for the Homas detail page.
 *
 * Editorial notes
 * ---------------
 * • Homa, Havan and Yajña are related terms whose meaning, scale and procedure
 *   vary by region, sampradāya and ritual manual. This catalogue deliberately
 *   does not assert one fixed definition or a fixed number of priests,
 *   āhutis or kuṇḍas for any rite.
 * • Scripture references are given only at the level of well-known textual
 *   traditions (for example the Mahāmṛtyuñjaya mantra in Rig Veda 7.59.12,
 *   or the Devī Māhātmya of the Mārkaṇḍeya Purāṇa). No invented quotations
 *   are included.
 * • Historical, rare and disputed rites are flagged. They are not presented
 *   as ordinary, bookable services.
 */

import homaBanner from '../../assets/homam_offerings.opt.jpg';
import havanBanner from '../../assets/detail-havan.jpeg';
import yajnaBanner from '../../assets/detail-grid.jpeg';

export const STATUS_META = {
  practised: { label: 'Traditional practice', tone: 'practised' },
  adapted: { label: 'Adapted practice', tone: 'adapted' },
  rare: { label: 'Rare / lineage-specific', tone: 'rare' },
  historical: { label: 'Historical', tone: 'historical' },
  reference: { label: 'Textual reference', tone: 'reference' },
};

const homes = [
  {
    id: 'ganapathi-homam',
    name: 'Ganapathi Homam',
    deity: 'Gaṇapati (Vighneśvara)',
    purpose: 'Removal of obstacles and auspicious beginnings',
    occasions: 'Before weddings, griha praveśa, new ventures, examinations and important life events',
    offerings: 'Modaka, durva grass, red flowers, coconut, sesame and ghee',
    intro:
      'Ganapathi Homam is a fire ritual offered to Gaṇapati, the remover of obstacles and lord of beginnings. It is one of the most widely performed homas in South Indian household and temple practice, and it commonly opens a larger sequence of rituals.',
    significance:
      'The rite honours Gaṇapati as Vighneśvara, guardian of thresholds and bestower of buddhi (discernment). Traditional accounts describe him as the deity invoked first so that the rites that follow may proceed without obstruction. The number of āhutis, the priests involved and the exact sequence are decided by the family tradition and the officiating priest.',
    procedure: [
      'Gaṇapati invocation, gaṇapati-prāṇapratiṣṭhā and saṅkalpa stating the purpose of the rite.',
      'Kalasa pūjā and upacāra offerings with the prescribed Ganapati mantras.',
      'Oblations of the prepared dravya into the consecrated fire, following the lineage paddhati.',
      'Pūrṇāhuti, ārati and prasāda distribution, with guidance on any follow-up observance.',
    ],
    references: [
      'Ganapati-focused Upaniṣadic and Purāṇic traditions.',
      'Gṛhya and Āgamic ritual manuals; practice varies by lineage.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'navagraha-homam',
    name: 'Navagraha Homam',
    deity: 'The nine grahas, with Sūrya as the primary deity',
    purpose: 'Harmonising planetary influences and reducing graha-related affliction',
    occasions: 'Birth-chart afflictions, major transits, before marriage, business or travel',
    offerings: 'Nine grains, nine flowers, sesame, ghee and the prescribed samidha',
    intro:
      'Navagraha Homam is offered to the nine planetary deities of Jyotiṣa. It is a propitiatory rite, traditionally performed when a horoscope indicates a difficult graha placement, transit or daśā period.',
    significance:
      'The grahas are understood in Jyotiṣa as cosmic intelligences whose movements influence human life. The homa seeks their grace and pacification. Interpretations of affliction, the appropriate remedy and the number of recitations differ between astrological schools and ritual manuals.',
    procedure: [
      'Saṅkalpa and Ganapati invocation, followed by kalasa sthāpana.',
      'Invocation of the nine grahas with their respective mantras, grains and flowers.',
      'Prescribed āhutis for each graha, ending with a pūrṇāhuti for the stated intention.',
      'Prasāda distribution and guidance on any supporting japa or dāna.',
    ],
    references: [
      'Jyotiṣa and graha-śānti traditions.',
      'Regional ritual paddhatis; prescriptions differ between traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Astrological diagnosis and prescribed remedies vary. The Peetham will discuss the appropriate form after consultation.',
  },
  {
    id: 'mrityunjaya-homam',
    name: 'Mrityunjaya Homam',
    deity: 'Śiva as Mṛtyuñjaya',
    purpose: 'Healing, longevity and protection from untimely death',
    occasions: 'Illness, surgery, recovery, fear of death and periods of Mahā Mṛtyuñjaya japa',
    offerings: 'Milk, ghee, bilva leaves, rudraksha, sesame and white flowers',
    intro:
      'Mrityunjaya Homam is a Śaiva fire ritual centred on the Mahāmṛtyuñjaya mantra. It is traditionally sought for healing, resilience in illness and protection from untimely death.',
    significance:
      'The Mahāmṛtyuñjaya mantra is one of the best-known Vedic prayers to Rudra. The homa combines mantra japa with fire offerings, and is often performed alongside medical treatment rather than in place of it. The scale of the rite is determined by the priest in consultation with the family.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Śiva smaraṇa.',
      'Rudra and Mṛtyuñjaya mantra japa with kalasa and abhiṣeka where prescribed.',
      'Āhutis of milk, ghee, bilva and other prescribed dravya into the sacred fire.',
      'Pūrṇāhuti, ārati and prasāda; the priest may advise continued japa at home.',
    ],
    references: [
      'Mahāmṛtyuñjaya mantra, Rig Veda 7.59.12.',
      'Śaiva ritual and healing traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'This homa is a spiritual support. It does not replace medical diagnosis or treatment.',
  },
  {
    id: 'ayush-homam',
    name: 'Ayush Homam',
    deity: 'Āyur Devatā; Dhanvantari or Śiva according to lineage',
    purpose: 'Long life, health and well-being, especially for children',
    occasions: 'Birth, naming ceremonies, first birthday, āyuṣya rites and recovery',
    offerings: 'Ghee, milk, herbs, grains and white flowers, with other dravya as prescribed',
    intro:
      'Ayush Homam is a longevity rite offered for a person’s health and full span of life. It is especially common for infants and young children at birth, naming and birthday observances.',
    significance:
      'The rite invokes the Āyur Devatā and the healing dimensions of the divine. Traditions differ on the exact deity focus: some invoke Dhanvantari, others Śiva or a family deity. The form for an infant is not the same as the form for an adult, and the priest will adapt the ritual accordingly.',
    procedure: [
      'Saṅkalpa with the name and birth details of the person for whom the rite is performed.',
      'Invocation of the Āyur Devatā, Gaṇapati and the family deity.',
      'Prescribed āhutis of ghee, herbs and grains, with mantra japa for health and longevity.',
      'Pūrṇāhuti, ārati and prasāda, with simple guidance for the family.',
    ],
    references: [
      'Āyuṣya rites in Gṛhya and Āyurvedic traditions.',
      'Regional paddhatis vary, particularly for infants.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Ritual prescriptions differ for infants and adults; guidance is given before booking.',
  },
  {
    id: 'sudarshana-homam',
    name: 'Sudarshana Homam',
    deity: 'Viṣṇu as Sudarśana',
    purpose: 'Protection, removal of negative forces and resolution of conflict',
    occasions: 'Protection rites, before journeys, litigation, illness and difficult periods',
    offerings: 'Yellow flowers, turmeric, sandalwood, ghee, coconut and chakra-shaped offerings',
    intro:
      'Sudarshana Homam invokes Viṣṇu’s discus, Sudarśana, as the active power of divine protection. It is performed for shielding, cleansing and the removal of hostile or obstructive influences.',
    significance:
      'Sudarśana is worshipped in Vaiṣṇava traditions as the Lord’s protective weapon and as a deity in his own right. The homa is traditionally sought when a family or institution faces sustained conflict, fear or negativity. The rite is often combined with Viṣṇu Sahasranāma or other Vaiṣṇava recitation.',
    procedure: [
      'Viṣṇu smaraṇa, Gaṇapati invocation and saṅkalpa for protection.',
      'Sudarśana āvāhana with the prescribed mantras and yantra or chakra worship.',
      'Āhutis of turmeric, sandalwood, ghee and other prescribed dravya.',
      'Pūrṇāhuti, śānti japa and prasāda distribution.',
    ],
    references: [
      'Vaiṣṇava Āgama and Pāñcarātra ritual traditions.',
      'Regional Vaiṣṇava paddhatis differ in mantra and sequence.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'lakshmi-homam',
    name: 'Lakshmi Homam',
    deity: 'Lakṣmī',
    purpose: 'Prosperity, abundance and domestic well-being',
    occasions: 'Fridays, Dīpāvalī, Varalakṣmī Vrata, a new home or business',
    offerings: 'Lotus and other pink or white flowers, rice, turmeric, kumkum, coconut, honey and ghee',
    intro:
      'Lakshmi Homam is offered to the Goddess of prosperity, beauty and auspicious abundance. It is a popular household rite for gratitude, stability and the well-being of the family.',
    significance:
      'Lakṣmī is understood not only as material fortune but as the grace of harmony, dignity and right relationship. The Śrī Sūkta and related traditions praise her presence in the home, the field and the heart. The ritual seeks her blessing without reducing prosperity to financial gain alone.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Lakṣmī āvāhana.',
      'Śrī Sūkta recitation and upacāra offerings with lotus, kumkum and turmeric.',
      'Āhutis of rice, ghee, honey and prescribed samagri.',
      'Pūrṇāhuti, ārati and distribution of prasāda to the household.',
    ],
    references: [
      'Śrī Sūkta (Rig Veda Khila).',
      'Purāṇic and Śākta Lakṣmī traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'saraswati-homam',
    name: 'Saraswati Homam',
    deity: 'Sarasvatī',
    purpose: 'Knowledge, learning, speech and the arts',
    occasions: 'Vidyarambha, upanayana, examinations and the beginning of music or dance study',
    offerings: 'White flowers, milk, rice, ghee, sandalwood and reverential offerings of books and instruments',
    intro:
      'Saraswati Homam honours the Goddess of knowledge, speech and the arts. It is traditionally performed at the start of formal learning and before important examinations or artistic debuts.',
    significance:
      'Sarasvatī is the flow of wisdom, eloquence and discernment. The rite is intended to clear mental dullness and to invoke disciplined study. Books and instruments may be placed near the altar as a mark of reverence; they are not offered into the fire.',
    procedure: [
      'Saṅkalpa and invocation of Sarasvatī with Gaṇapati.',
      'Upacāra offerings of white flowers, sandalwood and milk.',
      'Āhutis of rice, ghee and other white or pure substances as prescribed.',
      'Pūrṇāhuti and blessings for the student or artist; prasāda distribution.',
    ],
    references: [
      'Vedic Sarasvatī sūktas.',
      'Purāṇic, Śākta and regional Sarasvatī traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'chandi-homam',
    name: 'Chandi Homam',
    deity: 'Caṇḍī / Durgā',
    purpose: 'Protection, courage and the removal of powerful negativity',
    occasions: 'Navarātri, Caṇḍī Pāṭha, serious obstacles and dedicated protection rites',
    offerings: 'Red flowers, kumkum, lemon, coconut, ghee and prescribed samidha',
    intro:
      'Chandi Homam is a powerful Śākta fire ritual dedicated to Caṇḍī, the fierce and compassionate form of the Divine Mother. It is often performed during Navarātri or as a substantial protection rite.',
    significance:
      'The Devī Māhātmya describes the Mother’s victory over forces that threaten dharma. The homa invokes that protective and transformative power. It is a larger commitment than a simple daily offering, and the number of recitations and priests is decided according to the tradition and the occasion.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Caṇḍī āvāhana.',
      'Caṇḍī Pāṭha or prescribed navākṣarī / mantra recitation according to lineage.',
      'Āhutis of red flowers, kumkum, ghee and other prescribed dravya.',
      'Pūrṇāhuti, ārati and prasāda; guidance on continuing the practice at home.',
    ],
    references: [
      'Devī Māhātmya (Mārkaṇḍeya Purāṇa).',
      'Śākta ritual paddhatis; practice differs by lineage.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'rudra-homam',
    name: 'Rudra Homam',
    deity: 'Rudra / Śiva',
    purpose: 'Peace, protection, health and the removal of fear',
    occasions: 'Pradoṣa, Mahāśivarātri, Rudrābhiṣeka and Mahā Rudram observances',
    offerings: 'Milk, ghee, bilva leaves, rudraksha, bhasma and white flowers',
    intro:
      'Rudra Homam is a Śaiva fire ritual centred on Rudra, the fierce and compassionate aspect of Śiva. It is performed for peace, protection, health and the dissolution of fear.',
    significance:
      'The Rudram of the Kṛṣṇa Yajur Veda is central to the rite. Śiva is invoked both as the source of stillness and as the power that destroys what must be destroyed. The homa may be simple or elaborate, and the extent of Rudram recitation is decided by the officiating priest.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Śiva smaraṇa.',
      'Rudram recitation with kalasa and abhiṣeka where prescribed.',
      'Āhutis of milk, ghee, bilva and other Śaiva dravya.',
      'Pūrṇāhuti, ārati and prasāda; the family may be advised to continue Rudram japa.',
    ],
    references: [
      'Rudram, Kṛṣṇa Yajur Veda.',
      'Śaiva Purāṇic and Āgamic traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'naga-homam',
    name: 'Naga Homam',
    deity: 'Nāga devatās',
    purpose: 'Nāga-related peace, fertility, health and protection',
    occasions: 'Nāga Pañcamī, sarpa-doṣa consultation, recurring dreams and family tradition',
    offerings: 'Milk, turmeric, sesame, flowers and ghee',
    intro:
      'Naga Homam is offered to the Nāga devatās, the serpent deities associated with fertility, water, hidden knowledge and protection. It is performed for Nāga-related peace and family well-being.',
    significance:
      'Nāga worship is widespread across India and takes many regional forms. The homa may be sought for sarpa-doṣa, for health concerns, for fertility or simply as a family observance. Customs differ widely, and the priest will confirm the appropriate offerings and sequence.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Nāga āvāhana.',
      'Nāga mantra japa with milk, turmeric and flower offerings.',
      'Prescribed āhutis of sesame, ghee and other dravya.',
      'Pūrṇāhuti, ārati and prasāda; guidance on Nāga Pañcamī observances where relevant.',
    ],
    references: [
      'Nāga worship in Purāṇic and regional traditions.',
      'Local paddhatis vary considerably.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Regional customs differ widely; the officiating priest will confirm the appropriate form.',
  },
  {
    id: 'kala-sarpa-homam',
    name: 'Kala Sarpa Homam',
    deity: 'Śiva and the Nāga deities',
    purpose: 'Traditional remedy for Kāla Sarpa doṣa',
    occasions: 'When advised through Jyotiṣa, on Nāga Pañcamī and during specific transit periods',
    offerings: 'Milk, sesame, ghee, flowers and prescribed Nāga offerings',
    intro:
      'Kala Sarpa Homam is a traditional remedial rite for Kāla Sarpa doṣa, an astrological configuration in which the planets are said to fall within the axis of Rāhu and Ketu.',
    significance:
      'Kāla Sarpa is an astrological category rather than a single classical ritual. Its definition, severity and remedy are interpreted differently by practitioners. The Peetham treats the homa as a traditional spiritual remedy and does not promise a guaranteed outcome.',
    procedure: [
      'Consultation and saṅkalpa based on the birth chart and the stated concern.',
      'Gaṇapati, Śiva and Nāga invocation with the prescribed mantras.',
      'Āhutis of milk, sesame, ghee and Nāga offerings according to the paddhati.',
      'Pūrṇāhuti, ārati and prasāda, with guidance on supporting japa or dāna.',
    ],
    references: [
      'Jyotiṣa and Nāga-śānti traditions.',
      'Interpretations vary between astrological schools.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Kāla Sarpa is an astrological category whose definition and severity are interpreted differently by practitioners. It is offered as a traditional remedy, not a guaranteed outcome.',
  },
  {
    id: 'vastu-homam',
    name: 'Vastu Homam',
    deity: 'Vāstu Puruṣa, with Gaṇapati and the directional deities',
    purpose: 'Harmony and auspiciousness of a dwelling or site',
    occasions: 'Griha praveśa, construction, land purchase and renovation',
    offerings: 'Grains, ghee, milk, flowers, coconut and vastu samagri',
    intro:
      'Vastu Homam is performed to pacify and honour Vāstu Puruṣa, the presiding presence of a site or building. It is commonly part of a griha praveśa or the blessing of a new construction.',
    significance:
      'Vāstu Śāstra understands a building as a living alignment of directions and energies. The homa seeks harmony between the dwelling and its occupants. Ritual recommendations vary by text and region, and the homa is distinct from architectural or structural advice.',
    procedure: [
      'Saṅkalpa with the address or site details and the purpose of the rite.',
      'Vāstu Puruṣa and directional deity invocation, with Gaṇapati first.',
      'Āhutis of grains, ghee, milk and vastu samagri at the prescribed points.',
      'Pūrṇāhuti, ārati and prasāda; guidance on the griha praveśa sequence where applicable.',
    ],
    references: [
      'Vāstu Śāstra and Śilpa Śāstra traditions.',
      'Regional manuals differ on orientation and offerings.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Vāstu recommendations vary by text and region. The ritual is distinct from architectural or legal advice.',
  },
];

const havanas = [
  {
    id: 'gayatri-havan',
    name: 'Gayatri Havan',
    deity: 'Savitṛ / Gāyatrī',
    purpose: 'Awakening of intellect and spiritual discipline',
    occasions: 'Upanayana, daily sandhyā practice, study and the beginning of a sādhana',
    offerings: 'Ghee, samidha, white flowers and pure water',
    intro:
      'Gayatri Havan centres on the Gāyatrī mantra, the Vedic prayer to Savitṛ for illumined understanding. It is a foundational fire offering in many household and student traditions.',
    significance:
      'The Gāyatrī is recited at the three sandhyā junctures and is central to upanayana. The havan gives the mantra a ritual frame through fire offering. Its length and the number of recitations are set by the family’s tradition and the occasion.',
    procedure: [
      'Ācamana, prāṇāyāma and saṅkalpa.',
      'Gāyatrī āvāhana and recitation with the prescribed nyāsa.',
      'Āhutis of ghee and samidha with the Gāyatrī mantra.',
      'Pūrṇāhuti, śānti and prasāda distribution.',
    ],
    references: [
      'Gāyatrī mantra, Rig Veda 3.62.10.',
      'Gṛhya and sandhyā traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'maha-mrityunjaya-havan',
    name: 'Maha Mrityunjaya Havan',
    deity: 'Śiva as Mṛtyuñjaya',
    purpose: 'Healing, longevity and protection',
    occasions: 'Illness, recovery, surgery, fear and extended Mahā Mṛtyuñjaya japa',
    offerings: 'Milk, ghee, bilva leaves, rudraksha, sesame and white flowers',
    intro:
      'Maha Mrityunjaya Havan is the havan form of the Mṛtyuñjaya observance. It brings the Mahāmṛtyuñjaya mantra together with fire offerings for healing and protection.',
    significance:
      'The rite is a focused prayer to Rudra for resilience and freedom from fear. It is often performed over a series of days or with a set number of recitations. The family’s priest will decide the appropriate count and offerings.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Śiva smaraṇa.',
      'Mahāmṛtyuñjaya japa with kalasa pūjā.',
      'Āhutis of milk, ghee, bilva and sesame.',
      'Pūrṇāhuti, ārati and prasāda; continued japa may be advised.',
    ],
    references: [
      'Mahāmṛtyuñjaya mantra, Rig Veda 7.59.12.',
      'Śaiva ritual traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'A spiritual support; it does not replace medical care.',
  },
  {
    id: 'navagraha-havan',
    name: 'Navagraha Havan',
    deity: 'The nine grahas',
    purpose: 'Planetary peace and harmony',
    occasions: 'Graha transits, difficult daśā periods, before major life events',
    offerings: 'Nine grains, nine flowers, sesame, ghee and prescribed samidha',
    intro:
      'Navagraha Havan is a havan dedicated to the nine planetary deities. It is a compact form of graha-śānti, suitable for household observance and specific intentions.',
    significance:
      'The rite seeks to harmonise the influence of the grahas as understood in Jyotiṣa. It is a devotional and propitiatory act; it does not replace a full astrological consultation where one is needed.',
    procedure: [
      'Saṅkalpa, Gaṇapati invocation and kalasa sthāpana.',
      'Invocation of each graha with its mantra, grain and flower.',
      'Prescribed āhutis, followed by pūrṇāhuti.',
      'Ārati, prasāda and guidance on any supporting japa.',
    ],
    references: [
      'Jyotiṣa and graha-śānti traditions.',
      'Regional paddhatis differ.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Astrological prescriptions vary; the Peetham will discuss the appropriate form first.',
  },
  {
    id: 'satyanarayana-havan',
    name: 'Satyanarayana Havan',
    deity: 'Viṣṇu as Satyanārāyaṇa',
    purpose: 'Fulfilment of vows and family welfare',
    occasions: 'Pūrṇimā, Satyanārāyaṇa Vrata, gratitude and family celebrations',
    offerings: 'Banana, sugar, ghee, tulsi and pañcāmṛta',
    intro:
      'Satyanarayana Havan is offered to Viṣṇu as Satyanārāyaṇa, the Lord of truth. It is closely associated with the Satyanārāyaṇa Vrata and with the fulfilment of vows.',
    significance:
      'The rite expresses gratitude and the renewal of trust in divine order. The vrata story is told in Purāṇic tradition, and families often perform the observance on Pūrṇimā or a chosen auspicious day. The havan may accompany the kathā or stand as a shorter fire offering.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Viṣṇu āvāhana.',
      'Satyanārāyaṇa vrata or kathā recitation where the family has chosen it.',
      'Āhutis of ghee, sugar, banana and pañcāmṛta as prescribed.',
      'Pūrṇāhuti, ārati, prasāda and distribution to guests.',
    ],
    references: [
      'Satyanārāyaṇa Vrata tradition (Purāṇic).',
      'Regional Vaiṣṇava paddhatis.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'durga-havan',
    name: 'Durga Havan',
    deity: 'Durgā',
    purpose: 'Protection, strength and courage',
    occasions: 'Navarātri, Durgā Pūjā, protection rites and difficult periods',
    offerings: 'Red flowers, kumkum, lemon, ghee and prescribed samidha',
    intro:
      'Durga Havan is a Śākta fire offering to the Mother as Durgā, the invincible protectress. It is especially associated with Navarātri and with rites for courage and safety.',
    significance:
      'Durgā embodies the power that removes fear and restores order. The havan invokes her protection for the household or community. The form may be brief or extended, and the priest will set the recitation according to the occasion.',
    procedure: [
      'Saṅkalpa, Gaṇapati invocation and Durgā āvāhana.',
      'Durgā mantra or Durgā Saptaślokī recitation as prescribed.',
      'Āhutis of red flowers, kumkum, ghee and other dravya.',
      'Pūrṇāhuti, ārati and prasāda.',
    ],
    references: [
      'Devī Māhātmya and Durgā traditions.',
      'Śākta paddhatis vary by lineage.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'lakshmi-kubera-havan',
    name: 'Lakshmi Kubera Havan',
    deity: 'Lakṣmī and Kubera',
    purpose: 'Wealth, stability and the blessing of resources',
    occasions: 'Dīpāvalī, a new business, financial recovery and Lakṣmī observances',
    offerings: 'Lotus and pink flowers, rice, turmeric, coconut, honey and ghee',
    intro:
      'Lakshmi Kubera Havan invokes Lakṣmī together with Kubera, the guardian of wealth. It is performed for material stability, the wise use of resources and the well-being of a household or enterprise.',
    significance:
      'Kubera is a lokapāla and the treasurer of the gods; Lakṣmī is the gracious presence of abundance. The two are worshipped together for both prosperity and right stewardship. The rite does not promise financial results and should be approached as a spiritual discipline.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Lakṣmī–Kubera āvāhana.',
      'Śrī Sūkta and Kubera mantra recitation as prescribed.',
      'Āhutis of rice, honey, ghee, turmeric and coconut.',
      'Pūrṇāhuti, ārati and prasāda distribution.',
    ],
    references: [
      'Śrī Sūkta and Purāṇic Kubera traditions.',
      'Regional Lakṣmī paddhatis.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'vivaha-havan',
    name: 'Vivaha Havan',
    deity: 'Agni, Viṣṇu and Lakṣmī',
    purpose: 'Marriage and the beginning of householder dharma',
    occasions: 'Weddings, engagement rites and marriage-related observances',
    offerings: 'Ghee, rice, turmeric, flowers and samidha',
    intro:
      'Vivaha Havan is the fire rite at the heart of a traditional Hindu marriage. It frames the vows, the mutual commitment and the entry into gṛhastha dharma.',
    significance:
      'Agni is invoked as witness to the marriage, while Viṣṇu and Lakṣmī are honoured as the model of divine union. The exact sequence follows the family’s Gṛhya tradition and regional custom. A legal marriage ceremony is separate and remains a matter for the couple and the civil authorities.',
    procedure: [
      'Gaṇapati invocation and saṅkalpa for the couple.',
      'Kanyā dāna, maṅgala sūtra and the central fire offerings according to tradition.',
      'Saptapadī or the family’s prescribed vow sequence, with the sacred fire as witness.',
      'Pūrṇāhuti, ārati and blessings for the couple.',
    ],
    references: [
      'Gṛhya Sūtra marriage rites.',
      'Regional wedding paddhatis vary widely.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Legal marriage registration is separate from the religious ceremony.',
  },
  {
    id: 'griha-pravesh-havan',
    name: 'Griha Pravesh Havan',
    deity: 'Vāstu Puruṣa, Gaṇapati and Lakṣmī',
    purpose: 'Auspicious entry into a new home',
    occasions: 'Housewarming, first entry into a new dwelling and major renovation',
    offerings: 'Grains, milk, ghee, flowers, coconut and vastu samagri',
    intro:
      'Griha Pravesh Havan blesses a new home before or at the family’s first entry. It seeks harmony, protection and auspicious beginnings for the dwelling.',
    significance:
      'The rite honours Vāstu Puruṣa and invites Gaṇapati and Lakṣmī into the home. It is traditionally combined with milk boiling, lamp lighting and the first meal. The precise timing is often chosen through Muhūrta consultation.',
    procedure: [
      'Saṅkalpa with the new address and the family’s intention.',
      'Vāstu Puruṣa and Gaṇapati invocation, with Lakṣmī pūjā.',
      'Āhutis of grains, ghee, milk and vastu samagri.',
      'Pūrṇāhuti, ārati, milk boiling and the first entry with the lamp.',
    ],
    references: [
      'Gṛhya and Vāstu traditions.',
      'Regional housewarming customs vary.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'pitru-havan',
    name: 'Pitru Havan',
    deity: 'The pitṛs, with Viṣṇu',
    purpose: 'Ancestral peace and family remembrance',
    occasions: 'Pitṛ Pakṣa, Amāvasyā, death anniversaries and śrāddha observances',
    offerings: 'Sesame, rice, ghee and water, with other offerings as prescribed',
    intro:
      'Pitru Havan is a fire rite in honour of the family’s ancestors. It is performed for their peace and for the well-being of the living family.',
    significance:
      'Ancestral rites are among the most personal observances in Hindu tradition. The homa may accompany śrāddha or stand as a separate remembrance. Family-specific customs, the lunar calendar and the officiating priest’s guidance all shape the form.',
    procedure: [
      'Saṅkalpa naming the family and the ancestors being remembered.',
      'Pitṛ āvāhana and Viṣṇu smaraṇa.',
      'Āhutis of sesame, rice and ghee, with water offerings where prescribed.',
      'Pūrṇāhuti, śānti and prasāda; the family may offer a simple meal in remembrance.',
    ],
    references: [
      'Śrāddha and Dharmaśāstra traditions.',
      'Family and regional customs vary.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Pitṛ rites are family-specific; please confirm the appropriate observance with the Peetham.',
  },
  {
    id: 'shanti-havan',
    name: 'Shanti Havan',
    deity: 'The deity indicated by the intention or family tradition',
    purpose: 'Peace, harmonisation and the settling of disturbance',
    occasions: 'After a disturbance, during graha doṣa, before a major event and for general well-being',
    offerings: 'Ghee, herbs, grains and milk',
    intro:
      'Shanti Havan is a general fire rite for peace and harmonisation. It may be offered to a family deity, to Gaṇapati, or to the deity indicated by the occasion.',
    significance:
      'Śānti rites are found across Gṛhya and Āgamic traditions. Their purpose is to restore balance and to invoke divine calm. Because the intention can vary widely, the priest will choose the mantra and offerings after speaking with the family.',
    procedure: [
      'Conversation about the concern, followed by saṅkalpa.',
      'Invocation of the appropriate deity and Gaṇapati.',
      'Āhutis of ghee, herbs, grains and milk with śānti mantras.',
      'Pūrṇāhuti, ārati and prasāda; simple follow-up guidance.',
    ],
    references: [
      'Śānti rituals in Gṛhya and Āgamic manuals.',
      'The specific text depends on the deity and tradition.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'putra-kameshti-havan',
    name: 'Putra Kameshti Havan',
    deity: 'Agni, invoked for the blessing of progeny',
    purpose: 'Prayer for progeny and family continuity',
    occasions: 'Before conception, during fertility support and as a family intention',
    offerings: 'Pāyasa, ghee, grains and flowers',
    intro:
      'Putra Kameshti Havan is a fire offering for the blessing of children. The name recalls the Putrakāmeṣṭi rite described in the Rāmāyaṇa, where King Daśaratha sought progeny.',
    significance:
      'The rite expresses the family’s prayer for children and continuity. Traditional narratives describe it as a solemn and carefully prepared observance. In contemporary practice it is usually adapted to a havan or homa under the guidance of a priest.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Agni āvāhana.',
      'Recitation of the prescribed mantras for progeny.',
      'Āhutis of pāyasa, ghee and grains.',
      'Pūrṇāhuti, ārati and prasāda; the priest may offer simple family guidance.',
    ],
    references: [
      'Rāmāyaṇa, Bāla Kāṇḍa (Putrakāmeṣṭi narrative).',
      'Gṛhya and regional ritual traditions.',
    ],
    status: 'adapted',
    bookable: true,
    enquiry: false,
    note: 'The havan is a spiritual support. It does not replace medical fertility care and does not guarantee conception.',
  },
  {
    id: 'arogya-havan',
    name: 'Arogya Havan',
    deity: 'Dhanvantari or Śiva, according to lineage',
    purpose: 'Health, recovery and general well-being',
    occasions: 'Illness, recovery, surgery and a family health intention',
    offerings: 'Herbs, ghee, milk, tulsi and white flowers',
    intro:
      'Arogya Havan is a healing fire offering. It invokes Dhanvantari, the divine physician, or Śiva in his healing aspect, depending on the family’s tradition.',
    significance:
      'The rite seeks divine support for health and recovery. It is traditionally performed alongside, not instead of, appropriate medical care. The priest will choose the mantra and dravya according to the person and the concern.',
    procedure: [
      'Saṅkalpa with the name and health intention of the person.',
      'Invocation of Dhanvantari or Śiva, with Gaṇapati first.',
      'Āhutis of herbs, ghee, milk and tulsi as prescribed.',
      'Pūrṇāhuti, ārati and prasāda; simple follow-up guidance.',
    ],
    references: [
      'Āyurvedic and Purāṇic healing traditions.',
      'Regional paddhatis vary.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'This havan is a spiritual support and does not replace medical diagnosis or treatment.',
  },
];

const yajnas = [
  {
    id: 'ashwamedha-yajna',
    name: 'Ashwamedha Yajna',
    deity: 'Agni and Prajāpati; the consecrated horse is the ritual focus',
    purpose: 'Royal sovereignty and cosmic renewal in Vedic literature',
    occasions: 'Historical royal consecration; not a contemporary household rite',
    offerings: 'Prescribed Śrauta substances according to the ritual manuals',
    intro:
      'Aśvamedha is one of the great royal sacrifices described in Vedic and Purāṇic literature. It was associated with a king’s sovereignty, territorial authority and the renewal of cosmic order.',
    significance:
      'The rite is a major subject of Vedic, Brāhmaṇa and epic literature. Its historical performance involved extensive priestly preparation and royal patronage. It is not a routine household ritual and is not offered by the Peetham.',
    procedure: [
      'The full sequence is preserved in Śrauta manuals and is extremely elaborate.',
      'It requires a formal patron, multiple trained priests and extensive ritual preparation.',
      'The historical rite is studied as a textual and cultural subject rather than offered as a service.',
    ],
    references: [
      'Ṛg Veda and the Brāhmaṇa literature.',
      'Śatapatha Brāhmaṇa; Rāmāyaṇa and Purāṇic narratives.',
    ],
    status: 'historical',
    bookable: false,
    enquiry: false,
    note: 'Presented for historical study only. The Peetham does not perform or book this rite.',
  },
  {
    id: 'rajasuya-yajna',
    name: 'Rajasuya Yajna',
    deity: 'Soma, Agni and the royal deities',
    purpose: 'Royal consecration and the affirmation of dharmic rule',
    occasions: 'Historical royal consecration; not a contemporary household rite',
    offerings: 'Prescribed Śrauta substances according to the ritual manuals',
    intro:
      'Rājasūya is the Vedic royal consecration rite, described at length in the Brāhmaṇas and in the Mahābhārata. It affirmed a king’s authority and his responsibility for dharma.',
    significance:
      'The rite combined royal power with cosmic and ritual order. Its literary picture, especially in the Mahābhārata, has shaped later ideas of kingship. It is a historical and textual subject, not a contemporary offering.',
    procedure: [
      'The full sequence is preserved in Śrauta manuals and epic descriptions.',
      'It requires a consecrated king, multiple priests and an extended ritual calendar.',
      'It is studied historically rather than performed as a bookable service.',
    ],
    references: [
      'Śatapatha Brāhmaṇa.',
      'Mahābhārata, Sabhā Parvan.',
    ],
    status: 'historical',
    bookable: false,
    enquiry: false,
    note: 'Presented for historical study only. The Peetham does not perform or book this rite.',
  },
  {
    id: 'vajapeya-yajna',
    name: 'Vajapeya Yajna',
    deity: 'Soma and the Vedic deities',
    purpose: 'Royal strength, prosperity and renewal',
    occasions: 'Rare Śrauta observance in specific lineages',
    offerings: 'Prescribed Śrauta substances according to the ritual manuals',
    intro:
      'Vājapeya is a Vedic Soma sacrifice associated with royal strength, prosperity and renewal. It is described in the Brāhmaṇas and Śrauta Sūtras and has been performed only rarely in modern times.',
    significance:
      'The rite is part of the classical Śrauta repertoire. Its performance requires a trained lineage of priests and substantial preparation. The Peetham does not present it as a standard bookable offering; availability must be discussed with the officiating lineage.',
    procedure: [
      'The full sequence follows the relevant Śrauta Sūtra and priestly lineage.',
      'It requires a formal patron, Soma preparation and multiple trained priests.',
      'Contemporary performance is rare and must be confirmed with a qualified Śrauta lineage.',
    ],
    references: [
      'Śatapatha Brāhmaṇa.',
      'Śrauta Sūtra traditions.',
    ],
    status: 'rare',
    bookable: false,
    enquiry: true,
    note: 'Rare and lineage-specific. The full Śrauta form is not a routine offering; availability must be confirmed.',
  },
  {
    id: 'putra-kameshti-yajna',
    name: 'Putra Kameshti Yajna',
    deity: 'Agni, invoked for the blessing of progeny',
    purpose: 'Prayer for progeny and family continuity',
    occasions: 'Traditional narrative and adapted family observance',
    offerings: 'Pāyasa, ghee, grains and flowers',
    intro:
      'Putrakāmeṣṭi is the Vedic rite for progeny best known from the Rāmāyaṇa, where it is performed for King Daśaratha. It is also listed among the traditional fire ceremonies in ritual literature.',
    significance:
      'The full Śrauta form is elaborate and is not commonly performed today. Contemporary families usually request an adapted havan or homa for the same intention. The Peetham offers the adapted form and clearly distinguishes it from the historical Śrauta rite.',
    procedure: [
      'Consultation and saṅkalpa for the family’s intention.',
      'Gaṇapati and Agni invocation with the prescribed mantra tradition.',
      'Āhutis of pāyasa, ghee and grains in the adapted havan sequence.',
      'Pūrṇāhuti, ārati and prasāda, with family guidance.',
    ],
    references: [
      'Rāmāyaṇa, Bāla Kāṇḍa.',
      'Gṛhya and regional ritual traditions.',
    ],
    status: 'adapted',
    bookable: true,
    enquiry: false,
    note: 'The full Śrauta form is described in traditional literature; the Peetham offers an adapted havan/homa. This is a spiritual support, not a medical treatment or guarantee.',
  },
  {
    id: 'agnihotra',
    name: 'Agnihotra',
    deity: 'Agni',
    purpose: 'Daily domestic fire offering and inner discipline',
    occasions: 'Daily at sunrise and sunset after formal initiation',
    offerings: 'Milk, ghee and grains according to family and lineage',
    intro:
      'Agnihotra is the daily domestic fire offering of the Vedic tradition. It is a lifelong discipline rather than a single ceremony, and it is traditionally undertaken after initiation and instruction.',
    significance:
      'The rite maintains a continuous relationship with Agni at the junctures of the day. It is one of the foundational Gṛhya observances and is also discussed in Śrauta literature. The Peetham offers guidance and initiation, not a one-time substitute for the daily practice.',
    procedure: [
      'Formal instruction and initiation in the family’s or lineage’s Agnihotra tradition.',
      'Daily sunrise and sunset offerings of milk or the prescribed substance.',
      'Careful maintenance of the sacred fire and ritual purity according to the tradition.',
      'Ongoing guidance from the officiating priest or Guru.',
    ],
    references: [
      'Śatapatha Brāhmaṇa.',
      'Gṛhya and Śrauta traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: 'Agnihotra is a daily discipline. Booking is for guidance and initiation, not a one-time substitute.',
  },
  {
    id: 'darsha-purnamasa-yajna',
    name: 'Darsha Purnamasa Yajna',
    deity: 'Agni and the Vedic deities',
    purpose: 'New-moon and full-moon Śrauta observance',
    occasions: 'Fortnightly observance in specific Śrauta lineages',
    offerings: 'Prescribed Śrauta substances according to the ritual manuals',
    intro:
      'Darśa Pūrṇamāsa is the pair of new-moon and full-moon sacrifices of the Śrauta tradition. It is a regular priestly observance rather than a household ceremony.',
    significance:
      'The rite is part of the structured Śrauta calendar and requires trained priests and a maintained sacred fire. It is still performed in some lineages, but it is not a routine service for families. Availability must be confirmed.',
    procedure: [
      'The full sequence follows the relevant Śrauta Sūtra and priestly lineage.',
      'It requires a formal patron, maintained fires and trained priests.',
      'Contemporary availability is limited to specific lineages.',
    ],
    references: [
      'Śatapatha Brāhmaṇa.',
      'Śrauta Sūtra traditions.',
    ],
    status: 'rare',
    bookable: false,
    enquiry: true,
    note: 'A specialist Śrauta observance. Availability must be confirmed; it is not a routine household booking.',
  },
  {
    id: 'somayaga',
    name: 'Somayaga',
    deity: 'Soma',
    purpose: 'Soma sacrifice for prosperity and divine favour',
    occasions: 'Rare Śrauta observance in specific lineages',
    offerings: 'Soma and the prescribed Śrauta substances',
    intro:
      'Somayāga is the broader class of Vedic Soma sacrifices. It is among the most elaborate and specialized parts of the Śrauta repertoire.',
    significance:
      'Soma rites are central to the Vedic ritual imagination. Their performance requires a qualified lineage, careful preparation and substantial resources. They are rare today and are not offered as ordinary services.',
    procedure: [
      'The full sequence follows the relevant Śrauta Sūtra and priestly lineage.',
      'It requires Soma preparation, multiple priests and an extended ritual calendar.',
      'Contemporary availability is limited and must be confirmed.',
    ],
    references: [
      'Ṛg Veda Soma hymns.',
      'Śatapatha Brāhmaṇa and Śrauta Sūtra traditions.',
    ],
    status: 'rare',
    bookable: false,
    enquiry: true,
    note: 'Rare and lineage-specific. The Peetham does not present this as a standard bookable offering.',
  },
  {
    id: 'athirathra-yajna',
    name: 'Athirathra Yajna',
    deity: 'Soma and the Vedic deities',
    purpose: 'An extended Soma sacrifice in the Śrauta tradition',
    occasions: 'Rare Śrauta observance in specific lineages',
    offerings: 'Prescribed Śrauta substances according to the ritual manuals',
    intro:
      'Atirātra is an extended Soma sacrifice within the Śrauta tradition. It is part of the specialized ritual repertoire studied and performed by trained lineages.',
    significance:
      'The rite is historically important and technically demanding. It requires a qualified priestly lineage and long preparation. The Peetham does not present it as a routine or easily bookable ceremony.',
    procedure: [
      'The full sequence follows the relevant Śrauta Sūtra and priestly lineage.',
      'It requires Soma, multiple priests and an extended ritual calendar.',
      'Contemporary availability is limited and must be confirmed.',
    ],
    references: [
      'Śrauta Sūtra traditions.',
      'Brāhmaṇa literature on Soma sacrifice.',
    ],
    status: 'rare',
    bookable: false,
    enquiry: true,
    note: 'Historical and large-scale. Availability is limited to specific lineages and must be confirmed.',
  },
  {
    id: 'chaturmasya-yajna',
    name: 'Chaturmasya Yajna',
    deity: 'Viṣṇu and the Vedic deities',
    purpose: 'Four-month observance and its associated ritual discipline',
    occasions: 'The Chāturmāsya period; the Śrauta form only in specific lineages',
    offerings: 'Prescribed offerings according to the observance and lineage',
    intro:
      'Chāturmāsya is best known today as the four-month period of intensified sādhana, study and restraint. A related Śrauta ritual cycle also exists, but it is distinct from the popular vrata.',
    significance:
      'The observance is widely kept by practitioners, while the full Śrauta Chāturmāsya rites are rare and lineage-specific. This entry distinguishes the two so that the popular vrata is not confused with a specialist sacrifice.',
    procedure: [
      'For the vrata: guidance on the period, vows, study and daily practice.',
      'For the Śrauta rite: the full sequence follows the relevant ritual manual and lineage.',
      'Availability of the Śrauta form must be confirmed.',
    ],
    references: [
      'Chāturmāsya observance traditions.',
      'Śrauta Sūtra traditions for the ritual cycle.',
    ],
    status: 'rare',
    bookable: false,
    enquiry: true,
    note: 'The widely observed Chāturmāsya vrata is distinct from the rare Śrauta Yajña. Enquire with the Peetham for guidance on the appropriate observance.',
  },
  {
    id: 'vishnu-yajna',
    name: 'Vishnu Yajna',
    deity: 'Viṣṇu',
    purpose: 'Preservation, welfare and devotional surrender',
    occasions: 'Vaiṣṇava festivals, family welfare and dedicated devotion',
    offerings: 'Tulsi, yellow flowers, ghee, grains and pañcāmṛta',
    intro:
      'Vishnu Yajna is a Vaiṣṇava fire offering for preservation, welfare and devotion. In contemporary practice it is usually performed as an adapted havan or homa within a Vaiṣṇava lineage.',
    significance:
      'Viṣṇu is the preserver and the inner dweller. The rite seeks his grace for protection, harmony and dharmic living. The exact form depends on the family’s Vaiṣṇava tradition and the occasion.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Viṣṇu āvāhana.',
      'Viṣṇu Sahasranāma or the prescribed Vaiṣṇava recitation.',
      'Āhutis of tulsi, ghee, grains and pañcāmṛta.',
      'Pūrṇāhuti, ārati and prasāda.',
    ],
    references: [
      'Vaiṣṇava Āgama and Pāñcarātra traditions.',
      'Purāṇic Viṣṇu traditions.',
    ],
    status: 'adapted',
    bookable: true,
    enquiry: false,
    note: 'The Peetham offers the adapted havan/homa form within its lineage tradition.',
  },
  {
    id: 'rudra-yajna',
    name: 'Rudra Yajna',
    deity: 'Rudra / Śiva',
    purpose: 'Protection, peace and the dissolution of negativity',
    occasions: 'Mahāśivarātri, Rudram observances and dedicated Śaiva rites',
    offerings: 'Milk, ghee, bilva, rudraksha and bhasma',
    intro:
      'Rudra Yajna is a Śaiva fire sacrifice invoking Rudra. In contemporary practice it is usually offered in an adapted Rudram-based havan or homa form.',
    significance:
      'The Rudram is the central Vedic praise of Rudra. The rite seeks protection, peace and the removal of fear. Larger forms require extended recitation and multiple priests; the Peetham will confirm the appropriate scale.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Rudra āvāhana.',
      'Rudram recitation and abhiṣeka where prescribed.',
      'Āhutis of milk, ghee, bilva and bhasma.',
      'Pūrṇāhuti, ārati and prasāda.',
    ],
    references: [
      'Rudram, Kṛṣṇa Yajur Veda.',
      'Śaiva Āgamic and Purāṇic traditions.',
    ],
    status: 'adapted',
    bookable: true,
    enquiry: false,
    note: 'The Peetham offers the adapted Rudram-based form; the scale is confirmed after consultation.',
  },
  {
    id: 'chandi-yajna',
    name: 'Chandi Yajna',
    deity: 'Caṇḍī / Durgā',
    purpose: 'Protection, courage and the removal of powerful negativity',
    occasions: 'Navarātri, Caṇḍī Pāṭha and dedicated protection rites',
    offerings: 'Red flowers, kumkum, lemon, coconut, ghee and samidha',
    intro:
      'Chandi Yajna is a substantial Śākta fire rite dedicated to Caṇḍī. It is closely related to the Chandi Homam and is often performed during Navarātri.',
    significance:
      'The rite invokes the Mother’s protective and transformative power as described in the Devī Māhātmya. The number of recitations and the scale of the fire offering are set by the lineage and the intention.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Caṇḍī āvāhana.',
      'Caṇḍī Pāṭha or prescribed mantra recitation.',
      'Āhutis of red flowers, kumkum, ghee and other dravya.',
      'Pūrṇāhuti, ārati and prasāda.',
    ],
    references: [
      'Devī Māhātmya (Mārkaṇḍeya Purāṇa).',
      'Śākta ritual traditions.',
    ],
    status: 'practised',
    bookable: true,
    enquiry: false,
    note: '',
  },
  {
    id: 'lakshmi-yajna',
    name: 'Lakshmi Yajna',
    deity: 'Lakṣmī',
    purpose: 'Prosperity, harmony and domestic well-being',
    occasions: 'Dīpāvalī, Varalakṣmī, Fridays and new beginnings',
    offerings: 'Lotus, rice, turmeric, kumkum, honey and ghee',
    intro:
      'Lakshmi Yajna is a fire offering to the Goddess of prosperity and grace. Contemporary practice usually takes the form of an adapted Lakṣmī havan or homa.',
    significance:
      'The rite honours Lakṣmī as the presence of harmony and right relationship, not only material wealth. The Śrī Sūkta is central to the tradition. The form is adapted to the family’s occasion and the priest’s guidance.',
    procedure: [
      'Gaṇapati invocation, saṅkalpa and Lakṣmī āvāhana.',
      'Śrī Sūkta recitation.',
      'Āhutis of rice, honey, ghee and turmeric.',
      'Pūrṇāhuti, ārati and prasāda.',
    ],
    references: [
      'Śrī Sūkta.',
      'Purāṇic and Śākta Lakṣmī traditions.',
    ],
    status: 'adapted',
    bookable: true,
    enquiry: false,
    note: 'The Peetham offers the adapted Lakṣmī havan/homa form.',
  },
  {
    id: 'sarpa-yajna',
    name: 'Sarpa Yajna',
    deity: 'The Nāga deities',
    purpose: 'Nāga-śānti and peace with the serpent energies',
    occasions: 'Nāga Pañcamī, sarpa-doṣa consultation and family tradition',
    offerings: 'Milk, turmeric, sesame, flowers and ghee',
    intro:
      'Sarpa Yajna, in the sense used here, is a Nāga-śānti rite for peace with the serpent deities. It is distinct from the mythical Sarpa Sattra of the Mahābhārata.',
    significance:
      'Nāga worship is regional and lineage-specific. The rite may be sought for sarpa-doṣa, family well-being or Nāga Pañcamī. The Peetham does not offer the destructive Sarpa Sattra of epic narrative; it offers a pacific Nāga-śānti observance.',
    procedure: [
      'Consultation and saṅkalpa for Nāga-śānti.',
      'Nāga āvāhana with milk, turmeric and flower offerings.',
      'Āhutis of sesame, ghee and prescribed dravya.',
      'Pūrṇāhuti, ārati and prasāda.',
    ],
    references: [
      'Nāga worship in Purāṇic and regional traditions.',
      'Mahābhārata for the Sarpa Sattra narrative (historical/literary context only).',
    ],
    status: 'adapted',
    bookable: true,
    enquiry: false,
    note: 'This is a pacific Nāga-śānti rite, not the destructive Sarpa Sattra of epic narrative. Regional customs vary.',
  },
  {
    id: 'gomedha-naramedha-references',
    name: 'Gomedha / Naramedha references',
    deity: 'Textual and historical references only',
    purpose: 'Scholarly study of disputed ritual terminology',
    occasions: 'Not applicable — textual and historical reference only',
    offerings: 'Not applicable — no ritual is offered',
    intro:
      'Gomedha and Naramedha are terms that appear in certain textual and historical discussions of sacrifice. They are included here only so that visitors can recognise the references and approach them with scholarly care.',
    significance:
      'Interpretations of these terms are disputed among scholars. Some read them literally, others as symbolic, metaphorical or belonging to a particular historical context. Any literal animal or human sacrifice is illegal and contrary to current practice. The Peetham does not perform, promote or book such rites.',
    procedure: [
      'No ritual procedure is offered.',
      'The terms should be studied through critical editions, translations and qualified scholarly guidance.',
      'Readers are encouraged to distinguish textual description from living practice.',
    ],
    references: [
      'Vedic and Dharmic textual traditions (critical study required).',
      'Modern scholarship on ritual terminology and historical interpretation.',
    ],
    status: 'reference',
    bookable: false,
    enquiry: false,
    note: 'Textual and historical reference only. Disputed claims require scholarly verification. Not bookable.',
  },
];

export const RITUAL_CATEGORIES = [
  {
    id: 'homas',
    label: 'Homas',
    sanskrit: 'Homa / Homam',
    icon: '🔥',
    image: homaBanner,
    imageAlt: 'Sacred homa fire offerings',
    intro:
      'Homa (homam) is a structured fire ritual in which prescribed substances are offered into a consecrated fire while mantras are recited. The homas below are offered with proper saṅkalpa; the scale, duration, priest count and number of āhutis are decided according to the rite, the lineage and the family’s requirements.',
    note:
      'Homa, Havan and Yajña are related terms. Their usage, scale and procedure vary by region and sampradāya; this catalogue does not claim one fixed definition for all traditions.',
    items: homes,
  },
  {
    id: 'havanas',
    label: 'Havanas',
    sanskrit: 'Havana / Havan',
    icon: '🪔',
    image: havanBanner,
    imageAlt: 'Traditional havan fire ritual',
    intro:
      'Havan is a fire offering closely related to homa, often used for household, devotional and specific-intention rites. Here the term denotes the accessible fire ceremonies listed below. Practice differs by lineage, and the priest will confirm the appropriate form before a booking is accepted.',
    note:
      'The word “havan” is used differently across regions. Some traditions treat it as a synonym for homa; others distinguish them by scale or textual basis.',
    items: havanas,
  },
  {
    id: 'yajnas',
    label: 'Yajñas / Yāgas',
    sanskrit: 'Yajña / Yāga',
    icon: '🏛️',
    image: yajnaBanner,
    imageAlt: 'Vedic yajna ritual traditions',
    intro:
      'Yajña (yāga) is a broad term for Vedic sacrifice. The entries below range from rites still practised today to historical, rare and textual ceremonies. Each row states its status clearly. Historical, rare and disputed rites are not presented as ordinary bookable services.',
    note:
      'Historical and rare rites are included for cultural and scholarly context. Their presence here is not a claim that they are currently performed by the Peetham or available for booking.',
    items: yajnas,
  },
];
