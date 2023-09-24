import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url"


// get the preconfigured url-builder from your sanity client

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
    return builder.image(source);
}

export default urlFor;