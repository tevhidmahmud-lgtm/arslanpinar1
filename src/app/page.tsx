'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Slider otomasyonu
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    '/slider1.jpg',
    '/slider2.jpg',
    '/slider3.jpg',
  ];

  const products = [
    { name: 'Kereste Çeşitleri', href: '/urunler/kereste' },
    { name: 'Tomruk', href: '/urunler/tomruk' },
    { name: 'Lambri', href: '/urunler/lambri' },
    { name: 'Taban Tahtası', href: '/urunler/tabantahtasi' },
    { name: 'Laminant Parke', href: '/urunler/laminantparke' },
    { name: 'OSB', href: '/urunler/osb' },
  ];

  const contactInfo = {
    address: 'Yeni Marangozlar San. Hacı Yusuf Mescit Mah. Kılıçbey Sk.No:5 KONYA',
    phones: ['0.332 342-44 33', '0.332 342-31 44', '0.533 779-10 99', '0.506 689-99 22'],
    emails: ['info@arslanpinarkereste.com', 'arslanpinarkereste@gmail.com', 'arslanpinarkereste@hotmail.com'],
    hours: 'Pazartesi-Cuma: 06:00-20:00',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-primary-700">
              Arslanpınar Kereste
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
                Anasayfa
              </Link>
              <Link href="/kurumsal" className="text-gray-700 hover:text-primary-600 transition">
                Kurumsal
              </Link>
              <Link href="/neden-ahsap" className="text-gray-700 hover:text-primary-600 transition">
                Neden Ahşap
              </Link>
              <Link href="/fiyatlar" className="text-gray-700 hover:text-primary-600 transition">
                Kereste Fiyatları
              </Link>
              <div className="relative group">
                <Link
                  href="/urunler"
                  className="text-gray-700 hover:text-primary-600 transition flex items-center"
                >
                  Ürünler <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/galeri" className="text-gray-700 hover:text-primary-600 transition">
                Galeri
              </Link>
              <Link href="/iletisim" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
                İletişim
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" className="block text-gray-700 hover:text-primary-600">
                Anasayfa
              </Link>
              <Link href="/kurumsal" className="block text-gray-700 hover:text-primary-600">
                Kurumsal
              </Link>
              <Link href="/neden-ahsap" className="block text-gray-700 hover:text-primary-600">
                Neden Ahşap
              </Link>
              <Link href="/fiyatlar" className="block text-gray-700 hover:text-primary-600">
                Kereste Fiyatları
              </Link>
              <div className="pl-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Ürünler</p>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="block text-gray-600 hover:text-primary-600"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              <Link href="/galeri" className="block text-gray-700 hover:text-primary-600">
                Galeri
              </Link>
              <Link href="/iletisim" className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center">
                İletişim
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Slider */}
      <header className="relative h-[600px] overflow-hidden mt-16">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Arslanpınar Kereste
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    Konya Kerestecilikte Önder
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adres</h3>
              <p className="text-gray-600 text-sm">
                Konya, Yeni Marangozlar San. Hacı Yusuf Mescit Mah.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-gray-600 text-sm">
                0.332 342-44 33
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-posta</h3>
              <p className="text-gray-600 text-sm">
                info@arslanpinarkereste.com
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600 text-sm">
                Pazartesi-Cuma: 06:00-20:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-6xl">🪵</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/urunler"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition text-lg"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Neden Arslanpınar Kereste?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Konya Kerestecilikte önder kuruluşlardan bir tanesi olan Arslanpınar Kereste,
              Siz müşterilerimiz için samimi dürüst firmacılık anlayışını benimsemiştir.
              Firmamızdan temin edebileceğiniz malzemeler, İnşaatlık kereste, Doğramalık kereste,
              Lambri, Tomruk, OSB, Parkeler ve fiyatlarına ulaşabilirsiniz.
            </p>
            <Link
              href="/neden-ahsap"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition text-lg"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            İletişime Geçin
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Adres Bilgilerimiz
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Adres</p>
                    <p className="text-gray-600">
                      Yeni Marangozlar San. Hacı Yusuf Mescit Mah. Kılıçbey Sk.No:5 KONYA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Telefonlar</p>
                    <div className="space-y-2">
                      {contactInfo.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-gray-600 hover:text-primary-600"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">E-posta</p>
                    <div className="space-y-2">
                      {contactInfo.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="text-gray-600 hover:text-primary-600"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Çalışma Saatleri</p>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Google Maps
              </h3>
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.1192117255855!2d32.53823329239664!3d37.90148946595273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0901dd9cc8e19%3A0x724394ff663bdf5f!2zS8SxbMSxbsOnYmV5IFNrLiBObzo1LCBIYWPEsXl1c3VmbWVzY2l0LCA0MjAzMCBLYXJhdGF5L0tvbnlh!5e0!3m2!1str!2str!4v1451664855447"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Arslanpınar Kereste</h3>
              <p className="text-gray-400">
                Konya Kerestecilikte önder kuruluş. Yüksek kaliteli kereste ürünleri ve
                profesyonel hizmet.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/kurumsal" className="text-gray-400 hover:text-white transition">
                    Kurumsal
                  </Link>
                </li>
                <li>
                  <Link href="/urunler" className="text-gray-400 hover:text-white transition">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link href="/galeri" className="text-gray-400 hover:text-white transition">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-gray-400 hover:text-white transition">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{contactInfo.address}</li>
                <li>{contactInfo.phones[0]}</li>
                <li>{contactInfo.emails[0]}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 Arslanpınar Kereste. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
