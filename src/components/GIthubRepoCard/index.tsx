import Link from "next/link";
import { Repo } from "@/utils";

import { Text } from "@/app/styles";
import * as S from "./styles";

type Props = {
  repo: Repo;
};

const GithubRepoCard = ({ repo }: Props) => {
  return (
    <S.RepoCard>
      <Link href={repo.html_url} target="_blank">
        <Text>{repo.name}</Text>
      </Link>
    </S.RepoCard>
  );
};

export default GithubRepoCard;
