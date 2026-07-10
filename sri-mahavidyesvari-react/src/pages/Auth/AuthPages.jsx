import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from 'react-icons/fi';
import GlassCard from '../../components/common/GlassCard.jsx';
import GoldenButton from '../../components/common/GoldenButton.jsx';
import GoldenParticleBackground from '../../components/common/GoldenParticleBackground.jsx';
import './AuthPages.css';

export function LoginPage() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/dashboard'); }, 2000);
  };

  return (
    <div className="auth-page">
      <GoldenParticleBackground count={80} />
      <div className="auth-glow" />
      <div className="auth-content">
        <motion.div className="auth-logo" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>ॐ</motion.div>
        <motion.h1 className="auth-title font-cinzel golden-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Welcome Back</motion.h1>
        <motion.p className="auth-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Continue your spiritual journey</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <GlassCard width={440} padding="40px">
            <form onSubmit={handleLogin} className="auth-form">
              <div className="auth-field">
                <label>EMAIL ADDRESS</label>
                <div className="auth-input-wrap">
                  <FiMail size={18} color="#E8C76A" />
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="auth-field">
                <label>PASSWORD</label>
                <div className="auth-input-wrap">
                  <FiLock size={18} color="#E8C76A" />
                  <input type={showPass ? 'text' : 'password'} placeholder="••••••••" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="auth-eye">{showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}</button>
                </div>
              </div>
              <div style={{ textAlign: 'right', marginTop: -8 }}>
                <button type="button" className="auth-forgot">Forgot Password?</button>
              </div>
              <GoldenButton label={loading ? 'SIGNING IN...' : 'SIGN IN'} type="submit" width="100%" disabled={loading} />
              <div className="auth-divider"><span>OR</span></div>
              <button type="button" className="auth-social-btn">
                <span style={{ fontSize: 20 }}>G</span> Continue with Google
              </button>
              <p className="auth-switch">Don't have an account? <Link to="/register" className="auth-link">Register Free</Link></p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

export function RegisterPage() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  return (
    <div className="auth-page">
      <GoldenParticleBackground count={80} />
      <div className="auth-glow" />
      <div className="auth-content">
        <motion.div className="auth-logo" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>ॐ</motion.div>
        <motion.h1 className="auth-title font-cinzel golden-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Create Account</motion.h1>
        <motion.p className="auth-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Start your free spiritual journey</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <GlassCard width={440} padding="40px">
            <form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }} className="auth-form">
              <div className="auth-field">
                <label>FULL NAME</label>
                <div className="auth-input-wrap">
                  <FiUser size={18} color="#E8C76A" />
                  <input type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
              </div>
              <div className="auth-field">
                <label>EMAIL ADDRESS</label>
                <div className="auth-input-wrap">
                  <FiMail size={18} color="#E8C76A" />
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="auth-field">
                <label>PASSWORD</label>
                <div className="auth-input-wrap">
                  <FiLock size={18} color="#E8C76A" />
                  <input type={showPass ? 'text' : 'password'} placeholder="••••••••" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="auth-eye">{showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}</button>
                </div>
              </div>
              <label className="auth-agree">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                <span>I agree to the Terms of Service and Privacy Policy</span>
              </label>
              <GoldenButton label="CREATE FREE ACCOUNT" type="submit" width="100%" disabled={!agreed} />
              <p className="auth-switch">Already have an account? <Link to="/login" className="auth-link">Sign In</Link></p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
