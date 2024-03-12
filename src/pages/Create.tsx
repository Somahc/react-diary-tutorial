import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { auth, db } from '../lib/firebase';
import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Create = () => {

    const [user] = useAuthState(auth);

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    
    const submitDiary = async (e: FormEvent) => {
        e.preventDefault();

        if(title && content) {
            await addDoc(collection(db, "diaries"), {
                thumbnail: "",
                title: title,
                content: content,
                userId: user?.uid,
                userName: user?.displayName,
                createdAt: serverTimestamp(),
            });
        }else{
            alert("タイトルと内容は必須です。");
        }
    }

    return (
        <main className="bg-yellow-300">
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-start-3 col-span-8 bg-white my-12 p-4 rounded">
                        <form onSubmit={submitDiary}>
                            <h2 className="text-3xl font-bold mb-5">記事を書く</h2>
                            <div className="mb-10">
                                <h3 className="text-2xl mb-2">サムネを選ぶ</h3>
                                <div>
                                    <div>
                                        <img src="/no-image.png" alt="" onClick={() => document.getElementById('file-input')?.click()} className="cursor-pointer" />
                                    </div>
                                    <input type="file" id="file-input" className="hidden" />
                                </div>
                            </div>
                            <div className="mb-10">
                                <h3 className="text-2xl mb-2">タイトル</h3>
                                <input type="text" onChange={(e) => setTitle(e.target.value)} className="border border-black w-full p-2 rounded" placeholder="5文字以内でお願いします。" />
                            </div>
                            <div className="mb-10">
                                <h3 className="text-2xl mb-2">内容を書く</h3>
                                <textarea onChange={(e) => setContent(e.target.value)} className="border border-black w-full p-2 rounded reseize-none h-[200px]" placeholder="30文字以内でお願いします。"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-700 text-white py-2 px-7 rounded">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Create;