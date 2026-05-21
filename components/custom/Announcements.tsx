'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Inspected, Quoted, and Done Right — Every Time</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(/images/roofing-crew-aerial-safety-harness-installation.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1A1A1C',
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every project starts the same way: we inspect the full structure, document
                what we find, and give you a written estimate before any work begins.
                No pressure. No surprises. Just a clear assessment and a plan you can count on.
              </p>
              <p>
                <strong>Step 1: Free Inspection.</strong> We assess the roof, chimney,
                siding, or gutters — and document all problem areas with photos.
              </p>
              <p>
                <strong>Step 2: Written Estimate.</strong> You get the full price in writing
                before we pick up a tool. What we quote is what you pay.
              </p>
              <p>
                <strong>Step 3: Complete the Job &amp; Clean Up.</strong> Our crew completes
                the work with quality materials, inspects the result with you, and hauls away
                all debris before leaving.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="tel:6315276834"
                label="Call for a Free Estimate"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
