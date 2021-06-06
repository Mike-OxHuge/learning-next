import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>Page not found</h2>
      <p>You'll be redirected to homepage in 3 seconds...</p>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

// import Link from 'next/link'

// const NotFound = () => {
//   return (
//     <div className="not-found">
//       <h1>Ooops...</h1>
//       <h2>That page cannot be found :(</h2>
//       <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
//     </div>
//   );
// }

// export default NotFound;
