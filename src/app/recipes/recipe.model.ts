export class Recipe {
    public name: String;
    public imagePath: String;
    public description: String;

    constructor(name: String, imagePath: String, description: String) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
    }
}