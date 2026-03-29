const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Strona główna - Wycinka drzew', heading: 'Profesjonalna wycinka i pielęgnacja drzew.' },
  { name: 'o-nas.html', title: 'O nas - Wycinka drzew', heading: 'O firmie Palmar.' },
  { name: 'kontakt.html', title: 'Kontakt - Wycinka drzew', heading: 'Skontaktuj się z nami.' },
  { name: 'pielegnacja-zieleni.html', title: 'Pielęgnacja zieleni - Wycinka drzew', heading: 'Pielęgnacja zieleni.' },
  { name: 'wycinka-drzew.html', title: 'Wycinka drzew - Palmar', heading: 'Wycinka drzew.' },
  { name: 'tuje.html', title: 'Tuje - Wycinka drzew', heading: 'Pielęgnacja tui.' },
  { name: 'cennik.html', title: 'Cennik - Wycinka drzew', heading: 'Cennik naszych usług.' },
  { name: 'realizacje.html', title: 'Realizacje - Wycinka drzew', heading: 'Nasze realizacje.' }
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

    <header class="w-full px-8 py-8 flex flex-col items-center max-w-6xl mx-auto gap-8 border-b border-neutral-100">
        <a href="index.html" class="text-2xl font-medium tracking-tight">Palmar<span class="text-neutral-500 font-light ml-2">Wycinka Drzew</span></a>
        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-light text-neutral-600">
            <a href="index.html" class="hover:text-black transition">Strona główna</a>
            <a href="o-nas.html" class="hover:text-black transition">O nas</a>
            <a href="kontakt.html" class="hover:text-black transition">Kontakt</a>
            <a href="pielegnacja-zieleni.html" class="hover:text-black transition">Pielęgnacja zieleni</a>
            <a href="wycinka-drzew.html" class="hover:text-black transition">Wycinka drzew</a>
            <a href="tuje.html" class="hover:text-black transition">Tuje</a>
            <a href="cennik.html" class="hover:text-black transition">Cennik</a>
            <a href="realizacje.html" class="hover:text-black transition">Realizacje</a>
        </nav>
    </header>

    <main class="flex-grow max-w-5xl mx-auto w-full px-8 py-16 sm:py-20">
        <h1 class="text-4xl md:text-5xl font-light mb-16 tracking-tight max-w-2xl">${p.heading}</h1>
        
        ${p.name === 'index.html' ? `
            <p class="text-lg text-neutral-500 font-light mb-12 max-w-xl leading-relaxed">Specjalizujemy się w bezpiecznej wycince drzew, pielęgnacji zieleni i pracach wysokościowych. Działamy szybko, precyzyjnie i bezpiecznie.</p>
            <a href="kontakt.html" class="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition">Sprawdź ofertę</a>
        ` : '<p class="text-neutral-500 font-light">Treść w przygotowaniu...</p>'}
    </main>

    <footer class="w-full px-8 py-10 max-w-5xl mx-auto border-t border-neutral-100 mt-auto text-center">
        <p class="text-xs text-neutral-400 font-light">&copy; 2026 Palmar - Wycinka drzew, pielęgnacja zieleni Marcin Czubak.</p>
    </footer>

</body>
</html>`;

pages.forEach(p => fs.writeFileSync(p.name, template(p)));

// Cleanup old uslugi.html
if (fs.existsSync('uslugi.html')) {
  fs.unlinkSync('uslugi.html');
}
