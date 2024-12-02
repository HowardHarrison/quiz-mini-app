import QuestionCard from "../components/QuestionCard";

export default function HomePage() {
    return (
        <div className="">
            <h1 className="text-3xl text-center font-bold my-8">Quiz App</h1>
            <div className="flex justify-center">
            <QuestionCard/>
            </div>    
        </div>
    );
}
