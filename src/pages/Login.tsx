import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib//firebase";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
    }

    const signInWithGitHub = async () => {
        await signInWithPopup(auth, githubProvider)
    }

    return (
        <main className="h-screen bg-yellow-300 pt-10">
            <Helmet>
                <title>Short Diary | Login</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="bg-white shadow-md rounded-md py-12">
                    <p className="mb-5 text-center">ログイン</p>
                    <div className="flex gap-3 flex-col items-center">
                        <button onClick={signInWithGoogle} className="bg-white w-max border border-black py-2 px-4 rounded">Googleでログイン</button>
                        <button onClick={signInWithGitHub} className="bg-black text-white w-max border border-black py-2 px-4 rounded">GitHubでログイン</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;