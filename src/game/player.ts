import { GameCanvas } from "@game/gameCanvas";

export class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityX: number; // Vitesse actuelle horizontale
  velocityY: number; // Vitesse actuelle verticale
  acceleration: number; // Accélération constante
  maxSpeed: number; // Vitesse maximale
  image: HTMLImageElement;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    imagePath: string

  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityX = 0;
    this.velocityY = 0;
    this.acceleration = 100; // 0.5 = origine Contrôle l'accélération
    this.maxSpeed = 100; // 5 = origineLimite la vitesse maximale

    this.image = new Image();   // Charger une l'image
    this.image.src = imagePath; //chemein de l'image
  }
  console.log('hello');
  

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    if (this.image.complete) {
    // Déplacer le point d'origine au centre du vaisseau
      ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
       // Faire pivoter de 90 degrés (π/2 radians) pour orienter vers la droite
      ctx.rotate(Math.PI / 2);
          // Dessiner l'image en la recentrant
      ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
      ctx.restore(); // Restaurer le contexte
    } else {
       // Dessiner un rectangle temporaire si l'image n'est pas encore chargée
       ctx.fillStyle = "red";
       ctx.fillRect(this.x, this.y, this.width, this.height);
   }
  }

  // Mettre à jour la position et gérer la friction
  update(deltaTime: number, gameCanvas: GameCanvas) {
    // Appliquer les vitesses pour mettre à jour les positions
    this.x += this.velocityX * deltaTime;
    this.y += this.velocityY * deltaTime;

    // Appliquer une friction pour ralentir progressivement
    this.velocityX *= 2; // 0.95 = origine Réduction horizontale progressive
    this.velocityY *= 2; // 0.95 = origine Réduction verticale progressive
    // Laisser le canvas gérer les limites
    gameCanvas.constrainEntity(this);
    // Limiter la vitesse maximale
    this.limitSpeed();
  }

  // Appliquer une force pour augmenter progressivement la vitesse
  applyForce(dx: number, dy: number) {
    if (dx !== 0) {
      this.velocityX += dx * this.acceleration; // Ajout progressif
    }
    if (dy !== 0) {
      this.velocityY += dy * this.acceleration;
    }
  }

  // Limiter la vitesse maximale
  limitSpeed() {
    const speed = Math.sqrt(this.velocityX ** 2 + this.velocityY ** 2);
    if (speed > this.maxSpeed) {
      const scale = this.maxSpeed / speed;
      this.velocityX *= scale;
      this.velocityY *= scale;
    }
  }
}
