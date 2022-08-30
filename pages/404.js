import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //router.go(1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooops.....</h1>
      <p>
        Go back to
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
