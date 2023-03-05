import planeImg from "assets/images/nProjects/plane.webp"
import restaurantReactImg from "assets/images/nProjects/restaurant_react.webp"
import watchesImg from "assets/images/nProjects/watches.webp"
import blogImg from "assets/images/nProjects/blog.webp"
import realtorImg from "assets/images/nProjects/realtor.webp"
import beats2Img from "assets/images/nProjects/beats2.webp"

import planeImgPhone from "assets/images/nProjects/planePhone.webp"
import restaurantReactImgPhone from "assets/images/nProjects/restaurantReactPhone.webp"
import watchesImgPhone from "assets/images/nProjects/watchesPhone.webp"
import blogImgPhone from "assets/images/nProjects/blogPhone.webp"
import realtorImgPhone from "assets/images/nProjects/realtorPhone.webp"
import beats2ImgPhone from "assets/images/nProjects/beats2Phone.webp"

export const projectsData = [
    {
        title: "Real Estate",
        description:
            "An amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page with an image carousel, and much more.",
        img: realtorImgPhone,
        imgDesktop: realtorImg,
        technologies: [
            { title: "Next.js" },
            { title: "Rapid API" },
            { title: "Chakra UI" },
        ],
        visit: "https://real-estate-sable-six.vercel.app/",
        id: 8,
    },

    {
        title: "E-commerce",
        description:
            "E-commerce app with the ability to add and edit products on the go using a Sanity, advanced cart, checkout functionalities and Stripe integration to cover real payments.",
        img: beats2ImgPhone,
        imgDesktop: beats2Img,
        technologies: [
            { title: "Next.js" },
            { title: "Stripe" },
            { title: "Sanity" },
        ],
        visit: "https://ecommerce-art1us.vercel.app/",
        id: 3,
    },
    {
        title: "Flight Booking App",
        description:
            "Book your next adventure with our easy-to-use flight booking app, designed to help you find the best deals and plan your travel itinerary with ease.",
        img: planeImgPhone,
        imgDesktop: planeImg,
        technologies: [{ title: "React.js" }, { title: "Framer Motion" }],
        visit: "https://unrivaled-douhua-a237e4.netlify.app/",
        id: 12,
    },
    {
        title: "Blog website",
        description:
            "Fast, responsive and customizable blog made with Next.js and GraphQL. Enjoy a seamless blogging experience with efficient content management and dynamic UI design.",
        img: blogImgPhone,
        imgDesktop: blogImg,
        technologies: [
            { title: "Next.js" },
            { title: "GraphQL" },
            { title: "Tailwind" },
        ],
        visit: "https://astra-blog.vercel.app/",
        id: 18,
    },
    {
        title: "Restaurant",
        description:
            "Experience an unforgettable dining journey at our restaurant, where we use the freshest and highest quality ingredients to craft a menu that is both diverse and delectable.",
        img: restaurantReactImgPhone,
        imgDesktop: restaurantReactImg,
        technologies: [{ title: "React.js" }, { title: "Tailwind" }],
        visit: "https://stirring-phoenix-05f76a.netlify.app/",
        id: 13,
    },
    {
        title: "Watches",
        description:
            "Elevate your fashion game with our exquisite collection of watches, crafted with precision and designed to make a bold statement – shop now to find your next favorite accessory.",
        img: watchesImgPhone,
        imgDesktop: watchesImg,
        technologies: [
            {
                title: "HTML",
            },
            {
                title: "JavaScript",
            },
            {
                title: "CSS",
            },
        ],
        visit: "https://a-s-t-r-a.github.io/responsive-watches-website/",
        id: 14,
    },
]
