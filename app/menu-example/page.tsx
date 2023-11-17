import { redirect } from 'next/navigation';

const Dashboard: React.FC = () => {
  redirect('/menu-example/Home');
  return <></> // Otra opción es retornar algo, por ejemplo, un componente nulo.
};

export default Dashboard;