import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
      return (
        <MainContainer>
            <div>
                Пользователь c id  {user.id}
                <h2>Имя пользователя {user.name}</h2>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    console.log(params);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: { user }, // will be passed to the page component as props
    }
}