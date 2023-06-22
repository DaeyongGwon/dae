import { useState, useEffect } from "react";
import PostList from "./PostList";

function Effect() {
    const fakePost = [
        { id: 1, title: "밥밥밥", content: "밥은 맛있어요." },
        { id: 2, title: "제주도", content: "제주도는 좋은 여행지에요." },
        { id: 3, title: "강아지", content: "강아지들은 귀여워요." },
    ];

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setPosts(fakePost);
        }, 2000);
    }, []);

    return <>{posts.length === 0 ? <h1>로딩 중...</h1> : <PostList posts={posts} />}</>;
}

export default Effect;
