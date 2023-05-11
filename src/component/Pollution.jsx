import Api from './component/Api.jsx'

export default function Pollution() {
    const environnement= "pollen/tree/forecast/daily/{z}/{x}/{y}.png?key=0f9b19c1eb6c451499c04edb155646da"
    return (
        <Api environnement={environnement} />
    )
}