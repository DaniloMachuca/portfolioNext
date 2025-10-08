import { Repo } from "@/utils";

import { SectionTitle, Text } from "@/app/styles";
import GithubRepoCard from "@/components/GIthubRepoCard";
import * as S from "./styles";

const GithubReposList = async () => {
  const response = await fetch(
    "https://api.github.com/users/DaniloMachuca/repos"
  );
  const data = await response.json();

  return (
    <S.background>
      <S.RepoListSection>
        <SectionTitle>Repositórios no GitHub</SectionTitle>
        <Text>
          Todos os repositórios do meu GitHub para meus projetos pessoais e
          profissionais:
        </Text>
        <S.RepoList>
          {data.map((repo: Repo) => (
            <GithubRepoCard key={repo.id} repo={repo} />
          ))}
        </S.RepoList>
      </S.RepoListSection>
    </S.background>
  );
};

export default GithubReposList;
