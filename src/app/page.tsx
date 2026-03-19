import NavScripts from '@/components/NavScripts'

export default function Home() {
  return (
    <>
      <NavScripts />

      {/* ═══════ NAV ═══════ */}
      <nav id="navbar">
        <a href="#" className="nav-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.97 41.07"><path fill="#008fcb" d="M7.39,40.67c0,.22-.26.41-.58.41H.58c-.32,0-.58-.18-.58-.41v-12.75c0-.23.26-.41.58-.41h6.23c.32,0,.58.18.58.41v12.75Z"/><path fill="#719245" d="M16.48,40.67c0,.22-.26.41-.58.41h-6.23c-.32,0-.58-.18-.58-.41v-12.75c0-.23.26-.41.58-.41h6.23c.32,0,.58.18.58.41v12.75Z"/><path fill="#dfcc82" d="M25.57,40.67c0,.22-.26.41-.58.41h-6.23c-.32,0-.58-.18-.58-.41v-12.75c0-.23.26-.41.58-.41h6.23c.32,0,.58.18.58.41v12.75Z"/><path fill="#c6533b" d="M34.66,40.67c0,.22-.26.41-.58.41h-6.23c-.32,0-.58-.18-.58-.41v-12.75c0-.23.26-.41.58-.41h6.23c.32,0,.58.18.58.41v12.75Z"/><polygon fill="#008fcb" points="117.85 .31 117.85 .04 120.45 .04 120.45 .31 119.29 .31 119.29 3.5 118.99 3.5 118.99 .31 117.85 .31"/><polygon fill="#008fcb" points="121.19 .03 122.39 2.14 123.59 .03 123.97 .03 123.97 3.5 123.69 3.5 123.69 .44 122.47 2.63 122.31 2.63 121.1 .45 121.1 3.5 120.81 3.5 120.81 .03 121.19 .03"/><path fill="#008fcb" d="M14.57,0c2.64,0,4.82,1.91,4.82,5v2.21c0,3.1-2.18,4.64-4.77,4.64h-3.93v9.14h-1.49V0h5.37ZM17.89,5c0-2.02-1.59-3.36-3.32-3.36h-3.88v8.57h3.88c1.75,0,3.32-.92,3.32-3.01v-2.21Z"/><path fill="#008fcb" d="M29.82,18.24l.74,1.25c-1.19,1.22-2.94,1.78-4.54,1.78-2.94,0-5.5-1.63-5.5-5.18v-5.09c0-2.92,2.23-4.91,5.09-4.91s4.77,1.97,4.77,4.89v1.96l-8.39,1.43v1.73c0,2.41,2,3.55,4.08,3.55,1.83,0,3.2-.87,3.75-1.4M21.98,11.01v1.94l6.87-1.16v-.84c0-1.84-1.39-3.21-3.27-3.21s-3.6,1.37-3.6,3.27"/><path fill="#008fcb" d="M39.2,6.27l-.28,1.72c-.33-.09-.83-.15-1.21-.15-1.85,0-3.02,2.38-3.02,4.64v8.49h-1.49V6.39h1.27l.15,3.07c.48-1.73,1.7-3.37,3.28-3.37.45,0,.91.06,1.31.18"/><path fill="#008fcb" d="M48.99,16.93c0,3.07-2.05,4.32-4.61,4.32-1.75,0-3.42-.81-4.61-2.27l.71-1.28c.94,1.13,2.56,1.96,3.96,1.96,1.73,0,3.12-.51,3.12-2.56s-1.88-2.32-3.47-2.92c-2.11-.77-3.8-1.55-3.8-4.17,0-2.8,1.9-3.93,4.31-3.93,1.22,0,2.92.71,3.93,1.61l-.71,1.49c-.91-.77-2.13-1.49-3.27-1.49-1.6,0-2.77.48-2.77,2.32s1.78,2.11,3.22,2.65c2.16.84,4.01,1.7,4.01,4.26"/><path fill="#008fcb" d="M60.93,11.15v4.94c0,3.13-2.43,5.16-5.1,5.16s-5.12-2-5.12-5.16v-4.94c0-3.12,2.41-5.09,5.12-5.09s5.1,1.99,5.1,5.09M59.43,11.15c0-2.14-1.77-3.45-3.6-3.45s-3.65,1.31-3.65,3.45v4.94c0,2.2,1.8,3.48,3.65,3.48s3.6-1.31,3.6-3.48v-4.94Z"/><path fill="#008fcb" d="M73.43,11.13v9.86h-1.47v-9.68c0-2.23-1.14-3.6-3.04-3.6s-4.21,1.96-4.21,4.23v9.05h-1.52V6.39h1.42l.1,2.83c.99-1.91,2.49-3.16,4.44-3.16,2.74,0,4.28,1.88,4.28,5.06"/><path fill="#008fcb" d="M84.99,11.1v9.89h-1.34l-.15-2c-.96,1.76-2.28,2.27-3.9,2.27-2.36,0-4.11-1.67-4.11-4.41v-2.83l7.99-1.64v-1.28c0-2.26-1.02-3.4-2.94-3.4-1.62,0-3.32.92-4.05,1.46l-.53-1.37c.97-.71,2.97-1.7,4.7-1.7,2.68,0,4.36,1.85,4.36,5.01M83.47,13.83l-6.51,1.35v1.61c0,1.85,1.32,2.86,2.89,2.86,1.7,0,3.62-1.28,3.62-3.31v-2.5Z"/><rect fill="#008fcb" x="88.01" y=".02" width="1.49" height="20.97"/><path fill="#008fcb" d="M93.08.73h1.67v2.21h-1.67V.73ZM93.21,6.39h1.47v14.59h-1.47V6.39Z"/><path fill="#008fcb" d="M104.41,18.9l.41,1.4c-.56.27-1.7.8-2.89.8-1.98,0-3.14-1.31-3.14-3.63V7.85h-2.36v-1.46h2.36V1.96h1.5v4.44h3.5v1.46h-3.5v9.56c0,1.25.58,2.09,1.65,2.09s2.05-.36,2.48-.6"/><path fill="#008fcb" d="M109.56,21.46l-4.41-15.07h1.62l3.63,12.86,3.67-12.86h1.62l-4.92,16.29c-.91,3.04-3.02,4.64-5.61,4.64l-.1-1.52c1.93,0,3.58-1.34,4.26-3.51l.23-.83Z"/></svg>
        </a>
        <div className="nav-links">
          <a href="#profile">The Profile</a>
          <a href="#creators">Creators</a>
          <a href="#contact" className="nav-cta">Get Aligned</a>
        </div>
      </nav>

      {/* ═══════ 1. HERO ═══════ */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">For Leadership Teams</div>
          <h1>When leaders aren&apos;t aligned, <em>everything</em> costs more.</h1>
          <p className="hero-subhead">The Personality Profile is a one-page framework that reveals how your organization actually thinks, decides, and operates. It&apos;s how leadership teams get aligned, fast.</p>
          <p className="hero-stakes">Without shared clarity, even great leaders pull in different directions.</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Get Aligned →</a>
            <a href="#profile" className="btn btn-outline">See the Personality Profile</a>
          </div>
        </div>
      </section>

      {/* ═══════ 2. PROBLEM ═══════ */}
      <section className="problem">
        <div className="section-inner reveal">
          <div className="section-label">The Challenge</div>
          <h2 className="section-headline">You&apos;re leading smart people, so why does alignment feel so <em>hard?</em></h2>

          <div className="problem-body">
            <p>As a leader, you&apos;re responsible for decisions that matter.</p>

            <div className="problem-lists">
              <div className="problem-list">
                <h4>You decide</h4>
                <ul>
                  <li>Where to focus</li>
                  <li>What to say yes or no to</li>
                  <li>How to move forward together</li>
                </ul>
              </div>
              <div className="problem-list">
                <h4>But when leaders don&apos;t share</h4>
                <ul>
                  <li>Who you are</li>
                  <li>What matters most</li>
                  <li>How decisions get made</li>
                </ul>
              </div>
            </div>

            <p>Progress slows. Tension rises. And important work gets harder than it should be.</p>

            <p className="problem-conclusion">The problem isn&apos;t effort.<br /><strong>It&apos;s clarity.</strong></p>
          </div>
        </div>
      </section>

      {/* ═══════ 3. STAKES ═══════ */}
      <section className="stakes">
        <div className="section-inner reveal">
          <div className="section-label">The Cost</div>
          <h2 className="section-headline">Misalignment is <em>expensive.</em></h2>

          <div className="stakes-content">
            <ul className="stakes-list">
              <li>
                <div className="stakes-item-header">
                  <span className="stakes-icon">×</span>
                  <span className="stakes-item-title">Meetings circle instead of resolve.</span>
                </div>
                <p className="stakes-item-desc">The same conversations keep happening. People leave nodding, but nothing changes because the root issue isn&apos;t on the agenda. It&apos;s underneath it.</p>
              </li>
              <li>
                <div className="stakes-item-header">
                  <span className="stakes-icon">×</span>
                  <span className="stakes-item-title">Strategy stalls.</span>
                </div>
                <p className="stakes-item-desc">You have a plan. But execution drags because people interpret it differently. It&apos;s not that your strategy is wrong. It&apos;s that your team isn&apos;t working from the same story.</p>
              </li>
              <li>
                <div className="stakes-item-header">
                  <span className="stakes-icon">×</span>
                  <span className="stakes-item-title">Culture weakens.</span>
                </div>
                <p className="stakes-item-desc">When leaders aren&apos;t aligned, people notice. Culture erodes because people stop believing the leaders are on the same page.</p>
              </li>
              <li>
                <div className="stakes-item-header">
                  <span className="stakes-icon">×</span>
                  <span className="stakes-item-title">Money gets spent fixing the wrong problems.</span>
                </div>
                <p className="stakes-item-desc">You hire consultants to fix a brand problem that&apos;s actually a leadership problem. The longer clarity waits, the more you spend cleaning up its absence.</p>
              </li>
            </ul>

            <p className="stakes-conclusion">Most organizations don&apos;t fail from lack of talent. They fail from lack of shared understanding.</p>
          </div>
        </div>
      </section>

      {/* ═══════ 4. SOLUTION — Gateway ═══════ */}
      <section className="solution" id="profile">
        <div className="section-inner reveal">
          <div className="solution-header">
            <div className="section-label">The Tool</div>
            <h2 className="section-headline">The Personality Profile.</h2>
            <p className="solution-subtitle">21 Frames. One Day. One Page.</p>
            <p className="solution-intro">Stories are how human beings make sense of the world and connect with one another. Every organization is living inside a story, whether it knows it or not. The Personality Profile is a psychology-based tool that surfaces that story, the one your organization tells itself, and aligns your leadership team around it. Twenty-one frames, organized into six dimensions, give leaders a shared language rooted in who they actually are. That&apos;s where real alignment comes from.</p>
          </div>

          <div className="framework-grid">
            <a href="/starting-point" className="framework-box">
              <div className="framework-box-num">Frame 01</div>
              <div className="framework-box-name">Starting Point</div>
              <div className="framework-box-desc">Where clarity begins. The foundational context for everything that follows.</div>
              <span className="framework-box-arrow">Explore →</span>
            </a>
            <a href="/character" className="framework-box">
              <div className="framework-box-num">Frame 02</div>
              <div className="framework-box-name">Character</div>
              <div className="framework-box-desc">How your organization creates value: purpose, mission, offer, cause, and effect.</div>
              <span className="framework-box-arrow">Explore →</span>
            </a>
            <a href="/relationship" className="framework-box">
              <div className="framework-box-num">Frame 03</div>
              <div className="framework-box-name">Relationship</div>
              <div className="framework-box-desc">How your organization transfers value: roles, goal, measure, effort, outcome.</div>
              <span className="framework-box-arrow">Explore →</span>
            </a>
            <a href="/identity" className="framework-box">
              <div className="framework-box-num">Frame 04</div>
              <div className="framework-box-name">Identity</div>
              <div className="framework-box-desc">How your organization embodies value: physical, emotional, intellectual, social, spiritual.</div>
              <span className="framework-box-arrow">Explore →</span>
            </a>
            <a href="/voice" className="framework-box">
              <div className="framework-box-num">Frame 05</div>
              <div className="framework-box-name">Voice</div>
              <div className="framework-box-desc">How your organization expresses value: viewpoint, opportunity, insight, commitment, experience.</div>
              <span className="framework-box-arrow">Explore →</span>
            </a>
            <a href="/essence" className="framework-box">
              <div className="framework-box-num">Frame 06</div>
              <div className="framework-box-name">Essence</div>
              <div className="framework-box-desc">Where clarity culminates into a single word or phrase that sums it all up.</div>
              <span className="framework-box-arrow">Explore →</span>
            </a>
          </div>

          <div className="solution-cta-row">
            <a href="/the-profile" className="btn btn-primary">Learn More About the Profile →</a>
            <span className="solution-cta-note">Full methodology, case for use, and how to get started.</span>
          </div>
        </div>
      </section>

      {/* ═══════ 5. PROCESS ═══════ */}
      <section className="plan">
        <div className="section-inner reveal">
          <div className="section-label">The Process</div>
          <h2 className="section-headline">A simple process. A powerful result.</h2>
          <p className="plan-sub">Here&apos;s how it works:</p>

          <div className="plan-steps">
            <div className="plan-step">
              <div className="plan-step-num">01</div>
              <h4>Clarify</h4>
              <p>In a facilitated session, your leadership team works through 21 essential frames that surface how the organization actually operates.</p>
            </div>
            <div className="plan-step">
              <div className="plan-step-num">02</div>
              <h4>Capture</h4>
              <p>Insights are synthesized live into a single, coherent one-page profile.</p>
            </div>
            <div className="plan-step">
              <div className="plan-step-num">03</div>
              <h4>Use</h4>
              <p>That profile becomes a practical reference point for decisions, strategy, communication, and change.</p>
            </div>
          </div>

          <p className="plan-conclusion">No jargon. No binders. Just clarity.</p>
        </div>
      </section>

      {/* ═══════ 6. CREATORS ═══════ */}
      <section className="creators" id="creators">
        <div className="section-inner reveal">
          <div className="creators-intro">
            <div className="section-label">The Creators</div>
            <h2 className="section-headline">Built by leaders, <em>for leaders.</em></h2>
            <p className="creators-intro-body">The Personality Profile was developed by two practitioners who spent decades inside the same kind of complexity the tool is designed to solve.</p>
          </div>

          <div className="creators-grid">
            <div className="creator-card">
              <div className="creator-card-header">
                <div className="creator-avatar">BA</div>
                <div className="creator-header-text">
                  <div className="creator-role">The Disruptor · Co-Creator</div>
                  <h3>Brad Abare</h3>
                </div>
              </div>
              <div className="creator-card-body">
                <p>Brad asks the hard questions no one else will. Having served as founder, CEO, and Chief of Staff, he knows what it&apos;s like to sit in the seat and how costly it becomes when alignment never happens. He mediates conflict, facilitates consensus, creates momentum, and helps leaders finally articulate what they&apos;ve been trying to say.</p>
                <p>In building the Profile, Brad brought the same instinct: pressure-testing every frame against the real decisions executives face, and aligning the tool&apos;s architecture to the way leadership teams actually work.</p>
                <p className="creator-credentials">Executive Masters in Change from INSEAD (Singapore). Certification from Saïd Business School, University of Oxford.</p>
              </div>
            </div>
            <div className="creator-card">
              <div className="creator-card-header">
                <div className="creator-avatar">SS</div>
                <div className="creator-header-text">
                  <div className="creator-role">The Discerner · Co-Creator</div>
                  <h3>Shawn Stewart</h3>
                </div>
              </div>
              <div className="creator-card-body">
                <p>Shawn helps leaders stop choosing between thriving people and thriving performance. With a rare hybrid of brand strategy, organizational psychology, and executive coaching, he sees the gaps others miss between what organizations say and how they actually operate.</p>
                <p>In shaping the Profile, Shawn designed the strategic process and discerned which frames would be most effective, blending design thinking, psychology, and brand logic into a tool that surfaces clarity instead of just conversation.</p>
                <p className="creator-credentials">Yale AIGA Executive Management Program. Henley Business School (UK). ICF Member Coach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 7. TESTIMONIALS ═══════ */}
      <section className="testimonials">
        <div className="section-inner reveal">
          <div className="testimonials-header">
            <div className="section-label">What Leaders Say</div>
            <h2 className="section-headline">The proof is in the process.</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <blockquote>&ldquo;One of the best I&apos;ve seen. It was just so darn fun. So much in such a short period of time. Outstanding facilitation. The collaborative process was amazing.&rdquo;</blockquote>
            </div>
            <div className="testimonial-card">
              <blockquote>&ldquo;Your ability to help a newly-formed team come to complete consensus about our direction and vision. This is a very healthy process.&rdquo;</blockquote>
            </div>
            <div className="testimonial-card">
              <blockquote>&ldquo;You did a fantastic job. I felt very much at ease and came away with a better understanding of what we are to do.&rdquo;</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 8. CTA ═══════ */}
      <section className="final-cta" id="contact">
        <div className="section-inner reveal">
          <div className="final-cta-inner">
            <h2 className="section-headline">Get aligned before <em>you move.</em></h2>
            <p>If your organization is facing important decisions, don&apos;t guess at alignment. Start with clarity.</p>
            <div className="final-cta-buttons">
              <a href="mailto:hello@thinkpersonality.com" className="btn btn-white">Start a Conversation</a>
              <a href="#" className="btn btn-ghost">Download: 5 Signs You Need Clarity</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.06 27.33"><path fill="#008fcb" d="M11.43,20.42c0,.35-.4.63-.89.63H.9c-.49,0-.9-.28-.9-.63V.69C0,.34.4.06.9.06h9.64c.5,0,.89.28.89.63v19.73Z"/><path fill="#719245" d="M25.5,20.42c0,.35-.39.63-.89.63h-9.64c-.5,0-.89-.28-.89-.63V.69c0-.35.4-.63.89-.63h9.64c.5,0,.89.28.89.63v19.73Z"/><path fill="#dfcc82" d="M39.57,20.42c0,.35-.4.63-.9.63h-9.64c-.5,0-.89-.28-.89-.63V.69c0-.35.4-.63.89-.63h9.64c.5,0,.9.28.9.63v19.73Z"/><path fill="#c6533b" d="M53.64,20.42c0,.35-.41.63-.9.63h-9.64c-.5,0-.9-.28-.9-.63V.69c0-.35.4-.63.9-.63h9.64c.49,0,.9.28.9.63v19.73Z"/><polygon fill="#fff" points="172.94 .31 172.94 .04 175.53 .04 175.53 .31 174.38 .31 174.38 3.5 174.08 3.5 174.08 .31 172.94 .31"/><polygon fill="#fff" points="176.28 .03 177.48 2.14 178.68 .03 179.06 .03 179.06 3.5 178.78 3.5 178.78 .44 177.55 2.63 177.39 2.63 176.19 .45 176.19 3.5 175.9 3.5 175.9 .03 176.28 .03"/><path fill="#fff" d="M69.65,0c2.64,0,4.82,1.91,4.82,5v2.21c0,3.1-2.18,4.64-4.77,4.64h-3.93v9.14h-1.49V0h5.37ZM72.98,5c0-2.02-1.59-3.36-3.32-3.36h-3.88v8.57h3.88c1.75,0,3.32-.92,3.32-3.01v-2.21Z"/><path fill="#fff" d="M84.9,18.24l.74,1.25c-1.19,1.22-2.94,1.78-4.54,1.78-2.94,0-5.5-1.63-5.5-5.18v-5.09c0-2.92,2.23-4.91,5.09-4.91s4.77,1.97,4.77,4.89v1.96l-8.39,1.43v1.73c0,2.41,2,3.55,4.08,3.55,1.83,0,3.2-.87,3.75-1.4M77.07,11.01v1.94l6.87-1.16v-.84c0-1.84-1.39-3.21-3.27-3.21s-3.6,1.37-3.6,3.27"/><path fill="#fff" d="M94.28,6.27l-.28,1.72c-.33-.09-.83-.15-1.21-.15-1.85,0-3.02,2.38-3.02,4.64v8.49h-1.49V6.39h1.27l.15,3.07c.48-1.73,1.7-3.37,3.28-3.37.45,0,.91.06,1.31.18"/><path fill="#fff" d="M104.07,16.93c0,3.07-2.05,4.32-4.61,4.32-1.75,0-3.42-.81-4.61-2.27l.71-1.28c.94,1.13,2.56,1.96,3.96,1.96,1.73,0,3.12-.51,3.12-2.56s-1.88-2.32-3.47-2.92c-2.11-.77-3.8-1.55-3.8-4.17,0-2.8,1.9-3.93,4.31-3.93,1.22,0,2.92.71,3.93,1.61l-.71,1.49c-.91-.77-2.13-1.49-3.27-1.49-1.6,0-2.77.48-2.77,2.32s1.78,2.11,3.22,2.65c2.16.84,4.01,1.7,4.01,4.26"/><path fill="#fff" d="M116.01,11.15v4.94c0,3.13-2.43,5.16-5.1,5.16s-5.12-2-5.12-5.16v-4.94c0-3.12,2.41-5.09,5.12-5.09s5.1,1.99,5.1,5.09M114.52,11.15c0-2.14-1.77-3.45-3.6-3.45s-3.65,1.31-3.65,3.45v4.94c0,2.2,1.8,3.48,3.65,3.48s3.6-1.31,3.6-3.48v-4.94Z"/><path fill="#fff" d="M128.51,11.13v9.86h-1.47v-9.68c0-2.23-1.14-3.6-3.04-3.6s-4.21,1.96-4.21,4.23v9.05h-1.52V6.39h1.42l.1,2.83c.99-1.91,2.49-3.16,4.44-3.16,2.74,0,4.28,1.88,4.28,5.06"/><path fill="#fff" d="M140.07,11.1v9.89h-1.34l-.15-2c-.96,1.76-2.28,2.27-3.9,2.27-2.36,0-4.11-1.67-4.11-4.41v-2.83l7.99-1.64v-1.28c0-2.26-1.02-3.4-2.94-3.4-1.62,0-3.32.92-4.05,1.46l-.53-1.37c.97-.71,2.97-1.7,4.7-1.7,2.68,0,4.36,1.85,4.36,5.01M138.55,13.83l-6.51,1.35v1.61c0,1.85,1.32,2.86,2.89,2.86,1.7,0,3.62-1.28,3.62-3.31v-2.5Z"/><rect fill="#fff" x="143.1" y=".02" width="1.49" height="20.97"/><path fill="#fff" d="M148.16.73h1.67v2.21h-1.67V.73ZM148.29,6.39h1.47v14.59h-1.47V6.39Z"/><path fill="#fff" d="M159.5,18.9l.41,1.4c-.56.27-1.7.8-2.89.8-1.98,0-3.14-1.31-3.14-3.63V7.85h-2.36v-1.46h2.36V1.96h1.5v4.44h3.5v1.46h-3.5v9.56c0,1.25.58,2.09,1.65,2.09s2.05-.36,2.48-.6"/><path fill="#fff" d="M164.64,21.46l-4.41-15.07h1.62l3.63,12.86,3.67-12.86h1.62l-4.92,16.29c-.91,3.04-3.02,4.64-5.61,4.64l-.1-1.52c1.93,0,3.58-1.34,4.26-3.51l.23-.83Z"/></svg>
            </div>
            <div className="footer-contact">
              <a href="mailto:hello@thinkpersonality.com">hello@thinkpersonality.com</a><br />
              <a href="tel:+12132011800">+1 213-201-1800</a><br />
              Seattle + Southern California
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-copy">&copy; 2026 Personality&trade;. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
