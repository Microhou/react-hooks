const { createRoot }  = ReactDOM;

const states = [];
const stateSetter = [];
let stateIndex = 0;

function createState(initialState, stateIndex) {
    return states[stateIndex] ? states[stateIndex] : initialState;
}

function createStateSetter(stateIndex) {
    return (newState) => {
        if (typeof newState === 'function') {
            states[stateIndex] = newState(states[stateIndex]);
        }else {
            states[stateIndex] = newState;
        }
        debugger
        render();
    }
}

export function useState(initialState) {
    console.log("render" );  
    states[stateIndex] = createState(initialState, stateIndex);
    if(!stateSetter[stateIndex]){
        // stateSetter.push(createStateSetter(stateIndex));
        stateSetter[stateIndex] = createStateSetter(stateIndex);
    }

    const _state = states[stateIndex];
    const _setState = stateSetter[stateIndex];

    stateIndex++;

    return [
        _state,
        _setState
    ]
}

/**
 * 在render方法中，stateIndex = 0是必要的，因为每次重新渲染组件时，我们都需要从头开始访问状态数组。这是因为React函数组件的工作方式，每次渲染都会从头开始运行组件函数。因此，我们需要确保每次渲染时，状态的顺序和上一次渲染时相同。
    如果我们不重置stateIndex，那么每次渲染后，状态的索引就会越来越大，最终超出states数组的长度，导致错误。通过在每次渲染开始时将stateIndex重置为0，我们可以确保总是从头开始访问状态，保持正确的顺序。这就是为什么在render方法中需要stateIndex = 0的原因。
 */

async function render() {
    const App = (await import('./App')).default;
    stateIndex = 0;
    root.render(<App />)
}

export const root = createRoot(document.getElementById('app'));

