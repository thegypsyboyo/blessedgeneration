import { ReactNode } from "react";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _publishedAt: string;
};

interface LayoutProps {
    className?: string;
    children: ReactNode;
}
interface SliderData {
    img: string,
    title: string,
    description: string,
    button: string,
    time:string,
    location: string,
}

interface DonationProps {
    image: string,
    title: string,
    description: string,
    raisedAmount: string,
    goalAmount: string,
    category: string,
    percentageAchieved: string,
    slug: string,
}


interface ContactInfo {
    title: string,
    email: string,
    phone: string,
    link: string,
    image: string
}

// What BG Offers
interface ImageInfo {
    url: string;
    title: string;
    location: string;
}

interface InfoList  {
    id: number,
    title: string,
}