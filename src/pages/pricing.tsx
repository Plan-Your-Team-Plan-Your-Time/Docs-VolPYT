import React, { JSX } from 'react';
import Layout from '@theme/Layout';

type Plan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: (string | { label: string; infinite?: boolean })[];
  highlight?: boolean;
};

const infinitySymbol = '∞';

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: 'Gratis',
    description: 'Para uso personal y organizaciones y proyectos pequeños.',
    features: [
        '1 proyecto',
        'Hasta 150 tareas',
        '10 personas en la organización',
        'Hasta 4 equipos',
        'Hasta 4 estados',
        'Hasta 5 vistas',
        'Todos los tipos de vista (Lista, Gantt, Kanban, Mensual, Semanal)',
        'Métricas básicas',
        'Hasta 150 entradas de tiempo por miembro',
        'Hasta 15 etiquetas',
    ],
  },
  {
    name: 'Plus',
    price: '1 €',
    period: 'x usuario/mes',
    description: 'Para equipos y organizaciones que necesitan más funcionalidades.',
    features: [
        'Todo en Starter',
        'Hasta 10 proyectos',
        'Hasta 300 tareas por proyecto e integrante en el proyecto',
        'Hasta 20 equipos en la organización',
        'Hasta 20 estados por proyecto',
        'Hasta 20 vistas por proyecto',
        'Hasta 50 etiquetas x proyecto',
        'Edición avanzada en las vistas',
        'Lead Time y Cycle Time',
        { label: 'personas en la organización', infinite: true },
        { label: 'entradas de tiempo', infinite: true },
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '3€',
    period: 'x usuario/mes',
    description: 'Control total de tu organización y proyectos.',
    features: [
        'Todo en Plus',
        { label: 'proyectos y tareas', infinite: true },
        { label: 'equipos y personas', infinite: true },
        { label: 'estados y etiquetas', infinite: true },
        { label: 'vistas', infinite: true },
        'Métricas personalizadas',
        'Timesheets'
    ],
  },
];

export default function Pricing(): JSX.Element {
  return (
    <Layout title="Planes" description="Comparación de planes">
      <main className="pricing-root">
        <section className="hero">
          <h1 className="hero__title">Elige tu plan ideal</h1>
          <p className="hero__subtitle">Precios claros y valor garantizado. Actualiza o cambia cuando lo necesites.</p>
        </section>

        <section className="grid">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`card ${plan.highlight ? 'card--highlight' : ''}`}
            >
              <header className="card__header">
                <h2 className="card__title">{plan.name}</h2>
                <div className="card__price">
                  <span className="card__price-amount">{plan.price}</span>
                  {plan.period && <span className="card__price-period">{plan.period}</span>}
                </div>
                <p className="card__description">{plan.description}</p>
              </header>

              <ul className="card__features">
                {plan.features.map((f) => {
                  if (typeof f === 'string') {
                    return <li key={f} className="card__feature">{f}</li>;
                  }
                  return (
                    <li key={f.label} className="card__feature">
                      {f.infinite && <span className="infinity">{infinitySymbol} </span>}
                      {f.label}
                    </li>
                  );
                })}
              </ul>

              <div className="card__actions">
                <button className="button button--primary button--block">Empieza ahora</button>
              </div>
            </article>
          ))}
        </section>

        <section className="faq">
          <h3>Preguntas frecuentes</h3>
          <div className="faq__items">
            <details>
              <summary>¿Puedo cambiar de plan más adelante?</summary>
              <p>Sí, puedes cambiar o cancelar tu plan en cualquier momento desde la configuración de la cuenta.</p>
            </details>
            <details>
              <summary>¿Ofrecen prueba gratuita?</summary>
              <p>El plan Starter incluye todo lo necesario para empezar. Contáctanos si necesitas una evaluación del plan Pro.</p>
            </details>
            <details>
              <summary>¿Cómo funciona el plan Enterprise?</summary>
              <p>Adaptamos la solución a tus requisitos: cumplimiento, seguridad y soporte dedicado. Solicita una propuesta comercial.</p>
            </details>
          </div>
        </section>
      </main>

      <style>{`
        .pricing-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1rem 4rem;
        }
        .hero {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .hero__title {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          margin: 0 0 .5rem;
        }
        .hero__subtitle {
          color: var(--ifm-color-emphasis-700);
          font-size: 1.125rem;
          margin: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          align-items: stretch;
        }
        @media (max-width: 996px) {
          .grid { grid-template-columns: 1fr; }
        }

        .card {
          background: var(--ifm-background-surface-color);
          border: 1px solid var(--ifm-color-emphasis-200);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 2px rgba(0,0,0,.04);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,.08);
          border-color: var(--ifm-color-emphasis-300);
        }
        .card--highlight {
          border-color: var(--ifm-color-primary);
          box-shadow: 0 8px 28px rgba(0,0,0,.1);
        }
        .card__title {
          margin: 0 0 .5rem;
          font-size: 1.35rem;
          font-weight: 700;
        }
        .card__price {
          display: flex;
          align-items: baseline;
          gap: .25rem;
          margin: .25rem 0 .75rem;
        }
        .card__price-amount {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -.02em;
        }
        .card__price-period {
          color: var(--ifm-color-emphasis-700);
          font-size: 1rem;
        }
        .card__description {
          margin: 0 0 .75rem;
          color: var(--ifm-color-emphasis-700);
        }
        .card__features {
          list-style: none;
          padding: 0;
          margin: .25rem 0 1rem;
          display: grid;
          gap: .35rem;
        }
        .card__feature {
          position: relative;
          padding-left: 1.25rem;
        }
        .card__feature::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--ifm-color-primary);
        }
        .infinity {
          color: var(--ifm-color-primary);
          font-weight: bold;
          margin-right: 0.25rem;
        }
        .card__actions { margin-top: auto; }
        .button--block { width: 100%; }

        .faq {
          margin-top: 3rem;
        }
        .faq h3 {
          margin: 0 0 1rem;
          font-size: 1.5rem;
          text-align: center;
          font-weight: 700;
        }
        .faq__items {
          display: grid;
          gap: .75rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq details {
          background: var(--ifm-background-surface-color);
          border: 1px solid var(--ifm-color-emphasis-200);
          border-radius: .75rem;
          padding: .75rem 1rem;
        }
        .faq summary {
          cursor: pointer;
          font-weight: 600;
          outline: none;
        }
        .faq p {
          margin: .5rem 0 0;
          color: var(--ifm-color-emphasis-700);
        }
      `}</style>
    </Layout>
  );
}
