interface GreeterProps {
    person: string
}
export default function Greeter({person}: GreeterProps): JSX.Element { // const x: React.FC também é uma opção (antiga)
    return <h1>Hello, {person}!</h1>
}