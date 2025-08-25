# DNS Manager Project

## Proje Hakkında

DNS Manager, domain ve DNS altyapınızı profesyonel bir şekilde yönetmenizi sağlayan modern bir web uygulamasıdır. Bu proje, DNS kayıtlarınızı kolayca yönetmenize, load balancing işlemlerinizi otomatikleştirmenize ve sunucu sağlık durumlarını canlı olarak izlemenize olanak tanır.

### Özellikler

- **Domain Yönetimi**: Tüm domain'lerinizi tek yerden yönetin
- **DNS Kayıt Yönetimi**: A, AAAA, CNAME, MX, TXT gibi DNS kayıtlarını kolayca ekleyin, düzenleyin ve silin
- **Load Balancing**: Health check ile otomatik failover, round-robin ve weighted load balancing
- **Real-time Monitoring**: Sunucu sağlık durumu ve response time metriklerini canlı izleyin
- **Güvenli Erişim**: JWT tabanlı kimlik doğrulama ve role-based access control
- **Admin Paneli**: Kullanıcı yönetimi ve sistem ayarları

### Teknolojiler

Bu proje şu teknolojiler kullanılarak geliştirilmiştir:

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, Prisma, PostgreSQL
- **Authentication**: JWT, bcrypt
- **DNS Integration**: Bind9

## Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn
- PostgreSQL veritabanı
- Bind9 DNS server (opsiyonel)

### Adım Adım Kurulum

1. **Projeyi klonlayın**
   ```sh
   git clone <REPO_URL>
   cd bind-domain-manager
   ```

2. **Frontend bağımlılıklarını yükleyin**
   ```sh
   npm install
   ```

3. **Backend bağımlılıklarını yükleyin**
   ```sh
   cd backend
   npm install
   cd ..
   ```

4. **Environment dosyasını oluşturun**
   ```sh
   cd backend
   cp .env.example .env
   ```
   
   `.env` dosyasını düzenleyerek veritabanı bağlantı bilgilerinizi girin:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/dns_manager"
   JWT_SECRET="your-secret-key"
   PORT=3001
   ```

5. **Veritabanını hazırlayın**
   ```sh
   cd backend
   npx prisma migrate dev --name init
   npx prisma generate
   ```

6. **Backend'i başlatın**
   ```sh
   npm run dev
   ```

7. **Yeni bir terminal açın ve frontend'i başlatın**
   ```sh
   npm run dev
   ```

8. **Tarayıcınızda açın**
   ```
   http://localhost:8080
   ```

## Geliştirme

### Scripts

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Production build oluşturur
- `npm run lint` - ESLint ile kod kontrolü yapar
- `npm run preview` - Build'i önizler

### Proje Yapısı

```
src/
├── components/     # UI bileşenleri
├── pages/         # Sayfa bileşenleri
├── lib/           # Utility fonksiyonlar
├── hooks/         # Custom React hooks
└── types/         # TypeScript tip tanımları

backend/
├── src/           # Backend kaynak kodları
├── prisma/        # Veritabanı şeması
└── dist/          # Build çıktısı
```

## Deployment

Bu projeyi çeşitli hosting platformlarında deploy edebilirsiniz:

- **Vercel** - Frontend için
- **Railway/Heroku** - Backend için
- **VPS/Dedicated Server** - Tam kontrol için

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## İletişim

**Developer**: yusufmertusta

---

**Not**: Bu proje eğitim ve geliştirme amaçlıdır. Production ortamında kullanmadan önce güvenlik testlerinden geçirmeyi unutmayın.

