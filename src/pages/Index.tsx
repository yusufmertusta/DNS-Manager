import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { login } from "@/lib/api";
import { 
  Globe, 
  Shield, 
  Server, 
  Activity,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Zap,
  BarChart3,
  Cloud,
  Timer,
  MessageCircle
} from "lucide-react";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      toast({
        title: "Giriş başarılı!",
        description: "DNS Manager'a hoş geldiniz.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center px-8 py-12 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DNS Manager
            </span>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              DNS Yönetim Paneline Hoş Geldiniz!
            </h1>
            <p className="text-gray-600">
              Domain ve DNS altyapınızı yönetmek için 
              giriş yapın ve kontrol panelinizi kullanmaya başlayın.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta Adresi
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Şifrenizi girin"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  Şifrenizi mi unuttunuz?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Giriş yapılıyor...
                </div>
              ) : (
                "Panele Giriş Yap"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">VEYA</span>
              </div>
            </div>
          </div>

          {/* Contact Link */}
          <div className="text-center">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-2 border-blue-200 hover:bg-blue-50 text-blue-700 font-medium rounded-lg group transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Hizmet Almak için İletişime Geçin
            </Button>
          </div>


        </div>
      </div>

      {/* Right Panel - Marketing Content */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-900 flex-col justify-center px-16 py-16 text-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-12 leading-tight text-center">
            DNS Yönetiminde 
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Yenilikçi Çözümler
            </span>
          </h2>

          {/* Features */}
          <div className="mb-16 space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Otomatik DNS Yönetimi</h4>
                <p className="text-sm text-blue-200 leading-relaxed">
                  A, CNAME, MX, TXT kayıtlarını otomatik güncelleme ve senkronizasyon
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Gerçek Zamanlı Monitoring</h4>
                <p className="text-sm text-blue-200 leading-relaxed">
                  DNS çözümleme süreleri, uptime ve performans metrikleri
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Güvenlik ve DDoS Koruması</h4>
                <p className="text-sm text-blue-200 leading-relaxed">
                  DNSSEC desteği ve gelişmiş güvenlik önlemleri
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-cyan-300 mb-2">500+</div>
              <div className="text-sm text-blue-200">Aktif Domain</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-indigo-300 mb-2">99.9%</div>
              <div className="text-sm text-blue-200">Uptime Garantisi</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-purple-300 mb-2">&lt;50ms</div>
              <div className="text-sm text-blue-200">Ortalama Yanıt Süresi</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-emerald-300 mb-2">24/7</div>
              <div className="text-sm text-blue-200">Teknik Destek</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
