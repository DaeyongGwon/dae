/* 
userEffect()를 활용해 가짜 데이터를 Mount 시점에 호출하기
1. fakePost 변수에 가짜 데이터를 변수로 저장하기
2. PostList 컴포넌트 Mount시 SetTimeout을 이용해 2초 후, fakePost를 PostList의 state에 저장하기
3. Post state 길이가 0이라면 loading 메시지 보이기, 길이가 0보다 크다면 post리스트 보여주기
4. css 적용하기
*/
function PostList({ posts }) {
    return (
        <div className="box">
            <div className="logo">
                <div>Post List</div>
            </div>
            {posts.map((post) => (
                <div className="container" key={post.id}>
                    <div>
                        <span>{post.id}</span> - {post.title}
                    </div>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
