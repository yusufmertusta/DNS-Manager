import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { getUserFromToken } from "@/lib/api";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Globe, 
  Settings, 
  BarChart3, 
  Users, 
  Database, 
  Crown,
  LogOut,
  Server,
  ChevronRight,
  Home,
  Shield
} from "lucide-react";
import { logout } from "@/lib/api";

export const AppSidebar = () => {
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const user = getUserFromToken();
    setUser(user);
  }, []);

  const handleSignOut = async () => {
    try {
      logout();
      toast({
        title: "Çıkış yapıldı",
        description: "Başarıyla çıkış yapıldı.",
      });
      window.location.reload();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: error.message,
      });
    }
  };

  const navigationItems = [
    {
      to: "/dashboard",
      icon: <BarChart3 className="h-4 w-4" />,
      label: "Dashboard",
      description: "Genel bakış ve istatistikler"
    },
    {
      to: "/domains",
      icon: <Globe className="h-4 w-4" />,
      label: "Domains",
      description: "Domain yönetimi"
    },
    {
      to: "/dns-loadbalancer",
      icon: <Server className="h-4 w-4" />,
      label: "DNS Load Balancers",
      description: "Load balancing yönetimi"
    }
  ];

  const adminItems = [
    {
      to: "/admin",
      icon: <Crown className="h-4 w-4" />,
      label: "Admin Panel",
      description: "Sistem yönetimi"
    }
  ];

  const accountItems = [
    {
      to: "/profile",
      icon: <Users className="h-4 w-4" />,
      label: "Profil",
      description: "Hesap bilgileri"
    },
    {
      to: "/settings",
      icon: <Settings className="h-4 w-4" />,
      label: "Ayarlar",
      description: "Uygulama ayarları"
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              DNS Manager
            </h2>
            <p className="text-xs text-muted-foreground">Manager</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Ana Menü
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.to} asChild>
                  <NavLink 
                    to={item.to} 
                    className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {item.description}
                      </div>
                    </div>
                    <ChevronRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {user?.isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Yönetim
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminItems.map((item) => (
                  <SidebarMenuItem key={item.to} asChild>
                    <NavLink 
                      to={item.to} 
                      className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {item.description}
                        </div>
                      </div>
                      <ChevronRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </NavLink>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Hesap
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.to} asChild>
                  <NavLink 
                    to={item.to} 
                    className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {item.description}
                      </div>
                    </div>
                    <ChevronRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  );
};
