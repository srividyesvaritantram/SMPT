$src = 'HomeSections.jsx'
$enc = [System.Text.Encoding]::UTF8
$lines = [System.IO.File]::ReadAllLines($src, $enc)

$newBlock = @(
'export function EventsPreviewSection() {',
'  const navigate = useNavigate();',
'  return (',
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
'  );',
'}'
)

$before = $lines[0..538]
$after  = $lines[576..($lines.Count - 1)]
$result = $before + $newBlock + $after

[System.IO.File]::WriteAllLines($src, $result, $enc)
Write-Host 'Done. Total lines: ' $result.Count
