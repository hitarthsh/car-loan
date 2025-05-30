'use client';

import { useState, useEffect } from 'react';

interface EmiDetails {
  emi: number;
  totalInterest: number;
  totalAmount: number;
  principalAmount: number;
  interestRate: number;
  tenure: number;
}

export default function EmiCalculator() {
  const [formData, setFormData] = useState({
    carPrice: '',
    downPayment: '',
    interestRate: '8.5', // Default interest rate for Indian car loans
    tenure: '5', // Default tenure in years
  });

  const [emiDetails, setEmiDetails] = useState<EmiDetails>({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0,
    principalAmount: 0,
    interestRate: 8.5,
    tenure: 5,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateEMI = () => {
    const principal = Number(formData.carPrice) - Number(formData.downPayment);
    const rate = Number(formData.interestRate) / 12 / 100; // Monthly interest rate
    const time = Number(formData.tenure) * 12; // Total number of months

    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalAmount = emi * time;
    const totalInterest = totalAmount - principal;

    setEmiDetails({
      emi: emi,
      totalInterest: totalInterest,
      totalAmount: totalAmount,
      principalAmount: principal,
      interestRate: Number(formData.interestRate),
      tenure: Number(formData.tenure),
    });
  };

  useEffect(() => {
    if (formData.carPrice && formData.downPayment) {
      calculateEMI();
    }
  }, [formData]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl  p-8">
      <h2 className="text-2xl font-bold text-[#402E7A] mb-6">Car Loan EMI Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#402E7A] mb-2">Car Price (₹)</label>
            <input
              type="number"
              name="carPrice"
              value={formData.carPrice}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border text-black border-[#3DC2EC] focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all"
              placeholder="Enter car price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#402E7A] mb-2">Down Payment (₹)</label>
            <input
              type="number"
              name="downPayment"
              value={formData.downPayment}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border text-black border-[#3DC2EC] focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all"
              placeholder="Enter down payment"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#402E7A] mb-2">Interest Rate (%)</label>
            <input
              type="number"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border text-black border-[#3DC2EC] focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all"
              placeholder="Enter interest rate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#402E7A] mb-2">Loan Tenure (Years)</label>
            <input
              type="number"
              name="tenure"
              value={formData.tenure}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border text-black border-[#3DC2EC] focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all"
              placeholder="Enter loan tenure"
            />
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-[#3DC2EC]/20 p-6">
          <h3 className="text-lg font-semibold text-[#402E7A] mb-4">EMI Details</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/80 rounded-lg shadow-sm">
              <p className="text-sm text-[#4B70F5]">Monthly EMI</p>
              <p className="text-2xl font-semibold text-[#4C3BCF]">₹{emiDetails.emi.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg shadow-sm">
              <p className="text-sm text-[#4B70F5]">Total Interest</p>
              <p className="text-xl font-semibold text-[#4C3BCF]">₹{emiDetails.totalInterest.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg shadow-sm">
              <p className="text-sm text-[#4B70F5]">Total Amount</p>
              <p className="text-xl font-semibold text-[#4C3BCF]">₹{emiDetails.totalAmount.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg shadow-sm">
              <p className="text-sm text-[#4B70F5]">Principal Amount</p>
              <p className="text-xl font-semibold text-[#4C3BCF]">₹{emiDetails.principalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[#3DC2EC]/5 rounded-xl">
        <h3 className="text-lg font-semibold text-[#402E7A] mb-4">Important Notes</h3>
        <ul className="space-y-2 text-[#4B70F5]">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Minimum down payment is typically 10% of the car price
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Interest rates may vary based on credit score and loan tenure
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-[#4C3BCF] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Additional charges like processing fee and insurance are not included
          </li>
        </ul>
      </div>
    </div>
  );
} 