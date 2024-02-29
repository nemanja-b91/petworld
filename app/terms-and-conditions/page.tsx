import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";

const pageName: String = 'Terms and conditions';

export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: `PetWorld | ${pageName}`,
    description: 'Sve sto vam je potrebno za vašeg ljubimca',
    openGraph: {
        title: `PetWorld`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        url: 'petworld.com',
        siteName: 'PetWorld',
        locale: 'en_US',
        type: 'website',
    }
}


export default function TermsAndConditionsPage() {

    return (
        <div className={styles.main}>
            <div className="container">
                <article>
                    <h1>Polisa o privatnosti</h1>
                    <div>Poštovani korisnici,<br/>Ovaj web
                        sajt, <strong><em>petworld.com</em></strong>, poštuje privatnost svojih korisnika i vodi računa o zaštiti ličnih podataka.<br/>Molimo vas da pažljivo pročitate sledeću
                        politiku privatnosti kako biste bili upoznati sa načinom na koji sajt prikuplja, koristi i štiti vaše podatke.
                    </div>
                    <h2 className='my-4'>Prikupljanje podataka:</h2>
                    <p>Sajt <strong><em>petworld.com</em></strong> prikuplja samo neophodne podatke kako bi vam pružio bolje korisničko iskustvo. Sajt koristi kolačiće (cookies) kako bi
                        prikupio statističke podatke o vašem korišćenju sajta.</p>
                    <p><b>Korišćenje podataka:</b></p>
                    <p>Sajt <strong><em>petworld.com</em></strong> koristi prikupljene podatke samo u statističke i analitičke svrhe kako bi poboljšao svoje usluge.<br/>Vaši
                        lični podaci neće biti prikupljeni pa samim tim ni dostupni trećim licima osim u slučajevima kada je to potrebno radi poštovanja zakona ili sudskog naloga.</p>
                    <p><b>Sigurnost podataka:</b></p>
                    <p>Sajt <strong><em>petworld.com</em></strong> preduzima sve neophodne mere kako bi vaši podaci bili sigurni i zaštićeni od neovlašćenog pristupa.<br/>Svi podaci se čuvaju
                        na sigurnim serverima koji su zaštićeni od zlonamernih napada.</p>
                    <p><b>Kolačići (cookies):</b></p>
                    <p>Sajt <strong><em>petworld.com</em></strong> koristi kolačiće (cookies) kako bi prikupio statističke podatke o vašem korišćenju sajta.<br/>Kolačići su
                        male datoteke koje se čuvaju na vašem uređaju i pomažu sajtu da se bolje prilagodi vašim potrebama.<br/>Možete da izbrišete kolačiće ili da ih blokirate u podešavanjima
                        vašeg internet pregledača.</p>
                    <p><b>Prava korisnika:</b></p>
                    <p>Korisnici imaju pravo da zatraže pristup svojim ličnim podacima, kao i da zatraže izmenu ili brisanje istih.<br/>Korisnici takođe imaju pravo da se odjave sa sajta ili da povuku
                        svoj pristanak za korišćenje njihovih podataka.</p>
                    <p><b>Izmena politike privatnosti:</b></p>
                    <p>Sajt <strong><em>petworld.com</em></strong> zadržava pravo da izmeni ovu politiku privatnosti u bilo kom trenutku bez prethodne najave.<br/>Molimo vas da redovno
                        proveravate ovu politiku kako biste bili upoznati sa eventualnim izmenama.</p>
                    <p>Ukoliko imate bilo kakvih pitanja ili nedoumica u vezi sa politikom privatnosti mozete se
                        obratiti uputom na maila <a href="mailto:info@petworld.com">info@petworld.com</a>
                    </p>
                    <p>Hvala na poverenju!</p>
                </article>
            </div>
        </div>
    )
}
