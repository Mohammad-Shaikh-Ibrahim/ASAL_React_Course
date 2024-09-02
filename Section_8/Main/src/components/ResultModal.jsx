import { forwardRef } from "react";

 const ResultModal= forwardRef(function ResultModal({result,targetTime},ref){
    return (
    <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>The Target Time Was <strong>{targetTime} seconds.</strong></p>
        <p>You Stopped The Timer With <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    );
})

export default ResultModal;