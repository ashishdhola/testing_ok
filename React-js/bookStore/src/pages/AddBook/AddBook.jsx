import { useEffect, useState } from "react";

function AddBook() {

    let [blogData, setBlogData] = useState({});
    let [category, setCategory] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        }, 1000);
    }, [setCategory])


    let handleChange = (e) => {
        let { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    }

    let submitData = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Book Title</td>
                            <td>
                                <input type="text" name="title" placeholder="Title" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Description</td>
                            <td>
                                <textarea name="description" placeholder="Description" onChange={(e) => handleChange(e)} cols={21} rows={3}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td> Price </td>
                            <td>
                                <input type="text" name="bloggerName" placeholder="Price" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Pages </td>
                            <td>
                                <input type="text" name="pages" placeholder="Pages" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Author Name </td>
                            <td>
                                <input type="text" name="authorName" placeholder="Author Name" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Publisher </td>
                            <td>
                                <input type="text" name="publisher" placeholder="Publisher" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Image </td>
                            <td>
                                <input type="text" name="image" placeholder="Image" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Type </td>
                            <td>
                                <select name="book_type">
                                    <option hidden >--Select Book Type--</option>
                                    <optgroup label="Fiction">
                                        <option value="novel">Novel</option>
                                        <option value="short_story">Short Story</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="science_fiction">Science Fiction</option>
                                        <option value="mystery">Mystery</option>
                                        <option value="romance">Romance</option>
                                        <option value="horror">Horror</option>
                                    </optgroup>
                                    <optgroup label="Non-Fiction">
                                        <option value="biography">Biography</option>
                                        <option value="autobiography">Autobiography</option>
                                        <option value="history">History</option>
                                        <option value="science">Science</option>
                                        <option value="self_help">Self-Help</option>
                                        <option value="cookbook">Cookbook</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default AddBook