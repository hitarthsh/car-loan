export default function Rates() {
  const rates = [
    {
      term: '36 months',
      rate: '4.99%',
      minAmount: '$10,000',
      maxAmount: '$50,000',
    },
    {
      term: '48 months',
      rate: '5.49%',
      minAmount: '$10,000',
      maxAmount: '$75,000',
    },
    {
      term: '60 months',
      rate: '5.99%',
      minAmount: '$10,000',
      maxAmount: '$100,000',
    },
    {
      term: '72 months',
      rate: '6.49%',
      minAmount: '$10,000',
      maxAmount: '$150,000',
    },
    {
      term: '84 months',
      rate: '6.99%',
      minAmount: '$10,000',
      maxAmount: '$200,000',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Current Interest Rates
          </h1>
          <p className="text-xl text-gray-600">
            Competitive rates for all types of car loans
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Loan Term
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Interest Rate
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Minimum Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Maximum Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rates.map((rate, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {rate.term}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rate.rate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rate.minAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rate.maxAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Important Information
          </h2>
          <ul className="space-y-4 text-blue-800">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Rates are subject to change without notice. The actual rate you receive may vary based on your credit score, income, and other factors.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                A minimum down payment of 10% is required for all loans. Higher down payments may result in better interest rates.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                All loans are subject to credit approval. Additional terms and conditions may apply.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 