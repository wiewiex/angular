export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor({
    name,
    desc,
    imagePath,
  }: {
    name: string;
    desc: string;
    imagePath: string;
  }) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
