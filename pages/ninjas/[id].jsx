export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>Details page</h1>
      <h2>{user.name}</h2>
      <h3>Username: {user.username}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.website}</p>
    </div>
  );
};

export default Details;
