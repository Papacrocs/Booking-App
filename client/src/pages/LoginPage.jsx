import { Link } from "react-router-dom";


export default function LoginPage (){
    return (
        <div  className="mt-4 grow flex items-center justify-around">
            <div className="mb-75">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form action="" className="max-w-md mx-auto">
                    <input type="email" name="email" id="" placeholder="youremail@gmail.com"/>
                    <input type="password" name="password" id="" placeholder="*************"/>
                    <button type="submit" className="primary">Login</button>
                    <p className="text-center py-2 text-gray-500">Don't have an account yet? <Link className="text-black font-bold" to={'/register'}>Register Now!</Link>   </p>
                </form>
            </div>
            
        </div>
    );
}