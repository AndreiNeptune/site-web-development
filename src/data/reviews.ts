export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  device?: string;
  date?: string;
}

export const reviewsData: ReviewItem[] = [
  {
    author: "Urecheatu Constantin",
    rating: 5,
    text: "Mi-ați făcut mentenanța la laptop și temperatura acum este foarte OK. Un laptop Asus. Foarte buni și ieftini, multumesc Omnivo!",
    device: "Laptop Asus",
    date: "Acum o săptămână"
  },
  {
    author: "Bărbieru Alex",
    rating: 5,
    text: "Super servicii !!! Prima data când merg intr-un service cu laptopul și sunt in totalitate mulțumit și plec si cu un zâmbet in coltul gurii. Profesionalism, rapiditate si personal de nota 11. Recomand din toata inima !!!",
    device: "Reparație Laptop",
    date: "Acum 2 săptămâni"
  },
  {
    author: "Mika IsituorMatindoMaria",
    rating: 5,
    text: "Reparație rapidă, am primit laptopul in 40 min pentru inlocuirea display comandat! Lucrarea are garantie si e impecabila avand in vedere cum arata laptopul trantit pe jos de mine.",
    device: "Înlocuire Display",
    date: "Acum o lună"
  },
  {
    author: "Jean Pop",
    rating: 5,
    text: "Serviciu foarte bun si rapid. Echipa a ridicat laptopul de la destiantie si au reusit sa rezolve problema intr-un timp scurt. De asemenea transmiterea informatiilor si a costurilor a fost facuta profesionist. II recomand cu caldura.",
    device: "Serviciu Pick-Up & Return",
    date: "Acum 3 luni"
  },
  {
    author: "Dan Panduru",
    rating: 5,
    text: "Buna seara! Am venit la dvs in magazin cu laptopul Asus care se restarta imediat ce ma conectam la zoom. Soluția dvs a fost salvatoare ptr copiii mei care stau pe lectii on line de 4 zile. Credeam ca va trebui sa cumparam alt laptop dar solutia oferita de dvs ne a scutit de multi bani. Multumesc!",
    device: "Reparație Placă de Bază",
    date: "Acum 4 luni"
  }
];
