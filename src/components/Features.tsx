import { BookOpen, MessageSquare, LineChart, Zap, Shield, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Materi Pembelajaran Lengkap',
      description: 'Akses ke video tutorial, ebook, dan modul pembelajaran dari basic hingga advanced trading.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Diskusi Eksklusif',
      description: 'Private Discord server dengan mentor dan trader berpengalaman untuk sharing strategi dan analisis.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: LineChart,
      title: 'Analisis Pasar Real-Time',
      description: 'Dapatkan analisis teknikal dan fundamental saham-saham pilihan setiap harinya.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Trading Signal Premium',
      description: 'Signal entry dan exit point yang telah dianalisis oleh tim expert untuk profit maksimal.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Pelajari cara mengelola risiko dengan benar untuk proteksi modal dan profit konsisten.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div id="benefits" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Benefit Eksklusif Member
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Dapatkan akses penuh ke semua fasilitas premium yang dirancang khusus untuk kesuksesan trading Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br ${benefit.color} rounded-xl mb-4 md:mb-6 shadow-lg`}>
                  <Icon className="w-6 md:w-7 h-6 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
