import { useEffect, useState, useCallback } from "react";
import {
  Radio,
  Shield,
  QrCode,
  Bell,
  ChevronRight,
  MessageCircle,
  Zap,
  Wifi,
  Smartphone,
  Sun,
  Moon,
  Monitor,
  Database,
  ArrowUpRight,
  Activity,
  Signal,
} from "lucide-react";

/* ─── Theme Hook (auto day/night) ─── */

function useAutoTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  });

  const updateTheme = useCallback(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 19 ? "light" : "dark");
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, [updateTheme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return theme;
}

/* ─── Inline SVG Icons for Brands ─── */

const WeChatIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.81-.05a6.126 6.126 0 0 1-.253-1.726c0-3.573 3.27-6.47 7.302-6.47.255 0 .503.015.749.04C16.537 4.634 12.998 2.188 8.691 2.188zm-2.6 4.408c.58 0 1.049.47 1.049 1.049 0 .58-.47 1.049-1.05 1.049-.579 0-1.048-.47-1.048-1.05 0-.579.47-1.048 1.049-1.048zm5.196 0c.58 0 1.049.47 1.049 1.049 0 .58-.47 1.049-1.05 1.049-.579 0-1.048-.47-1.048-1.05 0-.579.47-1.048 1.05-1.048zm4.67 4.281c-3.563 0-6.455 2.56-6.455 5.72 0 3.16 2.892 5.72 6.455 5.72a7.78 7.78 0 0 0 2.22-.322.672.672 0 0 1 .558.076l1.48.867a.252.252 0 0 0 .13.042.227.227 0 0 0 .225-.228c0-.056-.022-.11-.037-.166l-.303-1.152a.458.458 0 0 1 .165-.517C22.995 19.87 24 18.068 24 16.017c0-3.16-2.892-5.72-6.455-5.72h-.084zm-2.19 3.295c.45 0 .816.366.816.817 0 .45-.366.816-.817.816-.45 0-.816-.366-.816-.817 0-.45.366-.816.817-.816zm4.38 0c.45 0 .816.366.816.817 0 .45-.366.816-.817.816-.45 0-.816-.366-.816-.817 0-.45.366-.816.817-.816z" />
  </svg>
);

const EnterpriseWeChatIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const OfficialAccountIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

/* ─── Circuit Board Background ─── */

const CircuitBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M0 50 H40 L50 40 H100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 0 V40 L60 50 V100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <circle cx="0" cy="50" r="1.5" fill="currentColor" />
        <circle cx="100" cy="50" r="1.5" fill="currentColor" />
        <circle cx="50" cy="0" r="1.5" fill="currentColor" />
        <circle cx="50" cy="100" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

/* ─── Data Flow Lines ─── */

const DataFlowLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{
          top: `${15 + i * 18}%`,
          left: 0,
          right: 0,
          animation: `data-flow ${2 + i * 0.3}s linear infinite`,
          strokeDasharray: "8 12",
          opacity: 0.4,
        }}
      />
    ))}
  </div>
);

/* ─── Signal Wave Animation ─── */

const SignalWave = () => (
  <div className="relative flex items-center justify-center w-24 h-24">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 animate-signal" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-primary/8 dark:bg-primary/15 animate-signal" style={{ animationDelay: "0.5s" }} />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-primary/5 dark:bg-primary/10 animate-signal" style={{ animationDelay: "1s" }} />
    </div>
    <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 backdrop-blur-sm border border-primary/20 dark:border-primary/30 animate-pulse-ring">
      <Radio className="w-7 h-7 text-primary" />
    </div>
  </div>
);

/* ─── QR Code Placeholder ─── */

const QRPlaceholder = ({ label }: { label: string }) => (
  <div className="relative group cursor-pointer">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative w-36 h-36 mx-auto bg-card border border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 overflow-hidden group-hover:border-primary/40 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <QrCode className="w-10 h-10 text-muted-foreground/50 relative z-10 group-hover:text-primary/70 transition-colors" />
      <span className="text-[10px] text-muted-foreground/40 relative z-10">{label}</span>
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />
      </div>
    </div>
  </div>
);

/* ─── Theme Indicator ─── */

const ThemeIndicator = ({ theme }: { theme: string }) => (
  <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 text-xs text-muted-foreground">
    {theme === "dark" ? (
      <Moon className="w-3.5 h-3.5" />
    ) : (
      <Sun className="w-3.5 h-3.5" />
    )}
    <span className="hidden sm:inline">{theme === "dark" ? "夜间模式" : "日间模式"}</span>
    <span className="sm:hidden">{theme === "dark" ? "夜" : "日"}</span>
  </div>
);

/* ─── Channel Card ─── */

interface ChannelCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  qrLabel: string;
  delay: string;
  accentColor: string;
  glowColor: string;
}

const ChannelCard = ({ icon, title, subtitle, qrLabel, delay, accentColor, glowColor }: ChannelCardProps) => (
  <div className={`opacity-0 animate-fade-in-up ${delay} group`}>
    <div className="relative h-full bg-card/60 dark:bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 dark:hover:border-primary/40 hover:shadow-lg" style={{ boxShadow: `0 0 0px ${glowColor}` }}>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 0 30px ${glowColor}10` }} />

      {/* Top accent line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full ${accentColor} opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`} />

      <div className="flex flex-col items-center text-center relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-secondary/80 dark:bg-secondary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>

        {/* QR Code */}
        <QRPlaceholder label={qrLabel} />

        {/* Scan hint */}
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
          <QrCode className="w-3.5 h-3.5" />
          <span>扫码添加</span>
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  </div>
);

/* ─── Data Plan Badge ─── */

const DataPlanBadge = ({ icon: Icon, label, value, delay }: { icon: typeof Zap; label: string; value: string; delay: string }) => (
  <div className={`opacity-0 animate-fade-in-up ${delay}`}>
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/40 dark:bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="text-left">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  </div>
);

/* ─── Main Page ─── */

export default function AntiLossPage() {
  const theme = useAutoTheme();
  const [timeStr, setTimeStr] = useState(() => new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStr(new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-500">
      {/* ── Background Effects ── */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-accent/5 dark:bg-accent/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl" />

        {/* Circuit pattern */}
        <CircuitBackground />

        {/* Data flow lines */}
        <DataFlowLines />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Theme indicator */}
      <ThemeIndicator theme={theme} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          {/* Signal animation */}
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in-up stagger-1">
            <SignalWave/>
          </div>

          {/* Title */}
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/20 dark:border-primary/25 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4"/>
              <span>全国资费 · 官方授权</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                长空通信
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-muted-foreground tracking-widest uppercase">
              Changkong Communication
            </h2>
            <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"/>
          </div>
        </header>

        {/* Business Highlights */}
        <section className="mb-12">
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Activity className="w-4 h-4 text-primary"/>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">主营业务</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <DataPlanBadge
                icon={Database}
                label="全国大流量卡"
                value="50GB - 1100GB/月"
                delay="stagger-3"
            />
            <DataPlanBadge
                icon={Wifi}
                label="4G/5G 高速网络"
                value="全国通用 · 不限速"
                delay="stagger-4"
            />
            <DataPlanBadge
                icon={Smartphone}
                label="各地归属地"
                value="多省可选 · 正规号卡"
                delay="stagger-5"
            />
          </div>
        </section>

        {/* Notice Banner */}
        <div className="opacity-0 animate-fade-in-up stagger-3 mb-12">
          <div className="relative group">
            <div
                className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div
                className="relative bg-card/50 dark:bg-card/70 backdrop-blur-xl border border-border/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 transition-all duration-300 hover:border-amber-500/30">
              <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-amber-500"/>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">重要通知</p>
                <p className="text-base font-medium text-foreground">
                  更新资费请查看{" "}
                  <a
                      href="https://10010.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors font-semibold"
                  >
                    10010.co
                    <ArrowUpRight className="w-3.5 h-3.5"/>
                  </a>
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                    src="https://pic2.ziyuan.wang/user/ikmoe/2026/02/%E4%B8%8B%E8%BD%BD%20_1__7b01b2616e762.png"
                    alt="二维码"
                    className="w-[120px] h-[120px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Channel Cards */}
        <section>
          <div className="opacity-0 animate-fade-in-up stagger-4">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Signal className="w-4 h-4 text-primary"/>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">多渠道联系</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">

            {/* 卡片1：微信 - 自定义图片 */}
            <div className="relative p-6 rounded-2xl bg-white border shadow-lg animate-fade-in-up stagger-4">
              <div className="flex flex-col items-center justify-center text-center gap-3 mb-4">
                <WeChatIcon className="w-7 h-7 text-green-500"/>
                <div>
                  <h4 className="font-semibold">微信</h4>
                  <p className="text-sm text-muted-foreground">添加客服微信</p>
                </div>
              </div>
              {/* 自定义图片 */}
              <img
                  src="https://pic2.ziyuan.wang/user/ikmoe/2026/02/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260220123650_1110_72_c0ce5c2c0a517.png"
                  alt="微信" className="w-full h-auto rounded-lg"/>
              <p className="text-center text-sm text-gray-500 mt-2">长按扫码添加</p>
            </div>

            {/* 卡片2：企业微信 - 自定义图片 */}
            <div className="relative p-6 rounded-2xl bg-white border shadow-lg animate-fade-in-up stagger-5">
              <div className="flex flex-col items-center justify-center text-center gap-3 mb-4">
                <EnterpriseWeChatIcon className="w-7 h-7 text-blue-500"/>
                <div>
                  <h4 className="font-semibold">企业微信</h4>
                  <p className="text-sm text-muted-foreground">企业微信客服</p>
                </div>
              </div>
              {/* 自定义图片 */}
              <img
                  src="https://pic2.ziyuan.wang/user/ikmoe/2026/02/17570736635931401388095cad14166ba2f_1c52f6523a3fd.png"
                  alt="企业微信" className="w-full h-auto rounded-lg"/>
              <p className="text-center text-sm text-gray-500 mt-2">长按扫码添加</p>
            </div>

            {/* 卡片3：公众号 - 自定义图片 */}
            <div className="relative p-6 rounded-2xl bg-white border shadow-lg animate-fade-in-up stagger-6">
              <div className="flex flex-col items-center justify-center text-center gap-3 mb-4">
                <OfficialAccountIcon className="w-7 h-7 text-emerald-500"/>
                <div>
                  <h4 className="font-semibold">公众号</h4>
                  <p className="text-sm text-muted-foreground">关注官方公众号</p>
                </div>
              </div>
              {/* 自定义图片 */}
              <img src="https://pic2.ziyuan.wang/user/ikmoe/2026/03/e_f52e9acf24f40.png" alt="公众号"
                   className="w-full h-auto rounded-lg"/>
              <p className="text-center text-sm text-gray-500 mt-2">长按扫码关注</p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center opacity-0 animate-fade-in-up" style={{animationDelay: "0.7s"}}>
          <div className="flex items-center justify-center gap-3 text-muted-foreground/40 text-sm">
            <div className="w-8 h-px bg-muted-foreground/20"/>
            <span>长空通信 · {timeStr}</span>
            <div className="w-8 h-px bg-muted-foreground/20"/>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/30">
            <MessageCircle className="w-3 h-3"/>
            <span>多渠道联系 · 信息不丢失 · 大流量卡全国可办</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
