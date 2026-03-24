'use client'

import { Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Advoqat</span>
            </Link>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ADVOQAT Terms of Service
          </h1>
          <p className="text-xl text-blue-100">
            Terms & Conditions for using the Platform.
          </p>
          <p className="text-sm text-blue-200 mt-2">
            Effective Date: 23 March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Definitions</h2>
              <p className="text-gray-600 mb-6">
                Platform means the Advoqat legal website, applications, and services. User means any
                person or entity using the Platform. Legal Professional means an independent solicitor,
                barrister, or authorised advisor listed on the Platform.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Acceptance of Terms</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>By using the Platform, you accept these Terms and agree to be legally bound.</li>
                <li>You must be at least 18 years old.</li>
                <li>If you do not agree, you must not use the Platform.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Nature of the Platform</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Advoqat is a technology service provider.</li>
                <li>We provide AI legal information/document tools and marketplace connections.</li>
                <li>We do not provide legal advice or regulated legal services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. No Legal Advice and Non-Reliance</h2>
              <p className="text-gray-600 mb-6">
                All content is for general informational purposes only. You must obtain independent
                legal advice and must not rely on the Platform as a substitute for professional advice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. AI Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                AI outputs may be inaccurate, incomplete, or outdated. You must independently verify
                all outputs and seek professional advice before use. To the fullest extent permitted by
                law, we disclaim liability arising from AI-generated content.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. User Obligations</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information.</li>
                <li>Use the Platform lawfully.</li>
                <li>Do not upload false, misleading, or harmful data.</li>
                <li>Do not misuse AI outputs.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Lawyer Marketplace Terms</h2>
              <p className="text-gray-600 mb-6">
                Legal Professionals are independent third parties. Any legal engagement is a direct
                contract between User and Legal Professional. The Platform is not liable for legal
                advice quality, professional negligence, or case outcomes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Payments and Fees</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>The Platform may facilitate payments and act as a limited payment agent.</li>
                <li>Unless expressly stated, we do not operate a regulated client account.</li>
                <li>Payments are processed via third-party providers.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Refunds</h2>
              <p className="text-gray-600 mb-6">
                Refunds are governed by our Refund Policy. For digital services, cancellation rights
                may be limited when services begin immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the fullest extent permitted by law, we exclude liability for indirect or
                consequential loss and cap total liability to the greater of £100 or the amount paid by
                you in the previous 30 days, except where liability cannot be excluded by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Indemnity</h2>
              <p className="text-gray-600 mb-6">
                You agree to indemnify us against claims arising from misuse, reliance on AI content,
                disputes with Legal Professionals, or breach of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                Platform content is owned by us or licensed. You are granted a limited non-exclusive
                licence and may not copy, distribute, resell, or exploit content commercially without
                consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Data Protection</h2>
              <p className="text-gray-600 mb-6">
                Personal data is processed in accordance with applicable data protection law and our
                Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Availability</h2>
              <p className="text-gray-600 mb-6">
                We do not guarantee uninterrupted or error-free service and may suspend/modify services
                for maintenance or operational reasons.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Account Suspension</h2>
              <p className="text-gray-600 mb-6">
                We may suspend or terminate access where terms are breached, misuse/fraud is suspected,
                or legal risk is identified.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">16. Emergency Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                The Platform is not suitable for urgent legal matters. Seek immediate assistance from a
                qualified professional where necessary.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">17. Complaints</h2>
              <p className="text-gray-600 mb-6">
                Complaints can be submitted to info@advoqat.com. We aim to respond within 5 working
                days.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">18. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms are governed by the laws of England and Wales. Courts of England and Wales
                have exclusive jurisdiction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">19. Variation</h2>
              <p className="text-gray-600 mb-6">
                We may update these Terms at any time. Continued use constitutes acceptance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> info@advoqat.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
