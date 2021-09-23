import { GetStaticProps } from "next";
import { useState } from "react";
import {
  Button,
  Htag,
  Input,
  Paragraph,
  Rating,
  Tag,
  Textarea,
} from "../components";
import { WithLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

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
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Input />
      <Textarea />
    </>
  );
}

export default WithLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
