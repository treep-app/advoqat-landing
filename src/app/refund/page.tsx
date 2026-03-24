'use client'

import { Scale } from 'lucide-react'
import Link from 'next/link'

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Advoqat</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ADVOQAT Refund Policy</h1>
          <p className="text-xl text-blue-100">UK Consumer Law compliant policy.</p>
          <p className="text-sm text-blue-200 mt-2">Effective Date: 23 March 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                This Refund Policy explains your rights regarding cancellations and refunds when using
                the Platform. It complies with the Consumer Contracts Regulations 2013 and the Consumer
                Rights Act 2015.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Digital Services and Right to Cancel</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Consumers usually have a 14-day cooling-off period for digital services.</li>
                <li>
                  By purchasing services, you agree service delivery may begin immediately and cancellation
                  rights may be lost once the service has been fully performed.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Types of Services</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>AI-generated legal documents.</li>
                <li>Platform access and subscriptions.</li>
                <li>Legal professional consultations.</li>
                <li>Document review services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. When You Are Eligible for a Refund</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>You paid but did not receive the service.</li>
                <li>A technical platform error prevented delivery.</li>
                <li>A refund is required by applicable law.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. When You Are Not Eligible for a Refund</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>AI documents were accessed or downloaded.</li>
                <li>Legal consultations have already taken place.</li>
                <li>Services have been fully delivered.</li>
                <li>Dissatisfaction is based on outcome rather than service failure.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Partial Refunds</h2>
              <p className="text-gray-600 mb-6">
                Partial refunds may be issued if service was partially delivered or materially disrupted.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Lawyer Services</h2>
              <p className="text-gray-600 mb-6">
                Where services are provided by Legal Professionals, contracts are between you and the
                Legal Professional and their terms may apply. The Platform is not responsible for quality
                of legal advice or legal outcomes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Subscriptions</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>You may cancel subscriptions at any time.</li>
                <li>Cancellation applies to future billing cycles.</li>
                <li>No refunds for unused time already paid.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Chargebacks and Disputes</h2>
              <p className="text-gray-600 mb-6">
                If you initiate a chargeback, we may suspend your account, provide evidence to payment
                providers, and terminate accounts where misuse is identified.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. How to Request a Refund</h2>
              <p className="text-gray-600 mb-6">
                Email info@advoqat.com with your account details, transaction reference, and reason for
                your request.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Response Time</h2>
              <p className="text-gray-600 mb-6">
                We aim to acknowledge refund requests within 2 working days and resolve within 7–14
                working days.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Payment Processing</h2>
              <p className="text-gray-600 mb-6">
                Refunds are made to the original payment method within a reasonable timeframe depending
                on payment provider processing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
