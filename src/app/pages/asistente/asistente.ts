import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  rol: 'user' | 'ai';
  texto: string;
  cargando?: boolean;
}

@Component({
  selector: 'app-asistente',
  imports: [FormsModule],
  templateUrl: './asistente.html',
  styleUrl: './asistente.css',
})
export class Asistente {
  @ViewChild('mensajesContainer') mensajesContainer!: ElementRef;

  mensajes: Mensaje[] = [
    {
      rol: 'ai',
      texto: '¡Hola! Soy EcoBot. Estoy aquí para ayudarte a reducir, reutilizar y reciclar. ¿Qué residuo tienes a la mano o qué duda ecológica tienes hoy?'
    }
  ];

  inputTexto = '';
  cargando = false;

  sugerencias = [
    '¿Qué puedo hacer con botellas PET?',
    'Calcular mi huella de carbono',
    'Cómo compostar en casa',
    'Ideas con cajas de cartón'
  ];

  usarSugerencia(texto: string) {
    this.inputTexto = texto;
    this.enviarMensaje();
  }

  async enviarMensaje() {
    const texto = this.inputTexto.trim();
    if (!texto || this.cargando) return;

    this.mensajes.push({ rol: 'user', texto });
    this.inputTexto = '';
    this.cargando = true;

    const mensajeCarga: Mensaje = { rol: 'ai', texto: '', cargando: true };
    this.mensajes.push(mensajeCarga);

    setTimeout(() => this.scrollAlFinal(), 50);

    try {
      const historial = this.mensajes
        .filter(m => !m.cargando)
        .slice(0, -1)
        .map(m => ({ role: m.rol === 'user' ? 'user' : 'assistant', content: m.texto }));

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: `Eres EcoBot, el asistente de inteligencia artificial de EcoTips, una plataforma educativa sobre consumo responsable alineada con el ODS 12 de la ONU.
Tu especialidad es: reciclaje, reutilización de residuos, manualidades DIY ecológicas, reducción de huella de carbono y consumo sostenible.
Siempre responde en español. Sé amigable, conciso y práctico. Al final de cada respuesta, incluye una métrica de impacto ecológico estimada si aplica (ejemplo: "🌱 Impacto estimado: evitar 0.05 kg de CO₂").
Si el usuario pregunta algo fuera de ecología o medio ambiente, gentilmente redirige la conversación hacia temas ecológicos.`,
          messages: [
            ...historial,
            { role: 'user', content: texto }
          ]
        })
      });

      const data = await response.json();
      const respuesta = data.content?.[0]?.text || 'No pude procesar tu mensaje. Intenta de nuevo.';

      const idx = this.mensajes.indexOf(mensajeCarga);
      if (idx !== -1) {
        this.mensajes[idx] = { rol: 'ai', texto: respuesta };
      }
    } catch (e) {
      const idx = this.mensajes.indexOf(mensajeCarga);
      if (idx !== -1) {
        this.mensajes[idx] = { rol: 'ai', texto: 'Hubo un error al conectar con el asistente. Por favor intenta de nuevo.' };
      }
    }

    this.cargando = false;
    setTimeout(() => this.scrollAlFinal(), 50);
  }

  scrollAlFinal() {
    if (this.mensajesContainer) {
      const el = this.mensajesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  teclaEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.enviarMensaje();
    }
  }
}
