import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
  return (<S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected">
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem name="alvorecer"
          linkToRepo="https://github.com/ViniciusHP/alvorecer"
          fullName="ViniciusHP/alvorecer"/>
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem name="conversor-de-bases-numericas"
          linkToRepo="https://github.com/ViniciusHP/conversor-de-bases-numericas"
          fullName="ViniciusHP/conversor-de-bases-numericas"/>
      </S.WrapperTabPanel>
  </S.WrapperTabs>); // Parte 4/8
}

export default Repositories;