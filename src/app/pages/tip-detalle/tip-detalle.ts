import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
  emoji: string;
}

interface TipData {
  id: string;
  emoji: string;
  titulo: string;
  subtitulo: string;
  tiempo: string;
  dificultad: string;
  impacto: string;
  color: string;
  descripcion: string;
  materiales: string[];
  pasos: Paso[];
  consejo: string;
  impactoDetalle: string;
}

@Component({
  selector: 'app-tip-detalle',
  imports: [],
  templateUrl: './tip-detalle.html',
  styleUrl: './tip-detalle.css',
})
export class TipDetalle implements OnInit {
  tip: TipData | null = null;

  tips: TipData[] = [
    {
      id: 'maceta-pet',
      emoji: '🪴',
      titulo: 'Maceta con botella PET reciclada',
      subtitulo: 'DIY · Jardinería',
      tiempo: '15 min',
      dificultad: 'Fácil',
      impacto: 'Alto ★★★',
      color: '#dcedc8',
      descripcion: 'Dale una segunda vida a tus botellas de plástico convirtiéndolas en hermosas macetas para tu hogar o jardín. Es una forma creativa y económica de reducir residuos mientras embellecer tus espacios.',
      materiales: ['1 botella PET de 1.5L o 2L', 'Tijeras o cuchillo', 'Tierra para macetas', 'Plantas pequeñas o semillas', 'Pintura acrílica (opcional)', 'Clavo o aguja para drenaje'],
      pasos: [
        { numero: 1, titulo: 'Lavar la botella', descripcion: 'Limpia bien la botella con agua y jabón. Retira la etiqueta y déjala secar completamente antes de continuar.', emoji: '🚿' },
        { numero: 2, titulo: 'Cortar la botella', descripcion: 'Con las tijeras, corta la botella por la mitad. La parte inferior será tu maceta. Puedes hacer el corte en diagonal para un efecto más estético.', emoji: '✂️' },
        { numero: 3, titulo: 'Hacer orificios de drenaje', descripcion: 'Con un clavo caliente o aguja gruesa, haz 4-5 pequeños orificios en el fondo para que el agua drene correctamente y no se pudran las raíces.', emoji: '📍' },
        { numero: 4, titulo: 'Decorar (opcional)', descripcion: 'Pinta la maceta con colores llamativos o patrones creativos usando pintura acrílica. Deja secar al menos 30 minutos antes de continuar.', emoji: '🎨' },
        { numero: 5, titulo: 'Plantar', descripcion: 'Agrega tierra para macetas hasta llenar 3/4 partes. Planta tu semilla o plántula, cubre con un poco más de tierra y riega con moderación.', emoji: '🌱' }
      ],
      consejo: 'Puedes usar la parte superior de la botella volteada como sistema de auto-riego: llénala con agua y ponla invertida sobre la tierra. ¡El agua se liberará lentamente!',
      impactoDetalle: 'Cada botella PET reutilizada evita que 0.03 kg de plástico llegue al vertedero y extiende su vida útil hasta 12 meses.'
    },
    {
      id: 'limpiador-vinagre',
      emoji: '🧴',
      titulo: 'Limpiador multiusos con vinagre y naranja',
      subtitulo: 'DIY · Limpieza del hogar',
      tiempo: '10 min',
      dificultad: 'Fácil',
      impacto: 'Alto ★★★',
      color: '#fff3e0',
      descripcion: 'Prepara un limpiador natural, efectivo y económico que reemplaza los productos químicos del hogar. El vinagre blanco desinfecta naturalmente y la naranja elimina malos olores.',
      materiales: ['1 taza de vinagre blanco', '1 taza de agua', 'Cáscaras de 2 naranjas', '1 frasco o botella con atomizador', '10 gotas de aceite esencial de lavanda (opcional)'],
      pasos: [
        { numero: 1, titulo: 'Preparar las cáscaras', descripcion: 'Lava bien las naranjas antes de pelarlas. Usa solo la parte naranja de la cáscara, evitando la parte blanca que puede volverse amarga.', emoji: '🍊' },
        { numero: 2, titulo: 'Macerar', descripcion: 'Coloca las cáscaras de naranja en un frasco de vidrio y cúbrelas con el vinagre blanco. Cierra bien y deja reposar en un lugar oscuro por 2 semanas.', emoji: '⏳' },
        { numero: 3, titulo: 'Filtrar', descripcion: 'Pasado el tiempo, cuela el líquido para retirar las cáscaras. El vinagre ahora tendrá un aroma cítrico agradable.', emoji: '🫙' },
        { numero: 4, titulo: 'Mezclar y embotellar', descripcion: 'Mezcla el vinagre macerado con agua en partes iguales. Agrega el aceite esencial si lo deseas. Vierte en la botella con atomizador.', emoji: '💧' },
        { numero: 5, titulo: 'Etiquetar', descripcion: 'Escribe en la botella "Limpiador Natural" y la fecha de elaboración. Úsalo en cocina, baño, vidrios y superficies duras.', emoji: '🏷️' }
      ],
      consejo: 'No uses este limpiador en mármol o granito, ya que el ácido del vinagre puede dañar estas superficies. Es perfecto para cerámica, vidrio y acero inoxidable.',
      impactoDetalle: 'Preparar tu propio limpiador evita el uso de 2-3 botellas de plástico al mes y elimina químicos tóxicos del agua residual de tu hogar.'
    },
    {
      id: 'organizador-carton',
      emoji: '📦',
      titulo: 'Organizador de escritorio con cajas de cartón',
      subtitulo: 'DIY · Decoración',
      tiempo: '25 min',
      dificultad: 'Medio',
      impacto: 'Medio ★★',
      color: '#e8eaf6',
      descripcion: 'Transforma cajas de cereal, pasta o zapatos en un práctico organizador para tu escritorio. Perfecto para lápices, tijeras, post-its y todo lo que necesitas tener a la mano.',
      materiales: ['3-5 cajas de cartón de distintos tamaños', 'Pegamento blanco o silicón', 'Papel decorativo o tela', 'Tijeras y cúter', 'Pintura o marcadores', 'Barniz (opcional para mayor durabilidad)'],
      pasos: [
        { numero: 1, titulo: 'Seleccionar las cajas', descripcion: 'Escoge cajas de diferentes alturas para crear compartimientos variados. Cajas de cereal, pasta, zapatos y regalos funcionan perfecto.', emoji: '📦' },
        { numero: 2, titulo: 'Cortar y ajustar alturas', descripcion: 'Con el cúter, corta las cajas a las alturas deseadas. Hazlo en diagonal o en línea recta según tu gusto. Lija los bordes para que no corten.', emoji: '✂️' },
        { numero: 3, titulo: 'Forrar con papel', descripcion: 'Corta el papel decorativo en trozos del tamaño de cada cara de la caja. Pega con pegamento blanco diluido en agua (mitad y mitad) como decoupage.', emoji: '📄' },
        { numero: 4, titulo: 'Unir las cajas', descripcion: 'Acomoda las cajas de forma que queden juntas y pegadas entre sí. Usa silicón o pegamento fuerte para unirlas. Mantén presión por 5 minutos.', emoji: '🔗' },
        { numero: 5, titulo: 'Finalizar y decorar', descripcion: 'Agrega detalles decorativos: washi tape en los bordes, etiquetas para cada compartimiento, o pequeñas plantas. Aplica barniz si quieres mayor durabilidad.', emoji: '✨' }
      ],
      consejo: 'Revisa el papel tapiz sobrante de renovaciones del hogar — es perfecto y más resistente que el papel de regalo para forrar tus organizadores.',
      impactoDetalle: 'Reutilizar 5 cajas de cartón equivale a salvar aproximadamente 0.5 kg de papel del vertedero y evitar la tala de árboles para producir nuevo cartón.'
    },
    {
      id: 'velas-frasco',
      emoji: '🕯️',
      titulo: 'Velas aromáticas en frascos de mermelada',
      subtitulo: 'DIY · Decoración del hogar',
      tiempo: '40 min',
      dificultad: 'Medio',
      impacto: 'Alto ★★★',
      color: '#fce4ec',
      descripcion: 'Convierte frascos de vidrio vacíos en elegantes velas aromáticas. Son perfectas para regalar, decorar tu hogar y crear un ambiente relajante, todo con materiales reciclados.',
      materiales: ['Frascos de mermelada o conservas limpios', '200g de cera de soya o parafina', 'Mechas para vela (pabilo)', 'Aceites esenciales (lavanda, naranja, vainilla)', 'Palitos de madera para centrar la mecha', 'Colorante para velas (opcional)'],
      pasos: [
        { numero: 1, titulo: 'Limpiar los frascos', descripcion: 'Lava los frascos con agua caliente y jabón. Retira completamente las etiquetas. Sécalos bien antes de usarlos.', emoji: '🧼' },
        { numero: 2, titulo: 'Preparar la mecha', descripcion: 'Corta el pabilo 2 cm más alto que el frasco. Amarra el extremo inferior a un clip o piedrita pequeña para que quede al fondo. Centra la mecha usando un palito de madera en la boca del frasco.', emoji: '🕯️' },
        { numero: 3, titulo: 'Derretir la cera', descripcion: 'Derrite la cera a baño maría a fuego bajo. No la dejes sin vigilancia. Cuando esté completamente líquida, retira del fuego y deja enfriar 2-3 minutos.', emoji: '🔥' },
        { numero: 4, titulo: 'Agregar aroma y color', descripcion: 'Añade 20-30 gotas de aceite esencial por cada 100g de cera. Si deseas colorearla, agrega el colorante ahora y mezcla bien.', emoji: '🌸' },
        { numero: 5, titulo: 'Verter y dejar solidificar', descripcion: 'Vierte la cera con cuidado en el frasco. Asegúrate que la mecha siga centrada. Deja enfriar a temperatura ambiente por mínimo 4 horas antes de usar.', emoji: '⏳' }
      ],
      consejo: 'Si la superficie de la vela queda con hoyos al enfriarse, calienta un poco más de cera y rellena esos espacios para un acabado perfecto.',
      impactoDetalle: 'Reutilizar frascos de vidrio en lugar de comprar velas industriales evita 0.2 kg de residuos de plástico y vidrio por cada vela que elaboras.'
    },
    {
      id: 'riego-goteo',
      emoji: '💧',
      titulo: 'Sistema de riego por goteo casero',
      subtitulo: 'DIY · Jardinería · Ahorro de agua',
      tiempo: '20 min',
      dificultad: 'Fácil',
      impacto: 'Alto ★★★',
      color: '#e0f7fa',
      descripcion: 'Crea un sistema automático de riego por goteo usando botellas PET. Perfecto para cuando salgas de vacaciones o simplemente para ahorrar agua en tus plantas diariamente.',
      materiales: ['Botellas PET de 500ml o 1L', 'Aguja o clavo pequeño', 'Tierra y plantas', 'Opcional: manguera delgada'],
      pasos: [
        { numero: 1, titulo: 'Preparar la botella', descripcion: 'Lava bien la botella. Haz un pequeño orificio en la tapa con una aguja. El tamaño del orificio determinará la velocidad del goteo (más pequeño = más lento).', emoji: '📍' },
        { numero: 2, titulo: 'Llenar de agua', descripcion: 'Llena la botella completamente con agua. Puedes agregar fertilizante líquido diluido si tus plantas lo necesitan.', emoji: '💧' },
        { numero: 3, titulo: 'Invertir sobre la tierra', descripcion: 'Tapa la botella con la tapa perforada, inviértela y clávala en la tierra cerca de las raíces de la planta. Asegúrate que quede estable.', emoji: '🔄' },
        { numero: 4, titulo: 'Ajustar el flujo', descripcion: 'Si gotea demasiado rápido, haz el orificio más pequeño con cera. Si es muy lento, amplía el orificio con la aguja. El objetivo es que libere agua en 8-12 horas.', emoji: '⚙️' },
        { numero: 5, titulo: 'Monitorear', descripcion: 'Revisa las plantas el primer día para verificar que el flujo sea el adecuado. Una botella de 1L suele durar 1-2 días dependiendo del tamaño del orificio.', emoji: '👀' }
      ],
      consejo: 'Para plantas grandes, usa una botella de 2L y clávala en ángulo de 45° para que cubra una mayor área de raíces. Puedes conectar varias botellas con manguera delgada.',
      impactoDetalle: 'Este sistema puede ahorrar hasta 15 litros de agua a la semana por planta, comparado con el riego manual. Equivale a reducir tu consumo hídrico en un 40% en jardinería.'
    },
    {
      id: 'bolsa-playera',
      emoji: '👜',
      titulo: 'Bolsa reutilizable con una playera vieja',
      subtitulo: 'DIY · Moda sostenible',
      tiempo: '15 min',
      dificultad: 'Fácil',
      impacto: 'Alto ★★★',
      color: '#f1f8e9',
      descripcion: 'Transforma una playera que ya no usas en una bolsa resistente y reutilizable para el mandado o el día a día. Sin necesidad de coser ni herramientas especiales.',
      materiales: ['1 playera de algodón (talla grande funciona mejor)', 'Tijeras', 'Marcador o gis', 'Regla (opcional)'],
      pasos: [
        { numero: 1, titulo: 'Preparar la playera', descripcion: 'Extiende la playera sobre una superficie plana. Asegúrate que esté limpia y sin arrugas. Puedes usar una playera de tela gruesa para mejor resistencia.', emoji: '👕' },
        { numero: 2, titulo: 'Cortar el cuello', descripcion: 'Corta el cuello de la playera en forma de U amplia. Esta será la abertura de tu bolsa. Haz el corte unos 5 cm más grande que el cuello original para que entre la mano.', emoji: '✂️' },
        { numero: 3, titulo: 'Cortar las mangas', descripcion: 'Corta ambas mangas siguiendo la costura. Estos serán las asas de tu bolsa. Puedes dejarlas tal cual o hacerlas más delgadas.', emoji: '💪' },
        { numero: 4, titulo: 'Hacer el fondo de la bolsa', descripcion: 'Dale vuelta la playera. En la parte inferior, haz cortes verticales de 8 cm de profundidad y 2 cm de ancho a lo largo del dobladillo. Después, anuda cada par de tiras juntas para cerrar el fondo.', emoji: '🪢' },
        { numero: 5, titulo: 'Voltear y usar', descripcion: 'Voltea la bolsa al derecho. ¡Lista! Puedes cargar hasta 5 kg. Lávala en la lavadora cuando sea necesario.', emoji: '🎉' }
      ],
      consejo: 'Las playeras de algodón 100% son más resistentes y lavables. Puedes personalizar la bolsa con pintura para tela, bordados o parches para hacerla única.',
      impactoDetalle: 'Una bolsa de tela reutilizable reemplaza el uso de hasta 700 bolsas de plástico a lo largo de su vida útil, evitando cientos de años de degradación en el ambiente.'
    },
    {
      id: 'separar-residuos',
      emoji: '♻️',
      titulo: 'Cómo separar residuos correctamente',
      subtitulo: 'Reciclaje · Básico',
      tiempo: '5 min',
      dificultad: 'Básico',
      impacto: 'Medio ★★',
      color: '#e3f2fd',
      descripcion: 'Aprender a separar correctamente tus residuos es el primer paso para reciclar de forma efectiva. Con este tip aprenderás qué va en cada contenedor y por qué importa tanto hacerlo bien.',
      materiales: ['Contenedores o bolsas de colores', 'Etiquetas o marcadores', 'Espacio en tu cocina o patio'],
      pasos: [
        { numero: 1, titulo: 'Conoce los colores', descripcion: 'Verde: orgánicos (cáscaras, sobras de comida). Amarillo: plástico y metal. Azul: papel y cartón. Rojo: peligrosos (pilas, medicamentos). Gris o negro: sanitarios (pañales, papel de baño).', emoji: '🎨' },
        { numero: 2, titulo: 'Limpia antes de separar', descripcion: 'Los envases de alimentos deben estar limpios y secos antes de ir al contenedor de reciclaje. Un envase sucio contamina todo el lote y lo manda al tiradero.', emoji: '🧼' },
        { numero: 3, titulo: 'Separa los orgánicos', descripcion: 'Cáscaras de fruta y verdura, sobras de comida, café y té, poda de plantas. Todo esto puede convertirse en composta para tus plantas en lugar de ir al relleno sanitario.', emoji: '🍎' },
        { numero: 4, titulo: 'Identifica lo no reciclable', descripcion: 'Papel higiénico, servilletas usadas, pañales y toallas sanitarias NO son reciclables aunque sean de papel o plástico. Van en el contenedor negro.', emoji: '🚫' },
        { numero: 5, titulo: 'Establece una rutina', descripcion: 'Pon los contenedores en un lugar visible de la cocina. Vacíalos según los días de recolección de tu municipio. En Guadalajara puedes consultar los horarios en la app GDL Limpia.', emoji: '📅' }
      ],
      consejo: 'El plástico film (bolsas de super, envoltura de alimentos) generalmente NO va en el reciclaje doméstico. Búscalo en puntos de acopio especiales en supermercados.',
      impactoDetalle: 'Si todos los hogares en México separaran correctamente sus residuos, se reduciría en un 70% la cantidad de basura que llega a los rellenos sanitarios.'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tip = this.tips.find(t => t.id === id) || null;
  }

  regresar() {
    this.router.navigate(['/tips']);
  }
}
