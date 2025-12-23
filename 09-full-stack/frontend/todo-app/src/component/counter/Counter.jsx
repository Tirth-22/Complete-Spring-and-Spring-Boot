import './Counter.css';

export default function Counter() {

    function incrementCount() {
        console.log("Incrementing count");
    }

    return (
        <div className="Counter">
            <span className="Count">0</span>
            <div>
                <button className="IncrementButton" onClick={incrementCount}>+1</button>
            </div>
        </div>

    )
}