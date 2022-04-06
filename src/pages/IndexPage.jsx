import React, { useState } from "react";
import { AsideComponent } from "../components/AsideComponent";
import { PostComponets } from "../components/PostComponets";
import { StoriesComponent } from "../components/StoriesComponent";

export const IndexPage = () => {
    const [posts, setPosts] = useState([
        {
            type: "img",
            user: "midu.dev",
            story: true,
            avatar: "https://midu.dev/favicon/apple-touch-icon.png",
            content:
                "https://camo.githubusercontent.com/999b7125fa3536155286587b8fb2b12a7d6303874878bf34d7aea8a1c0bbfffb/687474703a2f2f69332e7974696d672e636f6d2f76692f5873786d385f42493633732f6d617872657364656661756c742e6a7067",
            likes: 45711,
            comments: 156,
            time: "2 days ago",
        },
        {
            type: "video",
            user: "hidaldev",
            story: true,
            avatar: "https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/266457513_4524355897660106_5449813603385784271_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHDo3CtGZUmbmO92Iy87jXtCt_mLhImYpgK3-YuEiZimI2TVedlH4L-jPWK9tztxSoSmeAaRZdNuhXpH1NS_SZ0&_nc_ohc=DW0jZtwkQd8AX9GWEvG&_nc_ht=scontent.fsal3-1.fna&oh=00_AT8UqqOlwVo_-dqPIwXzGgV4jF0LpCU-bh7750qO1dJh-g&oe=6253261B",
            content: "./videodev.mp4",
            likes: 87,
            comments: 11,
            time: "6 days ago",
        },
        {
            type: "img",
            user: "ed.team",
            story: true,
            avatar: "data:image/png;base64,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",
            content:
                "https://edteam-media.s3.amazonaws.com/community/original/467e1313-f1e0-40dc-b53e-dbbe9451a764.jpg",
            likes: 7487,
            comments: 787,
            time: "8 hours ago",
        },
        {
            type: "img",
            user: "platzi",
            story: true,
            avatar: "https://pbs.twimg.com/profile_images/1278376724900786182/zXbHm9d-_400x400.jpg",
            content:
                "https://static.platzi.com/media/meta_tags/og/OG-platzi-Dic-2019.png",
            likes: 48964,
            comments: 6825,
            time: "10 hours ago",
        },
    ]);
    const [users, setUsers] = useState([
        {
            name: "",
            username: "indigo.hel",
            avatar: "https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/219375037_100282762351158_1113128159031099821_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEkIVM6my62mhFuYOSBmYT3gBUPEo1sogOAFQ8SjWyiA18jkp1i6Maff2iCtIV8mP4wEgSgL-w0H1rTOo5MdgQq&_nc_ohc=sjz0SQ1YZBEAX_K8UEs&_nc_ht=scontent.fsal3-1.fna&oh=00_AT8BEOWkR9DYxhPY-X_MZe1EOK2Oynz6zeKoX-hUg8z9bA&oe=6252BA72",
            cf: true,
            following: true,
        },
        {
            name: "Bryan Hidalgo",
            username: "Hidaldev",
            avatar: "https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/266457513_4524355897660106_5449813603385784271_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHDo3CtGZUmbmO92Iy87jXtCt_mLhImYpgK3-YuEiZimI2TVedlH4L-jPWK9tztxSoSmeAaRZdNuhXpH1NS_SZ0&_nc_ohc=DW0jZtwkQd8AX9GWEvG&_nc_ht=scontent.fsal3-1.fna&oh=00_AT8UqqOlwVo_-dqPIwXzGgV4jF0LpCU-bh7750qO1dJh-g&oe=6253261B",
            cf: true,
            following: true,
        },
        {
            name: "JavaScript",
            username: "javascript.js",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
            cf: false,
            following: true,
        },
        {
            name: "Reactjs",
            username: "React.js",
            avatar: "https://reactjs.org/logo-og.png",
            cf: false,
            following: true,
        },
        {
            name: "Angular",
            username: "Angular",
            avatar: "https://logodix.com/logo/1998149.png",
            cf: false,
            following: true,
        },
        {
            name: "midudev ▶ Programación Web",
            username: "midu.dev",
            avatar: "https://midu.dev/favicon/apple-touch-icon.png",
            cf: false,
            following: true,
        },
        {
            name: "Verónica • Programación👩🏽‍💻",
            username: "veritechie",
            avatar: "https://pbs.twimg.com/profile_images/1505938141785505798/kuzTVX-C_400x400.jpg",
            cf: false,
            following: true,
        },
        {
            name: "Vue.js Developers",
            username: "vuejsdevelopers",
            avatar: "https://miro.medium.com/max/1200/1*SXrBw2-Rgli-V7TKEiCZWA.png",
            cf: false,
            following: false,
        },
        {
            name: "Google",
            username: "google",
            avatar: "https://casaruralmatela.files.wordpress.com/2020/10/google.jpg",
            cf: false,
            following: false,
        },
        {
            name: "Elon Musk",
            username: "elonrmuskk",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
            cf: false,
            following: false,
        },
        {
            name: "Fernando Herrera",
            username: "fernando_her85",
            avatar: "https://yt3.ggpht.com/ytc/AKedOLTgdFQ9YfNLWeK_7fmJWzys25xahZvkMibBqQcSJA=s900-c-k-c0x00ffffff-no-rj",
            cf: false,
            following: true,
        },
        {
            name: "Mark Zuckerberg",
            username: "zuck",
            avatar: "data:image/jpeg;base64,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",
            cf: false,
            following: false,
        },
    ]);

    return (
        <>
            <div className="main-container">
                <div className="main-section">
                    <StoriesComponent users={users} />
                    <PostComponets posts={posts} />
                </div>
                <div className="aside-section">
                    <AsideComponent users={users} />
                </div>
            </div>
        </>
    );
};
