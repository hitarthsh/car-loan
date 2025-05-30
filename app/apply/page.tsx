'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  // Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  employmentStatus: string;
  annualIncome: string;
  
  // Vehicle Details
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehiclePrice: string;
  downPayment: string;
  
  // Documents
  idProof: File | null;
  incomeProof: File | null;
  addressProof: File | null;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  employmentStatus: '',
  annualIncome: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  vehiclePrice: '',
  downPayment: '',
  idProof: null,
  incomeProof: null,
  addressProof: null,
};

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

const employmentStatuses = [
  { value: 'employed', label: 'Employed' },
  { value: 'self-employed', label: 'Self-Employed' },
  { value: 'business-owner', label: 'Business Owner' },
  { value: 'retired', label: 'Retired' }
];

const vehicleMakes = [
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia',
  'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Mazda', 'Subaru',
  'Jeep', 'Dodge', 'Chrysler', 'Tesla', 'Porsche', 'Ferrari', 'Lamborghini'
];

export default function Apply() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: string}>({});
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [vehicleModels, setVehicleModels] = useState<string[]>([]);

  // Load vehicle models when make changes
  useEffect(() => {
    if (formData.vehicleMake) {
      // In a real app, this would be an API call to get models for the selected make
      const models = getVehicleModels(formData.vehicleMake);
      setVehicleModels(models);
      // Reset model if it's not valid for the new make
      if (!models.includes(formData.vehicleModel)) {
        setFormData(prev => ({ ...prev, vehicleModel: '' }));
      }
    } else {
      setVehicleModels([]);
    }
  }, [formData.vehicleMake]);

  // Simulated function to get vehicle models
  const getVehicleModels = (make: string): string[] => {
    const modelMap: { [key: string]: string[] } = {
      'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Sienna'],
      'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey'],
      'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Edge'],
      // Add more makes and models as needed
    };
    return modelMap[make] || [];
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (stepNumber === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zipCode) {
        newErrors.zipCode = 'ZIP code is required';
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
        newErrors.zipCode = 'Please enter a valid ZIP code';
      }
      if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required';
      if (!formData.annualIncome) {
        newErrors.annualIncome = 'Annual income is required';
      } else if (Number(formData.annualIncome) <= 0) {
        newErrors.annualIncome = 'Please enter a valid income amount';
      }
    } else if (stepNumber === 2) {
      if (!formData.vehicleMake) newErrors.vehicleMake = 'Vehicle make is required';
      if (!formData.vehicleModel) newErrors.vehicleModel = 'Vehicle model is required';
      if (!formData.vehicleYear) {
        newErrors.vehicleYear = 'Vehicle year is required';
      } else if (Number(formData.vehicleYear) < 1900 || Number(formData.vehicleYear) > new Date().getFullYear() + 1) {
        newErrors.vehicleYear = 'Please enter a valid year';
      }
      if (!formData.vehiclePrice) {
        newErrors.vehiclePrice = 'Vehicle price is required';
      } else if (Number(formData.vehiclePrice) <= 0) {
        newErrors.vehiclePrice = 'Please enter a valid price';
      }
      if (!formData.downPayment) {
        newErrors.downPayment = 'Down payment is required';
      } else if (Number(formData.downPayment) < 0 || Number(formData.downPayment) > Number(formData.vehiclePrice)) {
        newErrors.downPayment = 'Down payment cannot exceed vehicle price';
      }
    } else if (stepNumber === 3) {
      if (!formData.idProof) newErrors.idProof = 'ID proof is required';
      if (!formData.incomeProof) newErrors.incomeProof = 'Income proof is required';
      if (!formData.addressProof) newErrors.addressProof = 'Address proof is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [name]: 'File size should not exceed 10MB' }));
        return;
      }
      // Validate file type
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, [name]: 'Please upload a valid file (PDF, JPG, or PNG)' }));
        return;
      }
      setFormData(prev => ({ ...prev, [name]: file }));
      setUploadedFiles(prev => ({ ...prev, [name]: file.name }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    try {
      // Here you would typically handle the form submission
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSubmit.append(key, value);
        } else {
          formDataToSubmit.append(key, value);
        }
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the formDataToSubmit to your API
      // const response = await fetch('/api/apply', {
      //   method: 'POST',
      //   body: formDataToSubmit,
      // });
      
      router.push('/apply/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({ ...prev, submit: 'Failed to submit application. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate loan amount and monthly payment
  const calculateLoanDetails = () => {
    const vehiclePrice = Number(formData.vehiclePrice) || 0;
    const downPayment = Number(formData.downPayment) || 0;
    const loanAmount = vehiclePrice - downPayment;
    const interestRate = 0.05; // 5% annual interest rate
    const loanTerm = 60; // 5 years
    const monthlyRate = interestRate / 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    
    return {
      loanAmount: loanAmount.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: (monthlyPayment * loanTerm - loanAmount).toFixed(2)
    };
  };

  const loanDetails = calculateLoanDetails();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#402E7A] via-[#4C3BCF] to-[#4B70F5] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#3DC2EC]/10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                  step >= stepNumber 
                    ? 'bg-[#4C3BCF] text-white transform scale-110 shadow-lg' 
                    : 'bg-white/20 text-white'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-24 h-1 transition-all duration-300 ${
                    step > stepNumber ? 'bg-[#4C3BCF]' : 'bg-white/20'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-white/80">
            <span className={`transition-all duration-300 ${step >= 1 ? 'text-white font-medium' : ''}`}>Personal Details</span>
            <span className={`transition-all duration-300 ${step >= 2 ? 'text-white font-medium' : ''}`}>Vehicle Information</span>
            <span className={`transition-all duration-300 ${step >= 3 ? 'text-white font-medium' : ''}`}>Documents</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-black">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#402E7A]">Personal Information</h2>
                <p className="text-[#4B70F5] mt-2">Please provide your personal details to proceed with the application</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                  >
                    <option value="">Select a state</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-sm text-red-500 mt-1">{errors.state}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.zipCode ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your ZIP code"
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-red-500 mt-1">{errors.zipCode}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Employment Status</label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.employmentStatus ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                  >
                    <option value="">Select employment status</option>
                    {employmentStatuses.map(status => (
                      <option key={status.value} value={status.value}>{status.label}</option>
                    ))}
                  </select>
                  {errors.employmentStatus && (
                    <p className="text-sm text-red-500 mt-1">{errors.employmentStatus}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Annual Income</label>
                  <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.annualIncome ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter your annual income"
                  />
                  {errors.annualIncome && (
                    <p className="text-sm text-red-500 mt-1">{errors.annualIncome}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Vehicle Details */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#402E7A]">Vehicle Information</h2>
                <p className="text-[#4B70F5] mt-2">Tell us about the car you want to finance</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Vehicle Make</label>
                  <select
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.vehicleMake ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                  >
                    <option value="">Select vehicle make</option>
                    {vehicleMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                  {errors.vehicleMake && (
                    <p className="text-sm text-red-500 mt-1">{errors.vehicleMake}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Vehicle Model</label>
                  <select
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    required
                    disabled={!formData.vehicleMake}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.vehicleModel ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all ${
                      !formData.vehicleMake ? 'bg-gray-100' : ''
                    }`}
                  >
                    <option value="">Select vehicle model</option>
                    {vehicleModels.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  {errors.vehicleModel && (
                    <p className="text-sm text-red-500 mt-1">{errors.vehicleModel}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Vehicle Year</label>
                  <input
                    type="number"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.vehicleYear ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter vehicle year"
                  />
                  {errors.vehicleYear && (
                    <p className="text-sm text-red-500 mt-1">{errors.vehicleYear}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Vehicle Price</label>
                  <input
                    type="number"
                    name="vehiclePrice"
                    value={formData.vehiclePrice}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.vehiclePrice ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter vehicle price"
                  />
                  {errors.vehiclePrice && (
                    <p className="text-sm text-red-500 mt-1">{errors.vehiclePrice}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Down Payment</label>
                  <input
                    type="number"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.downPayment ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent transition-all`}
                    placeholder="Enter down payment amount"
                  />
                  {errors.downPayment && (
                    <p className="text-sm text-red-500 mt-1">{errors.downPayment}</p>
                  )}
                </div>
              </div>
              
              {/* Enhanced Loan Summary */}
              <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[#3DC2EC]/20">
                <h3 className="text-lg font-semibold text-[#402E7A] mb-4">Loan Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-[#4B70F5]">Loan Amount</p>
                    <p className="text-xl font-semibold text-[#4C3BCF]">${loanDetails.loanAmount}</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-[#4B70F5]">Monthly Payment</p>
                    <p className="text-xl font-semibold text-[#4C3BCF]">${loanDetails.monthlyPayment}</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-[#4B70F5]">Total Interest</p>
                    <p className="text-xl font-semibold text-[#4C3BCF]">${loanDetails.totalInterest}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#402E7A]">Required Documents</h2>
                <p className="text-[#4B70F5] mt-2">Please upload the necessary documents for verification</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">ID Proof</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-[#4C3BCF] transition-colors">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#4C3BCF] hover:text-[#402E7A] focus-within:outline-none">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            name="idProof"
                            onChange={handleFileChange}
                            required
                            className="sr-only"
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Income Proof</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-[#4C3BCF] transition-colors">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#4C3BCF] hover:text-[#402E7A] focus-within:outline-none">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            name="incomeProof"
                            onChange={handleFileChange}
                            required
                            className="sr-only"
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Address Proof</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-[#4C3BCF] transition-colors">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#4C3BCF] hover:text-[#402E7A] focus-within:outline-none">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            name="addressProof"
                            onChange={handleFileChange}
                            required
                            className="sr-only"
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-[#3DC2EC] rounded-xl text-[#4C3BCF] hover:bg-[#3DC2EC]/10 transition-all transform hover:scale-105"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-8 py-3 bg-[#4C3BCF] text-white rounded-xl hover:bg-[#402E7A] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`ml-auto px-8 py-3 bg-[#4C3BCF] text-white rounded-xl hover:bg-[#402E7A] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
} 