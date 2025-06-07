
import React from 'react';
import { ExternalLink, Star, Book, Globe, CheckCircle, XCircle, CreditCard, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Platform } from '@/data/platforms';

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'تقني': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'مالي': return 'bg-green-100 text-green-800 border-green-200';
      case 'متنوع': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRegionColor = (region: string) => {
    switch (region) {
      case 'عالمية': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'السعودية': return 'bg-green-100 text-green-800 border-green-200';
      case 'العالم العربي': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden group">
      <CardHeader className="pb-3 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 font-arabic mb-1 group-hover:text-arabic-blue transition-colors">
              {platform.name}
            </h3>
            <p className="text-sm text-gray-600 font-arabic">{platform.nameEn}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Badge className={`text-xs font-arabic ${getSectorColor(platform.sector)}`}>
              {platform.sector}
            </Badge>
            <Badge className={`text-xs font-arabic ${getRegionColor(platform.region)}`}>
              {platform.region}
            </Badge>
          </div>
        </div>

        {platform.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 font-arabic">{platform.rating}</span>
            <span className="text-xs text-gray-500 font-arabic">({platform.coursesCount?.toLocaleString()} دورة)</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm font-arabic leading-relaxed mb-4 flex-1">
          {platform.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-arabic">الدولة:</span>
            <span className="font-medium text-gray-700 font-arabic">{platform.country}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-arabic">اللغة:</span>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-700 font-arabic">{platform.language}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-arabic">التسجيل الرسمي:</span>
            <div className="flex items-center gap-1">
              {platform.isRegistered ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-arabic font-medium">مسجلة رسمياً</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-arabic font-medium">غير مسجلة</span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-arabic">نوع الاشتراك:</span>
            <div className="flex items-center gap-1">
              {platform.isPaid ? (
                <>
                  <CreditCard className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-600 font-arabic font-medium">مدفوعة</span>
                </>
              ) : (
                <>
                  <Gift className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-arabic font-medium">مجانية</span>
                </>
              )}
            </div>
          </div>
        </div>

        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-arabic-blue to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-arabic transition-all duration-300 transform hover:scale-105"
        >
          <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <ExternalLink className="w-4 h-4" />
            زيارة المنصة
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
