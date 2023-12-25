import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particleConfig from './config';

function ParticleBackground() {
  const Particlesinit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <Particles init={Particlesinit} options={particleConfig} />
    </div>
  );
}
export default ParticleBackground;
