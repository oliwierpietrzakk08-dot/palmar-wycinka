const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Strona główna - Wycinka drzew', heading: 'Profesjonalna wycinka i pielęgnacja drzew.' },
  { name: 'o-nas.html', title: 'O nas - Wycinka drzew', heading: 'O firmie Palmar.' },
  { name: 'kontakt.html', title: 'Kontakt - Wycinka drzew', heading: 'Skontaktuj się z nami.' },
  { name: 'pielegnacja-zieleni.html', title: 'Pielęgnacja zieleni - Wycinka drzew', heading: 'Pielęgnacja zieleni.' },
  { name: 'wycinka-drzew.html', title: 'Wycinka drzew - Wycinka drzew', heading: 'Wycinka drzew.' },
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

        ${p.name === 'pielegnacja-zieleni.html' ? `
            <div class="max-w-3xl">
                <p class="text-lg text-neutral-500 font-light leading-relaxed mb-8">Oferujmy usługi : pielęgnacja i utrzymania terenów zielonych na działkach prywatnych oraz terenach przemysłowych, sportowych oraz w miejscach publicznych. Świadczymy usługi w zakresie pielęgnacji i utrzymania terenów zieleni w cyklach wieloletnich oraz interwencyjnie.</p>
                <h3 class="text-xl font-medium mb-6 mt-12">Oferujemy takie usługi jak:</h3>
                <ul class="space-y-4 text-neutral-500 font-light">
                    <li>koszenie trawy,</li>
                    <li>przycinanie krzewów, żywopłotów,</li>
                    <li>karczowanie zarośli,</li>
                    <li>wykaszanie przerośniętych traw, zarośli</li>
                    <li>cięcia formujące, odmładzające, korygujące roślin,</li>
                    <li>odchwaszczanie,</li>
                    <li>wycinka i pielęgnacja drzew,</li>
                    <li>ścinkę i formowanie drzew,</li>
                    <li>sadzenie drzew i krzewów,</li>
                    <li>nawożenie trawników oraz drzew, krzewów i bylin,</li>
                    <li>renowacja trawników,</li>
                    <li>podlewanie, nawożenie trawników,</li>
                    <li>aeracja trawników,</li>
                    <li>ochrona chemiczna roślin przed owadami i grzybami</li>
                </ul>
            </div>
        ` : ''}

        ${p.name === 'wycinka-drzew.html' ? `
            <div class="max-w-4xl">
                <p class="text-lg text-neutral-500 font-light leading-relaxed mb-12">Nasza firma oferuje kompleksowe usługi w zakresie wycinki oraz pielęgnacji drzew.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-xl font-medium mb-6">Wycinka drzew</h3>
                        <ul class="space-y-3 text-neutral-500 font-light list-disc pl-5">
                            <li>metodą tradycyjną (obalanie w całości),</li>
                            <li>trudnych z wykorzystaniem metod alpinistycznych,</li>
                            <li>na cmentarzach metodami alpinistycznymi,</li>
                            <li>z podnośnika.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-medium mb-6">Cięcie drzew</h3>
                        <ul class="space-y-3 text-neutral-500 font-light list-disc pl-5">
                            <li><strong>sanitarne:</strong> usuwanie konarów i gałęzi chorych, martwych, połamanych,</li>
                            <li><strong>pielęgnacyjne:</strong> wykonywane w celu poprawienia stanu zdrowotnego lub stanu technicznego,</li>
                            <li><strong>techniczne:</strong> korygowanie drzew kolidujących z budynkami, liniami energetycznymi.</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-12">
                    <h3 class="text-xl font-medium mb-6">Usługi dodatkowe towarzyszące</h3>
                    <ul class="space-y-3 text-neutral-500 font-light list-disc pl-5">
                        <li>Wywóz oraz utylizacja drewna i gałęzi,</li>
                        <li>Zrębkowanie gałęzi,</li>
                        <li>Frezowanie pni.</li>
                    </ul>
                </div>
            </div>
        ` : ''}

        ${p.name === 'tuje.html' ? `
            <div class="max-w-3xl">
                <p class="text-lg text-neutral-500 font-light leading-relaxed mb-8">Tuje przycina się głównie w celu nadania im odpowiedniego kształtu i kontroli wielkości. Zwykle krzewy te tworzą żywopłoty, a cięcie ułatwia formowanie pożądanego kształtu. Zbyt duże krzewy są trudniejsze w pielęgnacji i mają zwiększone zapotrzebowanie na wodę oraz składniki odżywcze.</p>
                
                <h3 class="text-xl font-medium mb-6 mt-12">Ważne zasady</h3>
                <ul class="space-y-4 text-neutral-500 font-light mb-8">
                    <li class="flex items-start"><span class="w-2 h-2 bg-black rounded-full mt-2 mr-4 shrink-0"></span> Obcinanie tui w niewłaściwym czasie może doprowadzić do przemarznięcia rośliny, brązowienia igieł, a nawet uschnięcia całego krzewu.</li>
                    <li class="flex items-start"><span class="w-2 h-2 bg-black rounded-full mt-2 mr-4 shrink-0"></span> Zbyt głębokie cięcie sprawia, że gałęzie przestają rosnąć.</li>
                    <li class="flex items-start"><span class="w-2 h-2 bg-black rounded-full mt-2 mr-4 shrink-0"></span> Zalecamy czyszczenie tui od środka i usuwanie suchych gałązek. Utrzymuje to roślinę w zdrowiu, zapewniając dostęp światła i powietrza do pnia.</li>
                </ul>
                
                <p class="text-lg font-medium">Chętnie pomożemy Ci profesjonalnie zadbać o Twoje tuje.</p>
            </div>
        ` : ''}

        ${!['index.html', 'o-nas.html', 'kontakt.html', 'pielegnacja-zieleni.html', 'wycinka-drzew.html', 'tuje.html'].includes(p.name) ? `
            <p class="text-neutral-500 font-light">Treść w przygotowaniu na podstawie kolejnych linków...</p>
        ` : ''}

    </main>

    <footer class="w-full px-8 py-10 max-w-5xl mx-auto border-t border-neutral-100 mt-auto text-center">
        <p class="text-xs text-neutral-400 font-light">&copy; 2026 Palmar - Wycinka drzew, pielęgnacja zieleni Marcin Czubak.</p>
    </footer>

</body>
</html>`;

pages.forEach(p => fs.writeFileSync(p.name, template(p)));
