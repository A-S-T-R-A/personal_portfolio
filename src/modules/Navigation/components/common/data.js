import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai"

export const menuData = [
    { id: 1, link: "#home", text: "Home" },
    { id: 2, link: "#about", text: "About" },
    { id: 3, link: "#projects", text: "Projects" },
    { id: 4, link: "#technologies", text: "Technologies" },
    { id: 5, link: "#contact", text: "Contact me" },
]

export const socialsData = [
    {
        id: 1,
        link: "https://www.facebook.com/profile.php?id=100085196048339",
        icon: <AiFillFacebook />,
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/artur-pazyniuk-9a2bbb266/",
        icon: <AiFillLinkedin />,
    },
    { id: 3, link: "https://github.com/Art1us", icon: <AiFillGithub /> },
]
