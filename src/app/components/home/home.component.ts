import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [ // Imágenes para carrusel de arriba
    {
      imageSrc: 'assets/img/carrusel/res3.png',
      imageAlt: 'design1',
      imageTitle: 'Titulo1',
      imageInfo: 'parrafo1'
    },
    {
      imageSrc: 'assets/img/carrusel/res2.png',
      imageAlt: 'design2',
      imageTitle: 'Titulo2',
      imageInfo: 'parrafo2'
    },
    {
      imageSrc: "assets/img/carrusel/res1.png",
      imageAlt: 'design3',
      imageTitle: 'Titulo3',
      imageInfo: 'parrafo3'
    }
  ];
  imagesCarrousel2 = [ // Imágenes para carrusel de abajo
    {
      imageSrc: 'assets/img/carrusel/ingredientes1.png',
      imageAlt: 'service',
      imageTitle: 'Ingredientes de calidad',
      imageInfo: 'Los ingredientes que usamos en nuestra comida son de orígen natural, siempre de la más alta calidad garantizando los mejores sabores en nuestros platillos. Nuestros provedores cuidan de la producción agrícola de la forma más amigable para el ambiente como sea posible, reduciendo el uso de fertilizantes e insecticidas y empleando el uso de abono natural'
    },
    {
      imageSrc: 'assets/img/carrusel/higiene1.png',
      imageAlt: 'service',
      imageTitle: 'Máximo cuidado de higiene',
      imageInfo: 'Los ingredientes pasan por un proceso riguroso de limpieza y desinfección tanto en el momento de su extracción como en la elaboración de platillos además del uso de cubrebocas por parte de los chefs. Cada platillo, antes de ser entregado a la mesa donde se encuentra el cliente, pasa por una revisión de los encargados del control de calidad. '
    },
    {
      imageSrc: "assets/img/carrusel/mesero1.png",
      imageAlt: 'service',
      imageTitle: 'El mejor servicio',
      imageInfo: 'Nuestro personal siempre estará a disposición del cliente de forma atenta, amigable y educada. La recepción y la cocina también quedan atentos a cualquier sugerencia o petición de los clientes simepre y cuando sea de forma respetuosa. Los meseros se encontrarán dispuestos a traer a los clientes lo que pidan.'
    }
  ];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 2500;


  selectedIndex = 0;
  selectedIndex2 = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
      this.autoSlideImages2();
    };
  }

  // Cambia slide en cada 3 segundos
  autoSlideImages(){
    setInterval(()=> {
        this.onNextClick();
    }, this.slideInterval);
  }
  autoSlideImages2(){
    setInterval(()=> {
        this.onNextClick2();
    }, this.slideInterval);
  }

  selectImage(index:any) {
    this.selectedIndex = index;
  };
  onPrevClick(){
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    }
    else {
      this.selectedIndex--;
    }
  };
  onNextClick(){
    if (this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    }else {
      this.selectedIndex++;
    }
  }

  // Carrusel2
  selectImage2(index:any){
    this.selectedIndex2 = index;
  };
  onPrevClick2(){
    if(this.selectedIndex2 === 0) {
      this.selectedIndex2 = this.imagesCarrousel2.length -1;
  }
  else{
    this.selectedIndex2--;
  }
};
  onNextClick2(){
    if (this.selectedIndex2 === this.imagesCarrousel2.length -1) {
      this.selectedIndex2 = 0;
    }else {
      this.selectedIndex2++;
    }
  }

};
