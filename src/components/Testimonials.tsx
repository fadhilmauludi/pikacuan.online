import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Full-time Trader',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Bergabung dengan Pikacuan adalah keputusan terbaik dalam karir trading saya. Dalam 3 bulan, portfolio saya sudah naik 45%. Mentor-mentornya sangat responsif dan signal yang diberikan akurat!',
      rating: 5,
      profit: '+45%',
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Entrepreneur & Investor',
      image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Sebagai pemula, saya merasa sangat terbantu dengan materi pembelajaran yang terstruktur. Komunitas di Discord juga sangat supportif. Sekarang saya sudah bisa trading dengan percaya diri.',
      rating: 5,
      profit: '+28%',
    },
    {
      name: 'Andi Wijaya',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Materi risk management yang diajarkan sangat membantu saya dalam mengontrol emosi dan modal. Setelah 6 bulan, saya sudah konsisten profit setiap bulannya. Worth every penny!',
      rating: 5,
      profit: '+52%',
    },
    {
      name: 'Linda Kartika',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Live trading session nya sangat educative! Saya bisa melihat langsung bagaimana mentor melakukan analisis dan entry position. Profit saya meningkat signifikan setelah menerapkan strateginya.',
      rating: 5,
      profit: '+38%',
    },
    {
      name: 'Rudi Hermawan',
      role: 'Corporate Employee',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Dari yang tadinya sering loss karena emosi trading, sekarang bisa disiplin mengikuti strategi. Portfolio review bulanannya membantu saya evaluasi dan improve terus. Highly recommended!',
      rating: 5,
      profit: '+31%',
    },
    {
      name: 'Maya Kusuma',
      role: 'Financial Analyst',
      image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Tools dan indicator yang disediakan sangat membantu analisis teknikal. Plus daily market analysis nya selalu on point. Best investment for my trading career!',
      rating: 5,
      profit: '+42%',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 mb-4 md:mb-6">
            <Star className="w-4 h-4 text-green-600 fill-current" />
            <span className="text-green-600 font-semibold text-xs md:text-sm">TESTIMONI MEMBER</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Kisah Sukses Member Kami
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Bergabunglah dengan ratusan trader yang sudah merasakan transformasi dalam trading mereka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 md:top-6 right-4 md:right-6 w-10 md:w-12 h-10 md:h-12 text-amber-100" />

              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover border-4 border-amber-100"
                />
                <div>
                  <div className="font-bold text-sm md:text-base text-slate-900">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3 md:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-amber-500 fill-current" />
                ))}
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4 md:mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <span className="text-xs md:text-sm font-bold text-green-700">
                  Profit: {testimonial.profit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-6 md:p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Siap Untuk Menjadi Trader Sukses Berikutnya?
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-amber-50 mb-6 md:mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas Pikacuan sekarang dan mulai perjalanan trading Anda menuju financial freedom
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
