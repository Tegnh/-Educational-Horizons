
import React from 'react';
import { TrendingUp, Globe, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { platforms } from '@/data/platforms';

const StatsSection: React.FC = () => {
  const totalPlatforms = platforms.length;
  const registeredPlatforms = platforms.filter(p => p.isRegistered).length;
  const freePlatforms = platforms.filter(p => !p.isPaid).length;
  const arabicPlatforms = platforms.filter(p => p.language === 'عربي' || p.region !== 'عالمية').length;

  const stats = [
    {
      icon: BookOpen,
      title: "إجمالي المنصات",
      value: totalPlatforms,
      description: "منصة تعليمية",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "منصات مسجلة رسمياً",
      value: registeredPlatforms,
      description: "منصة معتمدة",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "منصات مجانية",
      value: freePlatforms,
      description: "منصة مجانية",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "منصات عربية",
      value: arabicPlatforms,
      description: "منصة عربية",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full bg-white shadow-md`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold text-gray-800 font-arabic mb-1">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-600 font-arabic">
                {stat.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsSection;
