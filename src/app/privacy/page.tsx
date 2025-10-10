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
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us. Learn how we protect your information.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-600 mb-6">
                Advoqat ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                legal services platform and website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Legal documents and case information</li>
                <li>Payment and billing information</li>
                <li>Communications with our legal team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information about your use of our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Device information and IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Search queries and interactions with our AI assistant</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide and improve our legal services</li>
                <li>Process transactions and manage your account</li>
                <li>Communicate with you about your legal matters</li>
                <li>Personalize your experience on our platform</li>
                <li>Analyze usage patterns to enhance our services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Attorney-Client Privilege</h2>
              <p className="text-gray-600 mb-6">
                Communications between you and our licensed attorneys are protected by attorney-client 
                privilege. This means that confidential information shared with your attorney cannot be 
                disclosed without your consent, except in very limited circumstances required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. This 
                includes encryption, secure servers, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of certain communications</li>
                <li>Data portability for your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and provide personalized content. You can control cookie settings through your browser, 
                but disabling cookies may affect platform functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-gray-600 mb-6">
                Our platform may integrate with third-party services for payment processing, analytics, 
                and other functions. These services have their own privacy policies, and we encourage 
                you to review them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we become aware of such collection, 
                we will take steps to delete the information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">International Users</h2>
              <p className="text-gray-600 mb-6">
                If you are accessing our services from outside the United States, please be aware that 
                your information may be transferred to, stored, and processed in the United States where 
                our servers are located.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> privacy@advoqat.com
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
