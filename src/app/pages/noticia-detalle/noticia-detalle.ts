import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Noticia {
  id: string;
  emoji: string;
  tag: string;
  fecha: string;
  lectura: string;
  titulo: string;
  subtitulo: string;
  cuerpo: string[];
}

@Component({
  selector: 'app-noticia-detalle',
  imports: [],
  templateUrl: './noticia-detalle.html',
  styleUrl: './noticia-detalle.css',
})
export class NoticiaDetalle implements OnInit {
  noticia: Noticia | null = null;

  noticias: Noticia[] = [
    {
      id: 'mexico-residuos-2030',
      emoji: '🌎',
      tag: 'Medio ambiente',
      fecha: '3 jun 2026',
      lectura: '4 min lectura',
      titulo: 'México avanza en metas de reducción de residuos para 2030',
      subtitulo: 'El gobierno federal presentó el nuevo Plan Nacional de Gestión de Residuos Sólidos alineado con la Agenda 2030 de la ONU.',
      cuerpo: [
        'El gobierno de México presentó esta semana el Plan Nacional de Gestión de Residuos Sólidos 2026-2030, una hoja de ruta que busca reducir en un 30% la cantidad de basura que llega a los rellenos sanitarios del país. El plan es parte del compromiso de México con los Objetivos de Desarrollo Sostenible (ODS) de la ONU, específicamente el ODS 12 sobre producción y consumo responsables.',
        'De acuerdo con la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT), México genera aproximadamente 120,000 toneladas de residuos sólidos urbanos al día, de los cuales solo el 12% se recicla formalmente. El nuevo plan contempla una inversión de 8,000 millones de pesos en infraestructura de reciclaje y centros de acopio a lo largo de 32 estados.',
        'Entre las medidas más destacadas del plan se encuentran la implementación obligatoria de la separación de residuos en todos los municipios con más de 50,000 habitantes, la creación de 500 nuevos centros de acopio certificados, y la regulación de la economía informal del reciclaje para integrar a los pepenadores en cadenas formales de valor.',
        'El plan también contempla incentivos fiscales para empresas que adopten modelos de economía circular, reduciendo impuestos sobre la nómina en un 5% para aquellas que demuestren haber disminuido su generación de residuos en al menos un 20% respecto al año anterior.',
        'Organizaciones ambientalistas como Greenpeace México y el Consejo Civil Mexicano para la Silvicultura Sostenible han celebrado el anuncio, aunque advierten que el éxito dependerá de la asignación real del presupuesto y de mecanismos de seguimiento transparentes y accesibles para la ciudadanía.',
        'Se espera que los primeros resultados sean visibles a partir de 2027, cuando entren en vigor las nuevas regulaciones municipales y comiencen a operar los centros de acopio de la primera fase del programa.'
      ]
    },
    {
      id: 'guadalajara-acopio',
      emoji: '♻️',
      tag: 'Local',
      fecha: '1 jun 2026',
      lectura: '2 min lectura',
      titulo: 'Guadalajara suma 15 nuevos centros de acopio este mes',
      subtitulo: 'La capital jalisciense refuerza su red de puntos de reciclaje en respuesta a la demanda ciudadana.',
      cuerpo: [
        'El Ayuntamiento de Guadalajara anunció la apertura de 15 nuevos centros de acopio de materiales reciclables distribuidos en las colonias con mayor generación de residuos. La inversión total es de 12 millones de pesos, financiados por el programa estatal "Jalisco Verde" y fondos federales del nuevo Plan Nacional de Gestión de Residuos.',
        'Los nuevos centros están ubicados estratégicamente en mercados municipales, parques públicos y plazas comerciales. Cada centro cuenta con contenedores diferenciados para plástico, vidrio, papel, metal y residuos electrónicos, así como personal capacitado para orientar a los ciudadanos sobre la correcta separación.',
        'Según datos del Sistema Intermunicipal de los Servicios de Agua Potable y Alcantarillado (SIAPA), Guadalajara produce diariamente 3,200 toneladas de basura, de las cuales actualmente solo el 8% llega a los centros de reciclaje formales. Con los nuevos puntos de acopio, se espera elevar ese porcentaje al 18% para finales de 2026.',
        'Los ciudadanos pueden localizar el centro de acopio más cercano a través de la aplicación "GDL Limpia", disponible gratuitamente en las tiendas de aplicaciones para Android e iOS. La app también permite reportar incidencias como desbordamiento de contenedores o daños en la infraestructura.',
        'El presidente municipal destacó que esta iniciativa forma parte de una estrategia más amplia que incluye rutas de recolección especializadas para residuos voluminosos como muebles y electrodomésticos, que próximamente operarán los fines de semana en distintas colonias de la ciudad.'
      ]
    },
    {
      id: 'economia-circular',
      emoji: '🌱',
      tag: 'Economía Circular',
      fecha: '28 may 2026',
      lectura: '5 min lectura',
      titulo: 'Economía circular: el futuro de la manufactura responsable',
      subtitulo: 'Empresas guanajuatenses lideran la transición hacia modelos productivos que eliminan el desperdicio.',
      cuerpo: [
        'En el corazón industrial de México, el estado de Guanajuato se perfila como el laboratorio más importante del país para la economía circular. Más de 40 empresas manufactureras del corredor industrial León-Silao han implementado modelos de producción donde los residuos de un proceso se convierten en materia prima de otro, reduciendo drásticamente su generación de desechos.',
        'La economía circular es un modelo económico que busca eliminar el concepto de "basura" mediante el diseño de productos duraderos, reparables y reciclables, y mediante la creación de cadenas de valor donde los residuos de una industria se convierten en insumos de otra. En contraste con el modelo lineal tradicional de "producir, usar, desechar", la economía circular propone cerrar los ciclos de los materiales.',
        'Uno de los casos más destacados es el de una empresa zapatera de León que reutiliza el 94% de los recortes de piel sintética que antes enviaba al relleno sanitario, vendiéndolos a fabricantes de accesorios automotrices de la región. Esta alianza, que comenzó como un proyecto piloto en 2024, ha generado ingresos adicionales de 3 millones de pesos anuales para ambas empresas.',
        'El clúster automotriz de Silao también ha implementado un sistema de simbiosis industrial donde el agua residual tratada de una planta se usa para el enfriamiento de maquinaria en otra, y los aceites industriales usados se procesan y revenden como combustible secundario a hornos cementeros en Monterrey.',
        'La Secretaría de Desarrollo Económico Sustentable de Guanajuato reporta que las empresas que han adoptado principios de economía circular han reducido sus costos operativos en un promedio del 15%, principalmente por la disminución en compra de materias primas y en tarifas de manejo de residuos peligrosos.',
        'El modelo guanajuatense ha llamado la atención de la Comisión Europea, que en marzo pasado envió una delegación para documentar las mejores prácticas con miras a replicarlas en países en desarrollo de América Latina y el Caribe. La economía circular, que en Europa mueve más de un billón de euros al año, apenas comienza a tomar forma en México como una oportunidad económica real y no solo como una obligación ambiental.'
      ]
    },
    {
      id: 'apps-huella-carbono',
      emoji: '📱',
      tag: 'Tecnología',
      fecha: '25 may 2026',
      lectura: '3 min lectura',
      titulo: '5 apps para medir tu huella de carbono diaria',
      subtitulo: 'Herramientas digitales que te ayudan a entender y reducir tu impacto ambiental desde el celular.',
      cuerpo: [
        'Calcular tu huella de carbono personal ya no requiere ser experto en climatología ni llenar complicadas hojas de cálculo. En 2026, existen aplicaciones móviles que, conectadas a tus cuentas bancarias, historial de viajes y hábitos de consumo, calculan automáticamente las emisiones de CO₂ que generan tus actividades cotidianas. Aquí te presentamos las cinco más útiles y accesibles para usuarios en México.',
        'Capture (disponible en iOS y Android) es actualmente la aplicación más descargada a nivel global para el seguimiento personal de carbono. Analiza tus transacciones bancarias y clasifica cada compra por categoría (alimentos, transporte, ropa, servicios), asignando un valor de emisiones a cada una. Ofrece un plan de reducción personalizado y permite compensar las emisiones inevitables mediante la compra certificada de bonos de carbono mexicanos.',
        'Klima es otra opción popular que destaca por su interfaz amigable y su enfoque en acciones concretas de reducción. Además de calcular tu huella, te sugiere cambios de hábito ordenados por facilidad de implementación e impacto real. Su función de retos mensuales en comunidad la hace especialmente motivadora para mantener el compromiso a largo plazo.',
        'Para usuarios en México, la app Huella MX es especialmente relevante porque usa los factores de emisión específicos de la red eléctrica nacional y los sistemas de transporte público de las principales ciudades del país, lo que la hace más precisa que aplicaciones diseñadas para el mercado europeo o estadounidense. Fue desarrollada por investigadores del Centro Mexicano de Innovación en Energía.',
        'Oroeco conecta directamente con las APIs de bancos mexicanos (BBVA, Banamex, Banorte, HSBC) para un seguimiento casi automático de tu huella financiera. Su fortaleza es la precisión: diferencia entre comprar en un supermercado que usa energía solar y uno que no, o entre volar en una aerolínea con programa de compensación y una que no lo tiene.',
        'Finalmente, Earth Hero es la opción más educativa de las cinco, ideal para quienes empiezan a interesarse en el tema. Ofrece más de 100 acciones concretas ordenadas por impacto, desde cambios simples como reducir el consumo de carne roja hasta decisiones más grandes como instalar paneles solares. Aunque no se conecta automáticamente a tus cuentas, su enfoque pedagógico la hace invaluable como punto de partida.'
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticia = this.noticias.find(n => n.id === id) || null;
  }

  regresar() {
    this.router.navigate(['/noticias']);
  }
}
