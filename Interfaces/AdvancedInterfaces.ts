// what if we want interfaces that apply differently to several objects?

interface mamal {
  warmBloodTemperature: string;
  pregnancyLenght: number;

  lifeExpectancy(): string;
}

// we have several types of mamals

interface flying {
  maxAltitude: string;
}

interface ground {
  topRunSpeed: number;
}

// we can then use these to create complex interfaces to suit our needs
// bat will have both mamal and flying properties
interface bat extends mamal, flying {}
// dog will have both mamal and ground properties
interface dog extends mamal, ground {}

let MachiBat: bat = {
  // we get errors requesting the features in both interfaces being implememnted
};

class WoofyDog implements dog {
  // we get errors requesting the features in both interfaces being implememnted
}
