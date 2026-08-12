import { useState } from 'react';
import { Save, Mail, Phone, Shield, UserCircle, KeyRound, BadgeCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader.jsx';
import { adminProfile } from '../data/mockData.js';

const phase2 = (msg) =>
  toast(msg, {
    icon: '🪷',
    style: { background: '#3D0A1C', color: '#FFF0E8', border: '1px solid rgba(212,175,55,0.3)' },
  });

export default function AdminProfile() {
  const [notify, setNotify] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Admin Profile"
        subtitle="Your identity and account details for the Tantra Peetham."
        actions={
          <button className="admin-btn admin-btn--gold" onClick={() => phase2('Profile saved (Phase 2).')}>
            <Save /> Save Changes
          </button>
        }
      />

      <div className="admin-profile-header">
        <div className="admin-avatar">{adminProfile.initials}</div>
        <div>
          <div className="admin-profile-header__name">{adminProfile.name}</div>
          <div className="admin-profile-header__role">
            <Shield /> {adminProfile.role}
            <span className="admin-profile-header__badge"><BadgeCheck /> Verified</span>
          </div>
        </div>
      </div>

      <div className="admin-grid-2eq">
        <div className="admin-card">
          <div className="admin-card__head">
            <div>
              <div className="admin-card__title"><UserCircle /> Personal Information</div>
              <div className="admin-card__subtitle">How you appear to students</div>
            </div>
          </div>
          <div className="admin-card__body">
            <div className="admin-form-grid">
              <div className="admin-field">
                <label className="admin-field__label">First Name</label>
                <input type="text" defaultValue={adminProfile.firstName} />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Last Name</label>
                <input type="text" defaultValue={adminProfile.lastName} />
              </div>
              <div className="admin-field admin-field--full">
                <label className="admin-field__label">About</label>
                <textarea rows={3} defaultValue={adminProfile.about} />
                <span className="admin-field__hint">Shown on the About page and in course credits.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card__head">
            <div>
              <div className="admin-card__title"><KeyRound /> Account Information</div>
              <div className="admin-card__subtitle">Contact and security settings</div>
            </div>
          </div>
          <div className="admin-card__body">
            <div className="admin-kv">
              <div className="admin-kv__row">
                <span className="admin-kv__key"><Mail /> Email</span>
                <span className="admin-kv__value">{adminProfile.email}</span>
              </div>
              <div className="admin-kv__row">
                <span className="admin-kv__key"><Phone /> Phone</span>
                <span className="admin-kv__value">{adminProfile.phone}</span>
              </div>
              <div className="admin-kv__row">
                <span className="admin-kv__key"><Shield /> Role</span>
                <span className="admin-kv__value">{adminProfile.role}</span>
              </div>
              <div className="admin-settings-row">
                <div>
                  <div className="admin-settings-row__title">Email Notifications</div>
                  <div className="admin-settings-row__desc">Receive activity alerts by email</div>
                </div>
                <label className="admin-toggle">
                  <input type="checkbox" checked={notify} onChange={() => setNotify((v) => !v)} />
                  <span className="admin-toggle__track" />
                </label>
              </div>
              <div className="admin-settings-row">
                <div>
                  <div className="admin-settings-row__title">Two-Factor Authentication</div>
                  <div className="admin-settings-row__desc">Extra security for admin login</div>
                </div>
                <label className="admin-toggle">
                  <input type="checkbox" checked={twoFA} onChange={() => setTwoFA((v) => !v)} />
                  <span className="admin-toggle__track" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
