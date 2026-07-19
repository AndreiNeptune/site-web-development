export interface ServiceItem {
  name: string;
  category: "laptop" | "calculator" | "servicii-it";
  description?: string;
}

export const servicesData: ServiceItem[] = [
  // Servicii IT & Soluționare Probleme
  { name: "Instalare Windows", category: "servicii-it", description: "Instalare profesională Windows 10 sau 11 cu licența clientului, configurare completă." },
  { name: "Instalare Mac OS X", category: "servicii-it", description: "Instalare/Reinstalare sistem de operare pe iMac, MacBook Pro, MacBook Air (Big Sur, Monterey, Ventura, Sonoma)." },
  { name: "Reparare Windows / Mac OS X", category: "servicii-it", description: "Rezolvare erori sistem, ecrane albastre/gri, probleme la pornire (bootloop) fără pierderea datelor." },
  { name: "Curățare De Praf", category: "servicii-it", description: "Mentenanță preventivă completă PC/Laptop (curățare fizică, înlocuire consumabile termice)." },
  { name: "Schimbare Pastă Termică", category: "servicii-it", description: "Îndepărtarea pastei uscate și aplicarea pastei noi pe procesor și placa video." },
  { name: "Devirusare", category: "servicii-it", description: "Identificare și eliminare virusi, spyware, adware, troieni, reinstalare protecție antivirus activă." },
  { name: "Optimizare Calculator / Laptop", category: "servicii-it", description: "Dezactivare programe inutile la startup, curățare regiștri și fișiere temporare pentru pornire rapidă." },
  { name: "Update Drivere", category: "servicii-it", description: "Instalarea ultimelor drivere oficiale stabile pentru componentele hardware (placă video, chipset, Wi-Fi)." },
  { name: "Recuperare date șterse", category: "servicii-it", description: "Recuperare poze, documente importante de pe stick-uri USB, carduri de memorie sau hard disk-uri defecte logic." },
  { name: "Configurare BIOS", category: "servicii-it", description: "Setare parametri optimi, controlul turației ventilatoarelor pentru silențiozitate." },
  { name: "Update BIOS", category: "servicii-it", description: "Instalarea celei mai recente versiuni oficiale de BIOS/UEFI." },
  { name: "Diagnoză Calculator / Laptop", category: "servicii-it", description: "Testare amănunțită cu echipamente hardware pentru identificarea exactă a piesei defecte." },
  { name: "Testare Componente", category: "servicii-it", description: "Stress-test sub sarcină maximă pentru a depista instabilități la temperaturi ridicate." },
  { name: "Asamblare Calculator", category: "servicii-it", description: "Asamblare profesională a calculatorului din piese alese de tine, wire-management impecabil." },
  { name: "Configurare Calculator", category: "servicii-it", description: "Instalare Windows, drivere, programe de bază, gata de utilizare." },
  { name: "Consultanță Achiziție Calculator", category: "servicii-it", description: "Ajutor în alegerea componentelor ideale raport calitate-preț în funcție de buget și destinație (gaming/office/editare)." },
  { name: "Consultanță Achiziție Laptop", category: "servicii-it", description: "Recomandări personalizate pentru cumpărarea unui laptop fiabil și potrivit cerințelor tale." }
];

export const badgeGuides = [
  { text: "Merge Greu – Rezolvăm", type: "slow" },
  { text: "Dă Erori – Rezolvăm", type: "errors" },
  { text: "Se Blochează – Rezolvăm", type: "freeze" },
  { text: "Nu Merg Jocurile – Rezolvăm", type: "gaming" },
  { text: "Ecrane Albastre – Rezolvăm", type: "bsod" },
  { text: "Să fie mai rapid – Rezolvăm", type: "speedup" }
];
