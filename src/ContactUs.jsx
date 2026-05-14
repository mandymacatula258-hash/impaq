import React from 'react'
import './ContactUs.css'
import contactImg from '../assets/contact.png'

const DEPARTMENTS = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Dealer Partnership',
    phone: '+1 (000) 000-0000',
    email: 'dealer@impaqoptics.com',
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Pre-sales Consultation',
    phone: '+1 (000) 000-0000',
    email: 'presales@impaqoptics.com',
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z"/>
      </svg>
    ),
    title: 'After-sales Service',
    phone: '+1 (000) 000-0000',
    email: 'aftersales@impaqoptics.com',
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Brand Partnership and Sponsorship',
    phone: '+1 (000) 000-0000',
    email: 'brand@impaqoptics.com',
  },
  {
    id: 5,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
      </svg>
    ),
    title: 'Order Shipping and Logistics',
    phone: '+1 (000) 000-0000',
    email: 'logistics@impaqoptics.com',
  },
  {
    id: 6,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'Product & Service Complaint',
    phone: '+1 (000) 000-0000',
    email: 'support@impaqoptics.com',
  },
]

export default function ContactUs() {
  return (
    <div className="contact">
      <section className="contact__hero" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="contact__hero-overlay" />
        <div className="contact__hero-content">
          <h1 className="contact__hero-title">Contact Us</h1>
        </div>
      </section>

      <section className="contact__body">
        <div className="contact__body-inner">
          <p className="contact__intro">
            Reach out to the right team and we'll get back to you as soon as possible.
          </p>
          <div className="contact__grid">
            {DEPARTMENTS.map((dept) => (
              <div className="contact__card" key={dept.id}>
                <div className="contact__card-icon">{dept.icon}</div>
                <div className="contact__card-info">
                  <h3 className="contact__card-title">{dept.title}</h3>
                  <p className="contact__card-detail">
                    <span className="contact__card-label">Phone: </span>{dept.phone}
                  </p>
                  <p className="contact__card-detail">
                    <span className="contact__card-label">Email: </span>{dept.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}