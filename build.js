const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Palmar - Wycinka Drzew', heading: 'Profesjonalna wycinka i pielęgnacja drzew.' },
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

    <header class="w-full px-8 py-10 flex justify-between items-center max-w-5xl mx-auto">
        <a href="index.html" class="text-xl font-medium tracking-tight">Palmar<span class="text-neutral-500 font-light ml-2">Wycinka Drzew</span></a>
        <nav class="flex space-x-8 text-sm font-light text-neutral-600">
            <a href="index.html" class="hover:text-black transition">Główna</a>
            <a href="uslugi.html" class="hover:text-black transition">Usługi</a>
            <a href="kontakt.html" class="hover:text-black transition">Kontakt</a>
        </nav>
    </header>

    <main class="flex-grow max-w-5xl mx-auto w-full px-8 py-20">
        <h1 class="text-4xl md:text-5xl font-light mb-16 tracking-tight max-w-2xl">${p.heading}</h1>
        
        ${p.name === 'index.html' ? `
            <p class="text-lg text-neutral-500 font-light mb-12 max-w-xl leading-relaxed">Specjalizujemy się w bezpiecznej wycince drzew, pielęgnacji zieleni i pracach wysokościowych. Działamy szybko, precyzyjnie i bezpiecznie.</p>
            <a href="kontakt.html" class="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition">Sprawdź ofertę</a>
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
            <p class="text-neutral-500 font-light mb-8">Zadzwoń do nas w sprawie wyceny.</p>
            <a href="tel:123456789" class="text-2xl font-medium hover:underline">123 456 789</a>
        ` : ''}
    </main>

    <footer class="w-full px-8 py-10 max-w-5xl mx-auto border-t border-neutral-100 mt-auto">
        <p class="text-xs text-neutral-400 font-light">&copy; 2026 Palmar. Łowicz.</p>
    </footer>

</body>
</html>`;

pages.forEach(p => fs.writeFileSync(p.name, template(p)));
