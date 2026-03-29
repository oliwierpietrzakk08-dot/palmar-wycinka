const fs = require('fs');

const pages = [
  { 
    name: 'index.html', 
    title: 'Wycinka Drzew i Pielęgnacja Zieleni Łowicz | Palmar Marcin Czubak', 
    heading: 'Profesjonalna wycinka i pielęgnacja drzew.',
    desc: 'Palmar - profesjonalna wycinka drzew (tradycyjna i alpinistyczna), pielęgnacja zieleni, cięcia techniczne i sanitarne na terenie Łowicza i okolic. Szybko i bezpiecznie.',
    url: 'https://palmar.lowicz.com.pl/'
  },
  { 
    name: 'o-nas.html', 
    title: 'O firmie Palmar - Wycinka Drzew i Prace Wysokościowe Łowicz', 
    heading: 'O firmie Palmar.',
    desc: 'Poznaj firmę Palmar z Łowicza. Od lat świadczymy usługi z zakresu wycinki drzew i utrzymania terenów zielonych. Gwarantujemy jakość, terminowość i konkurencyjne ceny.',
    url: 'https://palmar.lowicz.com.pl/o-nas.html'
  },
  { 
    name: 'kontakt.html', 
    title: 'Kontakt | Palmar Wycinka Drzew Łowicz', 
    heading: 'Skontaktuj się z nami.',
    desc: 'Skontaktuj się z firmą Palmar. Zadzwoń: 783 672 957 lub napisz: palmar.8776@gmail.com. Łaguszew 17, 99-414 Kocierzew Południowy. Darmowa wycena wycinki drzew.',
    url: 'https://palmar.lowicz.com.pl/kontakt.html'
  },
  { 
    name: 'pielegnacja-zieleni.html', 
    title: 'Pielęgnacja Zieleni i Trawników Łowicz | Palmar', 
    heading: 'Pielęgnacja zieleni.',
    desc: 'Kompleksowe utrzymanie terenów zielonych: koszenie, aeracja, nawożenie trawników, przycinanie krzewów i żywopłotów. Usługi dla firm i osób prywatnych w Łowiczu.',
    url: 'https://palmar.lowicz.com.pl/pielegnacja-zieleni.html'
  },
  { 
    name: 'wycinka-drzew.html', 
    title: 'Wycinka Drzew Alpinistyczna i Tradycyjna Łowicz | Palmar', 
    heading: 'Wycinka drzew.',
    desc: 'Bezpieczna wycinka drzew trudnych, sekcyjna, alpinistyczna oraz z podnośnika. Wywóz drewna, zrębkowanie gałęzi i frezowanie pni. Sprawdź naszą ofertę!',
    url: 'https://palmar.lowicz.com.pl/wycinka-drzew.html'
  },
  { 
    name: 'tuje.html', 
    title: 'Przycinanie i Pielęgnacja Tui Łowicz | Palmar', 
    heading: 'Pielęgnacja tui.',
    desc: 'Profesjonalne cięcie, formowanie i pielęgnacja tui. Zapobiegamy brązowieniu igieł i odpowiednio czyścimy krzewy. Zadbaj o swój żywopłot z firmą Palmar.',
    url: 'https://palmar.lowicz.com.pl/tuje.html'
  },
  { 
    name: 'cennik.html', 
    title: 'Cennik Wycinki Drzew i Usług Ogrodniczych | Palmar Łowicz', 
    heading: 'Indywidualna wycena.',
    desc: 'Sprawdź, co wpływa na koszt wycinki drzew i pielęgnacji zieleni. Wyceniamy indywidualnie na podstawie wielkości drzewa, stanu zdrowia i otoczenia. Zapraszamy do kontaktu.',
    url: 'https://palmar.lowicz.com.pl/cennik.html'
  },
  { 
    name: 'realizacje.html', 
    title: 'Realizacje Wycinki i Pielęgnacji | Galeria Palmar', 
    heading: 'Nasze realizacje.',
    desc: 'Zobacz zdjęcia z naszych prac w terenie: wycinka drzew metodą alpinistyczną, pielęgnacja zieleni, przycinanie żywopłotów i formowanie koron. Palmar Łowicz.',
    url: 'https://palmar.lowicz.com.pl/realizacje.html'
  }
];

const template = (p) => `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title}</title>
    <meta name="description" content="${p.desc}">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="${p.title}">
    <meta property="og:description" content="${p.desc}">
    <meta property="og:url" content="${p.url}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pl_PL">
    <meta property="og:site_name" content="Palmar - Wycinka Drzew">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #fcfcfc; color: #111; }
        .group:hover .group-hover\\:block { display: block; }
    </style>
    ${p.name === 'index.html' ? `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Palmar Marcin Czubak - Wycinka Drzew",
      "image": "https://palmar.lowicz.com.pl/wp-content/uploads/2022/11/cropped-Palmar_logo-1.jpg",
      "@id": "https://palmar.lowicz.com.pl/",
      "url": "https://palmar.lowicz.com.pl/",
      "telephone": "+48783672957",
      "email": "palmar.8776@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Łaguszew 17",
        "addressLocality": "Kocierzew Południowy",
        "postalCode": "99-414",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.1700,
        "longitude": 19.9730
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    }
    </script>
    ` : ''}
</head>
<body class="antialiased min-h-screen flex flex-col relative">

    <header class="w-full px-6 py-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto border-b border-neutral-100 gap-4">
        <a href="index.html" class="flex items-center text-xl font-medium tracking-tight">
            <img src="img/logo.jpg" alt="Logo firmy Palmar - Wycinka drzew" class="h-10 w-10 mr-3 rounded-full object-cover"> Palmar<span class="text-neutral-500 font-light ml-2 hidden sm:inline">Wycinka Drzew</span>
        </a>
        <nav class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-light text-neutral-600">
            <a href="index.html" class="hover:text-black transition">Główna</a>
            <a href="o-nas.html" class="hover:text-black transition">O nas</a>
            
            <div class="relative group py-2">
                <button class="hover:text-black transition flex items-center focus:outline-none" aria-haspopup="true">
                    Usługi 
                    <svg class="w-3 h-3 ml-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 hidden group-hover:block text-black pt-2 z-50">
                    <div class="bg-white border border-neutral-100 shadow-xl rounded-xl py-2 w-48 flex flex-col text-center md:text-left">
                        <a href="wycinka-drzew.html" class="px-4 py-2 hover:bg-neutral-50 transition">Wycinka drzew</a>
                        <a href="pielegnacja-zieleni.html" class="px-4 py-2 hover:bg-neutral-50 transition">Pielęgnacja zieleni</a>
                        <a href="tuje.html" class="px-4 py-2 hover:bg-neutral-50 transition">Tuje</a>
                        <div class="border-t border-neutral-100 my-1"></div>
                        <a href="cennik.html" class="px-4 py-2 hover:bg-neutral-50 transition">Cennik</a>
                    </div>
                </div>
            </div>

            <a href="realizacje.html" class="hover:text-black transition">Realizacje</a>
            <a href="kontakt.html" class="hover:text-black transition">Kontakt</a>
        </nav>
    </header>

    <main class="flex-grow max-w-5xl mx-auto w-full px-6 py-12 sm:py-20">
        <h1 class="text-4xl md:text-5xl font-light mb-12 sm:mb-16 tracking-tight max-w-2xl text-center sm:text-left">${p.heading}</h1>
        
        ${p.name === 'index.html' ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <p class="text-lg text-neutral-500 font-light mb-10 max-w-xl leading-relaxed">Specjalizujemy się w bezpiecznej wycince drzew, pielęgnacji zieleni i pracach wysokościowych. Działamy szybko, precyzyjnie i bezpiecznie.</p>
                    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="kontakt.html" class="inline-block text-center bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition shadow-lg">Sprawdź ofertę</a>
                        <a href="tel:783672957" class="inline-block text-center bg-white text-black border border-neutral-200 px-8 py-3.5 rounded-full text-sm font-medium hover:border-black transition shadow-sm">Zadzwoń: 783 672 957</a>
                    </div>
                </div>
                <div>
                    <img src="img/main.jpg" alt="Bezpieczna wycinka drzew z podnośnika - Palmar" class="w-full h-80 object-cover rounded-2xl shadow-sm cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                </div>
            </div>
        ` : ''}

        ${p.name === 'o-nas.html' ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="max-w-3xl">
                    <p class="text-lg text-neutral-500 font-light mb-8 leading-relaxed">Firma PALMAR powstała w 2021 roku, ale doświadczenie naszej załogi jest wieloletnie. Działamy głównie na terenie powiatu łowickiego, podejmując się również zleceń z innych obszarów. Pomagamy w zaprojektowaniu i utrzymaniu ogrodów oraz terenów zielonych.</p>
                    <h3 class="text-xl font-medium mb-6 mt-12">Co nas wyróżnia?</h3>
                    <ul class="space-y-4 text-neutral-500 font-light">
                        <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4 shrink-0"></span> Jakość – budujemy na zaufaniu.</li>
                        <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4 shrink-0"></span> Terminowość – szanujemy Twój czas.</li>
                        <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4 shrink-0"></span> Konkurencyjne ceny.</li>
                        <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4 shrink-0"></span> Indywidualne podejście.</li>
                        <li class="flex items-center"><span class="w-2 h-2 bg-black rounded-full mr-4 shrink-0"></span> Najnowszy park maszynowy i własny transport.</li>
                    </ul>
                </div>
                <div class="flex flex-col items-center">
                    <img src="img/logo.jpg" alt="Logo Palmar - doświadczona ekipa z Łowicza" class="w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-lg border border-gray-100 object-cover cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
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
                    <p class="mb-2"><strong class="font-medium text-black">Email:</strong> <a href="mailto:palmar.8776@gmail.com" class="hover:text-black transition break-all">palmar.8776@gmail.com</a></p>
                    <p class="mb-2"><strong class="font-medium text-black">Telefon:</strong> <a href="tel:783672957" class="hover:text-black transition text-lg">783 672 957</a></p>
                </div>
                <div>
                    <h3 class="text-black font-medium text-lg mb-6">Godziny otwarcia</h3>
                    <p class="mb-2">Poniedziałek — Piątek</p>
                    <p class="text-black font-medium">08:00 - 18:00</p>
                </div>
            </div>
            <div class="mt-12">
                <img src="img/img1.jpg" alt="Pielęgnacja i wycinka drzew kontakt" class="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-sm object-top cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
            </div>
        ` : ''}

        ${p.name === 'pielegnacja-zieleni.html' ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="max-w-3xl">
                    <p class="text-lg text-neutral-500 font-light leading-relaxed mb-8">Oferujmy usługi: pielęgnacja i utrzymanie terenów zielonych na działkach prywatnych oraz terenach przemysłowych, sportowych oraz w miejscach publicznych. Świadczymy usługi w zakresie pielęgnacji i utrzymania terenów zieleni w cyklach wieloletnich oraz interwencyjnie.</p>
                    <h3 class="text-xl font-medium mb-6 mt-12">Oferujemy takie usługi jak:</h3>
                    <ul class="space-y-4 text-neutral-500 font-light">
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>koszenie trawy, przycinanie krzewów, żywopłotów,</li>
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>karczowanie zarośli, wykaszanie przerośniętych traw,</li>
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>cięcia formujące, odmładzające, korygujące roślin, odchwaszczanie,</li>
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>wycinka i pielęgnacja drzew, ścinka i formowanie drzew,</li>
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>sadzenie drzew i krzewów, nawożenie trawników,</li>
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>renowacja i aeracja trawników,</li>
                        <li class="flex items-start"><span class="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 shrink-0"></span>ochrona chemiczna roślin przed owadami i grzybami</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-6">
                    <img src="img/img5.jpg" alt="Pielęgnacja trawników i zieleni przez firmę Palmar" class="w-full h-64 object-cover rounded-2xl shadow-sm cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                </div>
            </div>
        ` : ''}

        ${p.name === 'wycinka-drzew.html' ? `
            <div class="max-w-4xl">
                <p class="text-lg text-neutral-500 font-light leading-relaxed mb-12">Nasza firma oferuje kompleksowe usługi w zakresie wycinki oraz pielęgnacji drzew.</p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
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

                <div class="mt-12 mb-12">
                    <h3 class="text-xl font-medium mb-6">Usługi dodatkowe towarzyszące</h3>
                    <ul class="space-y-3 text-neutral-500 font-light list-disc pl-5">
                        <li>Wywóz oraz utylizacja drewna i gałęzi,</li>
                        <li>Zrębkowanie gałęzi,</li>
                        <li>Frezowanie pni.</li>
                    </ul>
                </div>
                
                <img src="img/img4.jpg" alt="Bezpieczna wycinka drzew trudnych i sekcyjnych" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm mt-8 object-top cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
            </div>
        ` : ''}

        ${p.name === 'tuje.html' ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                <div>
                    <img src="img/img3.jpg" alt="Pielęgnacja i przycinanie tui w ogrodzie" class="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-sm object-bottom cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                </div>
            </div>
        ` : ''}

        ${p.name === 'cennik.html' ? `
            <div class="max-w-4xl text-neutral-500 font-light">
                <p class="text-lg leading-relaxed mb-12">Nie posiadamy ściśle ustalonego cennika. Każde zlecenie wyceniamy indywidualnie po dokładnych oględzinach miejsca planowanych prac. Cena zależy od samej rośliny oraz jej najbliższego otoczenia.</p>
                
                <h3 class="text-2xl text-black font-medium mb-8">Przy wycenie bierzemy pod uwagę:</h3>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                        <h4 class="text-lg text-black font-medium mb-3">Wielkość drzewa</h4>
                        <p class="leading-relaxed">Wysokość i średnica wpływają na czas pracy, zużycie sprzętu i ilość urobku do wywiezienia. Wspinaczka na wysokie drzewa wiąże się z większym ryzykiem.</p>
                    </div>
                    <div>
                        <h4 class="text-lg text-black font-medium mb-3">Stan zdrowia drzewa</h4>
                        <p class="leading-relaxed">Spróchniałe lub chore drzewa często wymagają użycia podnośnika koszowego, co generuje dodatkowe koszty. Praca musi być wykonana z dużą precyzją.</p>
                    </div>
                    <div>
                        <h4 class="text-lg text-black font-medium mb-3">Otoczenie drzewa</h4>
                        <p class="leading-relaxed">Ścinka z gruntu na otwartej przestrzeni jest tańsza. Praca w pobliżu budynków, ogrodzeń czy linii energetycznych wymaga technik alpinistycznych i ostrożnego opuszczania gałęzi na linach.</p>
                    </div>
                    <div>
                        <h4 class="text-lg text-black font-medium mb-3">Zakres usług i dojazd</h4>
                        <p class="leading-relaxed">Oferujemy pakiety od samej wycinki po kompleksowe zrębkowanie, wywóz urobku, frezowanie pni. Brak bezpośredniego dojazdu ciężkiego sprzętu również wpływa na wycenę.</p>
                    </div>
                </div>
                <img src="img/img6.jpg" alt="Frezowanie pni i prace glebowe - sprzęt Palmar" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm mt-12 object-bottom cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
            </div>
        ` : ''}

        ${p.name === 'realizacje.html' ? `
            <div class="max-w-5xl w-full">
                <p class="text-lg text-neutral-500 font-light leading-relaxed mb-12">Oto kilka zdjęć z naszych ostatnich realizacji w terenie. Kliknij zdjęcie, aby je powiększyć.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src="img/img4.jpg" alt="Wycinka alpinistyczna drzewa realizacja" class="w-full h-64 object-cover rounded-xl shadow-sm object-top cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                    <img src="img/img2.jpg" alt="Pielęgnacja terenów zielonych realizacja" class="w-full h-64 object-cover rounded-xl shadow-sm cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                    <img src="img/img3.jpg" alt="Cięcie żywopłotu z tui realizacja" class="w-full h-64 object-cover rounded-xl shadow-sm object-bottom cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                    <img src="img/img1.jpg" alt="Praca pilarza przy wycince drzewa realizacja" class="w-full h-64 object-cover rounded-xl shadow-sm object-top cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                    <img src="img/img5.jpg" alt="Utrzymanie zieleni miejskiej realizacja" class="w-full h-64 object-cover rounded-xl shadow-sm cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                    <img src="img/img6.jpg" alt="Prace zrębkowania gałęzi realizacja" class="w-full h-64 object-cover rounded-xl shadow-sm object-bottom cursor-pointer hover:opacity-90 transition" onclick="openLightbox(this.src)">
                </div>
            </div>
        ` : ''}

    </main>

    <footer class="w-full px-6 py-10 max-w-5xl mx-auto border-t border-neutral-100 mt-auto text-center">
        <p class="text-xs text-neutral-400 font-light">&copy; 2026 Palmar - Wycinka drzew, pielęgnacja zieleni Marcin Czubak.</p>
    </footer>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 bg-black/90 z-[100] hidden flex items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-sm cursor-zoom-out" onclick="closeLightbox()">
        <button class="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition focus:outline-none">&times;</button>
        <img id="lightbox-img" src="" class="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default" onclick="event.stopPropagation()">
    </div>

    <script>
        function openLightbox(src) {
            const lb = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');
            img.src = src;
            lb.classList.remove('hidden');
            // Allow display:block to apply before changing opacity
            requestAnimationFrame(() => {
                lb.classList.remove('opacity-0');
            });
        }
        function closeLightbox() {
            const lb = document.getElementById('lightbox');
            lb.classList.add('opacity-0');
            setTimeout(() => {
                lb.classList.add('hidden');
                document.getElementById('lightbox-img').src = '';
            }, 300);
        }
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeLightbox();
        });
    </script>

</body>
</html>`;

pages.forEach(p => fs.writeFileSync(p.name, template(p)));
