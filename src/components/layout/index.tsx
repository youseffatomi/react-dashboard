import { Outlet } from "react-router";

export default function Layout (){


    return (<div>

    <header>header</header>

    <section>
        <aside>
            aside
        </aside>
        <main>

            <Outlet/>
        </main>
    </section>



    </div>)


}