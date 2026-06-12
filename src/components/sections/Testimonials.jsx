import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Testimonials"
          title="What people say"
          subtitle="Feedback from mentors, teammates, and peers I've worked with."
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Card className="relative p-8 md:p-12" glow>
                <Quote size={48} className="absolute right-8 top-8 text-neon-violet/20" />
                <p className="relative z-10 text-lg leading-relaxed text-slate-300 md:text-xl">
                  "{testimonials[current].content}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-violet to-neon-indigo font-display font-bold text-white">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonials[current].name}</h4>
                    <p className="text-sm text-slate-400">{testimonials[current].role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="sm" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-neon-violet'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
