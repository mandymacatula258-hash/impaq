import React from "react"
import "./ContactUs.css"
import contactImg from "../assets/contact.png"

const DEPARTMENTS = [
  { id: 1, title: "Dealer Partnership", phone: "+1 (000) 000-0000", email: "dealer@impaqoptics.com" },
  { id: 2, title: "Pre-sales Consultation", phone: "+1 (000) 000-0000", email: "presales@impaqoptics.com" },
  { id: 3, title: "After-sales Service", phone: "+1 (000) 000-0000", email: "aftersales@impaqoptics.com" },
  { id: 4, title: "Brand Partnership and Sponsorship", phone: "+1 (000) 000-0000", email: "brand@impaqoptics.com" },
  { id: 5, title: "Order Shipping and Logistics", phone: "+1 (000) 000-0000", email: "logistics@impaqoptics.com" },
  { id: 6, title: "Product & Service Complaint", phone: "+1 (000) 000-0000", email: "support@impaqoptics.com" },
]

export default function ContactUs() {
  return (
    <div className="contact">
      <section className="contact__hero" style={{ backgroundImage: "url(" + contactImg + ")" }}>
        <div className="contact__hero-overlay" />
        <div className="contact__hero-content">
          <h1 className="contact__hero-title">Contact Us</h1>
        </div>
      </section>
      <section className="contact__body">
        <div className="contact__body-inner">
          <p className="contact__intro">Reach out to the right team and we will get back to you as soon as possible.</p>
          <div className="contact__grid">
            {DEPARTMENTS.map((dept) => (
              <div className="contact__card" key={dept.id}>
                <div className="contact__card-info">
                  <h3 className="contact__card-title">{dept.title}</h3>
                  <p className="contact__card-detail"><span className="contact__card-label">Phone: </span>{dept.phone}</p>
                  <p className="contact__card-detail"><span className="contact__card-label">Email: </span>{dept.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
