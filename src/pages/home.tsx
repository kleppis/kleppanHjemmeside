import React, { useEffect, useState } from 'react';
import Button1 from '../Components/Button.tsx';
import '../css/home.css';
import '../css/globals.css';
import '../css/main.css';
import Navbar from '../Components/navbar/navbar.tsx';
import Typewriter from '../Components/Typewriter/Typewriter.tsx';
import Container from '../Components/container.tsx';
import picture1 from '../Bilder/photo-1455894127589-22f75500213a.avif';
import picture2 from '../Bilder/photo-1471897488648-5eae4ac6686b.avif';
import picture3 from '../Bilder/photo-1532372320572-cda25653a26d.avif';
import picture4 from '../Bilder/premium_photo-1661779517196-af39b2616265.avif';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Home: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = useState('var(--background-color)');

    const handleScroll = () => {
        const section = document.getElementById('welcome');
        if (section) {
            const rect = section.getBoundingClientRect();

            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;


            if (isVisible) {
                setBackgroundColor('var(--background-color)'); // Lyseblå bakgrunn
            } else {
                setBackgroundColor('var(--primary-color)');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    }, []);

    const [agreed, setAgreed] = useState(true);


    const handleClick = () => {

        const section = document.getElementById('lesMer');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const accordionStyle = {
        backgroundColor: 'var(--primary-color)',
        fontSize: 'var(--font-size-small)',
    }

    const accordionChildStyle = {
        fontSize: 'var(--font-size-xsmall)',
    }

    return (

        <div className=' px-40' style={{
            backgroundColor: backgroundColor,
            transition: 'background-color 0.5s ease'
        }}>
            <div className='' >
                <Navbar />
                <div id='welcome' className='mb-96'>
                    <h1 className='text-9xl absolute top-56 kleppan-animate'>Kleppan IT</h1>

                    <div className='flex space-x-3 mt-28 text-animate'>
                        <Typewriter speed={100} text='Design.' />
                        <Typewriter delay={1} speed={100} text='Innovation.' />
                    </div>
                    <div className='button-animate mt-10'>
                        <Button1 size='large' onClick={handleClick}>
                            Les mer
                        </Button1>
                    </div>
                </div>
            </div >
            <div id='lesMer' className='h-screen pt-20'>
                <div className='flex justify-center space-x-20 '>
                    <div className='w-1/2'>
                        <h2 className='text-4xl text-text sticky top-28'>Din partner for moderne og brukervennlige nettsider</h2>

                    </div>
                    <div className='w-1/2 space-y-10'>
                        <Container>
                            <p>Vi er et nystartet IT-firma med en lidenskap for å lage profesjonelle, moderne og brukervennlige nettsider som hjelper bedrifter med å skille seg ut på nettet. Vårt mål er å hjelpe deg med å realisere dine digitale ambisjoner, enten du er ute etter en enkel presentasjonside eller et mer komplekst nettsted med skreddersydd funksjonalitet.</p>
                        </Container>
                        <Container>
                            <p>Hos Kleppan IT tror vi at en god nettside er hjertet av enhver virksomhet. Vår visjon er å levere digitale løsninger som er skreddersydd til kundens behov og gir resultater. Vi streber etter å være en pålitelig partner for våre kunder, hvor vi kombinerer kreativitet, teknisk kompetanse og god kommunikasjon for å skape nettsider som både ser bra ut og fungerer sømløst.
                            </p>
                        </Container>
                    </div>
                </div>
            </div>
            <div id='kontakt' className="h-auto flex space-x-9">
                <div className='w-1/2 text-text space-y-10'>
                    <Container>
                        <h2 className='mb-10 text-4xl border-b-2'>Hva vi tilbyr</h2>
                        <div className='mb-10'>
                            <Accordion sx={accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Enkle moderne nettsider
                                </AccordionSummary>
                                <AccordionDetails sx={accordionChildStyle}>
                                    I en verden hvor digital tilstedeværelse er viktigere enn noensinne, kan en nettside være forskjellen mellom å nå kundene dine eller bli oversett. Med “enkle moderne nettsider” mener vi løsninger som er brukervennlige, estetisk tiltalende, og funksjonelle uten å være overveldende kompliserte. Vi fokuserer på rene design, rask innlastingstid, og en intuitiv brukeropplevelse, slik at besøkende enkelt kan finne informasjonen de trenger. Våre nettsider tilpasses ulike skjermer og enheter, slik at du får en nettside som ser bra ut og fungerer optimalt, uansett om den vises på mobil, nettbrett eller datamaskin. Vi tror på å holde det enkelt, uten at det går på bekostning av kvalitet og profesjonalitet.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Kontaktskjemaer som knytter deg til kundene dine
                                </AccordionSummary>
                                <AccordionDetails sx={accordionChildStyle}>
                                    Et godt kontaktskjema er en enkel og effektiv måte å sikre at dine kunder alltid har en direkte linje til deg. Vi tilbyr tilpasningsdyktige kontaktskjemaer som gjør det enkelt for besøkende på nettsiden din å ta kontakt, stille spørsmål, eller be om mer informasjon. Våre kontaktskjemaer er designet med brukervennlighet i tankene – de er enkle å fylle ut, samtidig som de sørger for at du får all den informasjonen du trenger. Enten du trenger et enkelt skjema for henvendelser eller et mer avansert skjema med tilpasningsmuligheter, sørger vi for en løsning som er trygg, funksjonell, og enkel å integrere på nettsiden din. Dette hjelper deg å opprettholde god kommunikasjon med dine kunder, og sikrer at du aldri går glipp av en viktig henvendelse.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={accordionStyle}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Vedlikehold som sikrer stabilitet og ytelse
                                </AccordionSummary>
                                <AccordionDetails sx={accordionChildStyle}>
                                    For at en nettside skal fungere optimalt over tid, er regelmessig vedlikehold avgjørende. Vi tilbyr vedlikeholdstjenester som sørger for at nettsiden din alltid er oppdatert, sikker og fungerer slik den skal. Dette inkluderer alt fra å installere nødvendige oppdateringer og sikkerhetsfikser til å optimalisere nettsidens ytelse. Ved å holde nettsiden din i topp stand, sikrer vi at den laster raskt, er beskyttet mot sikkerhetstrusler, og gir brukerne dine en jevn opplevelse. Med våre vedlikeholdstjenester kan du fokusere på virksomheten din, mens vi tar oss av den tekniske driften, slik at du slipper ubehagelige overraskelser og nedetid.
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Container>
                    <div className='mb-24'>
                        <Container>
                            <h2 className='mb-10 text-4xl border-b-2'>Kontakt oss</h2>

                            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 required transition-all">
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">

                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className=" hover:bg-secondary"
                                    >
                                        Let's talk
                                    </button>
                                </div>
                            </form>
                        </Container>
                    </div>
                    <h2 className='text-4xl '>Gleder meg til å høre fra deg!</h2>
                </div>
                <div className='w-1/2'>
                    <img src={picture1} alt="picture" className='h-80 shadow-2xl ' />
                    <div className='flex justify-between'>
                        <div></div>
                        <img src={picture2} alt="picture" className='h-96 -mt-16 shadow-2xl end-6' />
                    </div>
                    <img src={picture4} alt="picture" className='h-80 shadow-2xl -mt-16 z-30' />
                    <div className='flex justify-between'>
                        <div></div>
                        <img src={picture3} alt="picture" className='h-96 -mt-16 shadow-2xl end-6' />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Home;