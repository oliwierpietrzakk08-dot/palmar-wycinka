const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Palmar - Wycinka Drzew', heading: 'Profesjonalna wycinka i pielęgnacja drzew.' },
  { name: 'o-nas.html', title: 'O nas - Palmar', heading: 'O firmie Palmar.' },
  { name: 'uslugi.html', title: 'Usługi - Palmar', heading: 'Zakres usług.' },
  { name: 'kontakt.html', title: 'Kontakt - Palmar', heading: 'Skontaktuj się z nami.' }
];

const template = (p) => `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', sans-serif; background-color: #fcfcfc; color: #111; }</style>
</head>
<body class="antialiased min-h-screen flex flex-col">

    <header class="w-full px-8 py-10 flex flex-wrap justify-between items-center max-w-5xl mx-auto gap-6">
        <a href="index.html" class="text-xl font-medium tracking-tight">Palmar<span class="text-neutral-500 font-light ml-2">Wycinka Drzew</span></a>
        <nav class="flex space-x-6 sm:space-x-8 text-sm font-light text-neutral-600">
            <a href="index.html" class="hover:text-black transition">Główna</a>
            <a href="o-nas.html" class="hover:text-black transition">O nas</a>
            <a href="uslugi.html" class="hover:text-black transition">Usługi</a>
            <a href="kontakt.html" class="hover:text-black transition">Kontakt</a>
        </nav>
    </header>

    <main class="flex-grow max-w-5xl mx-auto w-full px-8 py-16 sm:py-20">
        <h1 class="text-4xl md:text-5xl font-light mb-16 tracking-tight max-w-2xl">${p.heading}</h1>
        
        ${p.name === 'index.html' ? `
            <p class="text-lg text-neutral-500 font-light mb-12 max-w-xl leading-relaxed">Specjalizujemy się w bezpiecznej wycince drzew, pielęgnacji zieleni i pracach wysokościowych. Działamy szybko, precyzyjnie i bezpiecznie.</p>
            <a href="kontakt.html" class="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition">Sprawdź ofertę</a>
        ` : ''}

        ${p.name === 'o-nas.html' ? `
            <div class="max-w-3xl">
                <p class="text-lg text-neutral-500 font-light mb-8 leading-relaxed">Firma PALMAR powstała w 2021 roku, ale doświadczenie naszej załogi jest wieloletnie. Działamy głównie na terenie powiatu łowickiego, podejmując się również zleceń z innych obszarów. Pomagamy w zaprojektowaniu i utrzymaniu ogrodów oraz terenów zielonych.</p>
                <h3 class="text-xl font-medium mb-6 mt-12">Co nas wyróżnia?</h3>
                <ul class="space-y-4 text-neutral-500 font-light">
                    <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4"></span> Jakość – budujemy na zaufaniu.</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4"></span> Terminowość – szanujemy Twój czas.</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4"></span> Konkurencyjne ceny.</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4"></span> Indywidualne podejście.</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4"></span> Najnowszy park maszynowy i własny transport.</li>
                </ul>
            </div>
        ` : ''}

        ${p.name === 'uslugi.html' ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-lg font-medium mb-4">Wycinka Drzew</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Bezpieczna wycinka drzew trudnych, sekcyjna, z użyciem podnośnika lub metod alpinistycznych.</p>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-4">Pielęgnacja Zieleni</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Cięcia techniczne, formowanie koron, usuwanie suchych gałęzi oraz prześwietlanie.</p>
                </div>
            </div>
        ` : ''}

        ${p.name === 'kontakt.html' ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-500 font-light">
                <div>
                    <h3 class="text-black font-medium text-lg mb-6">Informacje kontaktowe</h3>
                    <p class="mb-2"><strong class="font-medium text-black">Palmar - Marcin Czubak</strong></p>
                    <p class="mb-2">Łaguszew 17</p>
                    <p class="mb-6">99-414 Łaguszew (Kocierzew Południowy)</p>
                    <p class="mb-2"><strong class="font-medium text-black">Email:</strong> <a href="mailto:palmar.8776@gmail.com" class="hover:text-black transition">palmar.8776@gmail.com</a></p>
                    <p class="mb-2"><strong class="font-medium text-black">Telefon:</strong> <a href="tel:783672957" class="hover:text-black transition">783 672 957</a></p>
                </div>
                <div>
                    <h3 class="text-black font-medium text-lg mb-6">Godziny otwarcia</h3>
                    <p class="mb-2">Poniedziałek — Piątek</p>
                    <p class="text-black font-medium">08:00 - 18:00</p>
                </div>
            </div>
        ` : ''}
    </main>

    <footer class="w-full px-8 py-10 max-w-5xl mx-auto border-t border-neutral-100 mt-auto">
        <p class="text-xs text-neutral-400 font-light">&copy; 2026 Palmar - Wycinka drzew, pielęgnacja zieleni Marcin Czubak.</p>
    </footer>

</body>
</html>`;

pages.forEach(p => fs.writeFileSync(p.name, template(p)));
