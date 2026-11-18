import { useState } from 'react';
import Colophon from './components/Colophon';
import CreativeLedger from './components/CreativeLedger';
import EditorialBio from './components/EditorialBio';
import HeroSpread from './components/HeroSpread';
import SiteHeader from './components/SiteHeader';
import SurpriseDialog from './components/SurpriseDialog';
import Ticker from './components/Ticker';
import WorksIndex from './components/WorksIndex';
import { site } from './data';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useScrollReveal();

  return (
    <>
      <SiteHeader />

      <main>
        <Ticker items={site.marquee} speed={42} />
        <HeroSpread />
        <WorksIndex />
        <Ticker items={site.marquee} tone="paper" reverse speed={48} />
        <EditorialBio />
        <Ticker items={site.marquee} speed={44} />
        <CreativeLedger />
        <Colophon onSurprise={() => setIsDialogOpen(true)} />
      </main>

      {isDialogOpen ? <SurpriseDialog onClose={() => setIsDialogOpen(false)} /> : null}
    </>
  );
}
