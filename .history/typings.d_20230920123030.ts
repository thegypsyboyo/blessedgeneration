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

interface Tag extends Base {
    title: string;
}

interface Category extends Base {
    title: string;
    number: number;
}
interface NavbarSocials extends Base{
    socials: Socials[];
    emergencyContact: string;
    openingDays: string;
    closingDays: string;
    emailAddress: string;
    locationAddress: string;
    aboutWebsite: string;
    logo: string;
}

interface Author extends Base {
    image: Image;
    name: string;
    description: String;
    slug: Slug;
    socials: Socials[];
}
interface Post extends Base {
    authors: Author[];
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: slug;
    title: string;
    description: string;
    tags: Tag[];
    postTags: [PostTags];
    views: number; // new field added here
    singlePostInformations: [SinglePostInformation];
}

interface AboutVideo {
    channel: 'youtube' | 'vimeo';
    videoId: string;
    bgImage: string;
    description?: string; 
}

interface SliderData {
    img: string,
    title: string,
    description: string,
    button: string,
    time:string,
    location: string,
}

interface Slider {
    image: string;
    description: string;
    title: string;
}
interface IntroSlider {
    sliders?: Slider[];
    sinceFrom: string;
    activeReviews:string;
}

interface TeamMember extends Base{
    name: string;
    position: string;
    image: string;
    slug: slug,
    socials: Socials[];
    teamDetails: TeamDetails[]
}
interface SkillTitle {
    title?: string;
    percentage?: string;
}
interface TeamDetails  {
    image:  string,
    phone: string,
    email: string;
    location: string;
    specialization: string;
    name: string;
    bio: string;
    socials: Socials[],
    skills: SkillTitle[],
    skillSetInfo: string;
}

interface EventsProps extends Base{
    image: string,
    title: string,
    description: string,
    category: string,
    time:string,
    location: string,
    slug: string;
    timeStamp: string;
    ticketCost: string;
    venue:string;
    organizer: string;
    phone: string;
    remainingTickets: string;
    address: string;
    email: string;
    status: string;
    startDate: string;
    endDate: string;
    eventPhotos: Image[]

}
interface RiaProps extends Base {
    mainImage: string,
    name: string,
    decription: string,
    slug: string,
    categories: Category[];
    tags: Tag[];
    date: string,
    authors: Author[];
    body: Block[]
}

interface Socials {
   
    // add more social media platforms as needed
    platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'twitch';
    url: string;
}

// TEAM 
interface TeamProps{
    name: string;
    position: string;
    image: string;
    slug: slug,
    socials: Socials[];
    // teamDetails: TeamDetails[]
}
interface TeamDetailsProps  {
    image:  string,
    phone: string,
    email: string;
    location: string;
    specialization: string;
    name: string;
    bio: string;
    socials: Socials[],
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

interface PlacesProps {
    image: string;
    title: string;
    placeName: string;
    category: string;
    slug: string;
}
interface TripProps {
    image: string;
    title: string;
    date: string;
    category: string;
    slug: string;
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
    image: string;
    title: string;
    location: string;
}
interface PartnerProps {
    image: string;
    title: string;
    slug: string;
}

interface InfoList  {
    id: number,
    title: string,
}

interface SliderVisit {
    img: string,
    title: string,
    link: string,
    description: string,
    category: string,
    location: string,
}

interface ProjectItemProps {
    image?: string;
    title: string;
    slug: string;
    width?: string;
    mdColSpan?: number;
    lgColSpan?: number;
}

interface TagProps {
    id: number | string;
    title: string;
}
interface OurProjectProps {
    category: string[];
    image: string;
    title: string;
    slug: string;
    tag: TagProps[];
}




// CONTACT MAP :
interface ContactInfo {
    Title: string;
    subtitle: string;
    image: string;
    buttonName: string;
}
interface Map {
    latitude: string;
    longitude: string;
}
interface MapLocation {
   name:string;
   mapCoordinates: Map
}

interface ContactMap {
    infoMedia: InfoMedia[];
    coordinates: MapLocation
    
}
interface InfoMedia {
    title: string;
    phone: string;
    email: string;
    location: string;
}

interface CausesItem extends Base{
    // id: number;
    title: string;
    description: string;
    image: string;
    amountDonated: string;
    amountTargeted: string;
    estimatePercentage: number;
    categories: Category[];
    category: string;
    slug: slug;
    tags: Tag[];
    authors: Author[];
    body: Block[];

    // singleCauses: SingleCauseItemDetails[];    
}
interface ProjectProps extends Base{
    title: string;
    description: string;
    image: string;
    slug: slug;
    authors: Author[];
    body: Block[];
    category: string;
    categories: Category[];
    tags: Tag[];
}

