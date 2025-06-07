
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  region: string;
  onRegionChange: (value: string) => void;
  isRegistered: string;
  onRegisteredChange: (value: string) => void;
  isPaid: string;
  onPaidChange: (value: string) => void;
  sector: string;
  onSectorChange: (value: string) => void;
  onClearFilters: () => void;
  resultsCount: number;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  region,
  onRegionChange,
  isRegistered,
  onRegisteredChange,
  isPaid,
  onPaidChange,
  sector,
  onSectorChange,
  onClearFilters,
  resultsCount
}) => {
  return (
    <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="text-arabic-blue w-6 h-6" />
          <h2 className="text-xl font-semibold text-arabic-blue font-arabic">فلترة المنصات</h2>
        </div>
        
        {/* شريط البحث */}
        <div className="relative mb-6">
          <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="ابحث عن منصة تعليمية..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pr-10 py-3 text-right font-arabic border-gray-200 focus:border-arabic-blue focus:ring-arabic-blue"
          />
        </div>

        {/* مرشحات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">المنطقة</label>
            <Select value={region} onValueChange={onRegionChange}>
              <SelectTrigger className="w-full text-right font-arabic">
                <SelectValue placeholder="اختر المنطقة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="الكل">جميع المناطق</SelectItem>
                <SelectItem value="عالمية">منصات عالمية</SelectItem>
                <SelectItem value="السعودية">السعودية</SelectItem>
                <SelectItem value="العالم العربي">العالم العربي</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">حالة التسجيل</label>
            <Select value={isRegistered} onValueChange={onRegisteredChange}>
              <SelectTrigger className="w-full text-right font-arabic">
                <SelectValue placeholder="حالة التسجيل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="الكل">جميع الحالات</SelectItem>
                <SelectItem value="مسجلة رسمياً">مسجلة رسمياً</SelectItem>
                <SelectItem value="غير مسجلة رسمياً">غير مسجلة رسمياً</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">نوع الاشتراك</label>
            <Select value={isPaid} onValueChange={onPaidChange}>
              <SelectTrigger className="w-full text-right font-arabic">
                <SelectValue placeholder="نوع الاشتراك" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="الكل">جميع الأنواع</SelectItem>
                <SelectItem value="مجانية">مجانية</SelectItem>
                <SelectItem value="مدفوعة">مدفوعة</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">القطاع</label>
            <Select value={sector} onValueChange={onSectorChange}>
              <SelectTrigger className="w-full text-right font-arabic">
                <SelectValue placeholder="اختر القطاع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="الكل">جميع القطاعات</SelectItem>
                <SelectItem value="تقني">تقني</SelectItem>
                <SelectItem value="مالي">مالي</SelectItem>
                <SelectItem value="متنوع">متنوع</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* النتائج وزر المسح */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 font-arabic">
            تم العثور على <span className="font-semibold text-arabic-blue">{resultsCount}</span> منصة
          </div>
          <Button 
            variant="outline" 
            onClick={onClearFilters}
            className="font-arabic hover:bg-arabic-blue hover:text-white transition-colors"
          >
            مسح جميع المرشحات
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
