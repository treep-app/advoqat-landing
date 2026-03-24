'use client'

import { Scale } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
            ADVOQAT Privacy Policy
          </h1>
          <p className="text-xl text-blue-100">
            UK GDPR compliant privacy terms.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                This Privacy Policy explains how we collect, use, disclose, and protect personal data
                when you use Advoqat (the Platform). We are the data controller responsible for your
                personal data.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Types of Data We Collect</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Identity Data: full name, date of birth, and ID documents where required.</li>
                <li>Contact Data: email address, telephone number, and address.</li>
                <li>Legal and Case Data, which may include special category data depending on usage.</li>
                <li>Technical Data: IP address, browser type, device identifiers, and usage data.</li>
                <li>Payment Data: transaction records and billing information.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Collect Data</h2>
              <p className="text-gray-600 mb-6">
                We collect data when you register an account, submit legal queries, upload documents,
                engage with Legal Professionals, and use AI tools. We may also collect data through
                cookies and tracking technologies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Lawful Basis for Processing</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Contractual necessity.</li>
                <li>Legitimate interests (performance, fraud prevention, security).</li>
                <li>Legal obligation.</li>
                <li>Consent (marketing, non-essential cookies, special category data where applicable).</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. How We Use Personal Data</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide access to platform services.</li>
                <li>Generate legal documents and AI outputs.</li>
                <li>Match you with Legal Professionals.</li>
                <li>Process payments and improve system performance.</li>
                <li>Prevent fraud and misuse.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Sharing of Data</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Legal Professionals for requested services.</li>
                <li>Service providers (hosting, payment processors, analytics).</li>
                <li>Authorities where required by law or for regulatory compliance.</li>
                <li>Business transfers (merger, acquisition, restructuring).</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. International Transfers</h2>
              <p className="text-gray-600 mb-6">
                Where data is transferred outside the UK, appropriate safeguards (including standard
                contractual clauses) are implemented.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain data only as long as necessary, including for legal obligations and dispute
                resolution. Legal documents may be retained longer due to legal risk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We use encryption in transit and at rest, role-based access controls, audit logging,
                and secure cloud infrastructure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. User Rights</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access, correction, deletion, and restriction.</li>
                <li>Objection to processing and data portability where applicable.</li>
              </ul>
              <p className="text-gray-600 mb-6">To exercise rights, contact info@advoqat.com.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Special Category Data</h2>
              <p className="text-gray-600 mb-6">
                Sensitive data is processed only with explicit consent, where necessary for legal
                claims, and in line with applicable law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Automated Decision-Making and AI</h2>
              <p className="text-gray-600 mb-6">
                The Platform uses AI-generated outputs. Outputs are automated, not legally binding, and
                require human verification. We do not make legally significant decisions solely by
                automated means.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies for core functionality, analytics, and performance improvements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Data Breaches</h2>
              <p className="text-gray-600 mb-6">
                In the event of a breach, we investigate immediately and notify the ICO/users where
                legally required.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                The Platform may contain third-party links; we are not responsible for their privacy
                practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">16. Children&apos;s Data</h2>
              <p className="text-gray-600 mb-6">
                The Platform is not intended for users under 18. We do not knowingly collect data from
                minors.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">17. Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this policy and notify users of material changes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">18. Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> info@advoqat.com
                </p>
                <p className="text-gray-600">
                  For privacy-related enquiries, please contact us at the above email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
