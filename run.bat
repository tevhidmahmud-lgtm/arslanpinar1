@echo off
chcp 65001 >nul
echo ========================================
echo Arslanpınar Kereste Web Sitesi
echo ========================================
echo.
echo Seçenekler:
echo 1. Geliştirme Modunda Çalıştır (localhost:3000)
echo 2. Production Build Yap
echo 3. Production Modunda Çalıştır
echo 4. Temizle ve Yeniden Başlat
echo 5. Çıkış
echo.

set /p choice="Seçiminizi yapın (1-5): "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto start
if "%choice%"=="4" goto clean
if "%choice%"=="5" goto end
goto invalid

:dev
echo.
echo Geliştirme modunda başlatılıyor...
echo Site: http://localhost:3000
echo.
npm run dev
goto end

:build
echo.
echo Production build yapılıyor...
echo Bu işlem birkaç dakika sürebilir...
echo.
npm run build
if %errorlevel% neq 0 (
    echo.
    echo Hata oluştu! Lütfen hatayı kontrol edin.
    goto end
)
echo.
echo Build başarıyla tamamlandı!
echo Şimdi '3' seçeneğini seçerek production modunda çalıştırabilirsiniz.
goto end

:start
echo.
echo Production modunda başlatılıyor...
echo.
npm start
goto end

:clean
echo.
echo Temizleniyor...
echo.
taskkill /F /IM node.exe 2>nul
timeout /t 2 >nul
echo.
echo Temizlendi! Şimdi tekrar çalıştırabilirsiniz.
echo.
goto end

:invalid
echo.
echo Geçersiz seçim! Lütfen 1-5 arası bir seçim yapın.
echo.
goto end

:end
echo.
echo ========================================
echo İşlem tamamlandı!
echo ========================================
pause
