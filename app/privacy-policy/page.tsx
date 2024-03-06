import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import {openGraphImage} from "@/app/shared-metadata";

const pageName: String = 'Opšti uslovi korišćenja i odricanje od odgovornosti';

export const metadata = {
    metadataBase: new URL('https://petworld-five.vercell.com/'),
    title: `PetWorld | ${pageName}`,
    description: 'Sve sto vam je potrebno za vašeg ljubimca',
    openGraph: {
        ...openGraphImage,
        title: `PetWorld`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        url: 'petworld.com',
        siteName: 'PetWorld',
        locale: 'en_US',
        type: 'website',
    }
}


export default function PrivacyPolicy() {

    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={pageName}/>
                <article>
                    <h2>Korišćenjem sajta petworld.com (nadalje <strong>PetWorld</strong>) saglasni
                        ste sa uslovima i pravilima korišćenja sajta.
                    </h2>
                    <p>Ukoliko se ne slažete sa objavljenim uslovima, smatra se da nemate pravo koristiti sadržaj objavljen na sajtu, kao i da je
                        njegova dalja upotreba nedozvoljena. Sajt <strong>PetWorld</strong> pruža informacije o rasporedu i dostupnosti doktora medicine i odgovarajućih specijalnosti u
                        ordinacijama
                        privatne prakse, u skladu sa poslovnom politikom tih ustanova. Informacije i drugi sadržaj objavljen na sajtu je obezbeđen od strane trećih lica, shodno čemu
                        <strong>PetWorld</strong> ne daje garancije u pogledu ažurnosti i tačnosti objavljenih podataka o rasporedu i dostupnosti pružaoca zdravstvenih usluga, kao ni o
                        kvalifikaciji pružalaca zdravstvenih usluga, odnosno PetWorld ne garantuje da pružaoci zdravstvenih usluga u trenutku objavljivanja podatka ili u trenutku korišćenja sajta,
                        imaju potrebne licence i druge dozvole za pružanje zdravstvenih usluga.</p>
                    <p>Shodno prethodnom, sajt <strong>PetWorld</strong> ne snosi odgovornost za eventualnu neažurnost objavljenih podataka,
                        odnosno za eventualno objavljene netačne podatke ili za greške u objavljenom sadržaju.</p>
                    <p>Sajt <strong>PetWorld</strong> ne prihvata bilo kakvu odgovornost za tačnost
                        sadržaja objavljenih autorskih tekstova u rubrici Blog, kao i za eventualnu povredu autorskih i srodnih prava do kojih dođe objavljivanjem ovakvih sadržaja.</p>
                    <p>Svi sadržaji i informacije za koje se utvrdi postojanost sumnje da krše autorska ili srodna prava trećih lica, biće uklonjeni sa sajta.</p>
                    <p>Sajt <strong>PetWorld</strong> zadržava pravo da
                        bez bilo kakvih ograničenja ili posledica, u svakom trenutku obustavi dalje objavljivanje ili ažuriranje pojedinih ili svih informacija i sadržaja, kao i da sa sajta ukloni deo
                        ili
                        celokupan postojeći sadržaj.</p>
                    <p>Sajt <strong>PetWorld</strong>, vlasnik domena, kao ni sva lica koja učestvuju u održavanju sajta, prikupljanju, obradi ili objavljivanju
                        sadržaja na sajtu, nisu odgovorni za bilo kakvu štetu (direktnu ili indirektnu) prouzrokovanu korisnicima sajta ili bilo kojim drugim licima, usled:</p>
                    <ul className="sc-96148133-3 bdNPTH">
                        <li>neažurnog ili netačnog sadržaja objavljenog na sajtu</li>
                        <li>nedostupnosti ili nemogućnosti upotrebe sajta iz bilo kog razloga</li>
                        <li>neadekvatnog, nezakonitog ili neefikasnog pružanja zdravstvenih usluga od strane lica i ustanova čije su informacije objavljene na sajtu</li>
                        <li>neposedovanja odgovarajućih stručnih kvalifikacija, licenci i dozvola za rad lica i ustanova čije su informacije objavljene na sajtu</li>
                        <li>upotrebe objavljenog sadržaja i informacija sajta <strong>PetWorld</strong>, na bilo koji način</li>
                        <li>u svrhu lečenja ili u bilo koju drugu svrhu</li>
                        <li>posete eksternim linkovima ka internet stranicama trećih lica, objavljenim na sajtu</li>
                    </ul>
                </article>
            </div>
        </div>
    )
}
