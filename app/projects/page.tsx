import ScrollToTop from "@/components/ScrollToTop";
import Heading from "@/components/common/Heading";
import Text from "@/components/common/Text";
import Projects from "@/components/projects/Projects";

export const metadata = {
  title: "Projects",
  description: "My previous projects that I worked on over the years.",
  metadataBase: new URL("https://portfolio-latest-loq24.vercel.app"),
  openGraph: {
    title: "Projects",
    description: "My previous projects that I worked on over the years.",
    // url: "https://lougiequisel.digital/images/lougiequisel.jpg",
    siteName: "Dipak Chaudhary",
    images: [
      {
        url: "/images/chdepz.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <ScrollToTop />
      <div className="h-full w-full bg-slate-50 pb-28 pt-44">
        <div className="centered-block flex flex-col">
          <Heading as="h1" className="mb-2 font-light">
            Other Projects
          </Heading>
          <Text className="text-black">
            Here are some additional projects I&apos;ve been involved with over
            the years.
          </Text>
          <Text className="text-black">
            Check out my featured projects on the home page.
          </Text>
          <Projects />
        </div>
      </div>
    </>
  );
}
