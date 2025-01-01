export class Background {
   image: HTMLImageElement;
  x: number;

   speed: number;
 
   constructor(imagePath: string, speed: number) {
     this.image = new Image();
     this.image.src = imagePath;
     this.x = 0;
     this.speed = speed; // Vitesse de défilement
   }
 
   update(deltaTime: number, canvasWidth: number) {
     // Faire défiler le background
     this.x -= this.speed * deltaTime;
 
     // Réinitialiser la position si l'image sort de l'écran
     if (this.x <= -this.image.width) {
       this.x = 0;
     }
   }
 
   draw(ctx: CanvasRenderingContext2D, canvasHeight: number) {
     // Dessiner l'image principale
     ctx.drawImage(this.image, this.x, 0, this.image.width, canvasHeight);
 
     // Dessiner une deuxième image pour combler le vide
     ctx.drawImage(this.image, this.x + this.image.width, 0, this.image.width, canvasHeight);
   }
 }
 