// creation d'un enemy
class Enemy {
   x: number;
   y: number;
   width: number;
   height: number;
   velocityX: number;
   velocityY: number;
   speed: number;
   maxSpeed: number;
   image: HTMLImageElement;

   constructor(x: number, y:number,width: number, height: number,imagePath: string) {
      //l'objet est une image
      this.image = new Image();
      this.image.src = imagePath;
      //valeur que le constructor a besoin
      this.x =  x;
      this.y = y;
      this.width = width;
      this.height = height;
      //options
      this.velocityX = 0;
      this.velocityY = 0;
      this.speed = 50;
      this.maxSpeed = 100;
   }
   // creer draw 1/1/2025
}