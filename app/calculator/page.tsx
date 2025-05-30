'use client';

import EmiCalculator from '../components/EmiCalculator';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#402E7A] via-[#4C3BCF] to-[#4B70F5] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#3DC2EC]/10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Car Loan EMI Calculator</h1>
          <p className="text-[#3DC2EC] text-lg max-w-2xl mx-auto">
            Calculate your monthly EMI, total interest, and total amount payable for your car loan in India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EmiCalculator />
          </div>

          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-[#402E7A] mb-4">How to Use</h3>
              <ol className="space-y-4 text-[#4B70F5]">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4C3BCF] text-white text-sm mr-3 flex-shrink-0">1</span>
                  Enter the total price of the car you wish to purchase
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4C3BCF] text-white text-sm mr-3 flex-shrink-0">2</span>
                  Specify the down payment amount you can make
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4C3BCF] text-white text-sm mr-3 flex-shrink-0">3</span>
                  Enter the interest rate offered by your bank
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4C3BCF] text-white text-sm mr-3 flex-shrink-0">4</span>
                  Choose your preferred loan tenure in years
                </li>
              </ol>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-[#402E7A] mb-4">Factors Affecting EMI</h3>
              <ul className="space-y-3 text-[#4B70F5]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Credit Score
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Income Level
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Employment Type
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Car Model & Age
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-[#402E7A] mb-4">Benefits</h3>
              <ul className="space-y-3 text-[#4B70F5]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Instant EMI Calculation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Compare Different Scenarios
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Plan Your Budget
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Make Informed Decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 