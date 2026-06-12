import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram' },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
    case 'email':
      return !EMAIL_REGEX.test(value) ? 'Please enter a valid email address' : '';
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
    default:
      return '';
  }
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const whatsappUrl = `https://wa.me/${personalInfo.whatsapp}?text=Hi%20Dhaval,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`;

  return (
    <section id="contact" className="section-padding relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950" />
      
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Get In Touch"
          title="Let's work together"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <motion.div
          className="grid gap-10 lg:grid-cols-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <Card className="h-full p-6" glow>
              <h3 className="font-display text-2xl font-bold text-white">Contact Information</h3>
              <p className="mt-2 text-slate-400">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={personalInfo.social.email}
                  className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-neon-violet"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-neon-violet/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-emerald-500/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone / WhatsApp</p>
                    <p className="font-medium">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm text-slate-500">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-neon-violet/50 hover:text-neon-violet"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:ring-2',
                        errors.name
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-neon-violet/50 focus:ring-neon-violet/20'
                      )}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:ring-2',
                        errors.email
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-neon-violet/50 focus:ring-neon-violet/20'
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(
                      'w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:ring-2',
                      errors.message
                        ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-neon-violet/50 focus:ring-neon-violet/20'
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className={cn('gap-2', status === 'sending' && 'opacity-70')}
                  >
                    <Send size={18} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    href={whatsappUrl}
                    external
                    className="gap-2"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    href={personalInfo.social.email}
                    className="gap-2"
                  >
                    <Mail size={18} />
                    Email Me
                  </Button>
                </div>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-emerald-400"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-red-400"
                  >
                    Something went wrong. Please email me directly at{' '}
                    <a href={personalInfo.social.email} className="underline transition-colors hover:text-neon-violet">
                      {personalInfo.email}
                    </a>
                  </motion.p>
                )}
              </form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
