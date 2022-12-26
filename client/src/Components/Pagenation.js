import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Container = styled.div`
	padding: 80px 0px;
	border-top: 1px solid rgb(208, 212, 215);
	width: 751px;
	position: relative;
	left: -24px;

	display: flex;
	justify-content: space-between;

	.pagenation {
		display: flex;
		list-style: none;

		.page-num {
			margin: 0px 3px;
			padding: 5px 8px;
			border: 1px solid rgb(208, 212, 215);
			border-radius: 4px;
			color: #3b4045;
		}

		.active {
			color: white;
			border-color: #f48225;
			background-color: #f48225;
		}
	}
`;

const PerPage = styled.div`
	button {
		margin: 0px 3px;
		padding: 5px 8px;
		border: 1px solid rgb(208, 212, 215);
		border-radius: 4px;
		color: #3b4045;
		background: none;
		cursor: pointer;

		&.active {
			color: white;
			border-color: #f48225;
			background-color: #f48225;
		}
	}

	span {
		padding: 0px 8px;
	}
`;

const Pagenation = ({ data, setCurrentData }) => {
	const [pageNum, setPageNum] = useState(0); // 현재 페이지 번호
	const [pageCount, setPageCount] = useState(15); // 한 페이지당 몇 개씩 보여줄 건지

	// data, pageNum, pageCount가 변경되면 현재 보여주는 데이터를 업데이트하는 함수
	useEffect(() => {
		const start = pageNum * pageCount; // 시작 데이터 index
		const end = (pageNum + 1) * pageCount; // 끝 데이터 index
		setCurrentData(data.slice(start, end));
		window.scrollTo(0, 0); // 맨 위로 스크롤 이동
	}, [data, pageNum, pageCount]);

	// 페이지 번호를 업데이트해주는 함수
	const handlePageClick = (e) => {
		setPageNum(e.selected); // e.selected : 클릭한 페이지의 index를 정수로 반환
	};

	return (
		<Container>
			<ReactPaginate
				breakLabel='...'
				previousLabel='Prev'
				nextLabel='Next'
				onPageChange={handlePageClick} // 페이지가 바뀔 때 호출되는 함수
				marginPagesDisplayed={1} // __...__ 가장자리에 보이는 페이지 수
				pageRangeDisplayed={5} // ...___... 중간에 보이는 페이지 수
				pageCount={Math.ceil(data.length / pageCount)} // 총 페이지 수
				renderOnZeroPageCount={undefined} // pageCount가 0일 때 호출되는 함수로, 값이 undefined면 Previous/Next 버튼이 표시되고, null이면 표시되지 않음
				containerClassName='pagenation'
				pageLinkClassName='page-num'
				previousLinkClassName='page-num'
				nextLinkClassName='page-num'
				activeLinkClassName='active'
			/>
			<PerPage>
				<button onClick={() => setPageCount(15)} className={pageCount === 15 ? 'active' : ''}>
					15
				</button>
				<button onClick={() => setPageCount(30)} className={pageCount === 30 ? 'active' : ''}>
					30
				</button>
				<button onClick={() => setPageCount(50)} className={pageCount === 50 ? 'active' : ''}>
					50
				</button>
				<span>per page</span>
			</PerPage>
		</Container>
	);
};

export default Pagenation;
