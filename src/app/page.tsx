'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Scale, 
  FileText, 
  MessageCircle, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  LogOut,
  User
} from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSignOut = async () => {
    // Handle sign out logic here
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Advoqat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700 hidden sm:inline">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 h-8 rounded-md gap-1.5 px-3"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                  <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow-sm hover:bg-blue-700 h-8 rounded-md gap-1.5 px-3">
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link href="https://app.advoqat.com/auth/signin" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 h-8 rounded-md gap-1.5 px-3">
                    Sign In
                  </Link>
                  <Link href="https://app.advoqat.com/auth/signup" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow-sm hover:bg-blue-700 h-8 rounded-md gap-1.5 px-3">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-blue-200 bg-blue-100 text-blue-800 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Legal Assistant
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Legal Rights,
              <span className="text-blue-600"> Simplified</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
              Get instant legal guidance, generate professional documents, and connect with affordable legal professionals. 
              No more expensive lawyers or complex legal jargon.
            </p>
            
            {/* AI Chat Interface */}
            <div className="max-w-2xl mx-auto mb-8 shadow-lg bg-white border border-gray-200 flex flex-col gap-6 rounded-xl py-6">
              <div className="px-6">
                <div className="flex items-center mb-3">
                  <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                  <div className="text-lg font-bold text-gray-900">Ask Your Legal Question</div>
                </div>
                <div className="text-gray-700 text-base mb-4">
                  Get instant answers to your legal questions without authentication
                </div>
              </div>
              <div className="px-6 space-y-4">
                <textarea 
                  placeholder="e.g., Can my landlord evict me without notice? What are my rights as a tenant?"
                  className="min-h-[120px] resize-none border-2 border-gray-300 placeholder:text-gray-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/50 flex field-sizing-content w-full rounded-lg border bg-white px-4 py-3 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 font-medium"
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 inline mr-2 text-green-600" />
                    Free • No registration required
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow-md hover:bg-blue-700 h-10 px-6 py-2">
                    Get Legal Advice
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow-sm hover:bg-blue-700 h-10 rounded-md px-6">
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              ) : (
                <>
                  <Link href="https://app.advoqat.com/auth/signup" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow-sm hover:bg-blue-700 h-10 rounded-md px-6">
                    Sign Up as a User
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href="https://app.advoqat.com/freelancer/register" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 h-10 rounded-md px-6">
                    Sign Up as a Lawyer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 text-gray-700 h-10 rounded-md px-6">
                    Watch Demo
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Legal Protection
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
              From instant legal advice to professional document generation, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white border border-gray-200 flex flex-col gap-6 rounded-xl py-6">
              <div className="px-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-xl font-bold mb-3 text-gray-900">AI Legal Assistant</div>
                <div className="text-gray-700 text-base">
                  Get instant answers to legal questions with our AI-powered chatbot. 
                  No waiting, no appointments needed.
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white border border-gray-200 flex flex-col gap-6 rounded-xl py-6">
              <div className="px-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-xl font-bold mb-3 text-gray-900">Document Generator</div>
                <div className="text-gray-700 text-base">
                  Generate professional legal documents including refund requests, 
                  dispute letters, and tenancy complaints.
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white border border-gray-200 flex flex-col gap-6 rounded-xl py-6">
              <div className="px-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-xl font-bold mb-3 text-gray-900">Legal Consultations</div>
                <div className="text-gray-700 text-base">
                  Connect with verified legal professionals for affordable 
                  consultations via chat or video call.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Document Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Legal Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate legally sound documents for common legal situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Refund Requests", icon: "💰", desc: "Get your money back from faulty products" },
              { title: "Dispute Letters", icon: "⚖️", desc: "Resolve conflicts with businesses" },
              { title: "Tenancy Complaints", icon: "🏠", desc: "Address rental issues with landlords" },
              { title: "Employment Grievances", icon: "💼", desc: "Handle workplace disputes professionally" }
            ].map((doc, index) => (
                             <div key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white border border-gray-200 flex flex-col gap-6 rounded-xl py-6">
                 <div className="px-6 text-center">
                   <div className="text-3xl mb-4">{doc.icon}</div>
                   <h3 className="font-semibold text-lg mb-2 text-gray-900">{doc.title}</h3>
                   <p className="text-gray-600 text-sm">{doc.desc}</p>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Advoqat Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get the legal help you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ask Your Question</h3>
              <p className="text-gray-600">
                Simply type your legal question into our AI assistant. 
                No registration required for basic queries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Get Instant Guidance</h3>
              <p className="text-gray-600">
                Receive immediate legal advice and information about your rights. 
                Our AI provides accurate, jurisdiction-specific guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Take Action</h3>
              <p className="text-gray-600">
                Generate legal documents, book consultations, or get detailed 
                guidance on next steps. All in one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Legal Questions Answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Documents Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Rights?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust Advoqat for their legal needs. 
            Start with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-10 rounded-md px-6 bg-white text-blue-600 hover:bg-gray-100">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            ) : (
              <>
                                 <Link href="https://app.advoqat.com/auth/signup" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 shadow-sm hover:bg-gray-100 h-10 rounded-md px-6">
                   Start Free Trial
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
                 <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-blue-600 h-10 rounded-md px-6">
                   Learn More
                 </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">Advoqat</span>
              </div>
              <p className="text-gray-400">
                Making legal assistance accessible, affordable, and efficient for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Assistant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Document Generator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Consultations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Advoqat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 