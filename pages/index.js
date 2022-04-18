import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a className="linkNav">Главная</a>
                </Link>
                <Link href="/users">
                    <a className="linkNav">Пользователи</a>
                </Link>
            </div>
            <h1>Главная страница</h1>
        </div>
    )
}

export default Index;