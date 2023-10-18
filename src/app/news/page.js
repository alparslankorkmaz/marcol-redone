import Partners from "@/components/Partners";
import Form from "@/components/Form";

export const metadata = {
    title: "News",
    description: "Keep up to date with our news page.",
};

export default function page() {
    return (
        <>
            <div className="relative">
                <img
                    src="/images/news.webp"
                    alt="hands on laptop"
                    className="min-h-screen object-cover"
                />
                <h1 className="font-black lg:whitespace-nowrap lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
                    news
                    <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
                        to view all the latest news, please visit our <a className="underline" target="_blank" href="https://www.linkedin.com/company/marcol-fabrications-plastics-limited/posts/?feedView=all">LinkedIn!</a>
                    </span>
                </h1>
            </div>
            {/* PARTNERS */}
            <Partners />
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-10 py-16">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7117785739773272065" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7114613489922383873" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7109481827840466944" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6920377148163661824" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6918091896456126464" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6897813514921345024" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6893956739243364353" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6889544176602488832" height="700" width="400" title="Embedded post"></iframe>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6887415816204103680" height="700" width="400" title="Embedded post"></iframe>
                </div>
            </div>
        </>
    )
}
