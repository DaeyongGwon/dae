//가상데이터
//select * from comment
exports.commentInfos = () => {
    return [
        {
            id: 1,
            userId: 'helloworld',
            date: '2023-05-24',
            comment: '안녕하세요',
        },
        {
            id: 2,
            userId: 'happy',
            date: '2023-05-23',
            comment: '반가워요',
        },
        {
            id: 3,
            userId: 'lucky',
            date: '2023-05-20',
            comment: '좋은 아침입니다',
        },
        {
            id: 4,
            userId: 'codingon',
            date: '2023-05-15',
            comment: '첫 댓글입니다.',
        },
    ];
};
