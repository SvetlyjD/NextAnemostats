import Head from "next/head"
import A from "./A";

const MainContainer = ({ children, keywords }) => {
    return (
        <div>
            <Head>
                <meta keywords={`анемостаты`+keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Главная"></A>
                <A href="/users" text="Пользователи"></A>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainContainer;