import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'Rp 5.000.000',
      period: 'per tahun',
      monthlyEquiv: '~Rp 416.667/bulan',
      description: 'Cocok untuk pemula yang ingin mulai belajar trading',
      features: [
        'Akses materi pembelajaran basic',
        'Discord community access',
        'Daily market analysis',
        'Trading signal 3x/minggu',
        'Email support',
      ],
      color: 'from-slate-500 to-slate-600',
      popular: false,
      discordLink: '#',
    },
    {
      name: 'Premium',
      price: 'Rp 15.000.000',
      period: 'per tahun',
      monthlyEquiv: '~Rp 1.250.000/bulan',
      description: 'Untuk trader serius yang ingin profit konsisten',
      features: [
        'Semua benefit Basic plan',
        'Akses materi advanced & expert',
        'Daily trading signal premium',
        'Live trading session 2x/minggu',
        'Portfolio review bulanan',
        'Priority support 24/7',
        'Akses tools & indicator premium',
        'Private group dengan mentor',
      ],
      color: 'from-amber-500 to-orange-600',
      popular: true,
      discordLink: 'https://discord.gg/pikacuan-premium',
    },
    {
      name: 'VIP',
      price: 'Rp 30.000.000',
      period: 'per tahun',
      monthlyEquiv: '~Rp 2.500.000/bulan',
      description: 'Mentoring intensif untuk hasil maksimal',
      features: [
        'Semua benefit Premium plan',
        'One-on-one mentoring session',
        'Personal trading strategy',
        'Unlimited portfolio review',
        'Priority signal dengan analisis detail',
        'Direct access ke mentor',
        'VIP Discord channel eksklusif',
        'Akses ke private investment opportunities',
        'Quarterly performance review',
      ],
      color: 'from-orange-600 to-red-600',
      popular: false,
      discordLink: 'https://discord.gg/pikacuan-vip',
    },
  ];

  return (
    <div id="pricing" className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 mb-4 md:mb-6">
            <Star className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 font-semibold text-xs md:text-sm">PILIH PAKET ANDA</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Investasi Terbaik Untuk Masa Depan Anda
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan tujuan trading Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all transform hover:scale-105 ${
                plan.popular ? 'border-amber-500 ring-4 ring-amber-100' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg flex items-center space-x-1">
                    <Zap className="w-3 md:w-4 h-3 md:h-4" />
                    <span>PALING POPULER</span>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className={`inline-flex items-center justify-center w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 md:mb-6 shadow-lg`}>
                  <Star className="w-6 md:w-7 h-6 md:h-7 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">{plan.name}</h3>
                <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 min-h-[2.5rem] md:min-h-[3rem]">{plan.description}</p>

                <div className="mb-4 md:mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">{plan.price}</span>
                  </div>
                  <span className="text-slate-600 block mb-1 md:mb-2 text-sm md:text-base">{plan.period}</span>
                  <span className="text-xs md:text-sm text-slate-500">{plan.monthlyEquiv}</span>
                </div>

                <a
                  href={plan.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mb-6 md:mb-8 text-sm md:text-base ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Join Discord Premium
                </a>

                <div className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 md:space-x-3">
                      <Check className={`w-4 md:w-5 h-4 md:h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-amber-600' : 'text-green-600'}`} />
                      <span className="text-sm md:text-base text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-green-50 border-2 border-green-200 rounded-2xl p-4 md:p-6 max-w-2xl">
            <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-2 md:mb-3">
              <Shield className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
              <span className="text-base md:text-lg font-bold text-green-900">Jaminan 100% Uang Kembali</span>
            </div>
            <p className="text-sm md:text-base text-slate-700">
              Tidak puas dengan layanan kami dalam 7 hari pertama? Kami kembalikan uang Anda 100%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
