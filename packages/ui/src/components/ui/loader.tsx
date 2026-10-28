import {Spinner} from "./spinner";

export const Loader = () => {
    return (
        <div className='w-full h-full bg-white flex justify-center items-center'>
            <Spinner
             className="bg-blue-500 text-blue-500"
            />
        </div>
    )
}