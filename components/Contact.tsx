import Heading from "./common/Heading";
import Text from "./common/Text";
import Github from "./svgs/Github";
import Instagram from "./svgs/Instagram";

export default function Contact() {
  return (
    <div
      className="centered-block flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24"
      id="contact"
    >
      <Heading className="mb-3 font-light">Contact</Heading>
      <Text className="mb-3 text-center text-lg text-black font-anek-bangla">
        Hit me up if you&apos;re interested in working together.
      </Text>
      <Text className="mb-3 font-semibold text-black">
        <a href="mailto:chdepz@icloud.com">chdepz@icloud.com</a>
      </Text>
      <ul className="flex items-start gap-2 text-neutral-600">
        <li className="mt-1">
          <a href="https://github.com/chdepz" target="_blank" rel="nofollow">
            <Github />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/chdepz/"
            target="_blank"
            rel="nofollow"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
