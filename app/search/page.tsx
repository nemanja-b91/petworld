import FilterComponent from "@/components/Filter/Filter";
import {Suspense} from "react";
const pageName = 'Search';
export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: `PetWorld | ${pageName}`,
    description: 'Sve sto vam je potrebno za vašeg ljubimca',
    openGraph: {
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
            <Suspense fallback={'<p>Loadiiiiiiiiiiiiiiiiing....</p>'}>
                <FilterComponent />
            </Suspense>

        </div>
    )
}