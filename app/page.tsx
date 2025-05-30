import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#402E7A] via-[#4C3BCF] to-[#4B70F5] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#402E7A]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(61,194,236,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(61,194,236,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3DC2EC]/20 rounded-full backdrop-blur-sm border border-[#3DC2EC]/20 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DC2EC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3DC2EC]"></span>
                </span>
                <span className="text-[#3DC2EC] font-medium">Get up to 60% off on interest rates</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3DC2EC]">
                  Drive Your Dream Car
                </span>
                <br />
                <span className="text-[#3DC2EC]">Today</span>
              </h1>
              <p className="text-xl text-[#3DC2EC] leading-relaxed">
                Get the best car loan rates and easy financing options. Apply now and get approved in minutes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/calculator"
                  className="group bg-white text-[#402E7A] px-8 py-4 rounded-xl font-semibold hover:bg-[#3DC2EC]/10 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center relative overflow-hidden"
                >
                  <span className="relative z-10">Calculate EMI</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3DC2EC]/0 via-[#3DC2EC]/10 to-[#3DC2EC]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
                <Link
                  href="/apply"
                  className="group bg-[#4B70F5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4C3BCF] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center relative overflow-hidden"
                >
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-[#3DC2EC]/20 flex items-center justify-center group-hover:bg-[#3DC2EC]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#3DC2EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#3DC2EC] group-hover:text-white transition-colors">Quick Approval</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-[#3DC2EC]/20 flex items-center justify-center group-hover:bg-[#3DC2EC]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#3DC2EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#3DC2EC] group-hover:text-white transition-colors">Low Interest Rates</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3DC2EC]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#4C3BCF]/10 to-transparent rounded-3xl transform -rotate-3"></div>
              <Image
                src="/images/cas21.png"
                alt="Luxury Car"
                fill
                className="object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#402E7A] mb-4">
              Why Choose Our Car Loans?
            </h2>
            <p className="text-xl text-gray-600">
              We offer the best financing solutions for your dream car
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4C3BCF]/5 to-[#4B70F5]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#4C3BCF] to-[#4B70F5] rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#402E7A] mb-4 group-hover:text-[#4C3BCF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#402E7A] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your car loan in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4C3BCF] to-[#4B70F5] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#4C3BCF] to-[#4B70F5] group-hover:scale-x-110 transition-transform origin-left"></div>
                )}
                <h3 className="text-xl font-semibold text-[#402E7A] mb-4 group-hover:text-[#4C3BCF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#402E7A] via-[#4C3BCF] to-[#4B70F5] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(61,194,236,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(61,194,236,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Drive Your Dream Car?
          </h2>
          <p className="text-xl text-[#3DC2EC] mb-8 max-w-2xl mx-auto">
            Apply now and get approved in minutes. Our team will help you find the perfect financing solution.
          </p>
          <Link
            href="/apply"
            className="group inline-block bg-white text-[#402E7A] px-8 py-4 rounded-xl font-semibold hover:bg-[#3DC2EC]/10 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3DC2EC]/0 via-[#3DC2EC]/10 to-[#3DC2EC]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: 'Competitive Rates',
    description: 'Get the best interest rates in the market with flexible repayment options.',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Quick Approval',
    description: 'Fast and easy application process with instant approval decisions.',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Flexible Terms',
    description: 'Choose from various loan terms and payment options that suit your needs.',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out our simple online application form in minutes.',
  },
  {
    title: 'Get Approved',
    description: 'Receive instant approval and choose your loan terms.',
  },
  {
    title: 'Drive Away',
    description: 'Complete the process and drive your dream car home.',
  },
];
