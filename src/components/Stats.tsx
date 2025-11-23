import { TrendingUp, Users, Award, Target } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '87%',
      label: 'Member Profit Konsisten',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Trader Aktif',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      value: '3 Tahun',
      label: 'Pengalaman Proven',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Target,
      value: '1000+',
      label: 'Trading Signal Akurat',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform"
              >
                <div className={`inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 ${stat.bgColor} rounded-2xl mb-3 md:mb-4`}>
                  <Icon className={`w-6 md:w-8 h-6 md:h-8 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
