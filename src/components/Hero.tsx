import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-sm border border-amber-100">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-medium text-slate-700">Premium Stock Trading Community</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Bergabung dengan
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"> Pikacuan</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Komunitas trading saham terpercaya dengan mentor berpengalaman, strategi proven, dan akses eksklusif ke analisis pasar real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white rounded-xl hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-slate-300"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">500+</div>
                <div className="text-xs md:text-sm text-slate-600">Member Aktif</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">4.9/5</div>
                <div className="text-xs md:text-sm text-slate-600">Rating</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">98%</div>
                <div className="text-xs md:text-sm text-slate-600">Kepuasan</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/Pikacuan.png"
                alt="Pikacuan Logo"
                className="w-full max-w-xs md:max-w-md mx-auto drop-shadow-2xl rounded-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
}
