import styles from "./Search.module.css";
import { ISearch } from "./Search.props";
import cn from "classnames";
import { Button, Input } from "..";
import { useState, KeyboardEvent } from "react";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: ISearch): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  return (
    <div {...props} className={cn(className, styles.search)}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
