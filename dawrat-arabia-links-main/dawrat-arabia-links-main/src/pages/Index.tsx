import React, { useState, useMemo } from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import SearchFilters from '@/components/SearchFilters';
import PlatformCard from '@/components/PlatformCard';
import StatsSection from '@/components/StatsSection';
import { getFilteredPlatforms } from '@/data/platforms';
const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('الكل');
  const [isRegistered, setIsRegistered] = useState('الكل');
  const [isPaid, setIsPaid] = useState('الكل');
  const [sector, setSector] = useState('الكل');
  const filteredPlatforms = useMemo(() => {
    return getFilteredPlatforms(searchTerm, region, isRegistered, isPaid, sector);
  }, [searchTerm, region, isRegistered, isPaid, sector]);
  const clearFilters = () => {
    setSearchTerm('');
    setRegion('الكل');
    setIsRegistered('الكل');
    setIsPaid('الكل');
    setSector('الكل');
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-arabic" dir="rtl">
      {/* الترويسة */}
      <header className="bg-gradient-to-r from-arabic-blue via-blue-700 to-indigo-800 text-white py-12 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <GraduationCap className="w-12 h-12 text-arabic-gold" />
              </div>
              <Sparkles className="w-8 h-8 text-arabic-gold animate-pulse" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mx-[15px] my-[10px] px-0 py-0">آفاق التعلم </h1>
            <p className="text-xl lg:text-2xl mb-6 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              اكتشف أفضل منصات التعلم الإلكتروني في العالم العربي والعالم
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                ✨ منصات معتمدة ومضمونة
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                🎯 فلترة ذكية ومتقدمة
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                🌟 تحديث مستمر للمحتوى
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-8">
        {/* قسم الإحصائيات */}
        <StatsSection />

        {/* مرشحات البحث */}
        <SearchFilters searchTerm={searchTerm} onSearchChange={setSearchTerm} region={region} onRegionChange={setRegion} isRegistered={isRegistered} onRegisteredChange={setIsRegistered} isPaid={isPaid} onPaidChange={setIsPaid} sector={sector} onSectorChange={setSector} onClearFilters={clearFilters} resultsCount={filteredPlatforms.length} />

        {/* قائمة المنصات */}
        {filteredPlatforms.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredPlatforms.map(platform => <div key={platform.id} className="animate-slide-in-right">
                <PlatformCard platform={platform} />
              </div>)}
          </div> : <div className="text-center py-16">
            <div className="mb-6">
              <GraduationCap className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2 font-arabic">
              لم يتم العثور على نتائج
            </h3>
            <p className="text-gray-500 mb-6 font-arabic">
              لم نتمكن من العثور على منصات تطابق معايير البحث الخاصة بك
            </p>
            <button onClick={clearFilters} className="bg-arabic-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-arabic">
              مسح جميع المرشحات
            </button>
          </div>}
      </main>

      {/* التذييل */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-arabic-gold" />
              <h3 className="text-xl font-bold font-arabic">دليل منصات الدورات الإلكترونية</h3>
            </div>
            <div className="mb-4">
              <a href="https://x.com/6ar_t" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-arabic text-sm">
                تابعنا على X: @6ar_t
              </a>
            </div>
            <p className="text-gray-400 mb-4 font-arabic leading-relaxed">
              نهدف إلى تسهيل الوصول إلى أفضل منصات التعلم الإلكتروني في العالم العربي والعالم
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <div className="text-sm text-gray-500 font-arabic">
                © 2024 جميع الحقوق محفوظة
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;