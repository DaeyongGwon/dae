import { useForm } from "react-hook-form";
function About() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(register("name"));

    const onValid = (e) => {
        console.log(e.username, e.password);
    };

    const oninValid = (error) => {
        console.log(error);
    };
    return (
        <>
            <div>ABOUT</div>
            <form onSubmit={handleSubmit(onValid, oninValid)}>
                <input {...register("username", { required: "이름을 입력해주세요" })} type="text" />
                {errors.username?.message}
                <input
                    {...register("password", {
                        required: "비밀번호를 입력하세요.",
                        minLength: { message: "비밀번호는 8자이상으로 등록해주세요.", value: 8 },
                    })}
                    type="password"
                />
                {errors.password?.message}
                <button type="submit">등록</button>
            </form>
        </>
    );
}

export default About;
