import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { WithLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="down">
        Click me
      </Button>
      <Button appearance="ghost">Click me</Button>
      <Button appearance="ghost" arrow="right">
        Click me
      </Button>
      <Paragraph size="m">Хеллоу май френд</Paragraph>
      <Paragraph size="s">Хеллоу май френд</Paragraph>
      <Paragraph size="l" bold>
        Хеллоу май френд
      </Paragraph>
      <Tag size="m" color="gray">
        Hello it's me
      </Tag>
      <Tag size="s" color="primary">
        Hello it's me
      </Tag>
      <Tag size="s" color="ghost">
        Hello it's me
      </Tag>
      <Tag size="s" color="red">
        Hello it's me
      </Tag>
      <Tag
        size="m"
        color="green"
        href="https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/"
      >
        Hello it's me
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
}

export default WithLayout(Home);
