import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const Token = localStorage.getItem("token");

    if (!Token) navigate("/auth");
  });

  return (
    <div>
      <header>header</header>

      <section>
        <aside>aside</aside>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
