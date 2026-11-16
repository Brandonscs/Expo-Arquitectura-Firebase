import Inicio from './presentation/Inicio';
import Definicion from './presentation/Definicion';
import Costos from './presentation/Costos';
import Lenguajes from './presentation/Lenguajes';
import Ejemplos from './presentation/Ejemplos';
import GuiaConfiguracion from './presentation/GuiaConfiguracion';

export default function App() {
  return (
    <main>
      <Inicio />
      <Definicion />
      <Costos />
      <Lenguajes />
      <Ejemplos />
      <GuiaConfiguracion />
    </main>
  );
}