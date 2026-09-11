import { Hero } from './components/Hero';
import { EquipmentVideos } from './components/EquipmentVideos';
import { About } from './components/About';
import { Equipment } from './components/Equipment';
import { CatalogDownload } from './components/CatalogDownload';
import { Factory } from './components/Factory';
import { Services } from './components/Services';
import { Applications } from './components/Applications';
import { WhyChoose } from './components/WhyChoose';
import { Process } from './components/Process';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Location } from './components/Location';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <EquipmentVideos />
        <About />
        <Equipment />
        <CatalogDownload />
        <Factory />
        <Services />
        <Applications />
        <WhyChoose />
        <Process />
        <Clients />
        <Contact />
        <Location />
      </main>
    </>
  );
}
