import React from 'react';
import * as S from './styled';

const Profile = () => {
  return(
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/75332149?v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Vinicius Pereira</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a href="https://github.com/ViniciusHP"
              target="_blank"
              rel="noreferrer">ViniciusHP</a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>2</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>6</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
