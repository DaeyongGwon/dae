import React, { useState } from "react";

export default function Event_ex() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userList, setUserList] = useState([]);

    const nameFunc = (e) => {
        setName(e.target.value);
    };

    const emailFunc = (e) => {
        setEmail(e.target.value);
    };

    const visibleFunc = () => {
        if (name !== "" && email !== "") {
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
            };
            setUserList([...userList, newUser]);
            setName("");
            setEmail("");
        }
    };

    const handleKeyPress = (e) => {
        console.log("e", e);
        if (e.key === "Enter") {
            visibleFunc();
        }
    };

    const handleDoubleClick = (id) => {
        const updatedList = userList.filter((user) => user.id !== id);
        setUserList(updatedList);
    };

    return (
        <>
            <div>
                <input type="text" placeholder="이름" value={name} onChange={nameFunc} onKeyPress={handleKeyPress} />
                <input type="text" placeholder="이메일" value={email} onChange={emailFunc} onKeyPress={handleKeyPress} />
                <button onClick={visibleFunc}>등록</button>
            </div>
            <div>
                {userList.map((user) => (
                    <div key={user.id} onDoubleClick={() => handleDoubleClick(user.id)}>
                        <h3>
                            {user.name}: {user.email}
                        </h3>
                    </div>
                ))}
            </div>
        </>
    );
}
