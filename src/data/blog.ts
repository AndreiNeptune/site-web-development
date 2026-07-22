export interface BlogArticle {
  slug: string;
  title: string;
  desc: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: {
    type: "paragraph" | "heading" | "quote" | "list";
    text?: string;
    items?: string[];
  }[];
  gradient: string;
}

export const articles: BlogArticle[] = [
  {
    slug: "de-ce-un-site-rapid-iti-aduce-mai-multi-clienti-in-2026",
    title: "De ce un site rapid îți aduce mai mulți clienți în 2026?",
    desc: "Descoperă impactul vitezei de încărcare asupra ratei de conversie. Un site web optimizat nu doar că arată bine, dar îți transformă vizitatorii în clienți fideli.",
    date: "12 Iulie 2026",
    author: "Echipa Omnivo",
    readTime: "4 min citire",
    category: "Web Design",
    gradient: "from-blue-600/20 to-indigo-600/20 dark:from-blue-500/10 dark:to-indigo-500/10",
    content: [
      {
        type: "paragraph",
        text: "În 2026, răbdarea utilizatorilor de internet a ajuns la un nivel minim istoric. Cu un flux constant de informații și conținut rapid la dispoziție, nimeni nu mai este dispus să aștepte după un site care se încarcă greu. Conform studiilor recente realizate de Google, o întârziere de doar o secundă în încărcarea unei pagini pe mobil poate reduce ratele de conversie cu până la 20%. Viteza nu mai este așadar doar un detaliu tehnic sau un moft de programator, ci elementul central care poate defini succesul sau eșecul unei afaceri online."
      },
      {
        type: "heading",
        text: "Algoritmul Google și Indicatorii Core Web Vitals"
      },
      {
        type: "paragraph",
        text: "Google penalizează activ site-urile lente în rezultatele căutărilor organice (SEO). Indicatori tehnici precum LCP (Largest Contentful Paint - timpul în care se încarcă cel mai mare element vizual) sau noul standard INP (Interaction to Next Paint - latența de răspuns la acțiunile utilizatorului) sunt analizați riguros. Dacă site-ul afacerii tale are nevoie de mai mult de 2.5 secunde pentru a deveni complet utilizabil, algoritmii de indexare te vor trimite în josul clasamentului, oferind un avantaj direct competitorilor tăi mai rapizi."
      },
      {
        type: "quote",
        text: "Un site rapid nu reprezintă o simplă cheltuială, ci este cea mai sigură investiție pe care o poți face în Optimizarea Ratei de Conversie (CRO). Fiecare milisecundă salvată aduce bani în plus afacerii tale."
      },
      {
        type: "heading",
        text: "De ce sunt site-urile create de Omnivo atât de rapide?"
      },
      {
        type: "paragraph",
        text: "Spre deosebire de alte agenții care folosesc teme prefabricate greoaie în WordPress sau constructori vizuali ca Elementor care încarcă paginile cu mii de linii de cod inutil, noi mergem pe o abordare modernă și curată:"
      },
      {
        type: "list",
        items: [
          "Dezvoltăm folosind Next.js și React – tehnologii folosite de marile companii tech, ce generează pagini optimizate static din start.",
          "Optimizăm imaginile automat direct pe server – vizitatorii primesc formate moderne (WebP/AVIF) la dimensiunea potrivită ecranului lor.",
          "Curățăm codul de scripturi blocate – rulăm doar funcționalitățile esențiale afișării rapide.",
          "Utilizăm CDN-uri globale – fișierele site-ului tău sunt livrate de pe cel mai apropiat server față de locația vizitatorului."
        ]
      },
      {
        type: "paragraph",
        text: "În concluzie, un site web care se încarcă instant oferă vizitatorilor o experiență extrem de fluidă și profesionistă, menținându-i pe pagină și conducându-i natural către trimiterea unui formular sau achiziționarea unui serviciu. Nu lăsa un site lent să îți alunge clienții!"
      }
    ]
  },
  {
    slug: "cat-de-importanta-este-o-instalare-windows-pe-curat",
    title: "Cât de importantă este o instalare Windows pe curat?",
    desc: "Multe erori și încetiniri ale PC-ului tău pot fi rezolvate definitiv printr-o instalare profesională a sistemului de operare, completată de setările și driverele corecte.",
    date: "28 Iunie 2026",
    author: "Echipa Tech",
    readTime: "3 min citire",
    category: "Sisteme de Operare",
    gradient: "from-indigo-600/20 to-purple-600/20 dark:from-indigo-500/10 dark:to-purple-500/10",
    content: [
      {
        type: "paragraph",
        text: "Mulți utilizatori cred că atunci când cumpără un laptop nou sau folosesc un calculator de câțiva ani, sistemul funcționează automat la capacitate maximă. În realitate, majoritatea sistemelor de operare sunt îngreunate de procese inutile în fundal, fișiere reziduale adunate în timp și erori de registru. Soluția cea mai eficientă și sigură pentru a readuce la viață orice sistem este o instalare de Windows „pe curat” (Clean Install)."
      },
      {
        type: "heading",
        text: "Marea problemă cu Windows-ul pre-instalat"
      },
      {
        type: "paragraph",
        text: "Laptopurile proaspăt cumpărate din magazine vin aproape întotdeauna cu versiuni de Windows pre-instalate de producători, care sunt pline de bloatware. Acestea includ programe antivirus trial foarte agresive, jocuri pre-instalate, utilitare redundante pentru baterie sau update-uri și diverse alte aplicații de monitorizare. Toate rulează în fundal, consumă din memoria RAM și încetinesc procesorul încă din prima secundă în care pornești dispozitivul."
      },
      {
        type: "quote",
        text: "O instalare curată de Windows elimină complet orice software nedorit, lăsând sistemul să respire și oferind calculatorului tău performanța hardware reală pentru care ai plătit."
      },
      {
        type: "heading",
        text: "Optimizarea dedicată pentru Performanță și Gaming"
      },
      {
        type: "paragraph",
        text: "În cadrul serviciului nostru de instalare și optimizare (cum este Pachetul Optimizat Gaming la 350 RON), nu ne limităm doar la formatarea stick-ului și rularea asistentului de instalare standard. Noi mergem mult mai departe:"
      },
      {
        type: "list",
        items: [
          "Dezactivăm telemetria și procesele de monitorizare inutile ale Microsoft, eliberând resurse importante.",
          "Instalăm manual driverele oficiale direct de la producătorii componentelor (NVIDIA, AMD, Intel), evitând driverele generice Windows Update.",
          "Configurăm planul de energie pe modul Ultra Performance și optimizăm timpii de latență în sistem.",
          "Instalăm software-urile esențiale de gaming (Steam, Discord, Epic Games) și optimizăm setările plăcii video pentru un număr maxim de FPS-uri și stabilitate."
        ]
      },
      {
        type: "paragraph",
        text: "Fie că folosești PC-ul pentru office, editare video sau gaming intens, o instalare curată realizată profesionist este cel mai simplu mod de a te asigura că profiți la maximum de calculatorul tău, fără erori albastre (BSOD) și fără blocaje neplăcute."
      }
    ]
  },
  {
    slug: "cum-te-ajuta-un-design-modern-sa-castigi-increderea-clientilor",
    title: "Cum te ajută un design modern să câștigi încrederea clienților?",
    desc: "În mediul online, prima impresie contează enorm. Află cum un design responsive, sigur și cu o interfață intuitivă reflectă profesionalismul afacerii tale.",
    date: "15 Iunie 2026",
    author: "Echipa Omnivo",
    readTime: "5 min citire",
    category: "Business Online",
    gradient: "from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10",
    content: [
      {
        type: "paragraph",
        text: "Vizitatorii unui site web au nevoie de mai puțin de 0.05 secunde pentru a-și forma o primă opinie despre afacerea ta. În mediul online extrem de competitiv din 2026, această primă fracțiune de secundă decide dacă un potențial client va rămâne să îți exploreze serviciile sau va apăsa pe butonul de „back” pentru a merge la un competitor. Designul site-ului tău reprezintă, practic, cartea ta de vizită digitală."
      },
      {
        type: "heading",
        text: "Credibilitatea vizuală – Oglinda afacerii tale"
      },
      {
        type: "paragraph",
        text: "Un design învechit, cu elemente nealiniate, culori obositoare sau texte greu de citit transmite involuntar un semnal de neglijență. Utilizatorii asociază calitatea site-ului cu calitatea serviciilor pe care le oferi. Un site web aerisit, modern, cu o tipografie clară și micro-animații premium transmite atenție la detalii, siguranță și profesionalism."
      },
      {
        type: "quote",
        text: "„Designul nu este doar cum arată sau cum se simte un lucru. Designul este modul în care funcționează.” – Steve Jobs. Aspectul vizual trebuie completat perfect de o structură logică a informației."
      },
      {
        type: "heading",
        text: "Pilonii unui site web de încredere"
      },
      {
        type: "paragraph",
        text: "Pentru a asigura o rată de conversie maximă și a câștiga încrederea vizitatorilor tăi, site-ul tău trebuie să respecte câteva standarde esențiale:"
      },
      {
        type: "list",
        items: [
          "Securitate deplină (Certificat SSL) – Simbolul lacătului din bara de adrese arată utilizatorilor că datele lor sunt transmise în siguranță.",
          "Design 100% Responsive – Interfața trebuie să fie la fel de frumoasă și ușor de folosit pe orice telefon, tabletă sau laptop.",
          "Structură intuitivă (UX/UI) – Meniurile clare și butoanele de acțiune vizibile ghidează utilizatorul fără efort către trimiterea unui mesaj.",
          "Viteză și stabilitate – Un site de încredere nu dă erori și se încarcă rapid pe orice rețea mobilă."
        ]
      },
      {
        type: "paragraph",
        text: "Investiția într-un design modern nu este doar o chestiune de estetică, ci o strategie esențială de marketing. Un site bine realizat lucrează pentru tine 24/7, transformând simpli vizitatori în clienți fideli și oferind afacerii tale prestigiul pe care îl merită în spațiul digital."
      }
    ]
  }
];
