$src = 'HomeSections.jsx'
$enc = [System.Text.Encoding]::UTF8
$lines = [System.IO.File]::ReadAllLines($src, $enc)

# ── Block 1: wrap EventsPreviewSection (lines 540-577, index 539-576)
# Add fragment open before <section, append LotusConnector after </section>, close fragment
# Current: line 542 = '  return (' , line 543 = '    <section className="events-section">'
# We insert <> before the section and </> + LotusConnector after line 575 (</section>)

$evtNew = @(
'export function EventsPreviewSection() {',
'  const navigate = useNavigate();',
'  return (',
'    <>',
'    <section className="events-section">',
'      <div className="events-section__container">',
'        <ScrollReveal>',
'          <div className="events-section__header">',
'            <div>',
'              <p className="events-section__eyebrow">SACRED CALENDAR</p>',
'              <h2 className="events-section__title font-cinzel">Upcoming Events</h2>',
'            </div>',
'            <GoldenButton label="VIEW ALL EVENTS" outlined onClick={() => navigate(''/events'')} />',
'          </div>',
'        </ScrollReveal>',
'',
'        <ScrollReveal delay={0.2}>',
'          <div className="events-section__grid">',
'            {events.slice(0, 3).map((event, i) => (',
'              <motion.div key={event.id} className="event-card" whileHover={{ y: -6, boxShadow: ''0 0 32px rgba(212,175,55,0.22)'' }}>',
'                <div className="event-card__thumb" style={{ background: `linear-gradient(135deg, ${event.gradientColors[0]}, ${event.gradientColors[1]})` }}>',
'                  <span style={{ fontSize: 48 }}>{event.emoji}</span>',
'                  {event.isLive && <span className="preview-event-card__live">\ud83d\udd34 LIVE</span>}',
'                  {event.isFree && <span className="preview-event-card__free">FREE</span>}',
'                </div>',
'                <div className="event-card__body">',
'                  <h4 className="event-card__title">{event.title}</h4>',
'                  <p className="event-card__meta">\ud83d\udcc5 {event.date} \u00b7 {event.time}</p>',
'                  <p className="event-card__desc">{event.description.slice(0, 80)}...</p>',
'                  <GoldenButton label={event.isFree ? ''JOIN FREE'' : ''REGISTER''} outlined width="100%" style={{ marginTop: 16 }} />',
'                </div>',
'              </motion.div>',
'            ))}',
'          </div>',
'        </ScrollReveal>',
'      </div>',
'    </section>',
'    <LotusConnector id="evtBlg" bg="maroon" />',
'    </>',
'  );',
'}'
)

# ── Block 2: replace BlogPreviewSection (lines 580-616, index 579-615)
$blgNew = @(
'export function BlogPreviewSection() {',
'  const navigate = useNavigate();',
'  return (',
'    <section className="blog-section">',
'      <div className="blog-section__container">',
'        <ScrollReveal>',
'          <div className="blog-section__header">',
'            <div>',
'              <p className="blog-section__eyebrow">SACRED WRITINGS</p>',
'              <h2 className="blog-section__title font-cinzel">From the Blog</h2>',
'            </div>',
'            <GoldenButton label="VIEW ALL POSTS" outlined onClick={() => navigate(''/blog'')} />',
'          </div>',
'        </ScrollReveal>',
'        <ScrollReveal delay={0.2}>',
'          <div className="blog-section__grid">',
'            {blogPosts.slice(0, 3).map((post, i) => (',
'              <motion.div key={post.id} className="blog-card" whileHover={{ y: -6, boxShadow: ''0 16px 48px rgba(90,16,37,0.12), 0 0 28px rgba(184,134,11,0.16)'' }}>',
'                <div className="blog-card__thumb">',
'                  <img src={post.thumbnail} alt={post.title} loading="lazy" />',
'                  <span className="blog-card__cat">{post.category}</span>',
'                </div>',
'                <div className="blog-card__body">',
'                  <h4 className="blog-card__title">{post.title}</h4>',
'                  <div className="blog-card__meta">',
'                    <span>{post.date}</span><span>\u00b7</span><span>{post.readTime}</span>',
'                  </div>',
'                  <GoldenButton label="READ MORE" outlined width="100%" style={{ marginTop: 16 }} />',
'                </div>',
'              </motion.div>',
'            ))}',
'          </div>',
'        </ScrollReveal>',
'      </div>',
'    </section>',
'  );',
'}'
)

$before  = $lines[0..538]        # before EventsPreviewSection
$middle  = $lines[577..578]      # blank line + comment between sections
$after   = $lines[616..($lines.Count - 1)]  # everything after BlogPreviewSection

$result = $before + $evtNew + $middle + $blgNew + $after

[System.IO.File]::WriteAllLines($src, $result, $enc)
Write-Host ('Done. Lines: ' + $result.Count)
