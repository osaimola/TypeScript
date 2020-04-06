interface House {
  type: string;
  buildingMaterial: string;
  isSafe: () => boolean; // function type with no input and returns boolean
}

// classes can inplrmrnt an interface but must implement all methods
class Residential implements House {
  type: string;
  buildingMaterial: string;

  constructor(type: string, buildingMaterial: string) {
    this.type = type;
    this.buildingMaterial = buildingMaterial;
  }
  isSafe() {
    return true;
  }
}
