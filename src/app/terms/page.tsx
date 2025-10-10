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
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-blue-200 mt-2">
            Last updated: January 10, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Advoqat's legal services platform, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Advoqat provides an online platform that connects users with legal professionals and offers 
                AI-powered legal assistance tools, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>AI-powered legal document generation</li>
                <li>Legal consultation services</li>
                <li>Legal question and answer assistance</li>
                <li>Document review and analysis</li>
                <li>Legal research tools</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">User Accounts</h2>
              <p className="text-gray-600 mb-4">
                To access certain features of our service, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptable Use</h2>
              <p className="text-gray-600 mb-4">
                You agree to use our service only for lawful purposes and in accordance with these terms. 
                You may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the service</li>
                <li>Use the service to harass or harm others</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Services Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                <strong>Important:</strong> Advoqat is a technology platform that facilitates connections 
                between users and legal professionals. While we provide AI-powered tools and connect you 
                with licensed attorneys, we are not a law firm. The AI assistant provides general 
                information only and should not be considered legal advice. Always consult with a 
                qualified attorney for specific legal matters.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Attorney-Client Relationship</h2>
              <p className="text-gray-600 mb-6">
                An attorney-client relationship is formed only when you engage with a specific attorney 
                through our platform and both parties agree to the representation. The AI assistant and 
                general platform features do not create an attorney-client relationship.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms vary depending on the service:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Subscription fees are billed in advance</li>
                <li>Consultation fees are charged per session</li>
                <li>Document generation fees are charged per document</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>We reserve the right to change pricing with notice</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                The service and its original content, features, and functionality are owned by Advoqat and 
                are protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property laws. You may not modify, distribute, or create derivative works 
                based on our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">User Content</h2>
              <p className="text-gray-600 mb-6">
                You retain ownership of any content you submit to our platform. By submitting content, 
                you grant us a license to use, modify, and display such content as necessary to provide 
                our services. You are responsible for ensuring your content does not violate any laws or 
                third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Confidentiality</h2>
              <p className="text-gray-600 mb-6">
                We are committed to protecting your privacy and maintaining the confidentiality of your 
                information. Please review our Privacy Policy for details on how we collect, use, and 
                protect your information. Communications with licensed attorneys are protected by 
                attorney-client privilege.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the maximum extent permitted by law, Advoqat shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
                use of the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers</h2>
              <p className="text-gray-600 mb-6">
                The service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties, 
                express or implied, including but not limited to warranties of merchantability, fitness 
                for a particular purpose, and non-infringement. We do not warrant that the service will 
                be uninterrupted or error-free.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your account and access to the service immediately, without 
                prior notice, for any reason, including if you breach these terms. Upon termination, 
                your right to use the service will cease immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These terms shall be governed by and construed in accordance with the laws of the State 
                of New York, without regard to its conflict of law provisions. Any disputes arising from 
                these terms shall be resolved in the courts of New York.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes by posting the new terms on this page and updating the "Last updated" 
                date. Your continued use of the service after such changes constitutes acceptance of the 
                new terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> legal@advoqat.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Legal Street, Suite 100, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
