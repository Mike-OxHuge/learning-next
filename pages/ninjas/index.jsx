import styles from "../../styles/Ninjas.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
const index = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div>
        <h1>Users</h1>
        {users.map((user) => (
          <Link href={`/ninjas/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;
