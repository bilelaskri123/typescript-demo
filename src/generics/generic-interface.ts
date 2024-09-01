interface IProduct<T> {
  item: T;
  price: number;
  description: string;
}

interface IMaterial<T> {
  createMaterial(material: T): T;
  saveMaterialToDB(material: T): void;
}

type TBook = {
  title: string;
  author: string;
  numberOfPages: number;
};

type TLaptop = {
  brand: string;
  color: string;
  ramMemory: string;
  operatingSystem: string;
  screenSize: string;
};

const book1: IProduct<TBook> = {
  item: {
    title: "Sking in the game",
    author: "Nasim Taleb",
    numberOfPages: 310,
  },
  price: 10,
  description: "about this book",
};

const laptop: IProduct<TLaptop> = {
  item: {
    brand: "HP",
    color: "silver",
    ramMemory: "32 GB",
    operatingSystem: "window 11",
    screenSize: "15.6 Inches",
  },

  price: 500,
  description: "about this laptop",
};

console.log(book1);
console.log(laptop);

// example 1
class Material implements IMaterial<TBook> {
  createMaterial(material: TBook): TBook {
    material = {
      title: "book 1",
      author: "author 1",
      numberOfPages: 110,
    };
    return material;
  }
  saveMaterialToDB(material: TBook): void {
    console.log(material);
  }
}

// example 2
class Material2<K> implements IMaterial<K> {
  createMaterial(material: K): K {
    return material;
  }
  saveMaterialToDB(material: K): void {
    console.log(material);
  }
}

const material2 = new Material2<TBook>();
material2.createMaterial({
  title: "bilel",
  author: "bilel",
  numberOfPages: 112,
});
