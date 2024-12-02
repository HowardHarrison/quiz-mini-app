export default function QuestionCard() {
    return (
        <div className="">
            <div className="text-lg text-center h-14">Question</div>
            <div className="text-sm text-gray-600">Total Question: 3/10</div>
            <div className="text-sm text-gray-600">Score: 2</div>
            <div className="border rounded-lg m-2 sm:w-[500px] w-[320px]">
                <div className="text-center text-lg mt-2">Answers</div>
                <div className="border p-1 m-4 flex justify-center items-center text-center bg-gray-200 text-gray-700 sm:h-14">
                    1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis laborum sit ullam blanditiis sunt tempora?
                </div>
                <div className="border p-1 m-4 flex justify-center items-center text-center bg-gray-200 text-gray-700 sm:h-14">
                    2
                </div>
                <div className="border p-1 m-4 flex justify-center items-center text-center bg-gray-200 text-gray-700 sm:h-14">
                    3
                </div>
                <div className="border p-1 m-4 flex justify-center items-center text-center bg-gray-200 text-gray-700 sm:h-14">
                    4
                </div>
            </div>
            <div className="bg-green-400 w-32 text-center p-1 rounded-md text-white mx-auto mt-3">
                Next Question
            </div>
        </div>
    );
}
