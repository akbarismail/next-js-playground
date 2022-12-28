import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from './Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users({ dataUsers }: UsersProps) {
  const router = useRouter();

  return (
    <Layout pageTitle='Users Page'>
      {dataUsers.map((user) => (
        <div
          key={user.id}
          className={styles.card}
          onClick={() => router.push(`/users/${user.id}`)}
        >
          <h2>
            {user.name} - {user.address.city}
          </h2>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();

  return {
    props: {
      dataUsers,
    },
  };
}
