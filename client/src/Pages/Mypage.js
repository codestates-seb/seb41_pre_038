import Header from '../Components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { editNickname, editCountry, editUserImage } from '../store/store';

const Mypage = () => {
  let store = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <>
      <Header></Header>
      {store.user.country}
      <button
        onClick={() => {
          dispatch(editCountry('미국'));
        }}
      >
        {' '}
        수정 확인용{' '}
      </button>
    </>
  );
};

export default Mypage;
