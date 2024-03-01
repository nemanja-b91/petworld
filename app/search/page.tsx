import FilterComponent from "@/components/Filter/Filter";
import {Suspense} from "react";
import {openGraphImage} from "@/app/shared-metadata";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
const pageName = 'Search';
export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: `PetWorld | ${pageName}`,
    description: 'Sve sto vam je potrebno za vašeg ljubimca',
    openGraph: {
        ...openGraphImage,
        title: `PetWorld | ${pageName}`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        url: 'petworld.com',
        siteName: 'PetWorld',
        locale: 'en_US',
        type: 'website',
    }
}

export default function FilterPage() {


    return (
        <div className='container'>
            <SinglePageHero name={pageName}/>
            <Suspense fallback={<p>Loading data...</p>}>
                <FilterComponent />
            </Suspense>
        </div>
    )
}