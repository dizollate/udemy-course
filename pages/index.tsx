import { Button, Htag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance='primary'>Click me</Button>
      <Button appearance='ghost'>Click me</Button>
      <Button appearance='ghost' arrow='right'>Click me</Button>
    </>
  );
}
