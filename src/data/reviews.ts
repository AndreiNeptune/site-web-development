export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  device?: string;
  date?: string;
}

export const reviewsData: ReviewItem[] = [
  {
    author: "Marius Dumitru",
    rating: 5,
    text: "Am colaborat pentru un magazin online și rezultatul a fost peste așteptări. Design modern, super rapid și foarte ușor de folosit pentru clienți. Vânzările au crescut vizibil încă din prima lună! Multumesc Omnivo!",
    device: "Magazin Online PRO",
    date: "Acum o săptămână"
  },
  {
    author: "Bărbieru Alex",
    rating: 5,
    text: "Băieții mi-au reinstalat Windows-ul după ce mă chinuiam de luni de zile cu erori și reclame enervante. Acum PC-ul merge impecabil, ca în prima zi. Profesionalism, rapiditate și comunicare de nota 10.",
    device: "Instalare Windows",
    date: "Acum 2 săptămâni"
  },
  {
    author: "Elena Vasilescu",
    rating: 5,
    text: "Super servicii! Aveam nevoie rapidă de un site de prezentare pentru noul meu cabinet. Au înțeles exact ce îmi doresc și mi-au livrat un site superb, responsive și optimizat pe Google.",
    device: "Pachet Prezentare Basic",
    date: "Acum o lună"
  },
  {
    author: "Jean Pop",
    rating: 5,
    text: "O echipă foarte serioasă. Au preluat laptopul meu de gaming, au făcut mentenanța necesară și mi-au instalat un Windows perfect optimizat pentru jocuri. FPS-urile au crescut vizibil! Îi recomand cu căldură.",
    device: "Windows Optimizat Gaming",
    date: "Acum 3 luni"
  },
  {
    author: "Dan Panduru",
    rating: 5,
    text: "Profesioniști desăvârșiți. Platforma web dezvoltată de ei ne-a automatizat o bună parte din procesele cu clienții. Recomand din toată inima Omnivo oricărei afaceri care vrea să treacă la nivelul următor.",
    device: "Dezvoltare Web Custom",
    date: "Acum 4 luni"
  }
];
