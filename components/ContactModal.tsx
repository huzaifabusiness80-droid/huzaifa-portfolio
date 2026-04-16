'use client';

import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [visible, setVisible]   = useState(false);
  const [mounted, setMounted]   = useState(false);
  const [form, setForm]         = useState({ name: '', email: '', project: '', message: '' });
  const [status, setStatus]     = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
      document.body.style.overflow = '';
      const t = setTimeout(() => setMounted(false), 700);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          service: form.project,
          message: form.message,
        }),
      });

      if (resp.ok) {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setForm({ name: '', email: '', project: '', message: '' });
          onClose(); // Auto-close modal on success
        }, 2000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again or email directly.');
      setStatus('idle');
    }
  };

  if (!mounted) return null;

  return (
    <div className={`cm-overlay${visible ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Contact form">

      {/* ── LEFT: FORM SIDE ─────────────────────────────── */}
      <div className="cm-left">

        {/* Top bar */}
        <div className="cm-topbar">
          <span className="cm-brand">HUZAIFA.DEV</span>
          <button className="cm-close" onClick={onClose} aria-label="Close form" id="cm-close-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span>Close</span>
          </button>
        </div>

        {/* Form header */}
        <div className="cm-form-header">
          <span className="cm-eyebrow">✦ New enquiry</span>
          <h2 className="cm-title">Start a<br /><em>Project</em></h2>
        </div>

        {/* The form */}
        <form className="cm-form" onSubmit={handleSubmit} noValidate>
          <div className="cm-row-two">
            <div className="cm-field">
              <label htmlFor="cf-name" className="cm-label">Your name</label>
              <input
                id="cf-name" type="text" className="cm-input"
                placeholder="John Smith"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required autoComplete="name"
              />
            </div>
            <div className="cm-field">
              <label htmlFor="cf-email" className="cm-label">Email address</label>
              <input
                id="cf-email" type="email" className="cm-input"
                placeholder="john@company.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required autoComplete="email"
              />
            </div>
          </div>

          <div className="cm-field">
            <label htmlFor="cf-project" className="cm-label">Project type</label>
            <select
              id="cf-project" className="cm-input cm-select"
              value={form.project}
              onChange={e => setForm({ ...form, project: e.target.value })}
              required
            >
              <option value="">Select a project type...</option>
              <option>Portfolio Website</option>
              <option>SaaS Platform</option>
              <option>E-Commerce Store</option>
              <option>Business Management System</option>
              <option>Mobile App</option>
              <option>Other</option>
            </select>
          </div>

          <div className="cm-field">
            <label htmlFor="cf-message" className="cm-label">Tell me about your project</label>
            <textarea
              id="cf-message" className="cm-input cm-textarea"
              placeholder="Describe your idea, goals, timeline..."
              rows={6}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <div className="cm-footer">
            
            <button
              type="submit"
              className={`cm-submit${status === 'sent' ? ' sent' : ''}`}
              disabled={status === 'sending' || status === 'sent'}
              id="cm-submit-btn"
            >
              {status === 'idle'    && <><span>Send message</span><SendIcon /></>}
              {status === 'sending' && <span>Sending...</span>}
              {status === 'sent'    && <span>Message sent ✓</span>}
            </button>
          </div>
        </form>
      </div>

      {/* ── RIGHT: DECORATIVE SIDE ───────────────────────── */}
      <div className="cm-right" aria-hidden="true">
        {/* Big watermark text */}
        <div className="cm-big-text">LET'S<br />WORK</div>

        {/* Info cards */}
        <div className="cm-info-stack">
          <div className="cm-info-item">
            <span className="cm-info-label">Email</span>
            <span className="cm-info-val">huzaifabusiness60@gmail.com</span>
          </div>
          <div className="cm-info-item">
            <span className="cm-info-label">Location</span>
            <span className="cm-info-val">Karachi, Pakistan</span>
          </div>
          <div className="cm-info-item">
            <span className="cm-info-label">Response time</span>
            <span className="cm-info-val">Within 24 hours</span>
          </div>
        </div>

        {/* Floating accent circle */}
        <div className="cm-deco-circle" />
      </div>

    </div>
  );
}
