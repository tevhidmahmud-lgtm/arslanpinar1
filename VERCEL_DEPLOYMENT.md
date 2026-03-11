# Vercel Deployment Rehberi

## 📋 ÖN Hazırlık

### 1. Vercel Hesabı Oluştur
1. Git [https://vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" butonuna tıklayın
3. **GitHub** hesabı ile kayıt olun (önerilen)
   - veya **Email** ile kayıt olun
4. E-posta adresinizi doğrulayın

### 2. Proje Klasörünü Hazırlayın
Proje klasörünüzün hazır olduğundan emin olun:
```
yenisite_1/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
└── run.bat
```

---

## 🚀 PROJE BAĞLAMA ADIMLARI

### Yöntem 1: GitHub ile Bağlama (Önerilen)

#### Adım 1: GitHub'a Yükleme
1. GitHub hesabınıza gidin: [https://github.com](https://github.com)
2. **New Repository** butonuna tıklayın
3. Repository adını girin: `arslanpinar-kereste`
4. **Private** veya **Public** seçin
5. **Create repository** butonuna tıklayın

#### Adım 2: Proje Klasörünü Git'e Ekleme
1. Komut satırını açın
2. Proje klasörüne gidin:
   ```bash
   cd D:\Stok_Takip\ArslanpınarKereste\yenisite_1
   ```
3. Git başlatın:
   ```bash
   git init
   ```
4. Dosyaları ekleyin:
   ```bash
   git add .
   ```
5. Değişiklikleri commit edin:
   ```bash
   git commit -m "İlk versiyon"
   ```
6. GitHub'a push edin:
   ```bash
   git remote add origin https://github.com/KULLANICI_ADINIZ/arslanpinar-kereste.git
   git branch -M main
   git push -u origin main
   ```

#### Adım 3: Vercel'e Bağlama
1. Vercel'e gidin: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. **Add New** → **Project** butonuna tıklayın
3. **Import from GitHub** sekmesine tıklayın
4. Arama kutusuna `arslanpinar-kereste` yazın
5. Bulduğunuz projeyi seçin
6. **Import** butonuna tıklayın

#### Adım 4: Proje Ayarları
- **Framework Preset**: Next.js (otomatik seçili)
- **Root Directory**: `./` (veya boş bırakın)
- **Build Command**: `npm run build` (otomatik)
- **Output Directory**: `.next` (otomatik)
- **Install Command**: `npm install` (otomatik)

7. **Deploy** butonuna tıklayın

---

### Yöntem 2: Vercel CLI ile Bağlama

#### Adım 1: Vercel CLI Kurulumu
1. Komut satırını açın
2. Vercel CLI'yi global olarak kurun:
   ```bash
   npm install -g vercel
   ```
3. Vercel'e giriş yapın:
   ```bash
   vercel login
   ```
4. E-posta adresinizi ve şifrenizi girin

#### Adım 2: Proje Klasörüne Git
```bash
cd D:\Stok_Takip\ArslanpınarKereste\yenisite_1
```

#### Adım 3: Vercel'e Deploy Et
```bash
vercel
```

Sistem size sorular soracak:
- **Set up and deploy "yenisite_1"?** → Y (Yes)
- **Which scope?** → Vercel hesabınızı seçin
- **Link to existing project?** → N (No)
- **What's your project's name?** → `arslanpinar-kereste`
- **In which directory is your code located?** → `./`
- **Want to override the settings?** → N (No)

---

### Yöntem 3: Drag & Drop (En Kolay)

1. Vercel'e gidin: [https://vercel.com/new](https://vercel.com/new)
2. **Drag and drop** your project folder here
3. **Deploy** butonuna tıklayın

---

## 🎯 DEPLOYMENT SONRASI

### 1. Site URL'si
Deploy tamamlandığında Vercel size otomatik bir URL verir:
- `https://arslanpinar-kereste.vercel.app`
- veya `https://yenisite-1-xxx.vercel.app`

### 2. Domain Ekleme (İsteğe Bağlı)

#### Adım 1: Custom Domain Ekleme
1. Vercel dashboard'da projenize gidin
2. **Settings** → **Domains** sekmesine tıklayın
3. **Add Domain** butonuna tıklayın
4. Domaininizi girin: `www.arslanpinarkereste.com`
5. DNS ayarlarını yapın:
   - **Type**: CNAME
   - **Name**: `www`
   - **Value**: `cname.vercel-dns.com`

#### Adım 2: DNS Ayarları
1. Domain sahibi olduğunuz panelde (GoDaddy, Namecheap, vb.)
2. DNS ayarlarına gidin
3. CNAME record ekleyin:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Kaydet butonuna tıklayın
5. Birkaç saat bekleyin (DNS yayılması için)

---

## 🔧 SIK KULLANILAN KOMUTLAR

### Localde Çalıştırma
```bash
# Geliştirme modu
npm run dev

# Production build
npm run build

# Production modu
npm start
```

### Bat Dosyası ile Çalıştırma
1. `run.bat` dosyasına çift tıklayın
2. Menüden seçenek seçin:
   - **1**: Geliştirme modu (localhost:3000)
   - **2**: Production build yap
   - **3**: Production modu
   - **4**: Temizle ve yeniden başlat

---

## 📊 PRODUCTION DEPLOYMENT TALİMATI

### 1. Değişiklik Yapmadan Önce
```bash
# Localde test et
npm run dev

# Production build yap
npm run build

# Production modunda test et
npm start
```

### 2. GitHub'a Push Et
```bash
git add .
git commit -m "Yeni özellik"
git push origin main
```

### 3. Vercel Otomatik Deploy
1. GitHub'a push yaptığınızda Vercel otomatik deploy yapar
2. Vercel dashboard'da **Deployments** sekmesinde takip edebilirsiniz

### 4. Rollback Yapma (Hata varsa)
1. Vercel dashboard'da projenize gidin
2. **Deployments** sekmesine tıklayın
3. Hatayı yapan deployment'ı bulun
4. **Revert to this deployment** butonuna tıklayın

---

## 🎨 ÖZEL AYARLAR

### Environment Variables
1. Vercel dashboard'da projenize gidin
2. **Settings** → **Environment Variables** sekmesi
3. Yeni variable ekleyin:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://www.arslanpinarkereste.com`
   - **Environment**: Production

### Custom Headers
1. **Settings** → **Headers** sekmesi
2. Yeni header ekleyin:
   - **Key**: `X-Frame-Options`
   - **Value**: `DENY`
   - **Key**: `X-Content-Type-Options`
   - **Value**: `nosniff`

---

## 🚀 PRODUCTION BUILD TALİMATI

### 1. Production Build Yap
```bash
npm run build
```

Bu işlem şunları yapar:
- TypeScript dosyalarını derler
- Next.js build oluşturur
- `.next` klasörünü oluşturur
- Optimized assets (resimler, fontlar)

### 2. Production Modunda Çalıştır
```bash
npm start
```

Bu işlem:
- Production build'i çalıştırır
- `http://localhost:3000` adresinde sunar
- Production ayarlarıyla çalışır

### 3. Test Et
- Localde test edin
- Mobil görünümü test edin
- Farklı tarayıcılarda test edin

### 4. Deploy Et
```bash
git add .
git commit -m "Production build"
git push origin main
```

---

## 📞 SIK SORULAN SORULAR

### Q: Site yayına alındı ama hala localhost çalışıyor mu?
A: Hayır, production build'i deploy ettiğinizde site yayına alınır. Localhost sadece local test için.

### Q: Domain eklemek ücretli mi?
A: Vercel ücretsiz planında 100 domain dahil ücretsizdir.

### Q: Site yavaş yükleniyor mu?
A: Next.js otomatik optimize eder. Resimleri WebP formatına dönüştürün ve CDN kullanın.

### Q: Nasıl backup alabilirim?
A: GitHub repository'niz otomatik backup sağlar.

### Q: Siteyi nasıl güncellerim?
A: Değişiklikleri yapın, commit edin, GitHub'a push edin. Vercel otomatik deploy yapar.

---

## ✅ CHECKLIST

Deployment hazırlığı için:
- [ ] Vercel hesabı oluşturuldu
- [ ] Proje klasörü hazır
- [ ] GitHub repository oluşturuldu
- [ ] Proje GitHub'a push edildi
- [ ] Vercel'e bağlandı
- [ ] Production build tamamlandı
- [ ] Site test edildi
- [ ] Domain eklendi (isteğe bağlı)
- [ ] SSL sertifikası otomatik alındı

---

## 🎉 TEBRİKLER!

Site başarıyla deploy edildi! 🚀

Site URL: `https://arslanpinar-kereste.vercel.app`

Artık siteyi herkes erişebilir!
