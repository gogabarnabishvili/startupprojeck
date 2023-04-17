import LabelInput from "../Label-Input/LabelInput";
import { NewPostsAddStled, NewInfoAddStyled } from "./NewPostsStyled";
import { useState } from "react";
import BackExpenses from "../../function/local-back/LocalInfoBack";
import saveExpenses from "../../function/local-store/LocalStore";
const generIdposts = BackExpenses("posts");
console.log(generIdposts);
const NewPostsAdd = (props) => {
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const onDateChange = (e) => setDate(e.target.value);
    const onTitleChange = (e) => setTitle(e.target.value);
    const onNameChange = (e) => setName(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);
    console.log(date, title, name, description);

    const SaveNewPost = () => {
        if (date !== "" && title !== "" && name !== "" && description !== "") {
            const savePost = {
                date: date,
                title: title,
                name: name,
                description: description,
                id: BackExpenses("posts") ? generIdposts.length + 1 : 1,
            };
            console.log(savePost);
            saveExpenses(savePost, "posts");
        }
    };
    return (
        <NewPostsAddStled style={props.style}>
            <LabelInput
                type="date"
                text="post date"
                id="postsDate"
                onChange={onDateChange}
            />
            <LabelInput
                type="text"
                text="post title"
                id="title"
                onChange={onTitleChange}
            />
            <LabelInput
                type="text"
                text="post name"
                id="name"
                onChange={onNameChange}
            />
            <label name="description" id="description">
                description
                <NewInfoAddStyled
                    id="description"
                    name="description"
                    onChange={onDescriptionChange}
                ></NewInfoAddStyled>
            </label>
            {/* <LabelInput type="text" text="short description " id="info" /> */}
            <LabelInput
                type="button"
                value="submit"
                id="submit"
                onClick={() => SaveNewPost()}
            />
        </NewPostsAddStled>
    );
};
export default NewPostsAdd;
