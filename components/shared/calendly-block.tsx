import Container from './container';
import CalendlyPopup from './calendly-popup';
import { sanityFetch } from '@/sanity/lib/live';

export default  function CalendlyBlock() {


  return (
    <Container className="px-0">
      <div
        className="bg-gradient-to-r from-[#C79404] via-yellow-500 to-yellow-300 md:rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        role="region"
        aria-label="Call to action section">
        <h3
          className="text-white font-bold text-3xl md:text-4xl lg:text-5xl max-w-5xl lg:max-w-4xl leading-tight text-center md:text-left"
          id="cta-heading">
          Prêt à transformer votre vision en réalité ?{' '}
          <span className="text-white">Commençons dès maintenant !</span>
        </h3>
        <CalendlyPopup outline aria-labelledby="cta-heading" />
      </div>
    </Container>
  );
}
