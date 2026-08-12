import { useState } from 'react';
import { Save, Globe, Palette, BellRing, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

function SettingCard({ icon, title, subtitle, children }) {
  return (
    <div className="admin-card">
      <div className="admin-card__head">
        <div>
          <div className="admin-card__title">{icon} {title}</div>
          <div className="admin-card__subtitle">{subtitle}</div>
        </div>
      </div>
      <div className="admin-card__body">{children}</div>
    </div>
  );
}

function ToggleRow({ title, desc }) {
  const [on, setOn] = useState(true);
  return (
    <div className="admin-settings-row">
      <div>
        <div className="admin-settings-row__title">{title}</div>
        <div className="admin-settings-row__desc">{desc}</div>
      </div>
      <label className="admin-toggle">
        <input type="checkbox" checked={on} onChange={() => setOn((v) => !v)} />
        <span className="admin-toggle__track" />
      </label>
    </div>
  );
}

export default function AdminSettings() {
  return (
    <>
      <PageHeader
        eyebrow="Configuration"
        title="Settings"
        subtitle="Configure the Peetham platform. No settings are persisted yet — this is the UI foundation."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Settings saved (Phase 2).')}>
            <Save /> Save Settings
          </button>
        }
      />

      <div className="admin-grid-2eq">
        <SettingCard icon={<Globe />} title="General Settings" subtitle="Temple and platform basics">
          <div className="admin-form-grid">
            <div className="admin-field admin-field--full">
              <label className="admin-field__label">Temple / Peetham Name</label>
              <input type="text" defaultValue="Sri Mahavidyesvari Tantra Peetham" />
            </div>
            <div className="admin-field">
              <label className="admin-field__label">Contact Email</label>
              <input type="email" defaultValue="admin@srimahavidyesvari.org" />
            </div>
            <div className="admin-field">
              <label className="admin-field__label">Contact Phone</label>
              <input type="tel" defaultValue="+91 93908 86029" />
            </div>
            <div className="admin-field admin-field--full">
              <label className="admin-field__label">Time Zone</label>
              <select className="admin-select" defaultValue="IST" style={{ width: '100%' }}>
                <option value="IST">India Standard Time (IST, UTC+5:30)</option>
              </select>
            </div>
          </div>
        </SettingCard>

        <SettingCard icon={<Palette />} title="Website Settings" subtitle="Public site behaviour">
          <ToggleRow title="Show WhatsApp button" desc="Display the floating WhatsApp help button" />
          <ToggleRow title="Show testimonials" desc="Show student testimonials on the Home page" />
          <ToggleRow title="Accept new registrations" desc="Allow new students to register" />
          <ToggleRow title="Maintenance mode" desc="Temporarily hide the public site" />
        </SettingCard>

        <SettingCard icon={<BellRing />} title="Notification Settings" subtitle="How and when to notify">
          <ToggleRow title="New student registration" desc="Alert admins when a student registers" />
          <ToggleRow title="Payment received" desc="Alert admins on every successful payment" />
          <ToggleRow title="Class reminders" desc="Remind students 1 hour before each class" />
          <ToggleRow title="Event notifications" desc="Notify students about upcoming events" />
        </SettingCard>

        <SettingCard icon={<CreditCard />} title="Payment Settings" subtitle="Currency and gateways">
          <div className="admin-form-grid">
            <div className="admin-field">
              <label className="admin-field__label">Currency</label>
              <select className="admin-select" defaultValue="INR" style={{ width: '100%' }}>
                <option value="INR">Indian Rupee (₹)</option>
              </select>
            </div>
            <div className="admin-field">
              <label className="admin-field__label">Default Course Fee</label>
              <input type="text" defaultValue="₹ 5,000" />
            </div>
            <div className="admin-field admin-field--full">
              <label className="admin-field__label">Payment Gateway</label>
              <select className="admin-select" defaultValue="upi" style={{ width: '100%' }}>
                <option value="upi">UPI &amp; Net Banking</option>
                <option value="card">Card + UPI</option>
              </select>
              <span className="admin-field__hint">Gateway connection will be implemented in Phase 2.</span>
            </div>
          </div>
        </SettingCard>
      </div>
    </>
  );
}
