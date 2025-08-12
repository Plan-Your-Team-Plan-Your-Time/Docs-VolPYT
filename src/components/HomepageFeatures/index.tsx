import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'Fácil de Usar',
      id: 'feature.HomepageFeatures.facilDeUsar.title',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="feature.HomepageFeatures.facilDeUsar.message">
        VolPYT fue diseñado desde cero para facilitar la gestión de equipos,
        dando las funcionalidades necesarias para que surjan las mejoras de
        la organización. Así, podrás concentrarte en lo que realmente importa:
        tu equipo.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Enfocado en lo que Importa',
      id: 'feature.HomepageFeatures.enfocadoEnLoImportante.title',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="feature.HomepageFeatures.enfocadoEnLoImportante.message">
        Sabemos que lo más importante cuando gestionas un equipo es saber qué
        ocurre en él. Por eso VolPYT te permite tener una visión clara de
        las tareas, el tiempo y el progreso de tu equipo, para que puedas
        tomar decisiones informadas y efectivas.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Seguro y Documentado',
      id: 'feature.HomepageFeatures.seguroYDocumentado.title',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="feature.HomepageFeatures.seguroYDocumentado.message">
        Gracias a la documentación y a las buenas prácticas de desarrollo,
        VolPYT es una herramienta segura y confiable. Además, su código abierto
        permite a la comunidad contribuir y mejorar continuamente la plataforma,
        asegurando que siempre esté a la vanguardia de las necesidades de gestión
        de equipos.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
